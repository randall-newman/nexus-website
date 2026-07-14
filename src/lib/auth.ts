import type { AuthOptions } from 'next-auth';
import ZitadelProvider from 'next-auth/providers/zitadel';

export const authOptions: AuthOptions = {
  providers: [
    {
      ...ZitadelProvider({
        issuer: process.env.ZITADEL_ISSUER!,
        clientId: process.env.ZITADEL_CLIENT_ID!,
        // Empty for PKCE — no client secret used
        clientSecret: process.env.ZITADEL_CLIENT_SECRET || '',
        authorization: {
          params: {
            scope: 'openid email profile',
          },
        },
        checks: ['pkce', 'state'],
        // Zitadel's PKCE app is a public client — it authenticates the token
        // exchange via code_verifier, not a client secret. Without this,
        // openid-client defaults to client_secret_basic and Zitadel rejects
        // the token request.
        client: {
          token_endpoint_auth_method: 'none',
        },
      }),
      // Must match the callback path registered in Zitadel:
      // /api/auth/callback/verbosec-account
      id: 'verbosec-account',
      name: 'Verbosec Account',
    },
  ],

  session: { strategy: 'jwt' },

  callbacks: {
    async jwt({ token, account }) {
      if (account?.access_token) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as { id?: string }).id = token.sub;
      }
      (session as { accessToken?: string }).accessToken = token.accessToken as string;
      return session;
    },
  },

  pages: {
    signIn: '/login',
    error: '/login',
  },

  secret: process.env.NEXTAUTH_SECRET,
};

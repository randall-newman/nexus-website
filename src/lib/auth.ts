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

  session: {
    strategy: 'jwt',
    // Short-lived on purpose: the site never re-checks the Zitadel session
    // after login, so a long-lived cookie would keep users "logged in" here
    // long after they signed out at app.mynexusai.com. Active users are
    // rolled over every hour; idle sessions die within 4 hours.
    maxAge: 4 * 60 * 60,
    updateAge: 60 * 60,
  },

  callbacks: {
    // NextAuth's default redirect callback rejects external URLs, so allow
    // the app explicitly — post-login we hand users over to it.
    async redirect({ url, baseUrl }) {
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      try {
        const { origin } = new URL(url);
        if (origin === baseUrl || origin === 'https://app.mynexusai.com') return url;
      } catch {
        // fall through to baseUrl
      }
      return baseUrl;
    },
    async jwt({ token, account }) {
      if (account?.access_token) {
        token.accessToken = account.access_token;
        // Kept server-side for federated logout (id_token_hint) — never
        // exposed via the session callback.
        token.idToken = account.id_token;
        // Zitadel omits profile claims from the id_token unless "User Info
        // inside ID Token" is enabled on the app, and the provider never
        // calls the userinfo endpoint (idToken: true) — so fetch the claims
        // ourselves on initial sign-in.
        try {
          const res = await fetch(`${process.env.ZITADEL_ISSUER}/oidc/v1/userinfo`, {
            headers: { Authorization: `Bearer ${account.access_token}` },
          });
          if (res.ok) {
            const profile = await res.json();
            token.name = profile.name ?? token.name;
            token.email = profile.email ?? token.email;
            token.picture = profile.picture ?? token.picture;
          }
        } catch {
          // Non-fatal: the session just falls back to id-only.
        }
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

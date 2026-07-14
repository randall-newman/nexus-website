import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

// Builds the Zitadel RP-initiated logout URL so signing out also ends the
// Zitadel session on account.verbosec.com (shared via SSO with
// app.mynexusai.com) — not just the local NextAuth cookie.
// NEXTAUTH_URL must be registered as a Post Logout URI on the Zitadel app.
export async function GET(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return NextResponse.json({ url: '/' });
  }

  const endSession = new URL(`${process.env.ZITADEL_ISSUER}/oidc/v1/end_session`);
  if (typeof token.idToken === 'string' && token.idToken) {
    endSession.searchParams.set('id_token_hint', token.idToken);
  }
  endSession.searchParams.set('client_id', process.env.ZITADEL_CLIENT_ID ?? '');
  endSession.searchParams.set(
    'post_logout_redirect_uri',
    process.env.NEXTAUTH_URL ?? 'http://localhost:3000'
  );

  return NextResponse.json({ url: endSession.toString() });
}

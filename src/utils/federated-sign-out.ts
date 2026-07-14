import { signOut } from 'next-auth/react';

// End the Zitadel session too (SSO with app.mynexusai.com), not just the
// local NextAuth cookie — otherwise the next login silently auto-signs-in.
export async function federatedSignOut() {
  let logoutUrl = '/';
  try {
    const res = await fetch('/api/auth/federated-logout');
    if (res.ok) {
      logoutUrl = (await res.json()).url ?? '/';
    }
  } catch {
    // Fall back to local-only sign-out.
  }
  await signOut({ redirect: false });
  window.location.href = logoutUrl;
}

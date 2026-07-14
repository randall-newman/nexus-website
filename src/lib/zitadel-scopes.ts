// Client-safe Zitadel OIDC scope helpers (these IDs are public — they appear
// in the hosted login page's own HTML).
//
// Adding BOTH reserved scopes below makes Zitadel's hosted login skip its
// loginname UI and forward straight to the IdP. The org-id scope is required
// for the idp-id scope to resolve — the idp scope alone is ignored.
// Org ID: Zitadel console → Organization. IdP ID: Settings → Identity Providers.

const ZITADEL_ORG_ID = '379162074636419076';
const GOOGLE_IDP_ID = '379168898668298244';

export const GOOGLE_SIGNIN_AUTH_PARAMS = {
  scope: `openid email profile urn:zitadel:iam:org:id:${ZITADEL_ORG_ID} urn:zitadel:iam:org:idp:id:${GOOGLE_IDP_ID}`,
};

// Where users land after completing auth. Must be allowed by the redirect
// callback in src/lib/auth.ts. Logout intentionally still returns to '/'.
export const POST_LOGIN_URL = 'https://app.mynexusai.com';

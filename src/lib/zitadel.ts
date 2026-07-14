const ZITADEL_DOMAIN = process.env.ZITADEL_ISSUER;
const SERVICE_USER_TOKEN = process.env.ZITADEL_SERVICE_USER_TOKEN;
const ORG_ID = process.env.ZITADEL_ORG_ID;

class ZitadelApiError extends Error {
  constructor(
    message: string,
    public status: number
  ) {
    super(message);
    this.name = 'ZitadelApiError';
  }
}

// Missing env config — unlike other API errors, safe to surface to callers
// without leaking anything about a specific account.
class ZitadelConfigError extends ZitadelApiError {
  constructor() {
    super('Zitadel service credentials are not configured', 500);
    this.name = 'ZitadelConfigError';
  }
}

async function zitadelFetch(path: string, init: RequestInit) {
  if (!ZITADEL_DOMAIN || !SERVICE_USER_TOKEN) {
    throw new ZitadelConfigError();
  }

  const res = await fetch(`${ZITADEL_DOMAIN}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SERVICE_USER_TOKEN}`,
      ...init.headers,
    },
  });

  const json = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new ZitadelApiError(json.message ?? 'Zitadel request failed', res.status);
  }

  return json;
}

export async function createHumanUser(params: {
  email: string;
  givenName: string;
  familyName: string;
  password: string;
}): Promise<string> {
  const json = await zitadelFetch('/v2/users/human', {
    method: 'POST',
    body: JSON.stringify({
      organization: ORG_ID ? { orgId: ORG_ID } : undefined,
      profile: {
        givenName: params.givenName,
        familyName: params.familyName,
      },
      email: {
        email: params.email,
        isVerified: false,
      },
      password: {
        password: params.password,
        changeRequired: false,
      },
    }),
  });

  return json.userId as string;
}

export async function findUserIdByEmail(email: string): Promise<string | null> {
  const json = await zitadelFetch('/v2/users', {
    method: 'POST',
    body: JSON.stringify({
      queries: [
        {
          emailQuery: {
            // Zitadel v2 field is emailAddress — sending "email" silently
            // matches zero users instead of erroring.
            emailAddress: email,
            method: 'TEXT_QUERY_METHOD_EQUALS',
          },
        },
      ],
    }),
  });

  const result = json.result?.[0];
  return result?.userId ?? null;
}

export async function triggerPasswordReset(userId: string): Promise<void> {
  await zitadelFetch(`/v2/users/${userId}/password_reset`, {
    method: 'POST',
    body: JSON.stringify({}),
  });
}

export { ZitadelApiError, ZitadelConfigError };

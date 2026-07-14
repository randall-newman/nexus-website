import { createHumanUser, ZitadelApiError } from '@/src/lib/zitadel';
import { verifyTurnstile } from '@/src/utils/turnstile';
import { NextRequest, NextResponse } from 'next/server';

function splitName(fullName: string): { givenName: string; familyName: string } {
  const trimmed = fullName.trim();
  const spaceIndex = trimmed.indexOf(' ');
  if (spaceIndex === -1) {
    return { givenName: trimmed, familyName: trimmed };
  }
  return {
    givenName: trimmed.slice(0, spaceIndex),
    familyName: trimmed.slice(spaceIndex + 1).trim(),
  };
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const token: string = body['cf-turnstile-response'] ?? '';
  if (!token) {
    return NextResponse.json({ error: 'Missing bot-check token' }, { status: 400 });
  }

  const ip =
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    '';

  const verification = await verifyTurnstile(token, ip);
  if (!verification.success) {
    return NextResponse.json({ error: 'Bot check failed' }, { status: 403 });
  }

  const name: string = body.name ?? '';
  const email: string = body.email ?? '';
  const password: string = body.password ?? '';

  if (!name.trim() || !email.trim() || !password) {
    return NextResponse.json({ error: 'Name, email and password are required' }, { status: 400 });
  }

  const { givenName, familyName } = splitName(name);

  try {
    await createHumanUser({ email, givenName, familyName, password });
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof ZitadelApiError) {
      return NextResponse.json({ error: error.message }, { status: error.status >= 500 ? 502 : 400 });
    }
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}

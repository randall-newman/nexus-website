import { findUserIdByEmail, triggerPasswordReset, ZitadelConfigError } from '@/src/lib/zitadel';
import { verifyTurnstile } from '@/src/utils/turnstile';
import { NextRequest, NextResponse } from 'next/server';

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

  const email: string = body.email ?? '';
  if (!email.trim()) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  // Always respond with the same generic success shape, whether or not the
  // email is registered — avoids leaking account existence to callers.
  try {
    const userId = await findUserIdByEmail(email);
    if (userId) {
      await triggerPasswordReset(userId);
    }
  } catch (error) {
    // Missing server config is independent of the submitted email, so
    // surfacing it leaks nothing — and a fake success here would hide a
    // completely broken flow.
    if (error instanceof ZitadelConfigError) {
      return NextResponse.json(
        { error: 'Password reset is not available right now. Please try again later.' },
        { status: 503 }
      );
    }
    // Still return a generic success below — never leak account existence.
    console.error('Password reset failed', error);
  }

  return NextResponse.json({ ok: true });
}

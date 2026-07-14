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

  // TODO: authenticate against user store
  return NextResponse.json({ success: true });
}

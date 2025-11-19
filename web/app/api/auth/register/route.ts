import { NextResponse } from 'next/server';
import { createUser } from '../../../../lib/userStore';
import { getSupabase } from '../../../../lib/supabase';
import { hashPassword } from '../../../../lib/userStore';

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();
    if (!username || !password || typeof username !== 'string' || typeof password !== 'string') {
      return NextResponse.json({ ok: false, error: 'INVALID_INPUT' }, { status: 400 });
    }
    if (username.length < 3 || password.length < 6) {
      return NextResponse.json({ ok: false, error: 'WEAK_CREDENTIALS' }, { status: 400 });
    }

    // local file-backed store (keeps existing behavior)
    await createUser(username.trim(), password);

    // also persist to Supabase
    const { hash, salt } = hashPassword(password);
    const sb = getSupabase();
    if (sb) {
      const { error } = await sb
        .from('users_simple')
        .insert({ username: username.trim(), password_hash: hash, password_salt: salt });
      if (error) console.error('Supabase insert error', error);
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    if (e?.message === 'USERNAME_TAKEN') {
      return NextResponse.json({ ok: false, error: 'USERNAME_TAKEN' }, { status: 409 });
    }
    return NextResponse.json({ ok: false, error: 'SERVER_ERROR' }, { status: 500 });
  }
}

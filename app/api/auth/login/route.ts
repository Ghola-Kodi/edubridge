import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !await bcrypt.compare(password, user.password)) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role }, 
      process.env.JWT_SECRET!,
      { expiresIn: '7d' }
    );

    const response = NextResponse.json({ 
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
      token 
    });

    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60,
      path: '/'
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Login failed' }, { status: 500 });
  }
}

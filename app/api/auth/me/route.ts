import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { prisma } from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('auth-token')?.value;
    if (!token) return NextResponse.json({ error: 'No token' }, { status: 401 });

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });

    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 401 });

    return NextResponse.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    });
  } catch (error) {
    console.error('Auth me error:', error);
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
}

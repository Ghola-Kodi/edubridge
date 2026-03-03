import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const consultation = await prisma.consultation.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone || null,
        service: body.service,
        founder: body.founder,
        date: new Date(body.date),
        timeSlot: body.timeSlot,
        message: body.message || null,
      }
    });
    return NextResponse.json({ success: true, consultation });
  } catch (error) {
    console.error('Consultation error:', error);
    return NextResponse.json({ error: 'Failed to book' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const token = req.cookies.get('auth-token')?.value;
  if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    // Verify token and get user ID (simplified)
    const consultations = await prisma.consultation.findMany({
      where: { userId: undefined }, // Show all for demo, add userId filter for prod
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(consultations);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, service, message } = await req.json();
    const msg = await prisma.contactMessage.create({
      data: { name, email, phone: phone || null, service, message }
    });
    return NextResponse.json({ success: true, id: msg.id });
  } catch (err) {
    console.error('Contact post error', err);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}

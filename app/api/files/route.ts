import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  const files = await prisma.fileResource.findMany({
    orderBy: { uploadedAt: 'desc' }
  });
  return NextResponse.json(files);
}

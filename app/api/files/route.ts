import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  // during static export/build the DATABASE_URL may be missing;
  // avoid calling Prisma if it's not configured.
  if (!process.env.DATABASE_URL) {
    return NextResponse.json([]);
  }

  const files = await prisma.fileResource.findMany({
    orderBy: { uploadedAt: 'desc' }
  });
  return NextResponse.json(files);
}

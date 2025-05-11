import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const membership = await prisma.membership.create({
      data: {
        name: data.name,
        qualification: data.qualification,
        occupation: data.occupation,
        whatsapp: data.whatsapp,
        guardianName: data.guardianName,
        guardianNumber: data.guardianNumber,
        address: data.address,
        hobbies: data.hobbies,
        institute: data.institute,
        interests: data.interests,
      },
    });

    return NextResponse.json({ success: true, data: membership });
  } catch (error) {
    console.error('Error creating membership:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit membership form' },
      { status: 500 }
    );
  }
} 
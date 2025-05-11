import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const contact = await prisma.contact.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
      },
    });

    return NextResponse.json({ success: true, data: contact });
  } catch (error) {
    console.error('Error creating contact:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
} 
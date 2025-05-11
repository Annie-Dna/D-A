import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'qualification', 'occupation', 'address', 'hobbies', 'institute', 'interests'];
    const missingFields = requiredFields.filter(field => !data[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          success: false, 
          error: `Missing required fields: ${missingFields.join(', ')}` 
        },
        { status: 400 }
      );
    }

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
    
    if (error instanceof Error) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Database error: ' + error.message
        },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'An unexpected error occurred while processing your request'
      },
      { status: 500 }
    );
  } finally {
    // Disconnect Prisma client in serverless environment
    await prisma.$disconnect();
  }
} 
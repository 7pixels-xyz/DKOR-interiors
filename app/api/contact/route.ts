import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // In a real application, you would integrate with an email service or CRM here.
    console.log('Received contact inquiry:', body);

    return NextResponse.json(
      { message: 'Inquiry received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing inquiry:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    );
  }
}

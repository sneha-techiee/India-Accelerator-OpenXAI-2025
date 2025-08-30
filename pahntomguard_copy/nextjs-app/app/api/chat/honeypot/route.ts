import { NextResponse } from 'next/server';

// Simulated honeypot data storage (in-memory for hackathon demo)
let attackLog: Array<{
  id: string;
  timestamp: string;
  sourceIP: string;
  type: string;
  severity: string;
  geo: string;
}> = [];

// GET: Retrieve attack logs
export async function GET() {
  try {
    return NextResponse.json({
      status: 'success',
      data: attackLog,
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      message: 'Failed to fetch attack logs',
    }, { status: 500 });
  }
}

// POST: Simulate receiving an attack (for demo purposes)
export async function POST(request: Request) {
  try {
    const { type, sourceIP, geo } = await request.json();

    // Basic validation
    if (!type || !sourceIP || !geo) {
      return NextResponse.json({
        status: 'error',
        message: 'Missing required fields',
      }, { status: 400 });
    }

    const newAttack = {
      id: Date.now().toString(),
      timestamp: new Date().toLocaleString(),
      sourceIP,
      type,
      severity: ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)],
      geo,
    };

    attackLog = [newAttack, ...attackLog.slice(0, 49)]; // Keep last 50 attacks

    return NextResponse.json({
      status: 'success',
      data: newAttack,
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      message: 'Failed to log attack',
    }, { status: 500 });
  }
}
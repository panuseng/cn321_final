import { PrismaClient } from '@prisma/client';
import { nanoid } from 'nanoid';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

console.log("API Server: Movie endpoint loaded.");

export async function POST(request) {
  try {
    const gameData = await request.json();

    console.log('Received game data:', gameData);
    const { region, platforms } = gameData;

    // Input Validation
    if (!region || !platforms || platforms.length === 0) {
      console.error('Validation failed:', { region, platforms });
      return new NextResponse(
        JSON.stringify({ error: 'Region and at least one platform are required' }),
        { status: 400 }
      );
    }

    // Check if region and platforms are valid
    const validRegions = ['TH', 'US', 'JP'];
    const validPlatforms = ['netflix', 'Disney+', 'Prime', 'HBO', 'AppleTV+'];

    if (!validRegions.includes(region)) {
      return new NextResponse(JSON.stringify({ error: 'Invalid region' }), { status: 400 });
    }

    const invalidPlatforms = platforms.filter(platform => !validPlatforms.includes(platform));
    if (invalidPlatforms.length > 0) {
      return new NextResponse(JSON.stringify({ error: `Invalid platforms: ${invalidPlatforms.join(', ')}` }), { status: 400 });
    }

    const game = await prisma.game.create({
      data: {
        roomID: nanoid(4),
        region,
        platform: platforms.join(','),
      },
    });

    console.log('Game created:', game);
    return NextResponse.json({ roomId: game.roomID });
  } catch (error) {
    console.error('Error creating game:', error);
    if (error.code === 'P2002') {
      return new NextResponse(
        JSON.stringify({ error: 'A game with this room ID already exists' }),
        { status: 409 }
      );
    }
    return new NextResponse(
      JSON.stringify({ error: 'Something went wrong creating the game' }),
      { status: 500 }
    );
  }
}

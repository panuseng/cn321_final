import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// GET handler for /api/games/[gameId]
export async function GET(request, { params }) {
  try {
    const gameId = params.gameId;
    console.log("gameId is ",gameId);

    // Fetch the game from the database
    const game = await prisma.game.findUnique({
      where: { roomID: gameId },
    });

    if (!game) {
      return new NextResponse(JSON.stringify({ error: 'Game not found' }), { status: 404 });
    }

    console.log('Game data retrieved:', game);
    return NextResponse.json(game); // Return game data as JSON
  } catch (error) {
    console.error('Error fetching game:', error);
    return new NextResponse(JSON.stringify({ error: 'Something went wrong fetching game details' }), { status: 500 });
  }
}

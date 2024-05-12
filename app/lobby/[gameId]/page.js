'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';

export default function GameLobbyPage() {
  const router = useRouter();
  const { gameId } = useParams();
  const [gameData, setGameData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const response = await fetch(`/api/game/${gameId}`);
        if (response.ok) {
          const data = await response.json();
          setGameData(data);
        } else {
          throw new Error('Could not fetch game data');
        }
      } catch (error) {
        console.error('Error fetching game data:', error);
        setError('Something went wrong fetching game details');
      } finally {
        setIsLoading(false);
      }
    };

    if (gameId) {
      fetchGameData();
    }
  }, [gameId]);

  if (isLoading) {
    return <div className="container flex justify-center items-center">Loading...</div>;
  }

  if (error) {
    return (
     <div className="container flex justify-center items-center text-red-500">
       {error}
     </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <header className="container flex flex-col items-start p-5 pt-2 border-b border-gray-200">
        <div className="flex items-end justify-center w-full">
          <Link href='/'>
            <span>
              <img src="/back-200w.png" alt="back" className="h-7" />
            </span>
          </Link>
          <span className="text-base font-medium text-black w-full text-center">Lobby</span>
          <span className="text-s font-medium text-purple-700">Handshake</span>
        </div>
      </header>

      <main className="container flex flex-col items-start w-full p-5 flex-grow">
        <div className="w-full flex flex-col gap-3">
          <div className='gap-5 flex items-center justify-center'>
            <div className='gap-2 w-full h-full flex flex-col items-center justify-center rounded-lg border-2 border-purple-700 bg-white p-2\'>
              <div className="flex items-center gap-5">
                <div className="text-sm text-gray-500">{gameId}</div> {/* Display Game ID */}
              </div>
            </div>
            <img src="/share.png" alt="Share" className="h-8" />
          </div>
          <p className="text-xs text-gray-500">
            Invite friend(s) to your game by sharing this Game ID.
          </p>

          {/* Player Section */}
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500">Player :</span>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white border border-purple-700 rounded-md px-3 py-1">
                <span className="text-xs">Seng (me)</span>
              </div>
              {/* Add more players dynamically here */}
            </div>
          </div>

          {/* Platform Section */}
          {gameData && (
            <div className="flex flex-col gap-2">
              <span className="text-sm text-gray-500">Platform :</span>
              <div className="flex flex-wrap gap-2">
                {gameData.platform.split(',').map((platform, index) => (
                  <button
                    key={index}
                    className="bg-white border border-purple-700 rounded-[45px] px-1 pr-3 py-1 flex items-center gap-1"
                  >
                    <img
                      src={`/${platform.toLowerCase()}.png`} // Assuming you have platform logo images
                      alt={`${platform} logo`}
                      className="h-5"
                    />
                    <span className="text-xs">{platform}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <Link href={`/game/${gameId}`} className="text-center bg-violet-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-violet-300 hover:bg-violet-700">
            Start Game
          </Link>
        </div>
      </main>
    </div>
  );
}

import Head from 'next/head';

export default function LobbyPage() {
	return (
		<div className="min-h-screen flex flex-col items-center bg-gray-100">
			<Head>
				<title>Lobby</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>

			<header className="container flex flex-col items-start p-5 pt-2 border-b border-gray-200">
				<div className="flex items-end justify-center w-full">
					<a href="/">
						<img src="/back-200w.png" alt="back" href="/start" className="h-7" />
					</a>
					<span className="text-base font-medium text-black w-full text-center">Lobby</span>
					<span className="text-s font-medium text-purple-700">Handshake</span>
				</div>
			</header>

			<main className="container flex flex-col items-start w-full p-5 flex-grow">
				<div className="w-full flex flex-col gap-3">
					<div className='gap-5 flex items-center justify-center'>
						<div className='gap-2 w-full h-full flex flex-col items-center justify-center rounded-lg border-2 border-purple-700 bg-white p-2\'>
							<div className="flex items-center gap-5">
								<div className="text-sm text-gray-500">ICAL</div>
							</div>
						</div>
						<img
							src="/share.png"
							alt="ICAL code"
							className="h-8"
						/>
					</div>
						<p className="text-xs text-gray-500">
							invite friend(s) to your game by sharing this Game ID.
						</p>

					<div className="flex flex-col gap-2">
						<span className="text-sm text-gray-500">Player :</span>
						<div className="flex flex-wrap gap-3">
							<div className="bg-white border border-purple-700 rounded-md px-3 py-1">
								<span className="text-xs">RubyToon</span>
							</div>
							<div className="bg-white border border-purple-700 rounded-md px-3 py-1">
								<span className="text-xs">Seng (me)</span>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-2">
						<span className="text-sm text-gray-500">Platform :</span>
						<div className="flex flex-wrap gap-2">
							<button className="bg-white border border-purple-700 rounded-[45px] px-1 pr-3 py-1 flex items-center gap-1">
								<img src="/netflix.png" alt="Netflix logo" className="h-5" />
								<span className="text-xs">Netflix</span>
							</button>
							{/* Add more buttons for other platforms ... */}
						</div>
					</div>
						<a href="" className="text-center bg-violet-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-violet-300 hover:bg-violet-700">
							Start Game
						</a>
				</div>
			</main>
		</div>
	);
}

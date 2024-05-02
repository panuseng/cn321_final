import Head from 'next/head';

export default function Home() {
	return (
		<div className="w-full flex-col items-center">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta charset="utf-8" />
			</Head>

			<div className="start-container w-full flex flex-col items-center bg-white">
				<div className="start-start w-full flex flex-col items-flex-start">
					<div className="start-frame3 bg-gray-200 flex items-end py-4 px-6">
						<span className="start-text text-lg font-medium text-gray-800">
							Start playing
						</span>
					</div>
					<div className="start-frame4 border-b border-gray-300 py-6 px-8 flex flex-col">
						<span className="start-text2 text-lg font-medium text-gray-800">
							Join a game
						</span>
						<div className="start-frame5 flex items-center py-4">
							<input
								type="text"
								placeholder="Enter Game ID"
								className="start-textinput border border-violet-500 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-violet-500 focus:ring-opacity-50"
							/>
							<a href="/lobby" className="start-button bg-violet-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-violet-300 hover:bg-violet-700 ml-2.5">
								Join
							</a>
						</div>
					</div>
					<div className="start-frame8 py-4 px-8 flex flex-col items-flex-start">
						<span className="start-text4 text-lg font-medium text-gray-800 mb-5">
							Create Game
						</span>
						<a href="/lobby/create" className="text-center bg-violet-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-violet-300 hover:bg-violet-700">
							Create a Game ID
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

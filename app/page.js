import Image from 'next/image';

export default function HomePage() {
	return (
			<div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
				<Image
						src="/handshake.png" // Replace with your image path
						alt="Handshake icon"
						width={255}
						height={133}
				/>
				<h1 className="text-4xl font-bold text-center mb-8">Handshake</h1>
				<input
						type="text"
						placeholder="Enter your name"
						className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
				/>
				<a href="/start" className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-700">
						Get started
				</a>
			</div>
	);
}

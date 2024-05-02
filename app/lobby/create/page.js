export default function CreateGame() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
			<div className="max-w-md w-full px-6 py-8 bg-white shadow-md overflow-hidden sm:rounded-lg">
				<div className="mb-8">
					<h2 className="text-3xl font-bold text-purple-600">Create Game</h2>
				</div>
				<div className="mb-6 my-5">
					<div className="flex justify-center items-center mb-4 text-lg	">
						<span>Movies/TV Shows</span>
					</div>
					<div className="flex justify-between items-center mb-4">
						<span>Country</span>
						<select className="rounded-md border border-gray-300 p-1 focus:outline-none focus:ring-1 focus:ring-primary-500">
							<option value="TH">TH</option>
							<option value="US">US</option>
							<option value="JP">JP</option>
						</select>
					</div>
					<div className="flex flex-col mb-4">
						<span>Platform</span>
						<div className="gap-10 pl-3">
							<label className="flex justify-between items-center">
								Netflix
								<input type="checkbox" className="form-checkbox mr-2" />
							</label>
							<label className="flex justify-between items-center">
								Disney +
								<input type="checkbox" className="form-checkbox mr-2" />
							</label>
							<label className="flex justify-between items-center">
								Prime
								<input type="checkbox" className="form-checkbox mr-2" />
							</label>
							<label className="flex justify-between items-center">
								HBO
								<input type="checkbox" className="form-checkbox mr-2" />
							</label>
							<label className="flex justify-between items-center">
								Apple TV +
								<input type="checkbox" className="form-checkbox mr-2" />
							</label>
						</div>
					</div>
				</div>
				<a  href="/lobby">
					<button className="start-button1 w-full bg-purple-600 text-white rounded-lg py-2">Create game</button>
				</a>
			</div>
		</div>
	);
}

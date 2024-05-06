'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'

// Function Component for Form and Router Logic
function CreateGameForm() {
	const router = useRouter();    // Access the Next.js router

	const [isLoading, setIsLoading] = useState(false); // State for loading indicator
	const [error, setError] = useState(null); // State for error message

	// Function to handle form submission
	const handleSubmit = async (event) => {
		event.preventDefault(); // Prevent default form submission behavior

		setIsLoading(true); // Set loading state to true
		setError(null); // Clear any previous errors

		const gameData = {
			region: event.target.elements.region.value,
			platforms: Array.from(event.target.elements.platforms) // Convert to array
				.filter((element) => element.checked) // Filter checked platforms
				.map((element) => element.value), // Extract platform values
		};

		try {
			const response = await fetch('/api/games', { // Adjust your API endpoint
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(gameData),
			});

			if (response.ok) {
				const data = await response.json();
				router.push(`/lobby/${data.roomId}`); // Redirect on successful creation
			} else {
				throw new Error('Could not create game');
			}
		} catch (error) {
			console.error(error);
			setError('Something went wrong creating the game'); // Set error message
		} finally {
			setIsLoading(true); // Set loading state back to false after all actions
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
		  <div className="max-w-md w-full px-6 py-8 bg-white shadow-md overflow-hidden sm:rounded-lg">
			<form onSubmit={handleSubmit}>
			  <fieldset>
				<legend className="text-3xl font-bold text-purple-600c">Create Game</legend>

				<div className="mb-6 my-5">
				  <div className="flex justify-center items-center mb-4 text-lg">
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

				<button type="submit" className="start-button1 w-full bg-purple-600 text-white rounded-lg py-2" disabled={isLoading}>
				  {isLoading ? 'Creating game...' : 'Create game'}
				</button>
				{error && <p className="text-red-500">{error}</p>}
			  </fieldset>
			</form>
		  </div>
		</div>
	  );
	}

export default CreateGameForm;

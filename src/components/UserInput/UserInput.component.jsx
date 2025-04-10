import React from 'react';
import { useState } from 'react';

function UserInput() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	function userInputChangeHandler(inputIdentifier, newValue) {
		setUserInput((prev) => ({ ...prev, [inputIdentifier]: newValue }));
	}

	return (
		<section id='user-input'>
			<div className='input-group'>
				<p>
					<label>Initial Investment</label>
					<input
						type='number'
						required
						value={userInput.initialInvestment}
						onChange={(event) =>
							userInputChangeHandler('initialInvestment', event.target.value)
						}
					/>
				</p>
				<p>
					<label>Annual Investment</label>
					<input
						type='number'
						required
						value={userInput.annualInvestment}
						onChange={(event) =>
							userInputChangeHandler('initialInvestment', event.target.value)
						}
					/>
				</p>
			</div>
			<div className='input-group'>
				<p>
					<label>Expected Return</label>
					<input
						type='number'
						required
						value={userInput.expectedReturn}
						onChange={(event) =>
							userInputChangeHandler('initialInvestment', event.target.value)
						}
					/>
				</p>
				<p>
					<label>Duration</label>
					<input
						type='number'
						required
						value={userInput.duration}
						onChange={(event) =>
							userInputChangeHandler('initialInvestment', event.target.value)
						}
					/>
				</p>
			</div>
		</section>
	);
}

export default UserInput;

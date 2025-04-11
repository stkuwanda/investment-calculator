import { useState } from 'react';
import Header from './components/Header/Header.component';
import UserInput from './components/UserInput/UserInput.component';
import Results from './components/Results/Results.component';

function App() {
  const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	const isValidInput = userInput.duration >= 1;

	function userInputChangeHandler(inputIdentifier, newValue) {
		setUserInput((prev) => ({ ...prev, [inputIdentifier]: +newValue }));
	}

	return (
		<>
			<Header />
			<UserInput userInput={userInput} onChange={userInputChangeHandler}/>
      {isValidInput && <Results input={userInput} />}
			{!isValidInput && <p className='center'>Please enter a duration greater than zero.</p>}
		</>
	);
}

export default App;

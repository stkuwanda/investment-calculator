import { calculateInvestmentResults } from "../../util/investment";

function Results({ input }) {
  const result = calculateInvestmentResults(input);
  console.log('result:', result);

  return (
    <div>
      ...results
    </div>
  )
}

export default Results;

import React from "react";
import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";
const Results = ({ input }) => {
  // console.log(input);
  const headerdata = Object.keys(input);
  console.log(headerdata);
  const resultsData = calculateInvestmentResults(input);

  console.log(resultsData);
  return (
    <table id="result">
      <thead>
        <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
       { resultsData.map((singleData) => {
          const totalInterest = singleData.valueEndOfYear - singleData.interest- singleData.annualInvestment;
          const totalAmountInvested = singleData.valueEndOfYear-totalInterest;
            return <tr key={singleData.year}>
                <td>{singleData.year}</td>
                <td>{formatter.format(singleData.valueEndOfYear)}</td>
                <td>{formatter.format(singleData.interest)}</td>

                <td>{formatter.format(totalInterest)}</td>

                <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
        })
        }
      </tbody>
      <tbody></tbody>
    </table>
  );
};

export default Results;

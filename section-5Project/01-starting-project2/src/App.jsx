import { useState } from "react"
import Header from "./components/Header"
import UseInputs from "./components/UseInputs"
import Results from "./components/Results"

function App() {
  const [userInput,setUserInput] = useState
  ({
    initialInvestment:1200,
    annualInvestment:100,
    expectedReturn:6,
    duration:15,
  })
  const handleChange = (inputIdentifier,newValue) => {
    setUserInput((prevUserInput)=>{
      const updatedValue = {
        ...prevUserInput,
        [inputIdentifier]:+newValue  // + => converts string to number
      }
      return updatedValue;
    })
  }
  const inputIsValid = userInput.duration>=1
  return (
    <>
    <Header/>
    <UseInputs Input={userInput} onChange={handleChange}/>
    {
      !inputIsValid && <p className="center">Please enter a valid duration greater than 0</p>
    }
    {
    inputIsValid?
    <Results  input={userInput}/>:undefined
    }
    </>
  )
}

export default App;

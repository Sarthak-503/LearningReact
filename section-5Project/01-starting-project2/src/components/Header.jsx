import React from 'react'
import InvestmentImage from '../assets/investment-calculator-logo.png'; 
const Header = () => {
  return (
    <>
    <header id='header'>
      <img src={InvestmentImage} alt={"Investment Image"} />
        <h1>Investment Calculator</h1>
    </header>
    </>
  )
}

export default Header

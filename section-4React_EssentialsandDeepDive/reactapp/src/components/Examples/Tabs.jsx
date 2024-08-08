import React from 'react'

// wrapper component don't know anythinmg abt managing the content
// just a wrapper component used to display h
              // multiple jsx slots (many diiferent code we can accept like this)
const Tabs = ({children,buttons,buttonContainer}) => { 
  const ButtonContainer = buttonContainer; // not used directly as it will find the built-in tags
  //buttonContainer component so we have make this custom component
  return (
   <>
   <ButtonContainer>
    {buttons}
   </ButtonContainer>
   {children}
   </>
  )
}
// You can directly use ButtonContainer 
// You can also set default value to ButtonContainer without passing it in parent component like
//  ButtonContainer ="menu" above

export default Tabs

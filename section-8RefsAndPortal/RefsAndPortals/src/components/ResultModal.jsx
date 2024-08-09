import React from "react";
import { forwardRef, useImperativeHandle, useRef } from "react";

/*const ResultModal = ({result,targetTime,ref}) => {
  return (
    // we want to blur background but when using open but unfortunately this built-in backdrop will not be shown
    // if you force the dialog to be visible by setting open to true like this.
    // Instead we have to open this dialog programmatically by sending a command to the browser to get this built-in backdrop.
    // Now we'll make sure that we can access this dialog in this component from inside the timer challenge. 
    // before code -> add open in dialog

    <dialog className="result-modal" ref={ref} open > 
      <h2>You {result}</h2>
      <p>The Target Time was {targetTime} seconds.</p>
      <p>You stopped the timer with <strong>X seconds left.</strong></p>

       <form action="dialog"> // it will close the dialog box without using js
        <button>Close</button>
      </form>
    </dialog>
  );
};*/


/*
const ResultModal = forwardRef ( ( {result,targetTime}, ref) => {

  return (
    <dialog className="result-modal" ref={ref} > 
      <h2>You {result}</h2>
      <p>The Target Time was {targetTime} seconds.</p>
      <p>You stopped the timer with <strong>X seconds left.</strong></p>
      //  it will close the dialog box without using js -> html feature  
      <form action="dialog"> 
        <button>Close</button>
      </form>
    </dialog>
  );
}) */



const ResultModal = forwardRef ( ( {result,targetTime}, ref) => {

  const dialog = useRef();// executing it, bcz now we'll need a separate ref for reaching out to the dialog bcz the idea now is to detach this dialog element
   //which is used in ResultModal component from any other outer components.
 
   // exposing its property and fn outside of this component 
 useImperativeHandle(ref, () => {
   return { // refer to this obj
     open(){
        dialog.current.showModal();
     }
   }
 })
   return (
     <dialog className="result-modal" ref={dialog} > 
       <h2>You {result}</h2>
       <p>The Target Time was {targetTime} seconds.</p>
       <p>You stopped the timer with <strong>X seconds left.</strong></p>
        // it will close the dialog box without using js  
       <form action="dialog"> 
         <button>Close</button>
       </form>
     </dialog>
   );
 }) 
 
export default ResultModal;

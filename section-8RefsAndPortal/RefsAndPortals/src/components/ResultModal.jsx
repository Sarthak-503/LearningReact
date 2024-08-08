import React from "react";

const ResultModal = ({result,targetTime,ref}) => {
  return (
    <dialog className="result-modal" ref={ref}>
      <h2>You {result}</h2>
      <p>The Target Time was {targetTime} seconds.</p>
      <p>You stopped the timer with <strong>X seconds left.</strong></p>
      {/* it will close the dialog box without using js  */}
      <form action="dialog"> 
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default ResultModal;

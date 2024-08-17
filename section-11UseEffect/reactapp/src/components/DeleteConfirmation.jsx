import { useEffect, useState } from "react";
import ProgressBar from "./progressBar";

const TIMER = 3000;
export default function DeleteConfirmation({ onConfirm, onCancel }) {
 

  console.log("Timer Set");
  //But if I remove it myself before these three seconds expire,his timer will also still expire
  // bcz we didn't stop it and that wasn't a problem here. it will be a problem if I click no bcz
  //you will see that even though I clicked no, after three seconds this item disappeared because
  // the timer is never stopped when this component here is not rendered anymore.
  // Timer keeps on running whether the component is removed from dom
  // setTimeout(()=>{
  //   console.log("sasa");
  //   onConfirm();
  // },3000)

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("sasa");
      onConfirm();
    }, TIMER);

    return () => {
      console.log("Cleaning up the timer");
      clearTimeout(timer);
    };
  }, [onConfirm]);
  // Here adding function can cause infinite loop, if App comp re-renders (where conConfirm value comes,
  // it will always be a different value irrespective of the same code(2 different fn haveing same code are not equal))
  // then this useEffect will be run again and if you click yes it will make a state change in App, App renders again
  // Infinte Loop -> not done here as <DeleteConfirmation> is controlled by Modal, comment setModalIsOpen(false) in handleRemovePlace() -> infinite loop
  // Therefore use useCallBack hook whenever you use a function in dependency array
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={TIMER}   />
    </div>
  );
}

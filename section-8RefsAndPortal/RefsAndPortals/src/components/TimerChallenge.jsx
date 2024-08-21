import React, { useRef, useState } from 'react'
import ResultModal from './ResultModal';
// 1
// let timer;  // shared across all the instances of component
// // timer = stores(5 wala timer) -> 1 ka start clicked -> stores(1 wala timer) -> 5 wala timer lost -> 1 ka stop clicked -> 5 wala not stop
// const TimerChallenge = ({title, targetTime}) => {
//     const [timerStarted, settimerStarted] = useState(false)
//     const [timerExpired, setTimerExpired] = useState(false);

//     // let timer; // Not work bcz it is a variable & comp fn re-executes & new variable timer is recreated.
//     function handleStart() {
//         timer = setTimeout(() => {        
//             setTimerExpired(true)
//         }, targetTime*1000)
//         settimerStarted(true) // execute after the timer was set , then a new timer will be created
//     }
//    function handleStop() {
//         clearTimeout(timer);
//         settimerStarted(false)
//         setTimerExpired(false);
//    }
//   return (
//     <section className='challenge'>
//         <h2>{title}</h2>
//         {timerExpired && <p>You lost!!! </p>}
//         <p className='challenge-time'>
//             {targetTime} second{targetTime>1?'s':''}
//         </p>
//         <p>
//             <button onClick={timerStarted? handleStop:handleStart} >
//                 {timerStarted?'Stop':'Start'} Challenge
//             </button>
//         </p>
//         <p className={timerStarted? 'active':undefined}>
//            {timerStarted?'Time is running...' : 'Timer inactive'}
//         </p>
//     </section>
//   )
// }

// 2 & 3
// const TimerChallenge = ({title, targetTime}) => {
//     const timer = useRef(); // this will not reset/cleared when comp re-executes
//    // Use-cases where you have a value that doesn't really impact the UI, at least not directly, 
//    //and you still need to manage it such that it's not reset when the component is re-executed, then you can use a ref.

//     const dialog = useRef(); // this comp should know that dialog ref is connected to dialog element, you write code is not dependent of ResultModel comp
//     const [timerStarted, settimerStarted] = useState(false);
//     const [timerExpired, setTimerExpired] = useState(false);

//     function handleStart() {
//         timer.current = setTimeout(() => {
//             setTimerExpired(true);
//             dialog.current.showModal();
//         }, targetTime*1000)
//         settimerStarted(true)
//    }
//    function handleStop() {
//         clearTimeout(timer.current);
//    }
//   return (
//     <>
//     {/* { timerExpired && <ResultModal targetTime={targetTime} result="lost"/> } */}
//        <ResultModal ref={dialog} targetTime={targetTime} result="lost"/> 

//     <section className='challenge'>
//         <h2>{title}</h2>
//         <p className='challenge-time'>
//             {targetTime} second{targetTime>1?'s':''}
//         </p>
//         <p>
//             <button onClick={timerStarted? handleStop:handleStart}>
//                 {timerStarted?'Stop':'Start'} Challenge
//             </button>
//         </p>
//         <p className={timerStarted? 'active':undefined}>
//            {timerStarted?'Time is running...' : 'Timer inactive'}
//         </p>
//     </section>
//     </>
//   )
// }

// TimerChallenge component,which uses the ResultModal component in the end needs to know that the dialog ref(line 55)
// will be attached to this dialog element in ResultModal.Therefore We are here detaching the TimerChallenge 
// component from Result Modal Component 



// 4  in line 54 (only change)
// dialog.current.open();


// 5
const TimerChallenge = ({title, targetTime}) => {
    const timer = useRef(); 
    const dialog = useRef();

    const [timeRemaining,setTimeRemaining] = useState(targetTime*1000);

    const timerIsAcive  = timeRemaining > 0 && timeRemaining < targetTime * 1000;
    if(timeRemaining <= 0){
        clearInterval(timer.current);
        dialog.current.open();
    }
    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }
    function handleStart() {
        timer.current = setInterval(() => {
          setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10)
            
        }, 10)   // setInterval execute this fn every time this time expired

   }
   function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);
   }
  return (
    <>
       <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset}/> 

    <section className='challenge'>
        <h2>{title}</h2>
        <p className='challenge-time'>
            {targetTime} second{targetTime>1?'s':''}
        </p>
        <p>
            <button onClick={timerIsAcive? handleStop:handleStart}>
                {timerIsAcive?'Stop':'Start'} Challenge
            </button>
        </p>
        <p className={timerIsAcive? 'active':undefined}>
           {timerIsAcive?'Time is running...' : 'Timer inactive'}
        </p>
    </section>
    </>
  )
}

//There's nothing wrong with final component but technically it would make more sense if this overlay element(ResultModal)
// which visually sits on top of the entire page would be output directly inside of the body or maybe inside of this div which sits here
// with an ID of modal which I did not add to the starting project by accident. And it would make sense to have the dialogue
//on such a higher level because that would map its visual appearance to its location in the HTML structure which can be better 
// for accessibility reasons and which can also help you avoid styling problems.
export default TimerChallenge;

import React, { useRef, useState } from 'react'
import ResultModal from './ResultModal';

// let timer;  // shared across all the instances of component
// timer = stores(5 wala timer) -> stores(1 wala timer) -> 5 wala timer lost -> 1 ka stop clicked 
// const TimerChallenge = ({title, targetTime}) => {
//     const [timerStarted, settimerStarted] = useState(false)
//     const [timerExpired, setTimerExpired] = useState(false);

//     // let timer; // Not work bcz it is a variable & comp fn re-executes & new variable timer is recreated
//     function handleStart() {
//         timer = setTimeout(() => {
//             setTimerExpired(true)
//         }, targetTime*1000)
//         settimerStarted(true)// execute after the timer was set
//    }
//    function handleStop() {
//         clearTimeout(timer);
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
const TimerChallenge = ({title, targetTime}) => {
    const timer = useRef(); // this will not reset/cleared when comp re-executes
   // Use-cases where you have a value that doesn't really impact the UI, at least not directly, 
   //and you still need to manage it such that it's not reset when the component is re-executed, then you can use a ref.

    const dialog = useRef();
    const [timerStarted, settimerStarted] = useState(false)
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialog.current.showModel();
            
        }, targetTime*1000)
        settimerStarted(true)
   }
   function handleStop() {
        clearTimeout(timer.current);
   }
  return (
    <>
     <ResultModal ref={dialog} targetTime={targetTime} result="lost"/>
    <section className='challenge'>
        <h2>{title}</h2>
        {timerExpired && <p>You lost!!! </p>}
        <p className='challenge-time'>
            {targetTime} second{targetTime>1?'s':''}
        </p>
        <p>
            <button onClick={timerStarted? handleStop:handleStart} >
                {timerStarted?'Stop':'Start'} Challenge
            </button>
        </p>
        <p className={timerStarted? 'active':undefined}>
           {timerStarted?'Time is running...' : 'Timer inactive'}
        </p>
    </section>
    </>
  )
}

export default TimerChallenge

import { memo, useCallback, useState, useMemo, useEffect } from "react";

import IconButton from "../UI/IconButton.jsx";
import MinusIcon from "../UI/Icons/MinusIcon.jsx";
import PlusIcon from "../UI/Icons/PlusIcon.jsx";
import CounterOutput from "./CounterOutput.jsx";
import { log } from "../../log.js";
import CounterHistory from "./CounterHistory.jsx";

function isPrime(number) {
  log("Calculating if is prime number", 2, "other");
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
// memo -> prevent unnecesary fn execution if props value is not different, don't use where props value changes frequently
// remove memo as the input value entered in the ConfigureCounter is always different.
const Counter = memo(function Counter({ initialCount }) {
  log("<Counter /> rendered", 1);

  // initialCount only changes when we set a new value in the input
  const initialCountIsPrime = useMemo(
    () => isPrime(initialCount),
    [initialCount]
  );
  // two component fn execution not optimal but better way of forcing component reset when initialCount changes is to add a key
  useEffect(()=>{
    setCounterChanges([{
      value:initialCount,id:Math.random()*1000
    },]
      
    )
  },[initialCount])

  // const [counter, setCounter] = useState(initialCount);
  // const [counterChanges, setCounterChanges] = useState([initialCount]);// here states is array of counter changes
  const [counterChanges, setCounterChanges] = useState([
    { value: initialCount, id: Math.random() * 1000 },
  ]); // here states is array of counter changes

  const currentCounter = counterChanges.reduce(
    // (prevCounter, counterChange) => prevCounter + counterChange,
    (prevCounter, counterChange) => prevCounter + counterChange.value,
    0
  );

  const handleDecrement = useCallback(function handleDecrement() {
    // setCounter((prevCounter) => prevCounter - 1);
    // setCounterChanges((prevCounterChanges) => [-1, ...prevCounterChanges]);
    setCounterChanges((prevCounterChanges) => [
      {
        value: -1,
        id: Math.random() * 100,
      },
      ...prevCounterChanges,
    ]);
  }, []);
  // dependency array include states,props,context values that are used inside the fn

  const handleIncrement = useCallback(function handleIncrement() {
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounterChanges((prevCounterChanges) => [1, ...prevCounterChanges]);
    setCounterChanges((prevCounterChanges) => [
      {
        value: +1,
        id: Math.random() * 1000,
      },
      ...prevCounterChanges,
    ]);
  }, []);

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{" "}
        <strong>is {initialCountIsPrime ? "a" : "not a"}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        {/* <CounterOutput value={counter} /> */}
        <CounterOutput value={currentCounter} />

        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
      <CounterHistory history={counterChanges} />
    </section>
  );
});
export default Counter;

// useCallback can be used to avoid the recreation of a function
// and used if you have a function as a dependency of useEffect.

// Keep in mind that it's technically this index HTML file that is being loaded when you visit the website
// and this is a pretty empty page in the end. It just has one div and this script import.
// And indeed, it's in this div where this entire React app. So this component tree and the HTML code that's generated by the tree will be rendered.
// by that tree will be rendered.
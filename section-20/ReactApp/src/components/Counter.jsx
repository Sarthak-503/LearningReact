import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux"; // select a part of state managed by store
const Counter = () => {
  const toggleCounterHandler = () => {
    dispatch({
      type: "toggle"
    });
  };
  // this fn will be executed by react-redux
  const counter = useSelector((state) => state.counter); // useSelector returns a part of state which i wanna extract
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({
      type: "increment",
      amount: 1,
    });
  };
  const increaseHandler = () => {
    dispatch({
      type: "increase",
      amount: 10,
    });
  };
  const decrementHandler = () => {
    dispatch({
      type: "decrement",
    });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div className="counter">
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment By 10 </button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}> Toggle Counter</button>
    </main>
  );
};

export default Counter;

// useSelector
// Now the great thing is that when you use useSelector,React Redux will automatically set up a subscription
// to the Redux store for this component.So your component will be updated and will receive the latest counter
//  automatically whenever that data changes in the Redux store.So it's an automatically reactive and changes to
// the Redux store will cause this component function to be re executed.So you always have the latest counter.
// That's why use selector is a very useful hook and why it is the hook we use for getting data out of the store.
// If you ever would unmount this component (if it would be removed from the DOM for whatever reason),React Redux
//  would also automatically clear the subscription for you.So it manages that subscription for you behind the scenes.

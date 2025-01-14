import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    // Point-1,So the objects which we return in the reducer will not, and that's super important
    // will not be merged with the existing state.They will overwrite the existing state.

    // state.counter++; //  Bad Practise
    // Point-2 You should never super important never mutate the state, the existing state.
    // You should never change the existing state. Instead, always override it by returning a brand new state object.
    // And because objects and arrays are reference values in JavaScript, it's easy to accidentally override
    // and change the existing state. that you do this in an immutable way

    // that you'd never accidentally mutate your existing state
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  } else if (action.type === "increase") {
    return {
      counter: state.counter + action.amount, // reducer is dynamic
      showCounter: state.showCounter,
    };
  } else if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  } else if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;

// Challenges with redux
// 1.The more data we have in the initialState, the more different pieces of state we have,
// the bigger our state objects get.
// And that means that we need to copy a lot of state when we update the counter we still need to copy
// and keep all the other state properties, and it also means that this reducer function gets longer
// and longer and all of a sudden we might have an unmaintainable big Redux file.
// 2. State Immutibility
// 3. There also are solutions for splitting your reducer into multiple smaller reducers
// so that you don't get this large super big file, and there also our solutions and third-party packages
// which allow you to automatically copy state and ensure that you don't accidentally edit it.

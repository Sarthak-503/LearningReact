const redux = require("redux");

// Reducer Function takes two thing 1. state and 2. action(by default), and it will be ultimately be executed by redux library.
// -> takes  (oldState, dispatched Action) -> return new state,
// And therefore a reducer function should be a pure function. Which basically means that the same inputs,
// the same values for inputs always should produce exactly the same output. And there should be no side 
// effects inside of that function. So you must not send a HTTP request or write something to local storage
// or fetch something from local storage there. Instead, a reducer should really just be a function
// that takes the given inputs, which are provided by Redux and then produces the expected output, a new state object.
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment")
    return {
      counter: state.counter + 1,
    };
  else if (action.type === "decrement")
    return {
      counter: state.counter - 1,
    };
  return state;
};

// Create a Store,now What do we do with that store? Well, that store should manage some data
// and the data which it manages is in the end,is determined by the reducer function,bcz
//  it's the reducer function which will produce new state snapshots. The reducer has to
// go of spitting out a new state snapshot whenever an action reaches it.
// And when we run this code for the first time, the reducer will also be executed with a default action,
// so to say, that should spit out the initial state.
const store = redux.createStore(counterReducer); // not executing counterReducer here

console.log(store.getState());

// Component(Subscriber)
// And getState will give us the latest state snapshot after it was updated.
// So this subscription function will soon be triggered whenever the state changes.
// And then when it is triggered, we can get to that latest state after it was changed.
const counterSubscriber = () => {
  const latestState = store.getState();
  // console.log(latestState);
};

// When the state/data changes by reducer function, we need to tell redux to execute that subscription function(counterSubscriber).
// So A subscribe method expects a function which Redux will then execute for us,
// whenever the data and the store changed.
store.subscribe(counterSubscriber); // not executing counterSubscriber like counterSubscriber() as both reducer and subscriber fn arfe executed by redux

// Dispatch Actions
store.dispatch({
  type: "increment",
});
store.dispatch({
  type: "decrement",
});

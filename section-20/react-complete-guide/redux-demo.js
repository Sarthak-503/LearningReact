const redux = require("redux");

// Reducer Function ultimately be executed by redux library 
// -> takes  (oldState, dispatched Action) -> return new state, 
const counterReducer = (state = {counter:0}, action) =>{
    if(action.type==='increment')
    return {
        counter:state.counter + 1
    }
   else if(action.type==='decrement')
    return {
        counter:state.counter - 1
    }
    return state;
}

// Create a Store,now What do we do with that store? Well, that store should manage some data
// and the data which it manages is in the end,is determined by the reducer function,bcz
//  it's the reducer function which will produce new state snapshots. The reducer has to 
// go of spitting out a new state snapshot whenever an action reaches it.
// And when we run this code for the first time, the reducer will also be executed with a default action,
// so to say, that should spit out the initial state.
const store = redux.createStore(counterReducer); // not executing counterReducer

// console.log(store.getState());

// Component(Subscriber)
// And getState will give us the latest state snapshot after it was updated.
// So this subscription function will soon be triggered whenever the state changes.
// And then when it is triggered, we can get to that latest state after it was changed
// with the get state method here.
const counterSubscriber = () => {
    const latestState = store.getState(); 
    console.log(latestState);
}

// So to subscribe method expects a function which Redux will then execute for us, 
// whenever the data and the store changed.
store.subscribe(counterSubscriber) // not executing counterSubscriber

// Dispatch Actions
store.dispatch({
    type: 'increment'
});
store.dispatch({
    type: 'decrement'
});
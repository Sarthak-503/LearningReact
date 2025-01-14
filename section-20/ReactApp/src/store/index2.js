import { createStore, combineReducers } from "redux"; // can use combineReducers
import { configureStore, createSlice } from "@reduxjs/toolkit";

// We are preparing a slice of our global state -> global state(authentication state and counter state)
const initialCounterState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    // object/map of all reducer this state slice needs
    increment(state) {
      state.counter++; // We don't mutate the existing state, bcz redux-toolkit internally uses another package(imur),
      // which will detect code like this and which will automatically clone the existing state, create a new
      // state object, keep all the state which we're not editing, and override the state which we are editing
      // in an immutable way. So we still have immutable code here even though it doesn't look like it bcz
      // of this internally used package
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//   const store = createStore(counterSlice.reducer);
// it's basically a big reducer with a couple of if statements that trigger those
// different reducer methods depending on the action type and we would be good to go.

const initialAuthState = {
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// Now we can access those keys on this actions object. And with that we don't access the reducer methods deefined up there
// but instead we get methods created automatically by Redux Toolk which when called will create action objects for us.
// therefore these methods are c/a action-creators, increment(),decrement(),increse() which will create actions
const store = configureStore({
  // because still, no matter if we use createStore or configureStore, Redux wants one main reducer function,
  // which is responsible for the global state.
  // reducer: counterSlice.reducer,   -------------1(one slice)

  // ----------------------------------2(multiple slice)
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
  // So we would create a map of reducers you could say, and this map is then set as a value for the main reducer
  // and behind the scenes configureStore will merge all those reducers into one big reducer.
  // So it will merge them for us.
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;

// Problem: unique identifiers and Typos

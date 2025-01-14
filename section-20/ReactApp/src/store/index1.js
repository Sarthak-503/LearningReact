import { configureStore,  } from "@reduxjs/toolkit";
import authReducer from './auth.js';
import counterReducer from './counter.js';

const store = configureStore({

  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;


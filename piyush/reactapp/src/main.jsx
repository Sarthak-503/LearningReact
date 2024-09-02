import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CounterProvider } from "./context/Counter.jsx";
import { CartProvider } from "./context/Cart.jsx";

import {Provider} from 'react-redux';
import {store} from './redux/store1';
// import {store} from './redux/store1.jsx';
createRoot(document.getElementById("root")).render(
  // <CounterProvider>
  // <CartProvider>
  //     <App />
  // </CartProvider>
    //  </CounterProvider>




  // redux 
  // <StrictMode>
  <Provider store={store}>
  <App/> 
  </Provider>
  //  </StrictMode>
  // app is raped in the provider and app has excess to the store
);


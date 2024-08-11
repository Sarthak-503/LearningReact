import React, { useEffect, useState, useContext } from "react";

import Mycomponent from "./component/Mycomponent";
import Timer from "./component/Timer";
import Counter from "./component/Counter";
import {CounterContext} from "./context/Counter"
import Item from "./component/Item";
import Cart from "./component/Cart";
// import {Item} from "./component/Item";
function App() {
   const [visible, setVisible] = useState(false);
  useEffect(()=>{
    console.log("App Comp is Mounting.....");
  },[])

  // const counterState = useContext(CounterContext);
  
  return (
    <>
    {/* UseEffect  */}
      {/* {visible? <Mycomponent/>:''}
  <button onClick={()=> setVisible(!visible)}>Toggle</button> */}
      {/* <Timer/> */}

        {/* Context Api */}
      {/* <div className="App">
        <h1>Context API</h1>
        <h1>Count is {counterState.count}</h1>
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>
      </div> */}
      <div style={{
        display:'flex',
        alignItems:'center',
        flexDirection:'column'
      }}>

      <Item name="MacBook" price={100000}/>
      <Item name="PenDrive" price={100}/>
      <Item name="Mobile" price={20000}/>
      <Cart/>
      </div>
    </>
  );
}

export default App;

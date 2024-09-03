import React, { useEffect, useState, useContext } from "react";

import Mycomponent from "./component/Mycomponent";
import Timer from "./component/Timer";
import Counter from "./component/Counter";
import { CounterContext } from "./context/Counter";
import Item from "./component/Item";
import Cart from "./component/Cart";
import Counter2 from "./component2/Counter";
// import {Item} from "./component/Item";
import { useDispatch, useSelector } from "react-redux";

import Product from "./component2/Product";
import products from "./products.json";
import Cart1 from "./component2/Cart1";
import { CartContext } from "./context/Cart";
import { fetchTodos } from "./redux/slices/Todo";
function App() {
  //  const [visible, setVisible] = useState(false);
  // useEffect(()=>{
  //   console.log("App Comp is Mounting.....");
  // },[])

  // const counterState = useContext(CounterContext);

  const dispatch = useDispatch();
  const { isLoading, data, isError, errorMessage } = useSelector((state) => state.todo);
  return (
    <>
      {/* UseEffect  */}
      {/* {visible? <Mycomponent/>:''}
  <button onClick={()=> setVisible(!visible)}>Toggle</button> */}
      {/* <Timer/> */}

      {/* Context Api -> Comment dispatch */}
      {/* Example-1  */}
      {/* <div className="App">
        <h1>Context API</h1>
        <h1>Count is {counterState.count}</h1>
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>
      </div> */}
      {/* Example-2  */}

      {/* <div style={{
        display:'flex',
        alignItems:'center',
        flexDirection:'column'
      }}>

      <Item name="MacBook" price={100000}/>
      <Item name="PenDrive" price={100}/>
      <Item name="Mobile" price={20000}/>
      <Cart/>
      </div> */}

      {/* React-Redux UnComment dispatch and use store in main.jsx */}
      {/* <button onClick={(e) => dispatch({
        type:'INCREMENT'
      })}>Increment</button>
        <Counter2/>
      <button onClick={(e) => dispatch({
        type:'DECREMENT'
      })}>Decrement</button> */}

      {/* React-Redux Toolkit -> use store1 in main.jsx */}
      {/* <div className="App">
      <Cart1 />
      <div 
       style={{
        display:"flex",
        flexDirection:'row',
        width:'20rem'
      }}
      >
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div> */}
      {/* Calling Api in redux-toolkit -> use store3 in main.jsx  */}
      <div>
        <button onClick={(e)=>{
          console.log("Sarthak");
          dispatch(fetchTodos())}
        }
          >fetch Todos</button>
           {isLoading && <p>Loading...</p>}
        {isError && <p>Error: {errorMessage}</p>}
        {data && data.map((todo) => (
          <p key={todo.id}>{todo.title}</p>
        ))}
      </div>
    </>
  );
}

export default App;

import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/Cart';
const Item = (props) => {
  const cart = useContext(CartContext);
  console.log(cart);
  return (
    <div >
      <h4>{props.name}</h4>
      <p>Price: ${props.price}</p>
      <button onClick={()=>{
    return ( cart.setItems([...cart.items ,{
          name:props.name,
          price:props.price
        }] ))
      }}>Add to Cart</button>
    </div>
  )
}

export default Item;

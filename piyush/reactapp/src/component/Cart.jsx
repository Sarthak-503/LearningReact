import React, { useContext } from "react";
import { CartContext } from "../context/Cart";
const Cart = () => {
  const cart = useContext(CartContext);
  const total =cart.items.reduce((a,b)=>
     a+b.price
  ,0)
  return (
    <div className="cart">
      {cart.items &&
        cart.items.map((item) => (
          <li key={item.name}>
           
            {item.name} - ${item.price}
          </li>
        ))}
      <h5>Total Bill: ${total}</h5>
    </div>
  );
};

export default Cart;

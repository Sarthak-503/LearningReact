import React from "react";
import { useSelector } from "react-redux";
import { getItemsSelector } from "../redux/slices/cartSlice";

const Cart1 = () => {
  const items = useSelector(getItemsSelector);
  console.log(items)
  const total = items.reduce((a, b) => a + b.price, 0);
  return (
    <div >
      <h3 >
        Total Items: 
        {items.length} 
        (Rs. {total})/-
      </h3>
    </div>
  );
};

export default Cart1;

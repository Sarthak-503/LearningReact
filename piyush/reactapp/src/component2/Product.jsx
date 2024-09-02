import React from "react";
import { addItem } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const Product = (props) => {
  const dispatch = useDispatch();
  return (
    <div  style={{ margin: "10px"}}>
      <img  src={props.image} alt={props.productName} />
      <div>
        <h5 >{props.productName}</h5>
        <p>Rs. {props.price}/-</p>
        <button
          onClick={(e) =>
            dispatch(addItem({ name: props.productName, price: props.price }))
          }
          
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;

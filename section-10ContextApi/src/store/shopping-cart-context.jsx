import React, { Children, useReducer, useState } from 'react'
import { createContext } from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products';

// object contains react component
export const CartContext = createContext({
    items:[],
    addItemToCart:() => {},
    updateItemToCart:() => {},

});
function shoppingCartReducer(state,action) {
    if(action.type==='ADD_ITEM') {
        const updatedItems = [...state.items];
    
          const existingCartItemIndex = updatedItems.findIndex(
            (cartItem) => cartItem.id === action.payload
          );
          const existingCartItem = updatedItems[existingCartItemIndex];
    
          if (existingCartItem) {
            const updatedItem = {
              ...existingCartItem,
              quantity: existingCartItem.quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
          } else {
            const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
            updatedItems.push({
              id: action.payload,
              name: product.title,
              price: product.price,
              quantity: 1,
            });
          }
    
          return {
            // ...state, // not needed here bcz we have only one state
            items: updatedItems,
          };
    }
    else if(action.type==='UPDATE_ITEM') {
          const updatedItems = [...state.items];
          const updatedItemIndex = updatedItems.findIndex(
            (item) => item.id === action.payload.productId
          );
    
          const updatedItem = {
            ...updatedItems[updatedItemIndex],
          };
    
          updatedItem.quantity += action.payload.amount;
    
          if (updatedItem.quantity <= 0) {
            updatedItems.splice(updatedItemIndex, 1);
          } else {
            updatedItems[updatedItemIndex] = updatedItem;
          }
    
          return {
            ...state,
            items: updatedItems,
          };
    }
    return state;
}
export default function CartContextProvider({children}) {
   // shoppingCartDispatch -> a dispatch function which allows you to dispatch actions that will then be handled by reducer function.
   //the state will be latest state snapshot of that state that is managed by useReducer.
    const [shoppingCartState,shoppingCartDispatch] = useReducer(shoppingCartReducer,{
        items:[],
    });
    const [shoppingCart, setShoppingCart] = useState({
        items: [],
      });
    
      function handleAddItemToCart(id) {
        shoppingCartDispatch({
            type:'ADD_ITEM',
            payload:id
        })
        // setShoppingCart((prevShoppingCart) => {
        //   const updatedItems = [...prevShoppingCart.items];
    
        //   const existingCartItemIndex = updatedItems.findIndex(
        //     (cartItem) => cartItem.id === id
        //   );
        //   const existingCartItem = updatedItems[existingCartItemIndex];
    
        //   if (existingCartItem) {
        //     const updatedItem = {
        //       ...existingCartItem,
        //       quantity: existingCartItem.quantity + 1,
        //     };
        //     updatedItems[existingCartItemIndex] = updatedItem;
        //   } else {
        //     const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        //     updatedItems.push({
        //       id: id,
        //       name: product.title,
        //       price: product.price,
        //       quantity: 1,
        //     });
        //   }
    
        //   return {
        //     items: updatedItems,
        //   };
        // });
      }
    
      function handleUpdateCartItemQuantity(productId, amount) {
        shoppingCartDispatch({
            type:'UPDATE_ITEM',
            payload:{
                productId:productId,
                amount:amount,
            }
        })
        // setShoppingCart((prevShoppingCart) => {
        //   const updatedItems = [...prevShoppingCart.items];
        //   const updatedItemIndex = updatedItems.findIndex(
        //     (item) => item.id === productId
        //   );
    
        //   const updatedItem = {
        //     ...updatedItems[updatedItemIndex],
        //   };
    
        //   updatedItem.quantity += amount;
    
        //   if (updatedItem.quantity <= 0) {
        //     updatedItems.splice(updatedItemIndex, 1);
        //   } else {
        //     updatedItems[updatedItemIndex] = updatedItem;
        //   }
    
        //   return {
        //     items: updatedItems,
        //   };
        // });
      }
      const ctxValue = {
        // items: shoppingCart.items,  // linking context to state
        items: shoppingCartState.items,  // linking context to state
        addItemToCart:handleAddItemToCart,
        updateItemToCart:handleUpdateCartItemQuantity
      }
          {/*  <CartContext.Provider> is a  component  */}
      return <CartContext.Provider value={ctxValue}>
        {children}
      </CartContext.Provider>
    
}

// useReducer is not connected to context feature, we can use it seperately 
// the idea behind this useReducer hook

// is to use that same concept of reducing one or more values

// to a typically simpler value for state management purposes.
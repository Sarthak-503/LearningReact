import React from 'react'
import { useSelector } from 'react-redux';
const Counter2 = () => {
  const count = useSelector(state=>state);
  return (
    <div>
      <h2>{count}</h2>
      
    </div>
  )
}

export default Counter2;

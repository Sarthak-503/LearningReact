import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [count,setCount] = useState(0);
    useEffect(() => {
        // 1 way
        const timer = setTimeout(()=>{
            setCount(count+1);
        },1000)
      },[count])
      
      // 2nd way
    // useEffect(()=>{
    //     // Mounting 
    //     const timer = setInterval(()=>{
    //         setCount(count+1);
    //     },1000)
    //     // UnMounting -> clearing up the previous interval -> otherwise it stacks up and create problem
    //     return ()=>{
    //         clearInterval(timer)
    //     }
    // },[count])
  return (
    <div>
      <p>This is a Timer : {count}</p>
    </div>
  )
}

export default Timer

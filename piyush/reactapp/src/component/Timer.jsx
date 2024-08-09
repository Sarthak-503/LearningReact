import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [count,setCount] = useState(0);
    // useEffect(() => {
        // 1 way
        // const timer = setTimeout(()=>{
        //     setCount(count+1);
        // },1000)
        // 2nd way
    // },[count])
    useEffect(()=>{
        // Mounting 
        const timer = setInterval(()=>{
            setCount(count+1);
        },1000)
        // UnMounting -> clearing up the previous interval 
        return ()=>{
            clearInterval(timer)
        }
    },[count])
  return (
    <div>
      <p>This is a Timer : {count}</p>
    </div>
  )
}

export default Timer

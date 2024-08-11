import React, { useEffect , useState} from 'react'

const Mycomponent = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(10);
    useEffect(() => {
      // when component is Mounting
      console.log("My Component is Mounting");
      // when component is UnMounting
      return ()=>{
            console.log("Unmounting.....");
        }
    }, []) // dependency array

    useEffect(() => {
        console.log("Count Got Updated",count);
        return ()=>{
            console.log("Unmounting And Returning Count", count);
        }
    }, [count,count2]) 
    
  return (
    <div>
      <p>Count is {count}</p>
      <p>Count2 is {count2}</p>

      <button onClick={() => setCount(count+1)}>Update </button>
      <button onClick={() => setCount2(count2+1)}>Update 2</button>
    </div>
  )
}

export default Mycomponent

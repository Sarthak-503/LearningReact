import { createContext , useReducer, useState} from "react"

export const CounterContext = createContext([]);

export const CounterProvider = (props) =>{
    const [count,setCount] = useState(0);
    return (
        <CounterContext.Provider value={{count,setCount,name:"Piyush"}}>
        {props.children} 
    </CounterContext.Provider>
    )
}

// Udemy wala content 
// useReducer -> is used for reducing one or more values to a typically simpler value for state management 
// purposes.
// const [state,reducer] = useReducer(fn);
// reducer -> a fn which allows you to dispatch so-called actions
// that will then be handled by a  reducer function. we now also need a reducer function(fn) that will 
//actually get triggered by dispatching values and that will then produce a new state.
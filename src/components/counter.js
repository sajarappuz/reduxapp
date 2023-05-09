import "./counter.css";
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "../redux/Reducer/reducer";

function Counter() {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
  return (
    <div className="first">
        <h1>redux tutorial</h1>
        <p>{count}</p>
        <div className="cntbtn">
            <button className="inbtn" onClick={()=>
           dispatch(increment()) 
        }>increment</button>
            <button className="debtn" onClick={()=>
           dispatch(decrement()) 
        }>decrement</button>
        </div>
    </div>
  )
}

export default Counter
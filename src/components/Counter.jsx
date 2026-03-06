import React, {useState} from "react"
import useCounter from "../hooks/useCounter";

const Counter = () => {
    const {count, increment} = useCounter(0)
  return (
    <div>
        <p data-testid = "counter-value">{count}</p>
        <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter
import React from "react"
import useCounter from "../custom_Hooks/useCounter"

const Custom_useCounter = () => {
  const [count, increment, decrement, reset] = useCounter(10, 99); //initialCount and value

  return (
    <div>
      <br/><br/>
      ======= custom hook ======
      <br/><br/>

      <h2>Count = {count}</h2>

      <button onClick={increment}>increment</button>&nbsp;&nbsp;
      <button onClick={decrement}>decrement</button>&nbsp;&nbsp;
      <button onClick={reset}>reset</button>

    </div>
  )
};

export default Custom_useCounter;
import React, { useState, useEffect, useRef } from "react"

const UseRef = () => {
  const [timer, setTimer] = useState(0);

  const inputRef = useRef(null);
  const intervalRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
    console.log(inputRef)
  }, [])

  useEffect(() => {
    intervalRef.current = setInterval(() => { //intervalRef.current instead of interval
      setTimer(prevTimer => prevTimer + 1)
    }, 1000);
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div>
      <br/><br/>
      ============ useMemo hook ===========
      <br /><br />
      <input ref={inputRef} type="text" />

      <br/><br/>

      Hook timer - {timer} &nbsp;&nbsp;&nbsp;&nbsp;
       <button onClick={() => clearInterval(intervalRef.current)}>Clear timer</button> {/*interval not defined */}
    </div>
  )
};

export default UseRef;
import React, { useState, useMemo} from "react"

const UseMemo = () => {
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  }
  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  }

  const isEven = useMemo(() => {
    let i=0;
    //delay
    while(i<200000000) i++;
    return counterOne % 2 === 0
  }, [counterOne])


  return (
    <div>
      <br /><br />
      ============ Simple ===========
      <br /><br />
      <button onClick={incrementOne}>count one - {counterOne}</button> &nbsp;&nbsp;&nbsp;&nbsp;    
      {isEven ? 'Even' : 'Odd'}
      <br/>
      <br/>
      <button onClick={incrementTwo}>count two - {counterTwo}</button> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
      <br /><br />
    </div>
  )
};

export default UseMemo;
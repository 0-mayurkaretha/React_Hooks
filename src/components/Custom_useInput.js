import React, {useState} from "react"
import useInput from "../custom_Hooks/useInput"

const Custom_useInput = () => {

  const  [fName, bindFName, resetFName]= useInput('');
  const  [lName, bindLName, resetLName]= useInput('');


  const submitHandler = (e) => {
    e.preventDefault()
    alert(`Hello ${fName} ${lName}`);

    resetFName();
    resetLName();
  }
 
  return (
    <div>
      <br/><br/>
      ======= custom hook ======
      <br/><br/>

      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="">First Name</label> &nbsp;&nbsp;
          <input {... bindFName} type="text"/>
        </div>
        <br/>
        <div>
          <label htmlFor="">Last Name</label> &nbsp;&nbsp;
          <input {... bindLName} type="text"/>
        </div>
        <br/>
        <button>Submit</button>
      </form>
    </div>
  )
};

export default Custom_useInput;
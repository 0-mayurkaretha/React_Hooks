import React from "react"
import ComponentA from "../context/componentA";

const UseContext = () => {
  return (
    <div>
        <br /><br />
        ====== Passing props through component tree =====
      <ComponentA />
    </div>
  )
};

export default UseContext;
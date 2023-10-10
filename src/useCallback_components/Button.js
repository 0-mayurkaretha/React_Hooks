import React from "react"

const Button = ({handleClick, children}) => {
  console.log('Rendering button - ', children)
  return (
    <div>
      <button onClick={handleClick}>
        {children}
      </button>
    </div>
  )
};

export default React.memo(Button);

//react.memo stops component to rerender if props or state do not change
//react.memo has nothing to do with hooks
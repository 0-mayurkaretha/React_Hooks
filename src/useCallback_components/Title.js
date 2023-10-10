import React from "react"

const Title = () => {
  console.log('Rendering Title')
  return (
    <div>
      <br/>
      <h3>useCallback hook</h3>
    </div>
  )
};

export default React.memo(Title);

//react.memo stops component to rerender if props or state do not change
//react.memo has nothing to do with hooks
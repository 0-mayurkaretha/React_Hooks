import React from "react"

const Count = ({text, count}) => {
  console.log(`rendering ${text}`)
  return (
    <div>
      {text} - {count}
    </div>
  )
};

export default React.memo(Count);

//react.memo stops component to rerender if props or state do not change
//react.memo has nothing to do with hooks
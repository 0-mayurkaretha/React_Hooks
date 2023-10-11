import React, {useState} from "react"
import useDocumentTitle from '../custom_Hooks/useDocumentTitle'

const Custom_useDocumentTitle = () => {
  const [count, setCount] = useState(0);

  useDocumentTitle(count); //hook call

  return (
    <div>
      <br/><br/>
      ======= custom hook ======
      <br/><br/>

      <button onClick={() => setCount(count+1)}>count - {count}</button>
    </div>
  )
};

export default Custom_useDocumentTitle;
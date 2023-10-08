import React, { useContext } from "react"
import {FnameContext, LnameContext} from './componentA'

const ComponentB = () => {
    const firstName = useContext(FnameContext);
    const lastName = useContext(LnameContext);

  return (
    <div>
        <br/>
        Consuming with hook (in ComponentB)

        <div>First name : {firstName} <br/> Last Name : {lastName}</div>
    </div>
  )
};

export default ComponentB;
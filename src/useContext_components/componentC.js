import React from "react";
import {FnameContext, LnameContext} from './componentA'

const ComponentC = () => {
  return (
    <div>
        <br/>
        Consuming without hook (in ComponentC)
        
        <FnameContext.Consumer>
            {
                firstName => {
                    return(
                        <LnameContext.Consumer>
                            {
                                lastName => {
                                return <div>First name : {firstName} <br/> Last Name : {lastName}</div>
                                }
                            }
                        </LnameContext.Consumer>
                    )
                }
            }
        </FnameContext.Consumer>
    </div>
  )
};

export default ComponentC;
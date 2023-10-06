import React from "react"
import ComponentB from "./componentB";
import ComponentC from "./componentC";

export const FnameContext = React.createContext()
export const LnameContext = React.createContext()

const ComponentA = () => {
  return (
    <div>
        <FnameContext.Provider value="Mark">
            <LnameContext.Provider value="Karter">
                <ComponentC />
                <ComponentB />
            </LnameContext.Provider>
        </FnameContext.Provider>
    </div>
  )
};

export default ComponentA;
import React, { useState, useEffect } from "react"

const UseEffect2 = () => {

    //Run effects only once
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const logMousePosition = e => {
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        console.log("3rd useEffect called")
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('component unmounted.')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

  return (
    <div>
        <br />
        This component to be unmounted
        <br />
        <div>
            <h2>X- {x}</h2> 
            <h2>Y- {y}</h2>
        </div>
    </div>
  )
};

export default UseEffect2;
import React, { useState, useEffect } from "react";
import UseEffect2 from "./UseEffect2" //component to be unmounted
import axios from "axios"; //for datafetching


const UseEffect = () => {

    //simple (rerenders every time something changes)
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `you clicked ${count} times`
    })

    //conditional render (rerender only when given parameter changes)
    const [text, setText] = useState("");
    useEffect(() => {
        console.log("title changed.")
        document.title = `you clicked ${count} times`
    }, [count])

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

    //Component cleanup or mount
    const [display, setDisplay] = useState(true);


    //for data fetching
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    // useEffect(() => {
    //     axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //     .then(res => {
    //         console.log(res);
    //         setPost(res.data);
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }, [id]);
    const [idFromButton, setIdFromButton] = useState(1);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
        .then(res => {
            console.log(res);
            setPost(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }, [idFromButton])

    return (
        <div>
            <br /><br />
        ============ Simple ===========
            <br /><br />
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>

            <br /><br /><br />
        ============ Conditional ===========
            <br /><br />
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>

            <br /><br /><br />
        ============ Run effects only once ===========
            <br /><br />
            <div>
                <h2>X- {x}</h2>
                <h2>Y- {y}</h2>
            </div>

            <br /><br />
        ============ Component unmount / cleanup ===========
            <br /><br />
            <div>
                <button onClick={() => setDisplay(!display)}>Toggle component</button>
                {display && <UseEffect2 />}
            </div>

            <br /><br />
        ============ Data fetching ===========
            <br /><br />
            <div>
                <input type="text" value={id} onChange={e => setId(e.target.value)}/>
                <button type="button" onClick={() => {setIdFromButton(id)}}>Fetch post</button>
                <div>
                    {post.title}
                </div>
            </div>


        </div>
    )
};

export default UseEffect;
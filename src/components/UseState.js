import React, { useState } from "react";

const UseState = () => {

  //simple
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  //Object
  const [name, setName] = useState({ fName: '', lName: '' })

  //Array
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([...items, { 
      id: items.length, 
      value: Math.floor(Math.random() * 10 ) + 1
    }])
  }

  return (
    <div>
      <br /><br />
      ============ Simple ===========
      <br /><br />
      {/* //====== Unsafe ======= */}
      button1 :
      <button onClick={() => setCount1(count1 + 1)}>count++</button> | {count1}
      <br /><br />

      {/*========= safe ======= */}
      button2 :
      <button onClick={() => setCount2(0)}>reset</button> | {count2}
      <br /><br />

      button3 :
      <button onClick={() => setCount2(prevCount => prevCount + 1)}>inc</button> | {count2}
      <br /><br />

      button4 :
      <button onClick={() => setCount2(prevCount => prevCount - 1)}>dec</button> | {count2}

      <br /><br /><br />
      ============ Object ===========
      <br /><br />

      <form>
        <input type="text" placeholder="your fname" value={name.fName} onChange={e => setName({ ...name, fName: e.target.value })} />
        <input type="text" placeholder="your lname" value={name.lName} onChange={e => setName({ ...name, lName: e.target.value })} />
        <h2>your first name is - {name.fName}</h2>
        <h2>your first name is - {name.lName}</h2>
      </form>

      <br /><br />
      ============ Array ===========
      <br /><br />
      <div>
        <button onClick={addItem}>Add a number</button>
        <ul>
          {
            items.map(item => 
              <li key={item.id}> {item.value} </li>
            )
          }
        </ul>
      </div>

    </div>
  )
};

export default UseState;
import React, { useState, useEffect, useReducer } from "react"
import axios from "axios"; //for datafetching


//numeric state
const initialState = 0
const reducer = (state, action) => {
  switch(action){
    case 'increment':
      return state + 5
    case 'decrement':
      return state - 5
    case 'reset':
      return initialState
  }
}

//object state
const initialState1 = {
  firstCounter : 0,
  secondCounter : 25
}
const reducer1 = (state, action) => {
  switch(action.type){
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value}
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - action.value}
    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + action.value}
    case 'decrement2':
      return { ...state, secondCounter: state.secondCounter - action.value}
    case 'reset':
      return initialState1
    default:
      return state
  }
}

//data fetching
const initialState3 = {
  loading: true,
  error: '', 
  post: {}
}
const reducer3 = (state, action) => {
  switch(action.type){
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.paylaod,
        error: ''
      }
    case 'FETCH_ERROR':
      return {
        loading: false,
        post: {},
        error: 'Something went wrong'
      }
    default:
      return state
  }
}

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  const [count1, dispatch1] = useReducer(reducer1, initialState1);

  //data fetching using useState
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState('');
  // const [post, setPost] = useState({});
  // useEffect( () => {
  //   axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
  //     .then(res => {
  //       setLoading(false);
  //       setPost(res.data);
  //       setError('');
  //     })
  //     .catch(err => {
  //       setLoading(false);
  //       setPost({});
  //       setError('Something went wrong!')
  //     })
  // }, [])


  //data fetching using useReducer
  const [state3, dispatch3] = useReducer(reducer3, initialState3)
  useEffect( () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then(res => {
        dispatch3({type: 'FETCH_SUCCESS', paylaod: res.data})
      })
      .catch(err => {
        dispatch3({type: 'FETCH_ERROR'})
      })
  }, [])

  return (
    <div>
      <br/><br/>
      ============ Numeric state ===========
      <br/><br/>

      <div>Count - {count}</div>
      <button onClick={() => dispatch('increment')}> &nbsp;+5 &nbsp; </button> &nbsp;
      <button onClick={() => dispatch('decrement')}> &nbsp; -5 &nbsp;</button>  &nbsp;
      <button onClick={() => dispatch('reset')}>Reset</button>

      <br/><br/><br/>
      ============ Object state ===========
      <br/><br/>
      
      <div>firstCount - {count1.firstCounter}</div>
      
      <button onClick={() => dispatch1({type : 'increment', value: 1})}> &nbsp;+1 &nbsp; </button> &nbsp;
      <button onClick={() => dispatch1({type : 'decrement', value: 1})}> &nbsp; -1 &nbsp;</button>  &nbsp;
      <button onClick={() => dispatch1({type : 'increment', value: 5})}> &nbsp;+5 &nbsp; </button> &nbsp;
      <button onClick={() => dispatch1({type : 'decrement', value: 5})}> &nbsp; -5 &nbsp;</button>  &nbsp;
      <button onClick={() => dispatch1({type : 'reset'})}>Reset</button>

      <br/><br/>
      <div>secondCount - {count1.secondCounter}</div>

      <button onClick={() => dispatch1({type : 'increment2', value: 1})}> &nbsp;+1 &nbsp; </button> &nbsp;
      <button onClick={() => dispatch1({type : 'decrement2', value: 1})}> &nbsp; -1 &nbsp;</button>  &nbsp;


      <br/><br/><br/>
      ========== Fetching data ==========
      <br/><br/>

      <div>
        {
          state3.loading ? 'Loading...' : state3.post.title
        }
        {
          state3.error ? state3.error : null
        }
      </div>

    </div>
  )
};

export default UseReducer;
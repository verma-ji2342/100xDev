import { useEffect, useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import axios from "axios";
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
   
  let count = useMemo(() => {
    let finalCount = 0;
    for(let i=0 ; i<=inputValue ; i++){
      finalCount = finalCount+i;
    }
    return finalCount;
  }, [inputValue]);

  
  return <div>
    <input onChange={(e)=>{
      setInputValue(e.target.value)
    }} placeholder='Sum from 1 to n'></input>
    <br/>
    <br/>
    Sum from 1 to {inputValue} is {count}
    <br/>
    <br/>
    <button onClick={() => {
      setCounter(counter+1)
    }}> Counter ({counter}) </button>
    </div>
}



export default App

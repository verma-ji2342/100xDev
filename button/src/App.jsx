import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);



  return (
    <>
    <CustomButton count={count} setCount={setCount}></CustomButton>
    <CustomButton count={count-2} setCount={setCount}></CustomButton>
    <CustomButton count={count*10} setCount={setCount}></CustomButton>    
    </>
  )
}


function CustomButton(props){
  function increase(){
    props.setCount(props.count+1);
  }
  return <button onClick={increase}> Counter {props.count}</button>
}

export default App

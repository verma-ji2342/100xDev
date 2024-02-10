import { useState } from 'react';
import React, {Fragment} from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [cnt, setCount] = useState(4);
  const [todos, setTodo] = useState([{
    id: 1,
    title: "Gym",
    description: "going to gym from 7 to 9"
  },{
    id: 2,
    title: "DSA",
    description: "study 2hr DSA"
  },{
    id: 3,
    title: "Lunch",
    description: "Eat food at 2 in noon"
  }])

  function addTodo(){
    setTodo([...todos, {
      id: `${cnt}`,
      title: Math.random(),
      description: "This is random generator"
    }])

    // another way to add todo which is ugly

    // let temp = [];
    // for(var i=0 ; i<todos.length ; i++){
    //   temp.push(todos[i]);
    // }

    // temp.push({
    //   id: `${cnt}`,
    //   title: Math.random(),
    //   description: "This is random generator"
    // })
    // setTodo(temp)
    


    setCount(cnt+1);
  }

  return (
    <>
    <button onClick={addTodo}>Add todo</button>
    {todos.map(todo => <Header id={todo.id} title={todo.title} description={todo.description}></Header>)}
    </>
  )
}

function Header(porps){
  return (
    <>
      <h3>{porps.id}</h3>
      <h1>{porps.title}</h1>
      <h2>{porps.description}</h2>
      <hr/>
    </>
  )
}

export default App

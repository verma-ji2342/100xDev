import { useState } from 'react'
import './App.css'

function TodoRander(props){
  return <>
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h2>{props.complete}</h2>
      <hr/>
    </div>
  </>
}


function App() {
  const [todo, setTodos] = useState([{
    title: "Go to gym",
    description: "Start gym from 9 to 12",
    complete: "false"
  },{
    title: "DSA",
    description: "complete DSA from 1 to 3",
    complete: "true"
  },{
    title: "Web Dev",
    description: "Complete webDev from 5 to 9",
    complete: "false"
  },
]);

function addTodo(){
  setTodos([...todo, {
    title: "Fake Task",
    description: "no need to perform any task",
    complete: "TFRalse"
  }])
}
  return (
    <>
    <div>
    <button onClick={addTodo}>Add a random TODO</button>
      {
        todo.map(function(todo){
          return <TodoRander title={todo.title} description={todo.description} complete={todo.complete}></TodoRander>
        })
      }
    </div>
    </>
  )
}

export default App

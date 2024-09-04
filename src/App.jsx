import './App.css'
import Inputcontainer from './components/Inputcontainer'
import Todocontainer from './components/Todocontainer'
import { useState } from 'react'

function App() {


  const [inputvalue, setinputvalue] = useState('')
  const [todos, settodos] = useState([])

  function writeTodo (e){
    setinputvalue(e.target.value)
  }

  function addTodo(){
    if(inputvalue != ''){
      settodos((prevtodos) => [...prevtodos , inputvalue])
      setinputvalue('')
    }
  }

  function delTodo(todoIndex){
    settodos((prevtodos)=> prevtodos.filter((prevtodos , prevtodosIndex)=>{
      return prevtodosIndex != todoIndex
    }))
  }

  console.log(todos)

  return (
    <>
      <main>
        <h1>Todo List</h1>
        <Inputcontainer inputvalue={inputvalue} writeTodo={writeTodo} addTodo={addTodo}/>
        <Todocontainer todos={todos} delTodo={delTodo}/>
      </main>
    </>
  )
}

export default App

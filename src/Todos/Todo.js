import React, { useState } from 'react'
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const Todo = () => {
  // const [todos, setTodos] = useState(['todo1' , 'todo2' , 'todo3'])
  const [todos, setTodos] = useState([
    {
      text: 'todo1',
      isCompleted: false
    },
    {
      text: 'todo2',
      isCompleted: true
    },
    {
      text: 'todo3',
      isCompleted: false
    }])



  // const [count, setCount] = useState(4)
  const handleSubmit = (event, inputText) => {
    //scope variable
    event.preventDefault();
    console.log('inputText', inputText)
    setTodos([...todos, inputText])
  }

  const changeStatus = (index) =>{
    console.log('index', index)
    // const newTodos = todos // pass by refrence (bad)
    const newTodos = [...todos] // pass by value (good )
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    console.log('newTodos', newTodos)
    setTodos(newTodos)
  }

  const removeItem =(index ) => {
    console.log('index', index)
    const newTodos = [...todos]
    newTodos.splice(index , 1)
    console.log('newTodos', newTodos)
   setTodos(newTodos)
  }
  const test = 'x';


  return (
    <div>


      <TodoItem todos={todos} changeStatus={changeStatus} removeItem={removeItem} />
      <TodoForm handleSubmit={handleSubmit} />
    </div>
  )
}

export default Todo

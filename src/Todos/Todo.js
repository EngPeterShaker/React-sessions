import React, { useState } from 'react'
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [oldTodos, setOldTodos] = useState(['todo1' , 'todo2' , 'todo3'])
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
  const handleSubmit = ( text) => {
    //parameters are scope variable
    // event.preventDefault();
    console.log('inputRef', text)
    const newItem ={
      text : text ,
      isCompleted : false
    }
    setTodos([...todos, newItem])
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


      <TodoItem oldTodos={ oldTodos} todos={todos} changeStatus={changeStatus} removeItem={removeItem} />
      <TodoForm handleSubmit={handleSubmit} />
      <button onClick={() => setOldTodos(['now ' , 'tom' , 'yest'])}> test</button>
    </div>
  )
}

export default Todo

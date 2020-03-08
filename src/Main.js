import React ,{useState} from 'react'
import TodoList from "./Todos/TodoList";
import TodoInput from "./Todos/TodoInput";

function Main() {
    const[text , setText]= useState('')
    const [todoList , setTodoList]= useState(['todo1 ' , 'todo2' , 'todo3'])

    const handleSubmit=(event, value)=>{
        event.preventDefault();
        console.log(value)
        setText(value)
        setTodoList([...todoList, value])
    }
    console.log('todoList', todoList)

    return (
        <div>
            <TodoList list={todoList} 
            text={text}/>

            <TodoInput handleSubmit={handleSubmit}/>
            
        </div>
    )
}

export default Main

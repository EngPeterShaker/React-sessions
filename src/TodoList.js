import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {

  const todosList = useSelector(state => {
    // console.log("state", state);
    return state.todosReducer.todos;
  });

  console.log("todos", todosList);
  return <div>
    {todosList.map((i , index) => {
      return (<li key ={index}>{i}</li>)
    })}
  </div>;
};

export default TodoList;

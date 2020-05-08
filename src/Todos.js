import React, { useState } from "react";
// import { addTodo } from "./redux/action";
import { useDispatch } from "react-redux";
import { ADD_TODO } from "./redux/actionTypes";
// const multiplyData = ( a =1, b=1 ) => {return a * b};
// const res = multiplyData( )
// console.log('res', res)


const Todos = event => {

  const [text, setText] = useState("");
  const Dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    console.log('text', text)
    let newText  = text
    setText("");
    const actionObject = {
      type: ADD_TODO,
      payload: newText,
    }
    Dispatch(actionObject);
  };
  return (
    <div>
      <form onSubmit={event => handleSubmit(event)}>
        <input onChange={event => setText(event.target.value)} />
      </form>
    </div>
  );
};

export default Todos;

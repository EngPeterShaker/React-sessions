import React, { useReducer } from "react";
import getSum from "./getSum";

const List = () => {
  // const [state, dispatch] = useReducer(reducer, initialState)

  const initialState = {
    count: 10
  };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
        case "reset":
          return {count : 0}
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>Count: {state.count}</div>
      {/* // dispatch(action Object) */}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>

    </>
  );
};

export default List;

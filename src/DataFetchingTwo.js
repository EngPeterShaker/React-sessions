import React, { useEffect, useReducer } from "react";
import axios from "axios";

const DataFetchingTwo = () => {
  const initialState = {
    isLoading: false,
    error: "",
    post: {}
    // count
  };

  function reducer(state, action) {
    console.log("action", action);
    switch (action.type) {
      case "pending":
        return { ...state, isLoading: true };
      case "success":
        return { ...state, isLoading: false, post: action.payload };
        break;

      default:
        break;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "pending" });
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then(res => {
      console.log("res", res.data);
      dispatch({ type: "success", payload: res.data });
    });
  }, []);

  return (
    <>
      <div>{state.isLoading ? "loading" : "not loading"}</div>
      <h1>{state.post.title}</h1>
    </>
  );
};

export default DataFetchingTwo;

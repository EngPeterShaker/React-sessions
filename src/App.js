import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./List";
import DataFetchingOne from "./DataFetchingOne";
import DataFetchingTwo from "./DataFetchingTwo";

function App() {
  return (
    <div className="App">
      {/* <DataFetchingOne/> */}
      <DataFetchingTwo />
      <List/>
    </div>
  );

}

export default App;


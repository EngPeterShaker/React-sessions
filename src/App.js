import React,{useState} from 'react';
import logo from './logo.svg';
import "./App.css";
import Text from "./text/Text.js";
import Styled1 from "./Styled1";
import Styled2 from "./Styled2";
function App() {
  const [test , setTest] = useState('foo')
  const [test2 , setTest2] = useState('baz')

console.log('test', test)
  return (
    <div className="App">
      <Styled1 />
      <Styled2 />

      {/* <Text test={test} test2={test2} count={2}/> */}

      {/* <Text test={test} count={10} /> */}
    </div>
  );
}

export default App;

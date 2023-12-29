import { useState } from "react";
// import logo from './logo.svg';
// import './App.css';

function App() {

  let [counter,setCounter] = useState(0)

  // let counter = 0;

const addValue=() => {
  if (counter<20){
  counter=counter+1
  setCounter(counter)
  console.log('value added',counter);
  }
  // setCounter(counter+1)
  
  // console.log('value added', Math.random());
}

const removeValue=() => {
  if (counter>0){
  counter = counter - 1
  setCounter(counter)
  console.log('value removed', counter+1);
  // setCounter(counter-1)
  }
}
  


  return (
    <div className="App">
      <h1>Chai and React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value{counter}</button>
      <br/>
      <button onClick={removeValue}>Remove Value{counter}</button>
      <p>footer:{counter}</p>
    </div>
  );
}

export default App;

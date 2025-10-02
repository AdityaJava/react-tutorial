import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15
  
  // const addValue = () =>{
  //   // console.log("Value added:" , Math.random())

  //   // This will not update the UI
  //   counter++;
  //   console.log(counter);
  // }
  const [counter, setCounter] =  useState(0);
  let [inputValue, setInputValue] = useState("");
  const addValue = () =>{
    setCounter(counter+Number(inputValue));
  }

  function sd(){
    
  }

  const subtractValue = ()=>{
    setCounter(counter-Number(inputValue));
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br></br>
    <button onClick={subtractValue}>Decrease value</button>
    <br></br>
    <input type='text'
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    ></input>
    </>
  )
}

export default App

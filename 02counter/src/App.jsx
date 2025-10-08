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
  const [ counter, setCounter ] = useState( 0 );
  let [ inputValue, setInputValue ] = useState( "" );
  const addValue = () => {
    setCounter( counter + Number( inputValue ) );

    // If we do this then react will not update the state 4 times as react uses batch update so it will see that the operation is same and it will be done only once
    /**
     * What’s happening:
      counter is the current state value at the time of render.
      React batches state updates inside event handlers for performance.
      Since all 4 updates are exactly the same operation (counter + inputValue), React sees “no real change between them” in this synchronous batch and applies it only once.
      ✅ Result: counter increases only once, not 4 times.
     */
    // setCounter(counter+Number(inputValue));
    // setCounter(counter+Number(inputValue));
    // setCounter(counter+Number(inputValue));
    // setCounter(counter+Number(inputValue));



    /*
  What’s happening:

  Here we are using the functional form of setState:

    setCounter(prevCount => prevCount + 1);

  - `prevCount` is always the latest state value, even if React hasn’t re-rendered yet.
  - Each call takes the result of the previous update, so they accumulate properly.
  - React still batches updates, but since each update depends on the previous state, all of them are applied.

  ✅ Result: counter increases 3 times, not 1.

  Key Concept:

  - Direct state updates (like `setCounter(counter + 1)`) inside the same event handler may be batched by React.
  - Functional updates (like `setCounter(prev => prev + 1)`) are safe for multiple consecutive updates because each update correctly uses the latest state.

  Analogy:

  - Direct update:
      Imagine writing `counter = counter + 1` 4 times on the same piece of paper.
      You’re reading the same number each time, so you just end up writing it once.

  - Functional update:
      Imagine writing `counter = previous + 1` and after each line,
      you actually look at the updated number.
      Each line adds 1 to the last one.

  💡 Tip:
  Whenever you want to update state multiple times based on the previous state,
  always use the functional form.
*/


    // setCounter(previousCount =>  previousCount+1);
    // setCounter(previousCount =>  previousCount+1);
    // setCounter(previousCount =>  previousCount+1);


  }

  function sd() {

  }

  const subtractValue = () => {
    setCounter( counter - Number( inputValue ) );
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: { counter }</h2>
      <button onClick={ addValue }>Add value</button>
      <br></br>
      <button onClick={ subtractValue }>Decrease value</button>
      <br></br>
      <input type='text'
        value={ inputValue }
        onChange={ ( e ) => setInputValue( e.target.value ) }
      ></input>
    </>
  )
}

export default App

import Chai from "./Chai";

function App() {
  const userName = "Aditya";

  return (
    <>
      {/* Rendering the Chai component */}
      <Chai></Chai>

      {/* Explanation about how JSX treats expressions */}
      {/* Anything inside {} is treated as JavaScript expression */}
      {/* JSX allows embedding expressions inside {} */}
      {/* Example: 2 + 2, userName, Math.random(), function calls etc. */}
      {/* We do not write full JavaScript here but write the final outcome of the expression */}
      {/* This is not allowed{if(true) username=""}*/}
      <h1>Welcome to React, {userName}!</h1>
    </>
  )
}

export default App

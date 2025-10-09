import { use, useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [ length, setLength ] = useState( 8 );
  const [ numberAllowed, setNUmberAllowed ] = useState( false );
  const [ specialCharacterAllowed, setSpecialCharacterAllowed ] = useState( false );
  const [ password, setPassword ] = useState( "" );

  const passwordGenerator = useCallback( () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if ( numberAllowed ) {
      str += "0123456789";
    }
    if ( specialCharacterAllowed ) {
      str += "!@#$%^&*()_+"
    }
    for ( let index = 1; index <= length; index++ ) {
      let charIndex = Math.floor( Math.random() * str.length + 1 );
      pass += str.charAt( charIndex );
    }
    setPassword( pass );
  }, [ length, numberAllowed, specialCharacterAllowed, setPassword ] )

  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={ password }
            className='text-black outline-none w-full py-1 px-3 bg-white rounded-2xl mb-4 placeholder-gray-400'
            placeholder='Password'
            readOnly
          >
          </input>
        </div>
      </div>
    </>
  )
}

export default App

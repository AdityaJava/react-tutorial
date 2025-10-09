import { use, useCallback, useEffect, useState } from 'react'
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
    console.log( "called" )
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

  // the () =>{} is known as callback
  useEffect( () => {
    passwordGenerator()
  }, [ length, numberAllowed, specialCharacterAllowed, passwordGenerator ] )

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
          <button className='bg-blue-600 text-white px-4 h-full hover:bg-blue-700 '>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={ 6 } max={ 100 } value={ length }
              className='cursor-pointer'
              onChange={ ( event ) => { setLength( event.target.value ) } }
            />
            <label>Length: { length }</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={ numberAllowed }
              onChange={ () => {
                setNUmberAllowed( ( prev ) => !prev )
              } }
            ></input>
            <label>Number</label>
            <input
              type='checkbox'
              defaultChecked={ numberAllowed }
              onChange={ () => {
                setSpecialCharacterAllowed( ( prev ) => !prev )
              } }
            ></input>
            <label>SpecialCharacter</label>

          </div>
        </div>
      </div>
    </>
  )
}

export default App

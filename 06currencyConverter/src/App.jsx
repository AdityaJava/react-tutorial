import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyinfo'


function App() {

  const data = useCurrencyInfo( 'usd' );
  console.log( data );
  return (
    <>
      <h1 className='text-3xl bg-orange-500'>Currency app</h1>
    </>
  )
}

export default App

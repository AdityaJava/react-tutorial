import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './card'

function App() {
  const [ count, setCount ] = useState( 0 )
  
  const backendDev = {name: 'krishna', role:'FullStack Java Spring boot'}
  const frontendDev = {name: 'RadhaRani', role:'FullStack Java'}

  return (
    <div>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <UserCard  obj = {backendDev}></UserCard>
      <UserCard obj = {frontendDev}></UserCard>
    </div>
  )
}

export default App

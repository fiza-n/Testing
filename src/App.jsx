import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting'
import Counter from './components/Counter'
import UserProfile from './components/UserProfile'

function App() {
  

  return (
    <>
      <Greeting name="Arbaz" />
      <Counter />
      <UserProfile />
    </>
  )
}

export default App

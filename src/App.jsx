import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import List from './components/List.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <List/>
    </>
  )
}

export default App

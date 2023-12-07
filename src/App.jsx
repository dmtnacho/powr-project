import navbar from './components/Navbar'
import listcategories from './components/Listcategories'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Listcategories greeting={"Alterno Shop"}/>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import AddProduct from './components/AddProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/a' element={<AddProduct/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App

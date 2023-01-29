import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/about'
import Home from './pages/home'
import Register from './pages/register'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/register' element={ <Register /> } />
      <Route path='/about' element={ <About /> } />
    </Routes>
  )
}

export default App

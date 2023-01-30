import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/about'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import User from './pages/user'
import VehicleDetails from './pages/vehicleDetails'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/register' element={ <Register /> } />
      <Route path='/login' element={ <Login /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='/user' element={ <User /> } />
      <Route path='/vehicle-details/:id' element={ <VehicleDetails /> } />
    </Routes>
  )
}

export default App

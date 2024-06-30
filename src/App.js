import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/Login'
import Register from './components/Register'

const App = () => {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path = "/login" element = {<Login />} />
    <Route path = "/register" element = {<Register />} />
    <Route path = "/" element = {<Home />} />
  </Routes>
  </BrowserRouter>  
  </>
  
}

export default App
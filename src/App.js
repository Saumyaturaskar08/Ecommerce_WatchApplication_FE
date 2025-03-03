import React, { useState } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Cart from './components/Cart'
import AddProduct from './components/AddProduct'
import Logout from './components/Logout'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Ct from './components/Ct'
import Km from './components/Km'
import Edit from './components/Edit'
import Hero from './components/Hero'
import Footer from './components/Footer'

const App = () => {
  
  let [state,setState]=useState({"token":"","_id":"","name":"","role":""})
  let updstate=(obj)=>{
    setState({...state,...obj})
  }
  let obj={"state":state,"updstate":updstate}
  return (
    <BrowserRouter>
    <Ct.Provider value={obj}>
    <Nav/>

    {/* <Hero/> */}
    {/* {window.location.pathname === '/' && <Hero />} */}

    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>}/>
    <Route path='/reg' element={<Register/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/add' element={<AddProduct/>}/>
    <Route path='/logout' element={<Logout/>}/>

    <Route path="/km" element={<Km/>}/>
    <Route path="/edit" element={<Edit/>}/>
    
    </Routes>
    <Footer/>
    </Ct.Provider>
    </BrowserRouter>
  )
}

export default App

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Ct from './Ct'

const Nav = () => {
  let obj=useContext(Ct)
  return (
    // these "navbar navbar-dark bg-dark" is a bootstrap classname we use direct throw class 
    <div className='navbar navbar-dark bg-dark'>
  <Link to="/">Products</Link>
  {obj.state.token==""&&<Link to="/login">Login</Link>}
  {obj.state.token==""&&<Link to="/reg">Register</Link>}
  {obj.state.token!=""&&obj.state.role=='admin'&&<Link to="/add">Addproduct</Link>}
  {obj.state.token!=""&&<Link to="/cart">Cart</Link>}
  {obj.state.token!=""&&<Link to="/logout">Logout</Link>}
  {/* msg shown here after login show now logout */}
  {obj.state.token!=""&&<div className='msg'>{obj.state.name}</div>}
  
      
    </div>
  )
}

export default Nav

import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import Cartwidget from '../Cartwidget/Cartwidget'

const Navbar = () => {
  return (
    <ul className='navlink-container'>
      <li><NavLink  className="navlink"  to="/">Home</NavLink></li>
      <li><NavLink  className="navlink" to="/Checkout">Checkout</NavLink></li>
      <li><NavLink  className="navlink" to="/Cart">Cart</NavLink></li>
      <li><Cartwidget/></li>
    </ul>
  )
}

export default Navbar
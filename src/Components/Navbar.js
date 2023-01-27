import React from 'react'
import { Link } from 'react-router-dom';
import Cartwidget from './Cartwidget';

const Navbar = () => {
  return (
    <navbar className='navbar navbar-expand-lg bg-light'>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <navbar className='navbar-brand'>
            Tienda Game
      </navbar>
      <navbar className="navbar-nav me-auto mb-2 mb-lg-2">
            <Link className="nav-link" to="/">Catálogo</Link>
            <Link className="nav-link" to={'/categoria/Ps3'}>Ps3</Link>
            <Link className="nav-link" to={'/categoria/Ps4'}>Ps4</Link>
            <Link className="nav-link" to={'/categoria/PC'}>PC</Link>
            <Link className="nav-link" to="/cart">
              <Cartwidget/>
            </Link>
      </navbar>
    
  </navbar>
  )
}

export default Navbar
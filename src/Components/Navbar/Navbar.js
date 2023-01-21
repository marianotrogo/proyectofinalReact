import React from 'react'
import { NavLink } from 'react-router-dom'

import Cartwidget from '../Cartwidget/Cartwidget'


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">

          <NavLink className="navbar-brand" >Tienda Game</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/categoria/Ps4">PS4</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/categoria/Ps3">PS3</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/categoria/PC">PC</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart"><Cartwidget /></NavLink>
              </li>
            </ul>
          </div>
        </div>

      </nav>
    </>

  )
}

export default Navbar
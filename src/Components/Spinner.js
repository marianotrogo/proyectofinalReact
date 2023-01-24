import React from 'react'
import './Style/Spinner.css'

const Spinner = () => {
  return (
    <div className="loader-container">
        <div className="spinner"></div>
        <img className="spinner-logo"  alt="" />
    </div>
  )
}

export default Spinner
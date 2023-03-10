import React from 'react'
import './Style/Spinner.css'

const Spinner = () => {
  return (
    <div class="spinner-grow text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  )
}

export default Spinner
import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.css"

const Item = (props) => {
  return (
    <div className='containerItem'>
      <div>
      <Link style={{textDecoration:'none', color:'black'}} to={'/item/detail/${id}'}>  
      <h2 className='title'>{props.name}</h2>
      <img className='img' src={props.img}/>
      <p className='price'>{props.precio}</p>
      <button>Agregar</button>
      </Link> 
      </div>
    </div>
  )
}

export default Item
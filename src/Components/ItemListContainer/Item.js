import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({product}) => {

  return (
    <>
    <Link>
      <h3>{product.name}</h3>
      <p>{product.descripcion}</p>
      <p>Categoria: {product.category}</p>
      <img className='imgProd' alt='Imagen' src={product.img} />
      <button>Agregar al Carrito</button>
      </Link>
    </>
  )
}

export default Item
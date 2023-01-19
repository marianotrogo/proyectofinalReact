import React from 'react'
import './Item.css'


const Item = (product) => {

  return (
    <>
      <h3>{product.name}</h3>
      <p>{product.descripcion}</p>
      <p>Categoria: {product.category}</p>
      <img className='imgProd' alt='Imagen' src={product.img} />

      <button>Agregar al Carrito</button>

    </>
  )
}

export default Item
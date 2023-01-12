import React, { useState } from 'react'
import { prod } from './Productos'
import './Item.css'


const Item = () => {
  const [product, setProduct] = useState(prod)

  const deleteProduct = (productId) => {
    const cambioCart = product.filter(product => product.id !== productId);
    setProduct(cambioCart);
  }
  const addCart = (addProduct) => {
    const cambioCart = [
      addProduct.id

    ];
    setProduct(cambioCart);
  }

  return (
    <>
      {product.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.descripcion}</p>
          <p>Categoria: {product.category}</p>
          <img className='imgProd' src={product.img} />

          <button>Agregar al Carrito</button>
          <button onClick={() => deleteProduct(product.id)}>Eliminar</button>
        </div>
      ))}

    </>
  )
}

export default Item
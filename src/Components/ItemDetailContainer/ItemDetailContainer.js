import React from 'react'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {

    const {name, precio, img, detalle} = useParams()

  return (
    <>
    <div className='detalle'>
    <img alt='esto es una imagen' src={img}/>
    <h1>{name}</h1>
    <p>{detalle}</p>
    <p>{precio}</p>
    </div>
    </>
  )

}

export default ItemDetailContainer
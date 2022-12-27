import React from 'react'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

    const {name,precio,img} = useParams()

  return (
    <>
    <img alt='esto es una imagen' src={img}/>
    <h1>{name}</h1>
    <p>{precio}</p>
    </>
  )

}

export default ItemDetailContainer
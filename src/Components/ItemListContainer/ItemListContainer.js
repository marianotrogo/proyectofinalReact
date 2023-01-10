import React, { useState } from 'react'
import "./ItemListContainer.css"


const prod = [

  {
    id: 1,
    name: "Fifa23",
    category: "Ps4",
    precio: 59.99,
    descripcion: "Aqui va la descripcion",
    img: "https://sm.ign.com/ign_es/screenshot/default/image002-1_3te9.jpg"
  },
  {
    id: 2,
    name: "God of War Ragnarok",
    category: "Ps4",
    precio: 69.99,
    descripcion: "Aqui va la descripcion",
    img: ""
  },
  {
    id: 3,
    name: "Dark Souls 3",
    category: "PC",
    precio: 39.99,
    descripcion: "Aqui va la descripcion",
    img: ""
  },
  {
    id: 4,
    name: "Ico",
    category: "Ps3",
    precio: 9.99,
    descripcion: "Aqui va la descripcion",
    img: ""
  },
  {
    id: 5,
    name: "Red dead Remption 2",
    category: "PC",
    precio: 19.99,
    descripcion: "Aqui va la descripcion",
    img: ""
  },
  {
    id: 6,
    name: "Shadow of the Colossuss",
    category: "Ps4",
    precio: 59.99,
    descripcion: "Aqui va la descripcion",
    img: ""
  },

]


const ItemListContainer = () => {

  const [product, setProduct] = useState(prod)

  const deleteProduct = (productId)=>{
    const cambioCart= product.filter(product => product.id !== productId);
    setProduct(cambioCart);
  }



  return (
    <>
      {product.map(product =>(
        <div key={product.id}>
        <h3>{product.name}</h3>
        <p>{product.descripcion}</p>
        <p>Categoria: {product.category}</p>
        <img className='imgProd' src={product.img}/>

        
        <button onClick={()=> deleteProduct(product.id)}>Eliminar</button>
        </div>
      ))}

    </>
  )
}

export default ItemListContainer
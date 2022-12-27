import React from 'react'
import Item from '../Item/Item'

const ItemListContainer = () => {

    const items = [
        {
            id:1,
            name:"Fifa 23",
            precio: "$59.99",
            img: "https://sm.ign.com/ign_es/screenshot/default/image002-1_3te9.jpg",
            detalle:"aqui va la descripcion del producto",
        },
        {
            id:2,
            name:"God of War Ragnarok",
            precio: "$69.99",
            img: "https://i.3djuegos.com/juegos/17544/god_of_war_ragnarok/fotos/ficha/god_of_war_ragnarok-5732812.jpg",
            detalle: "aqui va la descripcion del producto",
        },
        {
            id:3,
            name:"Shadow of the Colossuss",
            precio: "$39.99",
            img: "https://playtecgames.com/wp-content/uploads/2019/11/shadow-of-the-colossus_1_1.jpg",
            detalle: "aqui va la descripcion del producto",
        }
    ]

  return (
    <>
        {items.map(({id,name,precio,img,detalle}) => (
            <Item key={id} id={id} name={name} precio={precio} img={img} detalle={detalle}/>
        ))}
    </>
  )
}

export default ItemListContainer
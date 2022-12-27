import React from 'react'
import Item from '../Item/Item'

const ItemListContainer = () => {
  const prod = [
    {
      id: 1,
      name: "Fifa 23",
      precio: "U$D 59.99",
      img: "https://sm.ign.com/ign_es/screenshot/default/image002-1_3te9.jpg"
    },
    {
      id: 2,
      name: "God of War Ragnarok",
      precio: "U$D 69.99",
      img:"https://i.3djuegos.com/juegos/17544/god_of_war_ragnarok/fotos/ficha/god_of_war_ragnarok-5732812.jpg"
    },
    {
      id: 3,
      name: "Shadow of the Colossuss",
      precio: "U$D 39.99",
      img:"https://media.playstation.com/is/image/SCEA/shadow-of-the-colossus-box-art-01-ps4-us-25jan18?$native_nt$"
    },
  ];
  


  return (

    <div>
      {prod.map((item)=>{
        return(
          <Item 
            img={item.img}
            name={item.name}
            precio={item.precio} 
          />
        );
      })}
    </div>
  )
}

export default ItemListContainer
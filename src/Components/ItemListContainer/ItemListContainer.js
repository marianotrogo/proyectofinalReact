import React, {useState} from 'react'
import Item from '../Item/Item'

const ItemListContainer = () => {
  const [user, setUser] = useState ([
    {
      id: 1,
      name: "Fifa 23",
      precio: "U$D 80",
      img: "https://sm.ign.com/ign_es/screenshot/default/image002-1_3te9.jpg"
    },
    {
      id: 2,
      name: "God of War Ragnarok",
      precio: "U$D 100",
      img:"https://i.3djuegos.com/juegos/17544/god_of_war_ragnarok/fotos/ficha/god_of_war_ragnarok-5732812.jpg"
    },
  ]);
  


  return (

    <div>
      {user.map((item)=>{
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
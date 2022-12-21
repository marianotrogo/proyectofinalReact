import React from 'react'
import Item from '../Item/Item'

const ItemListContainer = () => {
  const items = [
    {
      id: 1,
      name: "uno"
    },
    {
      id: 2,
      name: "dos"
    },
    {
      id: 3,
      name: "tres"
    }
  ] 
  return (
    <>
      {items.map(({id,name})=>{
        <Item id={id} name={name}/>
      })}
    </>
    
  )
}

export default ItemListContainer
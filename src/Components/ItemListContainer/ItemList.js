import React from 'react'
import Item from './Item'

const ItemList = ({data = []}) => {
  return (
    data.map(produ => <Item 
        key={produ.id} 
        product={produ}/>)

  )
}

export default ItemList
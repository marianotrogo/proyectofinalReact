import React, {useState} from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ({ data }) => {

  const [irAlCarrito, setIrAlCarrito] = useState(second)

  const onAdd = (quantity) =>{
    
  }

  return (
    <>
      <div>
        <div>
          <img src={data.img} alt="imagen" />
          <div>
            <h2>{data.name}</h2>
          </div>
          <ItemCount initial = {0} stock = {5} onAdd={onAdd}/>
        </div>
      </div>
    </>
  )
}

export default ItemDetail
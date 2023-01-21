import React, {useState} from 'react'

const ItemCount = ({initial, stock, onAdd}) => {

  const [count, setCount] = useState(initial)

  const reducir = ()=>{
    setCount(count - 1);
  }
  const incrementar= ()=>{
    setCount(count + 1);
  }



  return (
    <>
      <div className='contador'>
        <button disabled={count <=1} onClick={reducir}> - </button>
        <span> {count}</span>
        <button disabled={count >= stock} onClick={incrementar}> + </button>
        <div>
          <button disabled={stock<=0} onClick={()=> onAdd(count)}>Agregar al Carrito</button>
        </div>
      </div>
    </>
  )
}

export default ItemCount
import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { prod } from '../ItemListContainer/Productos';

const ItemDetailContainer = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise(resolve=>{
      setTimeout(() => {
          resolve(prod)
      }, 2000);
    });
    getData.then(res=>setData(res))
  }, [])
  



  return (
    <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer
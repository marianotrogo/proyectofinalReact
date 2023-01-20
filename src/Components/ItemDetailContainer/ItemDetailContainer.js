import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { prod } from '../ItemListContainer/Productos';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const [data, setData] = useState([]);
  const {detailId} = useParams();

  useEffect(() => {
    const getData = new Promise(resolve=>{
      setTimeout(() => {
          resolve(prod)
      }, 2000);
    });
    getData.then(res=>setData(res.find(prod => prod.id === detailId)));
  }, [])
  



  return (
    <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer
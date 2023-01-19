import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { prod } from './Productos'


export const ItemListContainer = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(prod);
      }, 2000);
    });
    getData.then(res => setData(res));
  }, [])


  return (
    <>
      <ItemList data={data}/>
    </>
  )
}

export default ItemListContainer
import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { prod } from './Productos';
import { useParams } from 'react-router-dom';


export const ItemListContainer = () => {

  const [data, setData] = useState([]);

  const {categoryId} = useParams()

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(prod);
      }, 2000);
    });

    if (categoryId){
    getData.then(res => setData(res.filter(film => film.category === categoryId)));
    }else{
      getData.then(res => setData(res));
    }
  }, [categoryId])


  return (
    <>
      <ItemList data={data} />
    </>
  )
}

export default ItemListContainer
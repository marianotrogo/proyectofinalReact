import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import { products } from './Productos';
import ItemList from './ItemList'
import Spinner from './Spinner';
import useFirebase from '../Hooks/useFirebase';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoriaId } = useParams();
  const { productos, getCollection, getProduct, producto } = useFirebase();

  useEffect(() => {
    // setLoading(true)
    getCollection();
  }, [])
  
  


  // useEffect(() => {
  //   setLoading(true);
  //   const getProducts = new Promise((resolve) => {
  //     const prodFiltrados = productos.filter(
  //       (prod) => prod.categoria === categoriaId
  //     );
  //     setTimeout(() => {
  //       categoriaId ? resolve(prodFiltrados) : resolve(productos);
  //     }, 2000);
  //   });
  //   getProducts
  //     .then((data) => {
  //       setItems(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [categoriaId]);


  return (
    <div>
      {loading ?
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        : <ItemList items={items} />
      }
    </div>
  )
}

export default ItemListContainer
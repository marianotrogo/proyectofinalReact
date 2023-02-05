// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
// import ItemList from './ItemList'
// import Spinner from './Spinner';
// import useFirebase from '../Hooks/useFirebase';


// const ItemListContainer = () => {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { categoriaId} = useParams();
//   const { productos, filterProducto, getCollection, filtroCategoria } = useFirebase();

//   useEffect(() => {
   
//    setLoading(true)
//       filtroCategoria(categoriaId)
//      getCollection();
//   }, []);

//   useEffect(() => {
//     filtroCategoria(categoriaId)
//   }, [categoriaId])

//   useEffect(() => {
//     if(categoriaId) {
//       setItems(filterProducto)
//     } else {
//       setItems(productos)
//     } 
//     setLoading(false)
//   }, [productos, filterProducto])
  
 

//   return (
//     <div>
// {loading ?
//         <Spinner animation="border" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </Spinner>
//         : <ItemList items={items} />
//       }
        
//     </div>
//   )
// }

// export default ItemListContainer
import React from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';


const ItemListContainer = () => {
	const {id} = useParams();

    return ( 
		<ItemList item ={ id }/>

    )
}

export default ItemListContainer
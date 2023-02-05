// import React, { useEffect, useState } from 'react'
// import { products } from './Productos';
// import ItemDetail from './ItemDetail';
// import {useParams} from 'react-router-dom'
// import Spinner from './Spinner';
// import useFirebase from '../Hooks/useFirebase';


// const ItemDetailContainer = () => {
//     const [details, setDetails] = useState()
//     const {id} = useParams()

//     const getProducts = new Promise ((resolve) => {
//         setTimeout(() => {
//             resolve(products.filter(prod => prod.id === Number(id)))
//         }, 2000);
//     });
    
//     useEffect(() => {
//         getProducts
//         .then((data) => {
//             setDetails(data);
//         })
//         .catch((error) => {
//             console.log(error);
//         })
//     }, [])

//   return (
//     <div>
//         {!details ?
//         <Spinner animation="border" role="status">
//         <span className="visually-hidden">Loading...</span>
//       </Spinner>
//         : <ItemDetail details={details[0]}/>
//         }
//     </div>
//   )
// }

// export default ItemDetailContainer
import React from 'react'
import { useEffect } from 'react';
import {  useParams } from 'react-router-dom'
import useFirebase from '../Hooks/useFirebase';
import ItemDetail from './ItemDetail'
import Spinner from './Spinner';

const ItemDetailContainer = () => {

    const { id } = useParams()
    const { getProductos, catalogo, loading} = useFirebase()


    useEffect(() => {
        getProductos(id)
    
        return () => {
            
    }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    

    const filter = id? catalogo.filter((producto) => producto.id === id) : null

    return (
        <>
            <section className='products__container'>
                {loading && <Spinner/>}
                    {filter.map(({id, name, stock, descripcion, descriptiondetail, categoria, precio, img}, index) => (
                        <div className='products__detail'>
                            <ItemDetail
                            key={index}
                            id={id}
                            name={name} 
                            descriptiondetail={descriptiondetail}
                            descripcion={descripcion}
                            precio={precio}
                            img={img}
                            categoria={categoria}
                            stock={stock}
                            />
                        </div>
                    ))}
            </section>
        </>
        
    )
}

export default ItemDetailContainer
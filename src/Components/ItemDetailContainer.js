import React, { useEffect, useState } from 'react'
import { products } from './Productos';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom'
import Spinner from './Spinner';


const ItemDetailContainer = () => {
    const [details, setDetails] = useState()
    const {id} = useParams()

    const getProducts = new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.id === Number(id)))
        }, 2000);
    });
    
    useEffect(() => {
        getProducts
        .then((data) => {
            setDetails(data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

  return (
    <div>
        {!details ?
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
        : <ItemDetail details={details[0]}/>
        }
    </div>
  )
}

export default ItemDetailContainer
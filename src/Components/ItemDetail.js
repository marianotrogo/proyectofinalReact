import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../Context/CartContext';
import ItemCount from './ItemCount';


const ItemDetail = ({details}) => {
    const [cantidad, setCantidad] = useState(0);
    const { addToCart } = useContext(CartContext);

    const onAdd = (cantidad) => {
      setCantidad(cantidad);
      addToCart(details, cantidad);
  };

  return (
    <div className='row m-auto'>
        <div className='col-12 col-md-6 text-center'>
            <img 
              src={details.img}
              style={{width: '300px'}}
            />
        </div>
        <div className=' col-12 col-md-6'>
        <h1 className='card-title'>{details.name}</h1>
        <h3>Categoría: {details.category}</h3>
        <h3 className='card-text'>Precio: $ {details.precio}</h3>
        <p className='card-text'>Descripción: {details.descripcion}</p>
        <h4 className='text-primary'>Stock: {details.stock}</h4>
        {cantidad === 0 ? (
                    <ItemCount stock={details.stock} initial={1} onAdd={onAdd} />
                ) : (
                    <Link className='btn btn-warning' to="/cart">Ir al carrito</Link>
                    )}
                    <br/>
                    <Link className='btn btn-danger' to="/">Seguir comprando</Link>
        </div>
    </div>
  )
}

export default ItemDetail
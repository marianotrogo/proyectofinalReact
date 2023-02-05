// import React, { useState } from 'react';

// const ItemCount = ({ stock, initial, onAdd }) => {
//     const [count, setCount] = useState(initial);

//     const restar = () => {

//         count > initial && setCount(count - 1);
//     };

//     const sumar = () => {
//         if (count < stock) {
//             setCount(count + 1);
//         }
//     };


//     return (
//         <div className="counter">
//             <div className="counter-btn">
//                 <button className='btn btn-secondary' onClick={restar}>-</button>
//                 <p className='btn btn-outline-success'>{count}</p>
//                 <button className='btn btn-secondary' onClick={sumar}>+</button>
//             </div>

//             <div>
//                 <button className="btn btn-primary add-btn" onClick={() => onAdd(count)}>
//                     Add to cart
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ItemCount;
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'




const ItemCount = (item) => {

    const useContador = () => {
    
        const [count, setCount] = useState(1)
    
        const increase = () => setCount(count + 1)
        const decrease = () => setCount(count - 1)
        const reset =  () => setCount(0)
        
        return {
            count,
            increase,
            decrease,
            reset
        }
    }
    
    const props = item.item;
    const {stock} = props;
    const { decrease, increase, count } = useContador()

    
    const [irACarrito, setIrACarrito] = useState(false);
	const {onAddProducto} = useContext(CartContext)
    const navigate = useNavigate();


    const onAdd = (quantity) => {
        setIrACarrito(true);
        onAddProducto(item, quantity)
    }

    return (
    <>
        <div className='detail__itemcount'>
            <div className='detail__count'>
                <div className='detail__contador'>
                    <button disabled={count <= 1} onClick={decrease} className='counter__b'> - </button>
                    <h4 className='counter__h'>{count}</h4>
                    <button disabled={count >=stock} onClick={increase} className='counter__b'> + </button>
                </div>
                <button 
                disabled={ stock <= 0} 
                onClick={() => onAdd(count)}
                className='btn__cart'>
                    Agregar al Carrito
                </button>
            </div>
        {
            irACarrito ?
            <div className='cart__buttons'>
                <Link onClick={() => navigate(-1)} item={item}><button className='btn__cart--count btn__checkout'>Volver a comprar</button></Link>
                <Link to='/cart' item={item}><button className='btn__cart--count '>Terminar compra</button></Link>
            </div>
            : null
        }
        </div>
    </>
    )
}

export default ItemCount
import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const restar = () => {
        /* if (count > initial) {
            setCount(count - 1);
        } */

        count > initial && setCount(count - 1);
    };

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    /*     const agregar = () =>{
        onAdd(count)
    } */

    return (
        <div className="counter">
            <div className="counter-btn">
                <button className='btn btn-secondary' onClick={restar}>-</button>
                <p className='btn btn-outline-success'>{count}</p>
                <button className='btn btn-secondary' onClick={sumar}>+</button>
            </div>

            <div>
                <button className="btn btn-primary add-btn" onClick={() => onAdd(count)}>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ItemCount;
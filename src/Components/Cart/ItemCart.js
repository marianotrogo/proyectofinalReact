import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
const ItemCart = (item) => {

	const {product:{item:{name, precio, img, alt,id}, quantity}} = item
    const {borrarProducto} = useContext(CartContext)

    return (
        <>
			<div className='link__cart'>
				<section className='box__cart'>
					<div className='card'>
						<img src={img} className='card__image' alt={alt || 'Imagen del producto'}/>
						<div className='cart__header'>
							<h3 className='cart__title'>
								{name}
							</h3>
							<div className='cart__footer'>
					<div className='cart__quantity'>
							<h4 className='cart__quantity--number'>{quantity} Un.</h4>
					</div>  
								<div className='cart__footer--price'>
									<p className='text__price--item'>USD ${precio} unidad</p>
								</div>
								<button className='btn btn-outline-dark ' onClick={() => borrarProducto(id)}>Eliminar</button>
							</div>
						</div>	
					</div>	
				</section>
			</div>
        </>
    )
}

export default ItemCart

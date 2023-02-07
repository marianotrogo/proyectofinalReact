import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
const ItemCart = (item) => {

	const { product: { item: { name, precio, img, alt, id }, quantity } } = item
	const { borrarProducto } = useContext(CartContext)

	return (
		<>
			<div >
				<section >
					<div className='card'>
						<img src={img} alt={alt || 'Imagen del producto'} />
						<div >
							<h3>
								{name}
							</h3>
							<div>
								<div>
									<h4>{quantity} Un.</h4>
								</div>
								<div>
									<p >USD ${precio} unidad</p>
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

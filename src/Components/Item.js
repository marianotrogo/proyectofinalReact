import React from 'react';
import './Style/Item.css'
import { Link } from 'react-router-dom';

const Item = (props) => {

	const { id, name, precio, img, categoria } = props;

	return (
		<div className='link__card'>
			<section className='box__card'>
				<div className='card'>
					<img src={img} className='card__image' alt={name || 'Imagen del producto'} />
					<div className='card__header'>
						<h3 className='tittleName'>
							{name}
						</h3>
					</div>
					<div className='card__stock stock'>
						<div><p>Categoria: {categoria}</p></div>
					</div>
					<div className='card_footer'>
						<div className='card_footer--price'>
							<p className='card__footer--item'>USD ${precio}</p>
						</div>
						<Link to={`/item/detail/${id}`} className='btn__cart btn__cart--nooffer'>
							<p className='btn btn-success'>Ver detalle</p>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Item;
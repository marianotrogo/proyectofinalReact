import React from 'react';
import './Style/Item.css'
import { Link } from 'react-router-dom';

const Item = (props) => {

	const { id, name, precio, img, categoria } = props;

	return (
		<div className='link__card'>
			<section>
				<div className='card'>
					<img src={img} alt={name || 'Imagen del producto'} />
					<div>
						<h3 className='tittleName'>
							{name}
						</h3>
					</div>
					<div >
						<div><p>Categoria: {categoria}</p></div>
					</div>
					<div>
						<div>
							<p>USD ${precio}</p>
						</div>
						<Link to={`/item/detail/${id}`} className='btncart'>
							<p className='btn btn-success'>Ver detalle</p>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Item;
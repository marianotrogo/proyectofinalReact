// import React from 'react'
// import {Link} from 'react-router-dom'

// const Item = ({item}) => {

//     const {name, precio, img, categoria, id} = item

//   return (
//     <div className="m-auto text-center" style={{ width: '18rem' }}>
//       <img src={img} className="shadow-sm p-3 mb-5 bg-body rounded" style={{width: '150px'}}/>
//       <div>
//         <h3>{name}</h3>
//         <p>Categoria: {categoria}</p>
//         <p>$ {precio}</p>
//         <button className='btn'><Link  className='btn btn-success' to={`/details/${id}`}>Ver Detalles</Link></button>
//       </div>
//     </div>
//   )
// }

// export default Item
import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';

const Item = (props) => {

	const { id, name, descripcion, precio, img, stock, categoria } = props;

	return (
		<div className='link__card'>
			<section className='box__card'>
				<div className='card__stock stock'>
					<div><p>{categoria}</p></div>
				</div>
				<div className='card'>
					<img src={img} className='card__image' alt={name || 'Imagen del producto'} />
					<div className='card__header'>
						<h3 className='card__title--item'>
							{name}
						</h3>
					</div>
					<div className='card__main'>
						<p className='card__description'>{descripcion}</p>
					</div>
					<div className='card_footer'>
						<div className='card_footer--price'>
							<p className='card__footer--item'>ARS ${precio}</p>
						</div>
						<Link to={`/item/detail/${id}`} className='btn__cart btn__cart--nooffer'>
							<p className='btn__cart--p'>Ver detalle</p>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Item;
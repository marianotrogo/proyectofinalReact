import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import './Style/itemdetail.css'


const ItemDetail = (item) => {
	const { name, descripcion, categoria, precio, img } = item

	return (
		<>
			<Link to='/' className='link-success backHome'>Regresar al Home</Link>
			<section className="detail__box">
				<img src={img} alt={name || "Imagen del producto"} width={250} height={'auto'} />
				<div className='detail__description description'>
					<ul className='description__main main'>
						<li className='card-title'>
							<h3>{name}</h3>
							<span className='card-text detail__category'>Categoria: {categoria}</span>
						</li>
						<li className='detail__body body'>
							<h3 className='body__h3'>Descripción</h3>
							<p className='card-text body__description'>{descripcion}</p><br />

						</li>
						<li className='detail__price'>
							<p className='text__offer_price'>ARS ${precio}</p>

						</li>
					</ul>
					<ItemCount item={item} />
				</div>
			</section>
		</>
	)
}

export default ItemDetail
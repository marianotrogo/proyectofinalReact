import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import './Style/itemdetail.css'


const ItemDetail = (item) => {
	const { name, descripcion, categoria, precio, img } = item

	return (
		<>
			<Link to='/' className='link-success backHome'>Regresar al Home</Link>
			<section className="boxDetail">
				<img src={img} alt={name || "Imagen del producto"} width={250} height={'auto'} />
				<div className='descripcionDetail description'>
					<ul className='mainDescription main'>
						<li className='titleCard'>
							<h3>{name}</h3>
							<span className='card-text categoryDetail'>Categoria: {categoria}</span>
						</li>
						<li className='bodyDetail body'>
							<h3 className='body__h3'>Descripción</h3>
							<p className='card-text body__description'>{descripcion}</p><br />
						</li>
						<li className='priceDetail'>
							<p>USD ${precio}</p>
						</li>
					</ul>
					<ItemCount item={item} />
				</div>
			</section>
		</>
	)
}

export default ItemDetail
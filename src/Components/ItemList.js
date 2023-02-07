import React from 'react'
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';
import Item from './Item';
import useFirebase from '../Hooks/useFirebase'
import './Style/ItemList.css'

const ItemList = () => {

    const { categoria } = useParams()
    const { catalogo, loading } = useFirebase()
    const filter = categoria ? catalogo.filter((product) => product.categoria === categoria) : catalogo


    return (
        <section className='products'>
            {catalogo.length < 1}
            {loading && <Spinner />}
            <div className="containerProduct col-12 col-md-6">
                {!loading && catalogo.length > 0 ? filter.map(({ id, name, descripcion, precio, categoria, img, alt, stock }, index) => (
                    <Item
                        id={id}
                        key={id}
                        name={name}
                        descripcion={descripcion}
                        categoria={categoria}
                        precio={precio}
                        img={img}
                        alt={alt}
                        stock={stock}/>)
                ) : !loading && catalogo.length < 1 && (<h1 className="text-center text-red-800 text-xl">Ups!, fallo la carga de productos</h1>)
                }
            </div>
        </section>
    )
}

export default ItemList


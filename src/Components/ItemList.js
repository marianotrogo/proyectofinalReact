// import React, {useEffect} from 'react'
// import Item from './Item';


// const ItemList = ({items}) => {


//   return (
//     <div className='container m-auto row wrap'>
//         {items.map(item => 
//         <Item key={item.id} item={item}/>
//         )}
//     </div>
//   )
// }

// export default ItemList

import React from 'react'
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';
import Item from './Item';
import useFirebase from '../Hooks/useFirebase'

const ItemList = () => {


    // const [cards, setCards] = useState([])
    const { categoria } = useParams()
    const { catalogo, loading } = useFirebase()
    const filter = categoria ? catalogo.filter((product) => product.category === categoria) : catalogo


    return (
        <section className='products'>
            {catalogo.length < 1}
            {loading && <Spinner />}
            <div className="products__container">
                {!loading && catalogo.length > 0 ? filter.map(({ id, name, descripcion, precio,categoria, img, alt, stock }, index) => (
                    <Item
                        id={id}
                        key={id}
                        name={name}
                        descripcion={descripcion}
                        categoria={categoria}
                        precio={precio}
                        img={img}
                        alt={alt}
                        stock={stock}
                        
                    />)
                ) : !loading && catalogo.length < 1 && (<h1 className="text-center text-red-800 text-xl">Ups!, fallo la carga de productos</h1>)
                }
            </div>
        </section>
    )
}

export default ItemList


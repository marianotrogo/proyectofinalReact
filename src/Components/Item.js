import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({item}) => {
    
    const {name, precio, img, category, id} = item

  return (
    <div className="m-auto text-center" style={{ width: '18rem' }}>
      <img src={img} className="shadow-sm p-3 mb-5 bg-body rounded" style={{width: '150px'}}/>
      <div>
        <title>{name}</title>
        <p>$ {precio}</p>
        <button className='btn'><Link  className='btn btn-success' to={`/details/${id}`}>Ver Detalles</Link></button>
      </div>
    </div>
  )
}

export default Item
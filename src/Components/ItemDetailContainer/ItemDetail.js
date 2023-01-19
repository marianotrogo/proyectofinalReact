import React from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({data}) => {
  return (
    <>
    <Link >
        <div>
            <div>
                <img src={data.img} alt="" /> 
                <div>
                    <h2>{data.name}</h2>
                </div>   
            </div>    
        </div> 
        </Link>   
    </> 
  )
}

export default ItemDetail
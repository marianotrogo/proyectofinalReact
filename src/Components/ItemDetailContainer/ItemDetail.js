import React from 'react'


const ItemDetail = ({ data }) => {
  return (
    <>
      <div>
        <div>
          <img src={data.img} alt="imagen" />
          <div>
            <h2>{data.name}</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemDetail
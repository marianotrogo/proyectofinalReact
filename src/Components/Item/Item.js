import React from 'react'

const Item = (props) => {

  const {name, id}= props

  return (
    <div>
      <h1>{name}</h1>
      <h4>{id}</h4>
    </div>
  )
}

export default Item
import React from "react";
import { Link } from "react-router-dom";
import './Item.css'

const Item = (props) => {
  const { name, id, precio, img, detalle } = props;

  return (
    <Link style={{textDecoration:'none',color:'black'}} to={`/item/detail/${id}/${name}/${img}/${detalle}/${precio}`}>
      <div className="containerItem">
        <div className="containerItem__prod">
        <img className="img" alt="esto es una imagen" src={img}/>
        <h1>{name}</h1>
        <p>{precio}</p>
        </div>
        
      </div>
    </Link>
  );
};

export default Item;
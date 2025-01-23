import { Link } from "react-router-dom"
import React from "react";
import "./Itemlistcontainer.css";

const Item = React.memo (({product}) =>{
    return (
        <div className="card1" >
            <p className="card-title">{product.name}</p>
            <p className="card-description">{product.description}</p>
        <img src={product.image[0]} alt="" className="card-image" />
      <p className="card-price"> {product.price}</p>
      <Link to = {"/detail/"+product.id} className="boton">ver detalle</Link>
      </div>
      
      
    )
}, (prevProps, nextProps) => JSON.stringify(prevProps) === JSON.stringify(nextProps))
export default Item
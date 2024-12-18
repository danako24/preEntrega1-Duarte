import { Link } from "react-router-dom"
import "./Itemlistcontainer.css";

const Item = ({product}) =>{
    return (
        <div className="card1" >
            <p className="card-title">{product.name}</p>
            <p className="card-description">{product.description}</p>
        <img src={product.image} alt="" className="card-image" />
      <p className="card-price"> {product.price}</p>
      <Link to = {"/detail/"+product.id} className="boton">ver detalle</Link>
      </div>
      
      
    )
}
export default Item
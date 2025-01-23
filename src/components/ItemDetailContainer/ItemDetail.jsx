import { useContext } from "react";
import { CartContext } from "../../context/CartContex";
import "./ItemDetail.css";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ItemDetail = ({ product }) => {
    const [showItemCount, setShowItemCount] = useState(true)
    const { addProduct }= useContext (CartContext)


    const [currentImage, setCurrentImage] = useState(product.image[0])
    const images= product.image.filter( (image)=> image !== currentImage)
    const addProductInCart= (count)=> {
        const productCart = { ...product, quantify: count }

        addProduct(productCart)
        setShowItemCount(false)

        Swal.fire({
            title: "Producto agregado",
            text: `${product.name} ha sido añadido al carrito.`,
            icon: "success",
            confirmButtonText: "Continuar",
            timer: 2000,
            timerProgressBar: true
        });

    }

    return (
        
        <div className="item-detail-container">
    {product ? (
        <div className="item-detail">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className="image-section">
                <img src={currentImage} alt={product.name} className="item-image" />
                <div className="imagenes-secundarias">
                    {images.map((image) => (
                        <img
                            src={image}
                            key={image}
                            onClick={() => setCurrentImage(image)} /* Cambia la imagen principal */
                        />
                    ))}
                </div>
            </div>
            
            
            <h3>{product.price}</h3>
            {
                showItemCount === true ? (
<ItemCount stock={product.stock} addProductInCart={addProductInCart} />
                ) : (
                    <Link to = "/cart" >terminar mi compra</Link>
                )
            }
            
        </div>
    ) : (
        <p>Cargando detalles del producto...</p>
    )}
</div>
        
    );
    
};

export default ItemDetail;
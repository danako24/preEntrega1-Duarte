import "./ItemDetail.css";


const ItemDetail = ({ product }) => {
    return (
        
        <div className="item-detail-container">
            {product ? (
                <div className="item-detail">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <img src={product.image} alt={product.name} className="item-image" />
                    
                    
                    <h3>{product.price}</h3>
                </div>
            ) : (
                <p>Cargando detalles del producto...</p>
            )}
        </div>
        
    );
    
};

export default ItemDetail;
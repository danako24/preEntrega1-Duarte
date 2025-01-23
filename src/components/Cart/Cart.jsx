import { useContext } from "react";
import { CartContext } from "../../context/CartContex";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totalPrice, deletProductById, deletCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div>
        <h2>El carrito está vacío</h2>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Tu Carrito de Compras</h2>
      <ul className="cart-list">
        {cart.map((productCart) => {
          const numericPrice = productCart.price
            ? parseInt(String(productCart.price).replace(/\D/g, ''), 10)
            : 0;

          return (
            <li key={productCart.id} className="cart-item">
              <img src={productCart.image[0]} className="cart-item-image" alt={productCart.name} />
              <div className="cart-item-details">
                <p className="cart-item-name">{productCart.name}</p>
                <p>Precio c/u: ${numericPrice}</p>
                <p>Cantidad: {productCart.quantify}</p>
                <p>Precio total: ${numericPrice * productCart.quantify}</p>
                <button
                  className="cart-button-dos"
                  onClick={() => deletProductById(productCart.id)}
                >
                  Eliminar
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <h3 className="cart-total">Precio total: ${totalPrice()}</h3>
      <Link className="button-to-cart" to="/checkout"> continuar </Link>
      <button className="cart-button" onClick={deletCart}>
        Vaciar carrito
      </button>
    </div>
  );
};

export default Cart;

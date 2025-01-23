import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, addProductInCart }) => {
  const [count, setCount] = useState(1);

  const handleClickRemove = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleClickAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className="item-count-container">
      <div className="counter-buttons">
        <button className="btn-decrease" onClick={handleClickRemove}>
          -
        </button>
        <p className="count-display">{count}</p>
        <button className="btn-increase" onClick={handleClickAdd}>
          +
        </button>
      </div>
      <button
        className="btn-add-to-cart"
        onClick={() => addProductInCart(count)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;

import React, { useState } from "react";
import "./ItemListCount.css";


const ItemListCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (stock > 0 && count > 0) {
      onAdd(count);
    }
  };

  return (
    <div className="item-count">
      <div className="controls">
        <button onClick={decrement} disabled={count === 0} className="control-button">
          -
        </button>
        <span className="count-display">{count}</span>
        <button onClick={increment} disabled={count === stock} className="control-button">
          +
        </button>
      </div>
      <button onClick={handleAdd} disabled={stock === 0 || count === 0} className="add-button">
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ItemListCount;

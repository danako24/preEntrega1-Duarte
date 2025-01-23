import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContex";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantify }= useContext(CartContext)

  let quantify = totalQuantify()

  return (
    <Link to="/cart" className="position-relative d-inline-block">
      <i className="bi bi-cart fs-3 "></i> {}
      <p
        className="top-0 start-100 translate-middle badge rounded-pill bg-danger"
        style={{ fontSize: "12px"}}
      >
        {quantify !== 0 && quantify}
      </p>
    </Link>
  );
};

export default CartWidget;

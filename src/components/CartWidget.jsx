import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CartWidget = () => {
  const cartCount = 5;

  return (
    <div className="position-relative d-inline-block">
      <i className="bi bi-cart fs-3 "></i> {}
      <span
        className="top-0 start-100 translate-middle badge rounded-pill bg-danger"
        style={{ fontSize: "12px" }}
      >
        {cartCount}
      </span>
    </div>
  );
};

export default CartWidget;

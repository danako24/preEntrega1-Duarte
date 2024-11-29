import React from "react";

const ItemListContainer = ({ greeting }) => {
  const containerStyle = {
    padding: "20px",
    margin: "20px auto",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    maxWidth: "600px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const greetingStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <p style={greetingStyle}>{greeting}</p>
    </div>
  );
};

export default ItemListContainer;

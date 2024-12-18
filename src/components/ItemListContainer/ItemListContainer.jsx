import React from "react";
import { getproducts } from "../../data/data.js";
import { useState, useEffect } from "react";
import ItemList from "./ItemList.jsx";
import "./Itemlistcontainer.css";
import ItemListCount from "../ItemListCount.jsx";
import "../ItemListCount.jsx";
import { useParams } from "react-router-dom";


const ItemListContainer = ({ greeting }) => {
 const [products, setproducts] = useState([])

 const { idCategory } =useParams()

 console.log(idCategory)


 useEffect(()=>{
  getproducts ()
  .then((data)=> {
    if(idCategory){
      const filterProducts = data.filter((product) => product.category=== idCategory)
      setproducts(filterProducts)
    }else{
      setproducts(data)
    }
  })
  .catch((error)=>{
   console.error(error)
  })
  .finally(()=>{
    console.log("termino")
  })
 }, [idCategory])



 console.log(products)

  return (
    
    <div className="itemlistcontainer">
      <h2 className="section-title">Encuentra Tus Cartas</h2>
      <h1>{greeting}</h1>
      <ItemList products={products}  />
      <ItemListCount
              stock={products.stock}
              initial={1}
              onAdd={(quantity) => handleAdd(products.id, quantity)}
            />
          
      <div className="button-container">
                <button className="view-more-button">Ver Más...</button>
            </div>
    </div>
    
    
  );
};

export default ItemListContainer;





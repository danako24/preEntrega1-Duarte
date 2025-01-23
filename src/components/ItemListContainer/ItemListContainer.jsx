import React, { useState, useEffect } from "react";
import ItemList from "./ItemList.jsx";
import "./Itemlistcontainer.css";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategory } = useParams();
  const collectionName = collection(db, "products");

  const getProducts = async () => {
    try {
      setLoading(true);
      const dataDb = await getDocs(collectionName);
      const data = dataDb.docs.map((productDb) => ({
        id: productDb.id,
        ...productDb.data(),
      }));
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getProductsByCategory = async () => {
    try {
      setLoading(true);
      const q = query(collectionName, where("category", "==", idCategory));
      const dataDb = await getDocs(q);
      const data = dataDb.docs.map((productDb) => ({
        id: productDb.id,
        ...productDb.data(),
      }));
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (idCategory) {
      getProductsByCategory();
    } else {
      getProducts();
    }
  }, [idCategory]);

  return (
    <div className="itemlistcontainer">
      <h2 className="section-title">Encuentra Tus Cartas</h2>
      <h1>{greeting}</h1>
      {loading ? (
        <div>cargando...</div>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;





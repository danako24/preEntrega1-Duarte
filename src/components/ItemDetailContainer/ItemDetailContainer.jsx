import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { BounceLoader } from "react-spinners";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true); 
  const { idProduct } = useParams();

  const getProduct = async () => {
    try {
      setLoading(true); 
      const docRef = doc(db, "products", idProduct);
      const dataDb = await getDoc(docRef);

      if (dataDb.exists()) {
        const data = { id: dataDb.id, ...dataDb.data() };
        setProduct(data);
      } else {
        console.error("No existe el producto con el ID proporcionado.");
      }
    } catch (error) {
      console.error("Error al obtener el producto:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (idProduct) {
      getProduct(); 
    }
  }, [idProduct]);

  return (
    <>
      {loading ? (
        <div
          style={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BounceLoader color="#4edfff" loading size={150} />
        </div>
      ) : (
        <ItemDetail product={product} />
      )}
    </>
  );
};

export default ItemDetailContainer;


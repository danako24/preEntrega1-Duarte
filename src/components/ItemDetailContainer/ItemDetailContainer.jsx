import { getproducts } from "../../data/data.js";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setproduct] = useState({})

    const { idProduct }=useParams()

    useEffect(() => {

        getproducts()
            .then( (data) => {
                const productfind = data.find ( (dataproduct) => dataproduct.id === idProduct)
                setproduct(productfind)
            })

    }, [idProduct])

    return (
       <ItemDetail product={product} />
    )
}
export default ItemDetailContainer

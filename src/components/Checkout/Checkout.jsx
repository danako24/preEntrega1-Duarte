import { useState, useContext } from "react";
import Swal from "sweetalert2"; // Importa SweetAlert2
import FormCheckout from "../Checkout/FormCheckout";
import { CartContext } from "../../context/CartContex";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import db from "../../db/db.js";
import validateForm from "../../utils/validateForm.js";
import { toast } from "react-toastify";

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: "",
    });

    const [orderId, setOrderId] = useState(null);

    const { cart, totalPrice } = useContext(CartContext);

    const handleChangeInput = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value });
    };

    const handleSubmitForm = async (event) => {
        event.preventDefault();
        const order = {
            buyer: { ...dataForm },
            products: [...cart],
            total: totalPrice(),
            date: Timestamp.fromDate(new Date()),
        }

        const response = await validateForm(dataForm)
        if(response.status === "success"){
            await uploadOrder(order)
        }else {
            toast.warn(response.message)
        }
    }

    const uploadOrder = async (newOrder) => {
        try {
            const ordersRef = collection(db, "orders");
            const response = await addDoc(ordersRef, newOrder);
            setOrderId(response.id);
            Swal.fire({
                title: "Orden realizada",
                text: `Tu orden fue subida exitosamente con ID: ${response.id}`,
                icon: "success",
                confirmButtonText: "Ok",
            });
        } catch (error) {
            console.error(error);
            Swal.fire({
                title: "Error",
                text: "Ocurrió un problema al procesar la orden.",
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
    };

    return (
        <div>
            {orderId ? (
                <div>
                    <h2>Orden subida</h2>
                    <h3>{orderId}</h3>
                </div>
            ) : (
                <FormCheckout
                    dataForm={dataForm}
                    handleChangeInput={handleChangeInput}
                    handleSubmitForm={handleSubmitForm}
                />
            )}
        </div>
    );
};

export default Checkout;

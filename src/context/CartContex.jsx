import { createContext, useState, useEffect } from "react";

const CartContext = createContext()

const CartProvider = ({children}) =>{
    const cartLocalStorage = JSON.parse(localStorage.getItem("cart-ecommerce"))
    const [cart, setCart] = useState( cartLocalStorage ? cartLocalStorage : [])

    useEffect (()=> {
        localStorage.setItem("cart-ecommerce", JSON.stringify(cart))
    },[cart])


    const addProduct = (newProduct) => {
        const index = cart.findIndex( (productCart) => productCart.id === newProduct.id )
        if (index === -1){
            setCart([...cart, newProduct])
        }else{
            const newCart = [...cart]
            newCart[index].quantify = newCart[index].quantify + newProduct.quantify
            setCart(newCart)
        }
        
    }

    const totalQuantify = () =>{
        const quantify = cart.reduce( (total, productCart) => total + productCart.quantify, 0 )
        return quantify
    }
    const totalPrice = () =>{
        const price = cart.reduce ((total, productCart) =>total + (productCart.quantify * productCart.price), 0)
        return price
    }

    const deletProductById = (idProduct) =>
        setCart(cart.filter ((productCart) => productCart.id !== idProduct ))

    const deletCart = () =>{
        setCart([])
    }
    
    return(
        <CartContext.Provider value={ { cart, addProduct, totalQuantify, totalPrice, deletProductById, deletCart } }>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}
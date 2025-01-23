import React from 'react';
import Navbar from "./components/Navbar/Navbar"; 
import './App.css';
import banner from "./assets/banner.png";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import EjemploContadorEventListener from './components/EjemploContadorEventListener';
import { CartProvider } from './context/CartContex';
import Cart from './components/Cart/Cart';
import Checkout from './components/checkout/checkout';
import { ToastContainer } from 'react-toastify';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './footer/footer';

function App() {
    const location = useLocation();

    return (
        <div>
            
            <CartProvider>
            <Navbar />
            <ToastContainer theme="dark" position="top-center"/>
            {location.pathname === "/" && (
                <main className="banner-container">
                    <img src={banner} alt="Mudkip Banner" className="banner" />
                </main>
            )}
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:idCategory" element={<ItemListContainer/>}></Route>
                <Route path="/detail/:idProduct" element={<ItemDetailContainer/>}></Route>
                <Route path="/ejemplo" element ={<EjemploContadorEventListener/>}></Route>
                <Route path="/cart" element ={<Cart/>} />
                <Route path="/checkout" element ={<Checkout/>} />
            </Routes>
            </CartProvider>
            <Footer />
        </div>
        
    );
}

function AppWrapper() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

export default AppWrapper;




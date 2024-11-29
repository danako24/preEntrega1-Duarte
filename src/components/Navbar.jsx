import React from 'react';
import './Navbar.css';
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="logo">MUDKISTORE</div>
                <ul className="nav-links">
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#singles">Singles</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
                <div className="search-bar">
                    <input type="text" placeholder="Buscar" />
                    
                </div>
                <CartWidget />
            </nav>
        </header>
    );
};

export default Navbar;

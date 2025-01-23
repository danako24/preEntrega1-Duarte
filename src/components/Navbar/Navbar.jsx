import React from 'react';
import './Navbar.css';
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <Link  to='/' className="logo">MUDKISTORE</Link>
                <ul className="nav-links">
                    <li><Link to='/' className='root'>Inicio</Link></li>
                    <li><Link to='/category/cartas' className='category'>Cartas</Link></li>
                    <li><Link to='/category/accesorios' className='category'>Accesorios</Link></li>
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

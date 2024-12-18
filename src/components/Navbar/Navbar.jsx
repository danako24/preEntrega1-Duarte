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
                    <li><Link to='/' className='root'>inicio</Link></li>
                    <li><Link to='/category/cartas' className='category'>Singles</Link></li>
                    <li><Link to='/category/accesorios' className='category'>accesorios</Link></li>
                    <li><Link className= '#contacto'>Contacto</Link></li>
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

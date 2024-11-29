import React from 'react';
import Navbar from "./components/Navbar";
import './App.css';
import banner from './assets/banner.png';
import CardSection from "./components/CardSection";
import ItemListContainer from "./components/ItemListContainer";

function App() {
    return (
        <div>
            <Navbar />
            <ItemListContainer greeting="¡Bienvenido!" />
            <main className="banner-container">
                <img src={banner} alt="Mudkip Banner" className="banner" />
            </main>
            <CardSection />
            <div>
      
    </div>
        </div>
    );
}

export default App;

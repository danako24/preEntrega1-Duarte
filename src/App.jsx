import React from 'react';
import Navbar from "./components/Navbar/Navbar"; 
import './App.css';
import banner from "./assets/banner.png";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
    return (
        <div>
            <BrowserRouter>
            <Navbar />
            <main className="banner-container">
                <img src={banner} alt="Mudkip Banner" className="banner" />
            </main>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:idCategory" element={<ItemListContainer/>}></Route>
                <Route path="/detail/:idProduct" element={<ItemDetailContainer/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;



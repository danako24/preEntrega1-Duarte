import React from 'react';
import './CardSection.css';


const cards = [
    {
        id: 1,
        title: 'Venusaur 198/165',
        image: 'src/assets/VENUSAUR.PNG',
        price: 'Precio: 70.000',
        description: 'Scarlet and Violet EX'
    },
    {
        id: 2,
        title: 'Charizard 199/165',
        image: 'src/assets/CHARIZARD.PNG',
        price: 'Precio: 180.000',
        description: 'Scarlet and Violet EX'
    },
    {
        id: 3,
        title: 'Blastoise 200/165',
        image: 'src/assets/BLASTOISE.PNG',
        price: 'Precio: 80.000',
        description: 'Scarlet and Violet EX'
    },
];

const CardSection = () => {
    return (
        <section className="card-section">
            <h2 className="section-title">Encuentra Tus Cartas</h2>
            <div className="card-grid">
                {cards.map((card) => (
                    <div key={card.id} className="card1">
                        <h3 className="card-title">{card.title}</h3>
                        <p className="card-description">{card.description}</p>
                        <img src={card.image} alt={card.title} className="card-image" />
                        <p className="card-price">{card.price}</p>
                    </div>
                ))}
            </div>
            <div className="button-container">
                <button className="view-more-button">Ver Más...</button>
            </div>
        </section>
    );
};

export default CardSection;

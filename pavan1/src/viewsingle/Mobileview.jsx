import React from 'react';
import { useParams } from 'react-router-dom';
import { mobiles } from '../Data/Mobileslice';

const Mobileview = () => {
    const { id } = useParams()
    const product = mobiles.find((item) => item.id === id); 

    
    
    return (
        <div className="view-page">
            <div className="view-img">
                <img src={product.image} alt={product.name} />
            </div>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            
        </div>
    );
};

export default Mobileview;

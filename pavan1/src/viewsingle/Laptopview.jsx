import React from 'react';
import { useParams } from 'react-router-dom';
    
import { laptops } from '../Data/Laptopslice';

const Mobileview = () => {
    const { id } = useParams()
    const product1 = laptops.find((item) => item.id === id); 

    
    
    return (
        <div className="view-page">
            <div className="view-img">
                <img src={product1.image} alt={product1.name} />
            </div>
            <h1>{product1.name}</h1>
            <p>{product1.price}</p>
            
        </div>
    );
};

export default Mobileview;

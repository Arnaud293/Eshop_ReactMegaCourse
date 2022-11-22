import React, { useState } from 'react';
// SRC
import { productsData } from '../data/productsData';

const Product = ({productNumber}) => {

    const [thisProduct] = useState(productsData[productNumber])

    return (
        <div className='product'>
            <div className="product__infos">
                <p>{thisProduct.title}</p>
                <p className="product__infos-price">{thisProduct.price}$</p>
                <div className="product__infos-rate">
                {Array(thisProduct.rating)
                .fill()
                .map((_ , i) => (
                    <p>⭐</p>
                ))}
                </div>
            </div>
            <img src={thisProduct.img} alt={thisProduct.alt} className="product-img" />

            <button type='button' className='basket-btn'>Add to basket</button>
        </div>
    );
};

export default Product;
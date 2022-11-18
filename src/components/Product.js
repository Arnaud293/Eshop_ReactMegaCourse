import React from 'react';
// SRC
import Product1 from '../../src/assets/img/productExample.jpg';

const Product = () => {
    return (
        <div className='product'>
            <div className="product__infos">
                <p>Title</p>
                <p className="product__infos-price">$$</p>
                <div className="product__infos-rate">stars</div>
            </div>
            <img src={Product1} alt="tote-bag-black" className="product-img" />

            <button type='button' className='basket-btn'>Add to basket</button>
        </div>
    );
};

export default Product;
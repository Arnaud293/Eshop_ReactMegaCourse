import React from 'react';

// SRC

import Singularity from '../../src/assets/img/singularity.jpg';

const CheckoutProducts = () => {
    return (
        <div className='checkout__products'>
            <img src={Singularity} alt="" className="checkout__product--img" />

            <div className="checkout__product__infos">
                <p className="checkout__product--title">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Non id omnis eveniet dolore voluptatem exercitationem enim vero temporibus voluptatum veniam.
                </p>
                <p className="checkout__product--price">
                    <small>$</small>
                    <strong>price</strong>
                </p>
                <div className="checkout__product--rate">
                    <p>⭐</p>
                </div>
                <button className='basket-btn'>Remove from basket</button>
            </div>
        </div>
    );
};

export default CheckoutProducts;
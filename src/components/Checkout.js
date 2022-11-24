import React from 'react';
import CheckoutProducts from './CheckoutProducts';
import Header from './Header';
import Subtotal from './Subtotal';

const Checkout = () => {
    return (

        <div className='checkout'>
            <Header />
            <div className="checkout__left">
                <img src="" alt="" className="checkout__ad" />
                <div>
                    <h2 className="checkout__title">Your shopping basket</h2>
                    <CheckoutProducts />
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
            
        </div>
    );
};

export default Checkout;
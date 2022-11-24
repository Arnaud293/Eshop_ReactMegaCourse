import React from 'react';
import CheckoutProducts from './CheckoutProducts';
import Header from './Header';
import Subtotal from './Subtotal';

const Checkout = () => {
    return (

        <div className='checkout'>
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
                <div>
                    <h2 className="checkout__title">Your shopping basket</h2>
                    <CheckoutProducts />
                    <CheckoutProducts />
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
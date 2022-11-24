import React from 'react';

const Subtotal = () => {
    return (
        <div className='subtotal'>
            <p> Subtotal : (x items) : <strong>x $</strong></p>
            <small className='subtotal__gift'>
                <input type="checkbox"/> This order contain a gift
            </small>
            <button>Proceed to checkout</button>
        </div>
    );
};

export default Subtotal;
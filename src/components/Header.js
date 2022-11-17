import React from 'react';

// SRC
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return (
        <div className="header">
            <div className='header__logo'>
                <StorefrontIcon className='header__logo-img' fontSize='large'/>
                <h2 className='header__logo-title'>eShop</h2>
            </div>
            <div className="header__search">
                <input type="text" className='header__search-input' />
                <SearchIcon className='header__search-icon' />
            </div>
            <div className="header__nav">
                <div className="nav__item">
                    <span className="nav__item-one">Hello Guest</span>
                    <span className="nav__item-two">Sign In</span>
                </div>
                <div className="nav__item">
                    <span className="nav__item-one">Your</span>
                    <span className="nav__item-two">Shop</span>
                </div>
                <div className="nav__item">
                    <ShoppingBasketIcon fontSize='large' className='item-basket'/>
                    <span className="nav__item-two nav__basket-count">0</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
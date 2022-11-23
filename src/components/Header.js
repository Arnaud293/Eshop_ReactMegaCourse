import React from 'react';
import { NavLink } from 'react-router-dom';

// SRC
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return (
        <div className="header">
            <NavLink to='/' style={{textDecoration: "none"}}>
                <div className='header__logo'>
                    <StorefrontIcon className='header__logo-img' fontSize='large'/>
                    <h2 className='header__logo-title'>eShop</h2>
                </div>
            </NavLink>
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
                <NavLink to='/checkout' style={{textDecoration: "none"}}>
                    <div className="nav__item__basket">
                        <ShoppingBasketIcon fontSize='large' className='item-basket'/>
                        <span className="nav__item-two nav__basket-count">0</span>
                    </div>
                </NavLink>
               
            </div>
        </div>
    );
};

export default Header;
import React from 'react';

// src
import Background from '../assets/img/bg01.jpg';
import Product from './Product';

const Home = () => {
    return (
        <div className='home'>
            <div className="home__container">
                <img src={Background} alt="" className="home__container-img" />

                <div className="home__container_row">
                    <Product />
                    <Product />
                </div>
                <div className="home__container_row">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="home__container_row">
                    <Product />
                </div>
            </div>
        </div>
    );
};

export default Home;
import React from 'react';

// src
import Background from '../assets/img/bg01.jpg';
import Product from './Product';

const Home = () => {
    return (
        <div className='home'>
            <div className="home__container">
                <img src={Background} alt="background-ecommerce-draw" className="home__container-img" />

                <div className="home__container_row">
                    <Product productNumber={0}/>
                    <Product productNumber={1}/>
                </div>
                <div className="home__container_row">
                    <Product productNumber={2}/>
                    <Product productNumber={3}/>
                    <Product productNumber={4}/>
                </div>
                <div className="home__container_row">
                    <Product productNumber={5}/>
                </div>
            </div>
        </div>
    );
};

export default Home;
import React from 'react';

// src
import Background from '../assets/img/bg01.jpg';

const Home = () => {
    return (
        <div className='home'>
            <div className="home__container">
                <img src={Background} alt="" className="home__container-img" />
            </div>
        </div>
    );
};

export default Home;
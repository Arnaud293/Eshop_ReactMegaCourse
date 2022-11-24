import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Header from './components/Header';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/checkout' element={<><Header/><Checkout/></>}/>
          <Route path='/' element={<><Header/><Home /></>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
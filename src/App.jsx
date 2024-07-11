import React, { useState } from 'react';
import Login from './components/forms/Login';
import Signup from './components/forms/Signup';
import Decide from './components/forms/Decide';
import BuyerUI from './components/Buyer UI/BuyerUI';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SellerUI from './components/Seller UI/SellerUI';

const App = () => {

    console.log("dsf")
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <Login />} />
                    <Route path='/signup' element={ <Signup />} />
                    <Route path='/decide' element={ <Decide />} />
                    <Route path='/buyerUI' element={<BuyerUI />} />
                    <Route path='/sellerUI' element={<SellerUI/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;

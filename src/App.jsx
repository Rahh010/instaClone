import React, { useState } from 'react';
import Login from './components/forms/Login';
import Signup from './components/forms/Signup';
import Decide from './components/forms/Decide';
import UserNav from './components/Buyer UI/UserNav';
import SellerNav from './components/Seller UI/SellerNav';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <Login />} />
                    <Route path='/signup' element={ <Signup />} />
                    <Route path='/decide' element={ <Decide />} />
                </Routes>
            </BrowserRouter>
            
        </>
    );
};

export default App;

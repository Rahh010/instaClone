import React, { useState } from 'react';
import Login from './components/forms/Login';
import Signup from './components/forms/Signup';
import Decide from './components/forms/Decide';
// import BuyerUI from './components/Buyer UI/buyerUI';

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
            {/* <BuyerUI /> */}
        </>
    );
};

export default App;

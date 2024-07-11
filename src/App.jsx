import React, { useState } from 'react';
import Login from './components/forms/Login';
import Signup from './components/forms/Signup';
import Decide from './components/forms/Decide';
import BuyerUI from './components/Buyer UI/buyerUI';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
<<<<<<< HEAD
        <div>
            <BuyerUI/>
        </div>
=======
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <Login />} />
                    <Route path='/signup' element={ <Signup />} />
                    <Route path='/decide' element={ <Decide />} />
                </Routes>
            </BrowserRouter>
            
        </>
>>>>>>> 2ae5f3decfea812c017fb3d699032497d0db01ec
    );
};

export default App;

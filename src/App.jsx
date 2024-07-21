import React, { useState } from 'react';
import Login from './components/forms/Login';
import Signup from './components/forms/Signup';
import Decide from './components/forms/Decide';
import BuyerUI from './components/Buyer UI/BuyerUI';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SellerUI from './components/Seller UI/SellerUI';
import MsgMain from './components/Buyer UI/MsgMain';
import Profile from './components/CommonComponents/ProfilePage/Profile';

const App = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <Login />} />
                    <Route path='/signup' element={ <Signup />} />
                    <Route path='/decide' element={ <Decide />} />
                    <Route path='/buyerUI' element={<BuyerUI />} />
                    <Route path='/buyerUI/profile' element={<><Profile /></> } />
                    <Route path='/sellerUI' element={<><Decide /><SellerUI/></>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/forms/Login';
import Signup from './components/forms/Signup';
import Decide from './components/forms/Decide';
import BuyerUI from './components/Buyer UI/BuyerUI';
import SellerUI from './components/Seller UI/SellerUI';
import Profile from './components/CommonComponents/ProfilePage/Profile';
import UserNav from './components/Buyer UI/UserNav';
import SellerNav from './components/Seller UI/SellerNav';

const App = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={ <Login />} />
                <Route path='/signup' element={ <Signup />} />
                <Route path='/decide' element={ <Decide />} />
                <Route path='/buyer/*' element={<BuyerUI />} />
                <Route path='/buyerUI/profile' element={<><Profile /></> } />
                <Route path='/sellerUI' element={<><Decide /><SellerUI/></>}/>
            </Routes>
        </>
    );
};

export default App;

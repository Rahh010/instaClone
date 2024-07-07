import React, { useState } from 'react';
import Login from './components/forms/Login';
import Signup from './components/forms/Signup'
import Decide from './components/forms/Decide'
import UserNav from './components/Buyer UI/UserNav';

const App = () => {
    return (
        <div>
            {/* <Login /> */}
            {/* <Signup /> */}
            <Decide />
            {/* <UserNav /> */}
        </div>
    );
};

export default App;

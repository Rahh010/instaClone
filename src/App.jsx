import { Routes, Route } from 'react-router-dom'; // Correct import statement
import Login from './components/forms/Login';
import Signup from './components/forms/Signup';
import Decide from './components/forms/Decide';
import BuyerUI from './components/Buyer UI/BuyerUI';
import SellerUI from './components/Seller UI/SellerUI';

const App = () => {
    return (
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/decide' element={<Decide />} />
                <Route path='/buyer/*' element={<BuyerUI />} /> {/* Ensure consistent casing */}
                <Route path='/seller/*' element={<SellerUI />} /> {/* Use '/seller/*' */}
            </Routes>
    );
};

export default App;

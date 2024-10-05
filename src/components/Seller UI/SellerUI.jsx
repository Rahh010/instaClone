import React from "react";
import { Routes, Route } from "react-router-dom"; // Ensure to import Routes and Route
import SellerNav from "./SellerNav";
import HomeMain from "../Common Component/HomePage/HomeMain";
import ProfileMain from "../Common Component/Profile/ProfileMain";
import SalesMain from "../Common Component/Seller/SalesMain";

const SellerUI = () => {
    return (
        <div>
            <SellerNav />
            <Routes>
                <Route path="/" element={<HomeMain />} />
                <Route path="profile" element={<ProfileMain />} />
                <Route path="sales" element={<SalesMain />} />
            </Routes>
        </div>
    );
}

export default SellerUI;

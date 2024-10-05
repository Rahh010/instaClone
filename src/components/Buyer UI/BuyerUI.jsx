import React from "react";
import { Routes, Route } from "react-router-dom";
import UserNav from "./UserNav";
import HomeMain from "../Common Component/HomePage/HomeMain";
import Purchase from "../Common Component/Buyer/Purchase";
import ProfileMain from "../Common Component/Profile/ProfileMain";

const BuyerUI = () => {
    return (
        <div className="constantNav">
            <UserNav />
            <Routes>
                {/* When the URL is "/Buyer", render HomeMain */}
                <Route path="/" element={<HomeMain />} />

                {/* When the URL is "/Buyer/Purchase", render Purchase */}
                <Route path="purchase" element={<Purchase />} />
                <Route path="profile" element={<ProfileMain />} />
            </Routes>
        </div>
    );
}

export default BuyerUI;

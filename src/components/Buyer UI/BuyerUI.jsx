import React from "react";
import MsgMain from "./MsgMain";
import UserNav from "./UserNav";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomeMain from "./HomePage/HomeMain";

const BuyerUI = () => {
    return (
        <>
        <div>
            <UserNav />
        </div>
        <div>
            <HomeMain />
        </div>
        </>
    )
}

export default BuyerUI;
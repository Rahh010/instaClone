import React from "react";
import MsgMain from "../CommonComponents/MessagePage/MsgMain";
import UserNav from "./UserNav";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomeMain from '../CommonComponents/HomePage/HomeMain'

const BuyerUI = () => {
    return (
        <>
        <div>
            <Routes>
                <Route path="/" element={ <HomeMain /> }/>
                <Route path="/messages/*" element={ <MsgMain /> }/>     
            </Routes>
        </div>
        </>
    )
}

export default BuyerUI;
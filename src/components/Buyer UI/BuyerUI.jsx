import React from "react";
import MsgMain from "./MsgMain";
import UserNav from "./UserNav";
import {Route, Routes} from "react-router-dom";
import "./BuyerUI.css";

const BuyerUI = () => {
    return (
        <>
        <div className="constantNav">
            <UserNav />
        </div>
        <div className="changeable">
            <Routes>
                < Route path="messages" element={MsgMain}/>            
            </Routes> 
        </div>
        </>
    )
}

export default BuyerUI;
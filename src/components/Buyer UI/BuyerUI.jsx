import React from "react";
import MsgMain from "./MsgMain";
import UserNav from "./UserNav";
// import "./BuyerUI.css";

const BuyerUI = () => {
    return (
        <>
        <div className="constantNav">
            <UserNav />
        </div>
        <div className="changeable">
            < MsgMain/> 
        </div>
        </>
    )
}

export default BuyerUI;
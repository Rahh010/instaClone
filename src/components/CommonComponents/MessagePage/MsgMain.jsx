import React from "react";
import MsgChats from "./MsgChats";
import './MsgMain.css'
import MsgArea from "./MsgArea";
import { Route, Routes } from "react-router-dom";

let MsgMain = () => {
    return (
        <>
            <section className="msg-main">
                <Routes>
                    <Route path="/" element={<MsgChats />}/>
                    <Route path="/dm" element={<MsgArea />}/>
                </Routes>
            </section>
        </>
    )
}

export default MsgMain;
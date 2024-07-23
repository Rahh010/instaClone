import React from "react";
import MsgChats from "./MsgChats";
import './MsgMain.css'

let MsgMain = () => {
    return (
        <>
            <section className="msg-main">
                <MsgChats />
            </section>
        </>
    )
}

export default MsgMain;
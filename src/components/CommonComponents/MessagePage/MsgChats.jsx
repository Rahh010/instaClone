import React from "react";
import './MsgChats.css'
import MsgSingle from "./MsgSingle";

let MsgChats = () => {
    return (
        <>
            <section className="msg-chats-main">
                <h4 className="msg-chats-username">username</h4>
                <div className="msg-chats-secondary">
                    <p id="msg-txt">Messages</p>
                    <p id="req-txt">Requests</p>
                </div>
                <section>
                    <MsgSingle />
                    <MsgSingle />
                    <MsgSingle />
                    <MsgSingle />
                    <MsgSingle />
                    <MsgSingle />
                    <MsgSingle />

                </section>
            </section>
        </>
    )
}

export default MsgChats;
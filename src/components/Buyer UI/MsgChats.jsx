import React from "react";
import './MsgChats.css'

let MsgChats = () => {
    return (
        <>
            <section className="msg-chats-main">
                <h4 className="msg-chats-username">username</h4>
                <div className="msg-chats-secondary">
                    <p id="msg-txt">Messages</p>
                    <p id="req-txt">Requests</p>
                </div>
            </section>
        </>
    )
}

export default MsgChats;
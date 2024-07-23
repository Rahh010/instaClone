import React from "react";
import './MsgChats.css'
import MsgSingle from "./MsgSingle";
import { MsgList } from "./msg";

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
                    { MsgList.map((e, i) => {
                        return <MsgSingle key={i} data={{src: e.src, name: e.username}} />
                    }) }

                </section>
            </section>
        </>
    )
}

export default MsgChats;
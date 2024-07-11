import React from "react";
import "./MsgsView.css";

const MsgsView = () => {
    return (
        <>
        <div className="msgBox">
        <div className="msgHeading">
            <h4>Messages</h4>
        </div>
        <div className="chats">
            <div className="chatBox">
                <img src="" alt="" className="proPic"/>
                <div className="chatBox_text">
                    <p>id_name</p>
                    <p>last message</p>
                </div>
                <p className="indicator">time</p>
            </div>
        </div>
        </div>
        </>
    )
}

export default MsgsView;
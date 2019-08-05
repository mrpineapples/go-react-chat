import React, { useState, useEffect } from "react";
import { connect, sendMsg } from "./api/index";
import Header from "./components/Header";
import ChatHistory from "./components/ChatHistory";

const App = props => {
    const [chatHistory, setChatHistory] = useState([]);

    useEffect(() => {
        connect(msg => {
            console.log("New Message")
            setChatHistory([...chatHistory, msg])
            console.log("Chat History: ", chatHistory)
        });
    }, [chatHistory]);

    const sendMsgHandler = () => {
        console.log("hello")
        sendMsg("hello")
    }

    return (
        <div>
            <Header />
            <ChatHistory chatHistory={chatHistory} />
            <button onClick={sendMsgHandler}>Hit</button>
        </div>
    )
}

export default App;
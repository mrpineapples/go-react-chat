import React, { useState, useEffect } from "react";
import { connect, sendMsg } from "./api/index";
import Header from "./components/Header";
import ChatHistory from "./components/ChatHistory";
import ChatInput from "./components/ChatInput";

const App = (props) => {
    const [chatHistory, setChatHistory] = useState([]);

    useEffect(() => {
        connect(msg => {
            console.log("New Message")
            setChatHistory([...chatHistory, msg])
            console.log("Chat History: ", chatHistory)
        });
    }, [chatHistory]);

    const sendMessage = (e) => {
        const enter = 13;

        if (e.keyCode === enter) {
            sendMsg(e.target.value);
            e.target.value = "";
        }
    }

    return (
        <div>
            <Header />
            <ChatHistory chatHistory={chatHistory} />
            <ChatInput send={sendMessage} />
        </div>
    )
}

export default App;
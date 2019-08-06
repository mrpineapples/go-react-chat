import React, { useEffect } from "react";
import styled from "styled-components";
import Message from "./Message";

const History = styled.div`
    max-height: 300px;
    background-color: #f7f7f7;
    margin: 0;
    padding: 20px;
    overflow-y: scroll;
  
    h2 {
        margin: 0;
        padding: 0;
    }
`

const ChatHistory = props => {
    useEffect(() => {
        let chatDiv = document.getElementById("chat");
        chatDiv.scrollTop = chatDiv.scrollHeight;
    })

    const messages = props.chatHistory.map((msg, i) => <Message key={i} message={msg.data} />);

    return (
        <History id="chat">
            <h2>Chat History</h2>
            {messages}
        </History>
    )
}

export default ChatHistory;

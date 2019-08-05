import React from "react";
import styled from "styled-components";

const History = styled.div`
    background-color: #f7f7f7;
    margin: 0;
    padding: 20px;
  
    h2 {
        margin: 0;
        padding: 0;
    }
`

const ChatHistory = props => {
    const messages = props.chatHistory.map((msg, index) => (
        <p key={index}>{msg.data}</p>
    ));

    return (
        <History>
            <h2>Chat History</h2>
            {messages}
        </History>
    )
}

export default ChatHistory;

import React from "react";
import styled from "styled-components";

const StyledMessage = styled.div`
    display: block;
    background-color: white;
    margin: 10px auto;
    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.2);
    padding: 10px 20px;
    border-radius: 5px;
`

const Message = (props) => {
    let message = JSON.parse(props.message);
    return <StyledMessage>{message.body}</StyledMessage>;
}

export default Message;
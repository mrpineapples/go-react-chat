import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    background-color: #15223b;
    width: 100%;
    margin: 0;
    padding: 10px;
    color: #ffffff;

    h2 {
        margin: 0;
        padding: 0;
    }
`

const Header = () => (
    <StyledHeader>
        <h2>Realtime Chat App</h2>
    </StyledHeader>
);

export default Header;
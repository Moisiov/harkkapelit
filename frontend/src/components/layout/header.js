import React from 'react'
import styled from 'styled-components';

const HeaderStyle = styled.header`
    width: 100%;
    padding: 0.5em 1em;
    display: flex;
    height: 64px;
    position: fixed;
    align-items: center;
    background-color: #1a5418;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
    z-index: 1;
`;

const Header = () => {
    return (
        <HeaderStyle>
            <p>Header</p>
        </HeaderStyle>
    )
}

export default Header
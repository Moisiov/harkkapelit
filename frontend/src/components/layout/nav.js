import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const NavStyle = styled.nav`
    padding: 1em;
    background: #fff2cf;
    @media (max-width: 700px) {
        padding-top: 64px;
    }
    @media (min-width: 700px) {
        position: fixed;
        width: 220px;
        height: calc(100% - 64px);
        overflow: hidden;
    }
`
const NavList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    line-height: 2;
    a {
        text-decoration: none;
        font-weight: bold;
        font-size: 1em;
        color: #2b2b2b;
    }
    a:visited {
        color: #2b2b2b;
    }
    a:hover,
    a:focus {
        color: #555555;
    }
`

const Nav = () => {
    return (
        <NavStyle>
            <NavList>
                <li>
                    <Link to="/">Link1</Link>
                </li>
                <li>
                    <Link to="/">Link2</Link>
                </li>
                <li>
                    <Link to="/">Link3</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </NavList>
        </NavStyle>
    )
}

export default Nav
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Link1</Link>
                </li>
                <li>
                    <Link to="/">Link2</Link>
                </li>
                <li>
                    <Link to="/">Link3</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
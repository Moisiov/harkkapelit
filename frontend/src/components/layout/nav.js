import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='layoutNav'>
            <ul className='navList'>
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
            </ul>
        </div>
    )
}

export default Nav
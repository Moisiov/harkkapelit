import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/userContext'

const Nav = () => {
    const { user } = useContext(UserContext)
    return (
        <div className='layoutNav'>
            <ul className='navList'>
                <li>
                    <Link to="/">Etusivu</Link>
                </li>
                <li>
                    <Link to="/">Ilmoitukset</Link>
                </li>
                {
                    user ? (<li>
                    <Link to="/">Profiili</Link>
                </li>) : <></>
                }
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav
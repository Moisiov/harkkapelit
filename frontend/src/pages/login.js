import { useState, useContext } from 'react'
import LoginWithGoogle from '../components/auth/loginWithGoogle'
import Card from '../components/generic/cards/card'
import { UserContext } from '../contexts/userContext'

const Login = () => {
    const { user, setUser } = useContext(UserContext)

    const handleLogout = () => {
        setUser(null)
    }

    return (
        <div className='loginPage'>
            <Card title='Login'>
            {
                user ? (
                    <div>
                        <p>Logged in as {user.email}</p>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ) : <LoginWithGoogle setLoginData={setUser} />
            }
            </Card>
        </div>
    )
}

export default Login
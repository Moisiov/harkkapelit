import React, { useState } from 'react'
import LoginWithGoogle from '../components/auth/loginWithGoogle'

const Login = () => {
    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')
            ? JSON.parse(localStorage.getItem('loginData'))
            : null
    )

    const handleLogout = () => {
        localStorage.removeItem('loginData')
        setLoginData(null)
    }

    return (
        <div className='loginPage'>
            {
                loginData ? (
                    <div>
                        <p>Logged in as {loginData.email}</p>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ) : <LoginWithGoogle setLoginData={setLoginData}/>
            }
        </div>
    )
}

export default Login
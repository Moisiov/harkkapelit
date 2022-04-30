import { useState } from 'react'
import LoginWithGoogle from '../components/auth/loginWithGoogle'
import Card from '../components/generic/cards/card'

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
            <Card className='center'>
            {
                loginData ? (
                    <div>
                        <p>Logged in as {loginData.email}</p>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ) : <LoginWithGoogle setLoginData={setLoginData} />
            }
            </Card>
        </div>
    )
}

export default Login
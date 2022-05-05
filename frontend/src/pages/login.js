import { useContext } from 'react'
import LoginWithGoogle from '../components/auth/loginWithGoogle'
import Card from '../components/generic/cards/card'
import { UserContext } from '../contexts/userContext'
import { get } from '../common/httpRequests'

const Login = () => {
    const { user, setUser } = useContext(UserContext)

    const handleLogout = () => {
        get('/api/logout').then((res) => {
            setUser(null)
        })
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
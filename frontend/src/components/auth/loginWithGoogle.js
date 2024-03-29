import GoogleLogin from 'react-google-login'
import { post } from '../../utils/httpRequests'

const LoginWithGoogle = ({ setLoginData }) => {
    const handleLogin = async (googleData) => {
        const body = JSON.stringify({ token: googleData.tokenId })
        post('/api/login/google', body).then((data) => {
            setLoginData(data.user)
        })
    }

    const handleFailure = (result) => {
        console.log(result)
    }

    return <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Kirjaudu Google-tunnuksella"
        onSuccess={handleLogin}
        onFailure={handleFailure}
        cookiePolicy='https://herokuapp.com'
        />
}

export default LoginWithGoogle
import GoogleLogin from 'react-google-login'
import { post } from '../../common/httpRequests'

const LoginWithGoogle = ({ setLoginData }) => {
    const handleLogin = async (googleData) => {
        const body = JSON.stringify({ token: googleData.tokenId })
        const data = await post('api/login/google', body)
        setLoginData(data)
    }

    const handleFailure = (result) => {
        console.log(result)
    }

    return <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={handleFailure}
        cookiePolicy='single_host_origin'
        />
}

export default LoginWithGoogle
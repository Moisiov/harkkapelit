import GoogleLogin from 'react-google-login'

const LoginWithGoogle = ({ setLoginData }) => {
    const handleLogin = async (googleData) => {
        const res = await fetch('api/login/google', {
            method: 'POST',
            body: JSON.stringify({
                token: googleData.tokenId
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        setLoginData(data)
        localStorage.setItem('loginData', JSON.stringify(data))
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
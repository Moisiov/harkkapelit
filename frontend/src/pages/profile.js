import { useContext } from 'react'
import { UserContext } from '../contexts/userContext'

const Profile = () => {
    const { user } = useContext(UserContext)

    return (
        <div>
            <p>Profiili</p>
            <p>Nimi: {user.name}</p>
        </div>
    )
}

export default Profile
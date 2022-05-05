import { useContext } from 'react'
import IconButton from '../components/generic/buttons/iconButton'
import Icon from '../components/generic/icons/icon'
import Tooltip from '../components/generic/helpers/tooltip'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../contexts/userContext'
import GamesList from '../components/games/gamesList'

const Games = () => {
    let navigate = useNavigate()
    const { user } = useContext(UserContext)

    const newAd = (e) => {
        e.preventDefault()
        navigate('../newad', { replace: true })
    }

    return (
        <div className='gamesPage'>
            <div className='topBar'>
                { user ? (
                    <Tooltip content='Uusi ilmoitus' direction='left'>
                        <IconButton handleClick={newAd}>
                            <Icon icon='plus' />
                        </IconButton>
                    </Tooltip>
                ) : (<></>)}
            </div>
            <GamesList />
        </div>
    )
}

export default Games
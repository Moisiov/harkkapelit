import IconButton from '../components/generic/buttons/iconButton'
import Icon from '../components/generic/icons/icon'
import Tooltip from '../components/generic/helpers/tooltip'
import { useNavigate } from 'react-router-dom'

const Games = () => {
    let navigate = useNavigate()

    const newAd = (e) => {
        e.preventDefault()
        navigate('../newad', { replace: true })
    }

    return (
        <div className='gamesPage'>
            <div className='topBar'>
                <Tooltip content='Uusi ilmoitus' direction='left'>
                    <IconButton handleClick={newAd}>
                        <Icon icon='plus' />
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    )
}

export default Games
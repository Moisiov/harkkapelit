import IconButton from '../components/generic/buttons/iconButton'
import Icon from '../components/generic/icons/icon'
import Tooltip from '../components/generic/helpers/tooltip'

const Games = () => {
    return (
        <div className='gamesPage'>
            <div className='topBar'>
                <Tooltip content='Lisää uusi ilmoitus' direction='left'>
                    <IconButton>
                        <Icon icon='plus' />
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    )
}

export default Games
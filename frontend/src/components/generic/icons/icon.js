import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const Icon = ({icon}) => {
    const selectIcon = () => {
        var iconComponent = faQuestionCircle

        switch (icon) {
            case 'plus':
                iconComponent = faPlusCircle
                break
            default:
                break
        }

        return iconComponent
    }

    return (
    <div>
        <FontAwesomeIcon icon={selectIcon()}/>
    </div>
    )
}

export default Icon
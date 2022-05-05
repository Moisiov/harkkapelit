import Card from '../components/generic/cards/card'
import NewGameForm from '../components/forms/newGameForm'

const NewGame = () => {
    return (
        <div className='newAdPAge'>
            <Card title='Uusi ilmoitus'>
                <NewGameForm />
            </Card>
        </div>
    )
}

export default NewGame
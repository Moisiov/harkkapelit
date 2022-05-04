import Card from '../components/generic/cards/card'
import NewAdForm from '../components/forms/newAdForm'

const NewAd = () => {
    return (
        <div className='newAdPAge'>
            <Card title='Uusi ilmoitus'>
                <NewAdForm />
            </Card>
        </div>
    )
}

export default NewAd
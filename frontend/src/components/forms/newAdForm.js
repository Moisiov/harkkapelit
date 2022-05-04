import { useState, useEffect } from 'react'
import { get } from '../../common/httpRequests'

const NewAdForm = () => {
    const [sports, setSports] = useState([])

    useEffect(() => {
        get('/api/sport/getall').then((data) => {
            setSports(data)
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(sports)
    }

    return (
        <div className='formWrapper'>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Otsikko</p>
                        <input name="title" />
                    </label>
                    <label>
                        <p>Kuvaus</p>
                        <input name="description" />
                    </label>
                </fieldset>
                <button type="submit">Tallenna</button>
            </form>
        </div>
    )
}

export default NewAdForm
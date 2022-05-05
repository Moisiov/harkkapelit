import { useState, useEffect } from 'react'
import { get, post } from '../../common/httpRequests'
import { useNavigate } from 'react-router-dom'

const NewGameForm = () => {
    let navigate = useNavigate()

    const [sports, setSports] = useState([])
    const [inputs, setInputs] = useState({
        title: '',
        sport: null,
        description: '',
        generation: '',
        gameDates: []
    })

    useEffect(() => {
        get('/api/sport/getall').then((data) => {
            setSports(data)
        })
    }, [])

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputs(values => ({ ...values, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const inputData = { ...inputs, sport: parseInt(inputs.sport), generation: parseInt(inputs.generation)}
        const body = JSON.stringify(inputData)
        post('/api/game/create', body).then((data) => {
            console.log(data)
            // Change to game ad page later
            navigate('../games', { replace: true })
        })
    }

    return (
        <div className='formWrapper'>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Otsikko</p>
                        <input name='title' onChange={handleChange} />
                    </label>
                    <label>
                        <p>Laji</p>
                        <select name='sport' onChange={handleChange}>
                            <option value={null}></option>
                            {sports.map((sport) => {
                                return <option value={sport.id}>{sport.name}</option>
                            })}
                        </select>
                    </label>
                    <label>
                        <p>Kuvaus</p>
                        <input name='description' onChange={handleChange} />
                    </label>
                    <label>
                        <p>Ikäluokka</p>
                        <input name='generation' type='text' pattern='[0-9]*'  onChange={handleChange} />
                    </label>
                </fieldset>
                <button type='submit'>Tallenna</button>
            </form>
        </div>
    )
}

export default NewGameForm
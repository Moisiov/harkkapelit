import { useState, useEffect } from 'react'
import { get } from '../../common/httpRequests'
import Card from '../generic/cards/card'

const GamesList = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        get('/api/game/getall').then((res) => {
            setGames(res)
        })
    }, [])

    return (
        <div className='gamesListWrapper'>
            {
                games.map(game => {
                    return <Card title={game.title} key={game.id}>{game.description}</Card>
                })
            }
        </div>
    )
}

export default GamesList
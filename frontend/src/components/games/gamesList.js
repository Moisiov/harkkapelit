import { useState, useEffect } from 'react'
import { get } from '../../utils/httpRequests'
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
            <Card title='Ilmoitukset '>
                <table className='gamesTable'>
                    <thead className='headerRow'>
                        <tr>
                            <th>Otsikko</th>
                            <th>Ikäluokka</th>
                            <th>Taitotaso</th>
                            <th>Pelipäivä</th>
                        </tr>
                    </thead>
                    <tbody className='body'>
                        {
                            games.map(game => {
                                return (
                                    <tr key={game.id}>
                                        <th>{game.title}</th>
                                        <th>{game.generation}</th>
                                        <th>{game.skillLevel}</th>
                                        <th>{game.gameDate}</th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </Card>
        </div>
    )
}

export default GamesList
import { useState, useEffect } from 'react'
import { get } from '../../utils/httpRequests'
import Card from '../generic/cards/card'
import { getSkillLevels } from '../../utils/skillLevels'

const GamesList = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        get('/api/game/getall').then((res) => {
            const modifiedGames = res.map((game) => {
                return {
                    ...game,
                    skillLevel: getSkillLevels().find(el => el.value === game.skillLevel).skillLevel
                }
            })

            setGames(modifiedGames)
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
                    <tbody className='tableBody'>
                        {
                            games.map(game => {
                                return (
                                    <tr key={game.id}>
                                        <td>{game.title}</td>
                                        <td>{game.generation}</td>
                                        <td>{game.skillLevel}</td>
                                        <td>{game.gameDate}</td>
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
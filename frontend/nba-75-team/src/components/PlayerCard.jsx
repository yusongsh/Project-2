import React from 'react'
import './playercard.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'




function PlayerCard(props) {

let navigate = useNavigate()
const showPlayers = (player) => {
    navigate(`${player._id}`)
} 

const [players, setPlayers] = useState([])

const getPlayer = async () => {
    const res = await axios(`http://localhost:3001/api/players`)
    // const data = await res.json()
    setPlayers(res.data)
    // console.log(res.data)
}

useEffect(() => {
    getPlayer()
},[])

// console.log(players)

  return (
      <div className='playerList-wrapper' >
            {players.map((player) => {
                return (
                    <div className='playerList-content' key={player._id} onClick={() => showPlayers(player)} >
                        <div className='playerList-image'>
                            <img id='playerList-profile' src={player.image} alt={player.name}/>
                        </div>
                        <div className='playerList-bio'>
                            <h5 id='playerList-name' >{player.name}</h5>
                            <h5 id='playerList-hightlight'>{player.bioHighlight}</h5>
                        </div>
                    </div>
        )})}
    </div>
  )
}

export default PlayerCard
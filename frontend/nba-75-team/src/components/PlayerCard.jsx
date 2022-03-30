import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


function PlayerCard() {

const [players, setPlayers] = useState([])

const getPlayer = async () => {
    const res = await axios(`http://localhost:3001/api/players`)
    // const data = await res.json()
    setPlayers(res.data)
    console.log(res.data)
}

useEffect(() => {
    getPlayer()
},[])

// console.log(players)

  return (
      <div>
      <h1>Waaat up</h1>
            {players.map((player) => {
                return (
                    <div key={player._id}>
                        <img src={player.image} alt={player.name} style={{width:"200px"}}/>
                        <h5>Name: {player.name}</h5>
                    </div>
        )})}
    </div>
  )
}

export default PlayerCard
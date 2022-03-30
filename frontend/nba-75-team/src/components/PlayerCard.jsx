import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


function PlayerCard(props) {

const [players, setPlayers] = useState([])

const getPlayer = async () => {
    const res = await axios(`http://localhost:3001/api/players`)
    // const data = await res.json()
    setPlayers(res.data.players)
    console.log(res)
}

useEffect(() => {
    getPlayer()
},[])


  return (
      <div>
          <h1>Hello</h1>
            {players.map((player) => {
                return (
                    <div key={players._id}>
                        <img src={players.image} alt={player.name}/>
                        <h5>{players.name}</h5>
                    </div>
        )})}
    </div>
  )
}

export default PlayerCard
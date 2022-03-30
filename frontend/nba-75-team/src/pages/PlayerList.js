import './style/playerList.css'
import React from 'react'
import PlayerCard from '../components/PlayerCard'

function PlayerList() {
  return (
    <div className='PlayerList-wrapper'>
      <div className='playerlist-content'>
          <div className='playerlist-image card-8'></div>
            <p className='playlist-highlight'>Selected for being pioneers that have helped shape, define, and redefine the game. This is the NBA 75th Anniversary Team.</p>
      </div>

    <div>
      <PlayerCard />
    </div>

    </div>

  
  )
}

export default PlayerList
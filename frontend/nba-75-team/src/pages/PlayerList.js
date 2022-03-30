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

    <div>
      <h5 style={{fontSize:'16px',color:'#111', textAlign:'center', padding:'100px 0 120px'}}>Images from this website are from: <a style={{color:'#FF4655'}} href='https://www.nba.com/75/team' target='_blank' rel='noreferrer'> www.nba.com/75/team</a></h5>
    </div>

    </div>

  
  )
}

export default PlayerList
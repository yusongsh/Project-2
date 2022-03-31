import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate, useParams} from 'react-router-dom'
import Position from '../components/Position'


function ViewByPosition(props) {


  return (
    
    <div className='positionList-wrapper' >
      <div className='playerlist-content'>
          <div className='playerlist-image card-8'></div>
            <p className='playlist-highlight'>Selected for being pioneers that have helped shape, define, and redefine the game. This is the NBA 75th Anniversary Team.(In no particular order)</p>
      </div>
      <div>
      <Position /> 
      </div> 
    </div>
  )
}

export default ViewByPosition
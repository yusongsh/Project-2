import React from 'react'
import './playercard.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'




function PisitionDetails() {


const [ positions, setPosition ] = useState([])
const [ players, setPlayers ] = useState([])

const getPosition = async () => {
    const res = await axios(`http://localhost:3001/api/positions`)
    setPosition(res.data)
    // console.log(res.data)
}

const getPlayers = async () => {
    const res = await axios(`http://localhost:3001/api/players`)
    setPlayers(res.data)
    // console.log(res.data)
}

useEffect(() => {
    getPosition()
    getPlayers()
},[])


const guards = players.filter((player, index) => 
    player.position === positions[0]._id
    )

const forwards = players.filter((player, index) => 
    player.position === positions[1]._id
    )

const centers = players.filter((player, index) => 
    player.position === positions[2]._id
    )


  return (
        <div className='playerPosition-wrapper' >
             <div className='allguards-wrapper'>
                <div className='allguards-intro'>
                    <h1>Guard</h1>                        
                    <p className='small-p'>There are also two types of guard. The point guard runs the offense and usually is the team’s best dribbler and passer. The point guard defends the opponent’s point guard and tries to steal the ball. The shooting guard is usually the team’s best shooter. The shooting guard can make shots from long distance and also is a good dribbler.</p>
                </div> 
               <div className='allguards'>
                    {guards.map((guard, index) => {
                        return (
                        <div className='guard-image' key={index}>
                            <img id='guard-image' src={guard.image} alt={''}></img>
                            <h3 className='small-h3'>{guard.name}</h3>
                        </div>
                                )
                        })}
                </div>
            </div> 

            <div className='allforwards-wrapper'>
                <div className='allforwards-intro'>
                    <h1>Forward</h1>
                    <p className='small-p'>There are two types of forward. The power forward does many of the things a center does, playing near the basket while rebounding and defending taller players. But power forwards also take longer shots than centers. The small forward plays against small and large players. They roam all over on the court. Small forwards can score from long shots and close ones.</p>
                </div>
                <div className='allforwards'>
                    {forwards.map((forward, index) => {
                        return (
                        <div className='forward-image' key={index}>
                            <img id='forward-image' src={forward.image} alt={''}></img>
                            <h3 className='small-h3'>{forward.name}</h3>
                        </div>
                                )
                        })}
                </div>
            </div>
            
            <div className='allcenters-wrapper'>
                <div className='allcenters-intro'>
                    <h1>Center</h1>
                    <p className='small-p'>The center is the tallest player on each team, playing near the basket. On offense, the center tries to score on close shots and rebound. But on defense, the center tries to block opponents’ shots and rebound their misses.</p>
                </div>
                <div className='allcenters'>
                    {centers.map((center, index) => {
                        return (
                        <div className='center-image' key={index}>
                            <img id='center-image' src={center.image} alt={''}></img>
                            <h3 className='small-h3'>{center.name}</h3>
                        </div>
                                )
                        })}
                </div>
            </div>
                   
        </div>
        

  )
}

export default PisitionDetails
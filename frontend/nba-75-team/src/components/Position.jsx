import React from 'react'
import './playercard.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'




function PisitionDetails() {

// let navigate = useNavigate()


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
             {/* <div className='allguards-wrapper'>
                <div className='allguards-intro'>
                    <h1>{positions[0].name}</h1>                        
                    <p className='small-p' >{positions[0].description}</p>
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
                    <h1>{positions[1].name}</h1>
                    <p className='small-p'>{positions[1].description}</p>
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
                    <h1>{positions[2].name}</h1>
                    <p className='small-p'>{positions[2].description}</p>
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
            </div> */}
                   
        </div>
        

  )
}

export default PisitionDetails
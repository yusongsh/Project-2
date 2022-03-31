import React from 'react'
import './playercard.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams} from 'react-router-dom'




function PisitionDetails() {

// let navigate = useNavigate()
// const showPositions = (position) => {
//     navigate(`${position._id}`)
// } 

const [ positions, setPosition ] = useState([])
const [ players, setPlayers ] = useState([])

const getPosition = async () => {
    const res = await axios(`http://localhost:3001/api/positions`)
    // const data = await res.json()
    setPosition(res.data)
    // console.log(res.data)
}

const getPlayers = async () => {
    const res = await axios(`http://localhost:3001/api/players`)
    // const data = await res.json()
    setPlayers(res.data)
    // console.log(res.data)
}

// const getPlayers = async () => {
//     const res = await axios(`http://localhost:3001/api/players/position`)
//     // const data = await res.json()
//     setPlayers(res.data)
//     // console.log(res.data)
// }

useEffect(() => {
    getPosition()
    getPlayers()
},[])



const guard = players.filter((player, index) => 
    player.position === positions[0]._id
    )

const forward = players.filter((player, index) => 
    player.position === positions[1]._id
    )

const center = players.filter((player, index) => 
    player.position === positions[2]._id
    )



// console.log(players.position)

// const [selectPlayer, setSelectPlyer] = useState('')

// useEffect(() => {
//     let selectPlayer = players.filter(
//         (player) => player.position_id === parseInt(id)
//     )
//     setSelectPlyer(selectPlayer)
// })



// console.log(players)

  return (
      <div className='playerList-wrapper' >
            {positions.map((position) => {
                return (
                    <div className='playerList-content' key={position._id} 
                    // onClick={() => showPositions(position)} 
                    >
                        <div className='playerList-bio'>
                            <h5 id='playerList-name' >{position.name}</h5>
                            <h5 id='playerList-hightlight'>{position.description}</h5>
                        </div>
                    </div>
        )})}
    </div>
  )
}

export default PisitionDetails
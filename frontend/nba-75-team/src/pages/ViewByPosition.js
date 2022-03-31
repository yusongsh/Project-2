import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate, useParams} from 'react-router-dom'



function ViewByPosition(props) {


  const [positions, setPositions] = useState([])
  const [players, setPlayers] = useState([])

  const getPostions = async () => {
    const res = await axios(`http://localhost:3001/api/positions`)
    setPositions(res.data)
    // console.log(res.data)
  }

  
  const getPlayer = async () => {
    const res = await axios(`http://localhost:3001/api/players`)
    setPlayers(res.data)
    // console.log(res.data)
  }

  useEffect(() => {
    getPostions()
    getPlayer()
  },[])


const [selectedPlayers, setselectedPlayers] = useState('')


let {id} = useParams()

    useEffect(() => {
        let selectedPlayers = players.filter(
        (player) => player.position === (id)
        )
        setselectedPlayers(selectedPlayers)
    }, [players, id])





  return (
    <div className='positionList-wrapper' >
        {positions.map((position) => {
            return (
              <div className='playerList-content' key={position._id}>
                <h1>{position.name}</h1>
                <p>{position.description}</p>
              </div>

            )})}
    </div>
  )
}

export default ViewByPosition
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../pages/style/playerdetails.css'



function PlayerDetails(props) {
    
    const [ selectedPlayer, setPlayer ] = useState('')

   
    let { id } = useParams()
    console.log(id)

    useEffect(() => {
        let selectedPlayer = props.players.find(
            (player) => player._id === (id)
        )
        setPlayer(selectedPlayer)
    },[props.players, id])



    // console.log(selectedPlayer)


  return selectedPlayer ? (
    <div className='details-container'>
        <div className='details-image'>
            <img className='details-hero' src={selectedPlayer.image} alt={selectedPlayer.name} />
        </div>
        <div className='details-content'>
            <h1 id='player-name'>// {selectedPlayer.name}</h1>
            <div className='stats'>
                <h4 className='stats-1'>Points: {selectedPlayer.points}</h4>
                <h4 className='stats-1'>Rebounds: {selectedPlayer.rebounds}</h4>
                <h4 className='stats-1'>Assists: {selectedPlayer.assists}</h4>
                <h4 className='stats-1'>Championships: {selectedPlayer.championships}</h4>
                <h4 className='stats-1'>HoFYear: {selectedPlayer.HoFYear}</h4>
            </div>
            <h3 className='stats-2'>{selectedPlayer.bioHighlight}</h3>
            <h3 className='stats-3'>{selectedPlayer.biography}</h3>
        </div>
        
    </div>
  ) : <div>Loading</div>
  
  }


// function PlayerDetails(){

// return(
//     <h1>this is the page </h1>
// )

// }

export default PlayerDetails


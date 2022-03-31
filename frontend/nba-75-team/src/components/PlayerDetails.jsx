// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';



// function PlayerDetails(props) {
    
//     // const [ selectedPlayer, setPlayer ] = useState('')

   
//     // let { id } = useParams()

//     // useEffect(() => {
//     //     let selectedPlayer = props.players.find(
//     //         (player) => player._id === (id)
//     //     )
//     //     setPlayer(selectedPlayer)
//     // },[props.players, id])
//     console.log(props)

//     return (
//         <div>
            
//             <h2>Helloe</h2>
//         </div>
//     )


// //   return selectedPlayer ? (
// //     <div className='details'>
// //         <div className='details-hero'>
// //             <img src={selectedPlayer.image} alt={selectedPlayer.name} />
// //             <h4>Points: {selectedPlayer.points}</h4>
// //             <h4>Rebounds: {selectedPlayer.rebounds}</h4>
// //             <h4>Assists: {selectedPlayer.assists}</h4>
// //             <h4>Championships: {selectedPlayer.championships}</h4>
// //             <h4>HoFYear: {selectedPlayer.HoFYear}</h4>
// //         </div>
// //         <div>
// //             <h3>{selectedPlayer.bioHighlight}</h3>
// //             <h3>{selectedPlayer.biography}</h3>
// //         </div>
        
// //     </div>
// //   ) : null;
//   }


// // function PlayerDetails(){

// // return(
// //     <h1>this is the page </h1>
// // )

// // }

// export default PlayerDetails


import React, {useEffect, useState} from 'react'
import {Routes, useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'


const RideDetails = (props) => {
    
    let {id} = useParams()

    const [selectedPlayer, setPlayer] = useState('')

    useEffect(() => {
        let selectedPlayer = props.players.find(
        (player) => player._id === (id)
        )
        setPlayer(selectedPlayer)
    
    }, [props.players, id])



    
    console.log(selectedPlayer)
    
    if (selectedPlayer) {

    return (
      <div>
        <h1> hello </h1> 
      
      </div>
    )
  }
  else {
      return (
      <div className='loading-content-wrapper'>
          Loading...
      </div>
      )
  }}
  export default RideDetails
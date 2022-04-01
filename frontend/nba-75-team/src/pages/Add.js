import React from 'react'
import AddPositions from '../components/AddPositions'
import DeletePosition from '../components/DeletePosition'
import './style/add.css'
import Update from '../components/Update'



function Add(props) {

    // console.log(props)


  return (
    <div className='Add'>
       
        <div className='add-content-wrapper'>
            <p id='add-position' > In Basketball, every player has a role on the court, however, many times these roles and responsibilities overlap. For this project, I didn't have enough time to put every single player on the 75 Anniversary Team into a more detailed category. Please leave your ideas for different positions with a detailed description of the position you'd love to see in the future. I will try my best to update the <strong>'VIEW BY POSITION'</strong> page as often as I can base on your feedback. Thanks again for checking out this project! 🏀🏀🏀 </p>
        </div>
        <div>
            <AddPositions />
        </div>
        
        <div className='post-wrapper' >
            {props.positions.map((position)=> {
                return (
                    <div className='post'>
                        <div className='post-content'>
                            <h1>{position.name}</h1> 
                            <p>{position.description}</p> 
                        </div>
                        <div className='post-button' >
                            <DeletePosition positions={position._id}/>
                            <Update position={position.description} />
                        </div>
                    </div>
                )
            })}
        </div>
      

    </div>
  )
}

export default Add
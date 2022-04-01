import React from 'react'
import axios from 'axios'
import { useState } from 'react'


function Update(props) {
    // console.log(props)
    
    const [update, setUpdate] = useState(false)
 

    // console.log(props.position)

    let description = props.positions

    const UpdatePosition = async () => {
        await axios.put(`http://localhost:3001/api/positions/${description}`)
       
     }


  return (
    <div>
        {update?  
        
        <form onSubmit={UpdatePosition}>
            <input className='' name='positions' type='text' placeholder='update your description here'></input>
            <button className="search-button" type='submit'> Submit</button>
        </form> : 
        
        <button className='delete-button' onClick={() => setUpdate(true)} >Update</button>}
        {/* <button className="delete-button" onClick={UpdatePosition} >Update</button> */}
    </div>
  )
}

export default Update
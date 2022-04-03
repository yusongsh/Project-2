import React from 'react'
import axios from 'axios'
import { useState } from 'react'


function Update({id}) {
    // console.log(props)
    
    const [update, setUpdate] = useState(false)
    const [description, setDesciption] = useState('')
 
  

    const UpdatePosition = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:3001/api/positions/${id}`, {
          description
        })
        window.location.reload(true)
     }

console.log(description)

  return (
    <div>
        {update?  
        
        <form onSubmit={(e)=>UpdatePosition(e)}>
            <input name='positions'  type='text' placeholder='update your description here' onChange={(e)=>setDesciption(e.target.value)} ></input>
            <button className="search-button"   type='submit'> Submit</button>
        </form> : 
        
        <button className='delete-button' onClick={() => setUpdate(true)} >Update</button>}

    </div>
  )
}

export default Update
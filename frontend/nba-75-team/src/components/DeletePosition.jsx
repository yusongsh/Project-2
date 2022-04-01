import React from 'react'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


function DeletePosition(props) {
  
  let id = props.positions
  
  // console.log(id)


  const DeletePosition = async () => {
       await axios.delete(`http://localhost:3001/api/positions/${id}`)
    }

  return (
    <div>
        <button className="delete-button" onClick={DeletePosition} >Delete(Think carefully) </button>
    </div>
  )
}


export default DeletePosition
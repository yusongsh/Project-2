import React from 'react'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


export default function AddPositions(props) {

    const url = 'http://localhost:3001/api/addPosition'
    const [ data, setData ] = useState ({
      name:'',
      description:''
    })
    function submit(e) {
      e.preventDefault()
      axios.post(url, {
        name: data.name,
        description: data.description
      })
      .then(res => {
        console.log(res)
        Navigate('/viewbyposition')
      })
      console.log(data.name)
      console.log(data.description)
    }
    function onChange(e) {
      const newData = { ...data }
      newData[e.target.id] = e.target.value
      setData(newData)
    }



    
  return (
    <div className='Form-wrapper'>
      <form className='Form' onSubmit={ submit }>
        <input className='form-imput' type='text' id={'name'} name={'name'} placeholder={'New Position name?'} onChange = {(e) => onChange(e)} />
        <input className='form-imput' type='text' id={'description'} name={'description'} placeholder={'description of the position'} onChange = {(e) => onChange(e)} />
        <button className='search-button form-search'>Submit</button>

      </form>
    </div>
  )
}

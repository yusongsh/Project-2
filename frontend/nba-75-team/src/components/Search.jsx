import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'



export default function Search(props) {
    


    return(
    <div className='search-bar'>
        <div>
            <input type='text' name='search' value={props.value} placeholder='Type in your fav player' onChange={props.onChange}>
            </input>
            <button className="search-button" onClick={props.onSubmit}>Search</button>
        </div>
    </div>
    )
    }

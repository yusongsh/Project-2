import React from 'react'
import { Link } from 'react-router-dom'

function footer() {
    return (
        <div className='Nav'>
            <div className='LeftSide'>
                <Link to='/' >NBA 75</Link>
            </div>
            <div className='RightSide'>
                <div className='Links'>
                    <Link to='/viewByPosition' >View by Position</Link>
                    <Link to='/playerList' >Player list</Link>
                </div>
            </div>
        </div>
      )
}

export default footer
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Nav() {

  const [showLinks, setShowLinks] =useState(false)

  return (
    <div className='Nav'>
        <div className='LeftSide'>
            <Link to='/' >NBA 75</Link>
        </div>
        <div className='RightSide'>
            <div className='Links' id={showLinks ? 'hidden' : ''}>
                <Link to='/viewByPosition' >View by Position</Link>
                <Link to='/playerList' >Player list</Link>
                <Link to='/add' >💭</Link>
            </div>
            <button onClick={() => setShowLinks(!showLinks) }></button>
        </div>
    </div>
  )
}

export default Nav
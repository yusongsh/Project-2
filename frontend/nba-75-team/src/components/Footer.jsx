import React from 'react'
import { Link } from 'react-router-dom'
import SocialFollow from '../SocialFollow'



function footer() {
    return (
       <div className='Footer'>
            <div className='LeftSide-footer'>
                <Link to='/' >NBA 75</Link>
            </div>
            <div className='Middle-footer'>
                <div className='Links'>
                    <Link to='/viewByPosition' >View by Position</Link>
                    <Link to='/playerlist' >Player list</Link>
                    <Link to='/about' >About this Project</Link>
                </div>
            </div>
            <div className='RightSide-footer'>
                <SocialFollow />
            </div>
        </div>
      )
}

export default footer




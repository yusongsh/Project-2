import React from 'react'
import './style/home.css'
import Search from '../components/Search'
import { Link } from 'react-router-dom'

function Home() {


  return (
    <div className='Home'>
      <div className='hero'>
        <div className='text'>
          <h5 className='Subtitle'>SEARCH YOUR FAVORITE PLAYER</h5>
          <h1 className='Title'>NBA 75TH ANNIVERSARY</h1>
        </div>
        <div>
          <Search />
        </div>
      </div>

    <div className='intro-wrapper'>
      <div className='intro-content'>
        <div className='sm-title'>
          <h3 >75TH ANNIVERSARY TEAM </h3>
        </div>
        <div className='paragraph'>
          <p>The NBA 75th Anniversary Team, also referred to as the NBA 75, was chosen in 2021 to honor the 75th anniversary of the founding of the National Basketball Association (NBA). It was the fourth and most recent anniversary team in the league. Similar to the 50 Greatest Players in NBA History in 1996, a panel of media members, current and former players, coaches, general managers, and team executives selected the greatest players in league history. Tasked with compiling a list of 75 players, the committee named an additional 76th member due to a tie in voting. The list is part of the league's anniversary celebration during the 2021–22 season. Forty-five of the seventy-six players were later assembled in Cleveland, during the halftime ceremony of the 2022 All-Star Game.</p>
        </div>
      </div>
    </div>

    <div className='card-wrapper'>
        <div className='cards'>
        <Link to='/playerList/6242766945a34229623db0ed'><div className='card-image card-1'></div></Link>
            <h5>LEBRON JAMES</h5>
            <p className='player-highlight'>RARE COMBINATION OF SIZE, SKILL AND SAVVY.</p>
        </div>
        <div className='cards'>
        <Link to='/playerList/6242766945a34229623db0fb'> <div className='card-image card-2'></div></Link>
              <h5>KOBR BRYANT</h5>
              <p className='player-highlight'>LEGACY OF UNWAVERED PASSION AND WORK ETHIC.</p>
        </div>
        <div className='cards'>
        <Link to='/playerList/6242766945a34229623db10f'> <div className='card-image card-3'></div></Link>
              <h5>DWYANE WADE</h5>
              <p className='player-highlight'>LIMITLESS CHAMPION BRINGING THE HEAT.</p>
        </div>
        <div className='cards'>
        <Link to='/playerList/6242766945a34229623db0ff'>  <div className='card-image card-4'></div></Link>
              <h5>SHAQUILLE O'NEAL</h5>
              <p className='player-highlight'>THE ENTERTAINER WITH UNLIMITED TALENT.</p>
        </div>
        <div className='cards'>
         <Link to='/playerList/6242766945a34229623db0ef'> <div className='card-image card-5'></div></Link>
              <h5>MAGIC JOHNSON</h5>
              <p className='player-highlight'>PURE BRILLIANCE REVOLUTIONIZED THE GAME.</p>
        </div>
        <div className='cards'>
         <Link to='/playerList/6242766945a34229623db0f3'> <div className='card-image card-6'></div></Link>
              <h5>STEPHEN CURRY</h5>
              <p className='player-highlight'>ELITE SHOOTER REIGNING SUPREME.</p>
        </div>
    </div>    
     
    <div className='bottom-wrapper'>
        <div className='bottom'>
          <div className='bottom-image bottom-1'></div>
        </div>
    </div>



    </div>
  )
}

export default Home
import React from 'react'
import './style/about.css'

function About() {
  
  return (
    <div className='about-wrapper'>
      <div className='about-content'>
        <h2>This page is about this project 🫠</h2>
        <p>For the project, our task is to build a full-stack (Mongoose/Express/React/Node), professional-looking application with a functioning backend and frontend. The website should allow users to interact with its pages, make requests (buttons, HTML forms, dropdowns, searchbars, etc.) to the backend, and we need to display the data (text, images, etc.) in a meaningful way. </p>
        <h3>This project was build within a week, and here's how the week looks like</h3>
        <div>
          <ul>
            <li>Sunday: March 27th</li>
              <p>Project Pitches Approval, Wireframe, ERD, Prototype</p>
              <br/>
            <li>Monday: March 28th</li>
              <p>Set up backend, build database</p>
              <br/>
            <li>Tuesday: March 29th</li>
              <p>Build React app, make components with responsive mindset</p>
              <br/>
            <li>Wednesday: March 30th</li>
              <p>Advanced CSS, Render all conponents, add additional functions</p>
              <br/>
            <li>Thurday: March 31st</li>
              <p>Deploy to Heroku</p>
              <br/>
            <li>Friday: Apr 1st</li>
              <p>Presentation</p>
              <br/>
          </ul>
        </div>
      </div>
      <div className='about-content'>
        <h2>Special thanks to:</h2>
        <div className='person'>
            <div className='person-image person-1'></div>
             <h4>Brittany Morataya</h4>
        </div>
        <div className='person'>
            <div className='person-image person-1'></div>
             <h4>Michelle Yang</h4>
        </div>
        <div className='person'>
            <div className='person-image person-1'></div>
             <h4>Jeremy Taubman</h4>
        </div>
        <div className='person'>
            <div className='person-image person-1'></div>
             <h4>Steven DeLitta</h4>
        </div>
        
        
      </div>

         


    </div>
  )
}

export default About
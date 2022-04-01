import React from 'react'
import './style/about.css'

function About() {
  
  return (
    <div className='about-wrapper'>
      <div className='about-content'>
        <h2>This page is about this project 🫠</h2>
        <p>For the project, our task is to build a full-stack (Mongoose/Express/React/Node), professional-looking application with a functioning backend and frontend. The website should allow users to interact with its pages, make requests (buttons, HTML forms, dropdowns, search bars, etc.) to the backend, and we need to display the data (text, images, etc.) in a meaningful way. </p>
        <h3>This project was built within a week, and here's how the week looks like</h3>
        <div>
          <ul>
            <li>Sunday: March 27th</li>
              <p className='timeline'>Project Pitches Approval, Wireframe, ERD, Prototype</p>
            <li>Monday: March 28th</li>
              <p className='timeline'>Set up the backend, build database</p>
            <li>Tuesday: March 29th</li>
              <p className='timeline'>Build React app, make components with a responsive mindset</p>
            <li>Wednesday: March 30th</li>
              <p className='timeline'>Advanced CSS, Render all components, add additional functions</p>
            <li>Thursday: March 31st</li>
              <p className='timeline'>Deploy to Heroku</p>
            <li>Friday: Apr 1st</li>
              <p className='timeline'>Presentation</p>
          </ul>
        </div>
      </div>
      <div className='specialThanks'>
        <div className='thankstitle'>
          <h2>Special thanks to:</h2>
        </div>
        <div className='person'>
            <div className='person-image person-1'></div>
             <h4>Tim Ellis</h4>
        </div>
        <div className='person'>
            <div className='person-image person-2'></div>
             <h4>Brittany Morataya</h4>
        </div>
        <div className='person'>
            <div className='person-image person-3'></div>
             <h4>Michelle Yang</h4>
        </div>
        <div className='person'>
            <div className='person-image person-4'></div>
             <h4>Steven Delitta</h4>
        </div>
        <div className='person'>
            <div className='person-image person-5'></div>
             <h4>Ryan Ditzel</h4>
        </div>
        <div className='person'>
            <div className='person-image person-6'></div>
             <h4>Alex Barbosa</h4>
        </div>
        <div className='person'>
            <div className='person-image person-7'></div>
             <h4>Piero Caceres</h4>
        </div>
        <div className='person'>
            <div className='person-image person-8'></div>
             <h4>Jeremy Taubman</h4>
        </div>
      </div>
    </div>
  )
}

export default About
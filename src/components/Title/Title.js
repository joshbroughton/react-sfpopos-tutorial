import React from 'react';
import { NavLink } from 'react-router-dom';
import RandomSpace from '../RandomSpace/RandomSpace'
import './Title.css';

function Title() {
  return (
    <div className="Title">
      <header>
        <h1>SFPOPOS</h1>
        <p className="Title-Subtitle">San Franciscos Privately Owned Public Spaces</p>

        <div className='navBar'>
          <NavLink 
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
            to='/'>List</NavLink>
          <NavLink 
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
            to="/about">About</NavLink>
           <RandomSpace /> 
        </div>
      </header>
    </div>
  )
}

export default Title;

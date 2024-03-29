import React from 'react';
import { useParams } from 'react-router';
import './POPOSDetails.css'
import data from '../../data/sfpopos-data.js';

function POPOSDetails(props) {
  const params = useParams()
  const { id } = params // Location index
  const { images, title, desc, hours } = data[id] //removed features and geo from display
  
  return (
    <article className="POPOSDetails">
      <img className="POPOSDetails-image" src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt={ title }/>
      <header className='title'>
        <h1 className="POPOSDetails-title">{ title }</h1>
        <p className="POPOSDetails-hours">{ hours }</p>
      </header>
      <p className="POPOSDetails-desc">{ desc }</p>
    </article>
  )
}

export default POPOSDetails
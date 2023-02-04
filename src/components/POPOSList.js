import React from 'react';
import POPOSSpace from './POPOSSpace';

import data from '../sfpopos-data.json';
import './styles/POPOSList.css';


function POPOSList() {
  const spaces = data.map(({ title, address, images, hours }) => {
    return (
      <POPOSSpace
        key={title} 
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
      />
    )
  })

  return (
    <div className="POPOSList">
      { spaces }
    </div>
  )
}

export default POPOSList
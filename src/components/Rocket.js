import React from 'react';
import './Rocket.css';

function Rocket(props) {
  const { rocket_name, description, flickr_images } = props;
  return (
    <div className='rocket-card'>
      <img src={flickr_images[0]} alt={rocket_name}/>
      <div className='details'>
        <h2>{rocket_name}</h2>
        <p>{description}</p>
        <button type='button'>Reserve Rocket</button>
      </div>
    </div>
  )
}

export default Rocket
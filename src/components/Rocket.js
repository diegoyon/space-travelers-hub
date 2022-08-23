import React from 'react';
import './Rocket.css';
import { useDispatch } from 'react-redux';
import { toggleReserve } from '../redux/rockets/rocketsSlice';

function Rocket(props) {
  const { id, rocket_name, description, flickr_images, reserved } = props;
  const dispatch = useDispatch();
  
  let content;
  if (reserved){
    content = <p>reserved</p>;
  }
  
  return (
    <div className='rocket-card'>
      <img src={flickr_images[0]} alt={rocket_name}/>
      <div className='details'>
        <h2>{rocket_name}</h2>
        {content}
        <p>{description}</p>
        <button type='button' onClick={() => {dispatch(toggleReserve(id))}}>Reserve Rocket</button>
      </div>
    </div>
  )
}

export default Rocket
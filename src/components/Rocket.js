/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import './Rocket.css';
import { useDispatch } from 'react-redux';
import { toggleReserve } from '../redux/rockets/rocketsSlice';

function Rocket(props) {
  const {
    id, rocket_name, description, flickr_images, reserved,
  } = props;
  const dispatch = useDispatch();

  let btn;
  if (reserved) {
    btn = <button type="button" className="cancel" onClick={() => { dispatch(toggleReserve(id)); }}>Cancel Reservation</button>;
  } else {
    btn = <button type="button" className="reserve" onClick={() => { dispatch(toggleReserve(id)); }}>Reserve Rocket</button>;
  }

  return (
    <div className="rocket-card">
      <img src={flickr_images[0]} alt={rocket_name} />
      <div className="details">
        <h2>{rocket_name}</h2>
        <div>
          {reserved && (
            <span className="badge">Reserved</span>
          )}
          <span>{description}</span>
        </div>
        {btn}
      </div>
    </div>
  );
}

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  rocket_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;

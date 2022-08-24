import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.css';

function Profile() {
  const rocketList = useSelector((state) => state.rockets.rockets);
  const filteredList = rocketList.filter((rocket) => (rocket.reserved === true));
  return (
    <>
      <div className="profile">
        <div className="my-missions">
          <h2>My Missions</h2>
          {/* Yet to Implement */}
        </div>
        <div className="my-rockets">
          <h2>My Rockets</h2>
          {filteredList.map((rocket) => (
            <p key={rocket.id}>{rocket.rocket_name}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Profile;

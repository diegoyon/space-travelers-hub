import { useSelector } from 'react-redux';
import './Profile.css';

function Profile() {
  const rocketList = useSelector((state) => state.rockets.rockets);
  const filteredList = rocketList.filter((rocket) => (rocket.reserved === true));
  const missionList = useSelector((state) => state.missions);
  const filteredListM = missionList.filter((missions) => (missions.reserved === true));

  return (
    <>
      <div className="profile">
        <div className="my-rockets">
          <h2>My Rockets</h2>
          {filteredList.map((rocket) => (
            <p key={rocket.id}>{rocket.rocket_name}</p>
          ))}
        </div>
        <div className="my-missions">
          <h2>My Missions</h2>
          {filteredListM.map((mission) => (
            <p key={mission.mission_id}>{mission.mission_name}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Profile;

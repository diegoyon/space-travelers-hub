import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import MissionLi from '../components/Missions';
import { getMissionsDataAPI } from '../redux/missions/missions';
import '../components/missions.css';

const Missions = () => {
  const data = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(
    () => {
      if (data.length === 0) dispatch(getMissionsDataAPI());
    },
    [],
  );

  useEffect(() => {
    if (data.length !== 0) {
      localStorage.setItem('missionsData', JSON.stringify(data));
    }
  }, [data]);

  return (
    <ul className="missions-container">
      <li className="mission-li">
        <p className="mission-name">Mission</p>
        <p className="mission-description">Description</p>
        <p className="mission-status">Status</p>
      </li>
      {data.map((mission) => (
        <MissionLi
          key={mission.mission_id}
          id={mission.mission_id}
          name={mission.mission_name}
          description={mission.description}
          reserved={mission.reserved}
        />
      ))}
    </ul>
  );
};

export default Missions;

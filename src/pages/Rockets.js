import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';
import Rocket from '../components/Rocket';

function Rockets() {
  const dispatch = useDispatch();
  const rocketStatus = useSelector((state) => state.rockets.status);

  useEffect(() => {
    if (rocketStatus === 'idle') {
      dispatch(fetchRockets());
    }
  }, [rocketStatus, dispatch]);
  let content;
  if (rocketStatus === 'succeeded') {
    content = rocketList.map((rocket) => (
      <Rocket
        key={rocket.id}
        rocket_name={rocket.rocket_name}
        description={rocket.description}
        flickr_images={rocket.flickr_images}
        id={rocket.id}
      />
    ));
  }

  return (
    <>
      {content}
    </>
  )
}

export default Rockets;

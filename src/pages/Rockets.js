import React from 'react';
import { useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';
import Rocket from '../components/Rocket';

function Rockets() {
  const dispatch = useDispatch();
  const rocketStatus = useSelector((state) => state.rockets.status);

  let content;
  if (rocketStatus === 'succeeded') {
    content = rocketList.map((rocket) => (
      <Rocket
        key={rocket.id}
        rocket_name={rocket.rocket_name}
        description={rocket.description}
        flickr_images={rocket.flickr_images}
        id={rocket.id}
        reserved={rocket.reserved}
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

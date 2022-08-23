import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';

function Rockets() {
  const dispatch = useDispatch();
  const rocketStatus = useSelector((state) => state.rockets.status);

  useEffect(() => {
    if (rocketStatus === 'idle') {
      dispatch(fetchRockets());
    }
  }, [rocketStatus, dispatch]);

  return (
    <div>Rockets</div>
  );
}

export default Rockets;

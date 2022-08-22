import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets } from '../redux/rockets/rocketsSlice';

function Rockets() {
  const dispatch = useDispatch();
  const rocketList = useSelector((state)=> state.rockets.rockets)
  const rocketStatus = useSelector((state) => state.rockets.status)

  useEffect(() => {
    if (rocketStatus === 'idle') {
      dispatch(fetchRockets());
    }
  }, [rocketStatus, dispatch]);
  
  console.log(rocketList);

  return (
    <div>Rockets</div>
  )
}

export default Rockets
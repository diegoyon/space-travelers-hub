import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rocketsSlice';
import missionsReducer from './missions/missions';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});

export default store;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const ROCKETS_URL = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk(
  'users/fetchRockets',
  async () => {
    try {
      const response = await axios.get(ROCKETS_URL);
      const rocketsObject = response.data.map((rocket) => {
        const { id, rocket_name, description, flickr_images } = rocket;
        return { id, rocket_name, description, flickr_images };
      });

      return rocketsObject;
    } catch (err) {
      return err.message;
    }
  },
);

const initialState = {
  rockets: [],
  status: 'idle',
  error: null,
};

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRockets.fulfilled, (state,action) =>{
        state.status = 'succeeded';
        state.rockets = action.payload;
      })
  }
});

export default rocketsSlice.reducer;
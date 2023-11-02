import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6542b2baad8044116ed3c951.mockapi.io';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const respond = await axios.get('/cars');

      return respond.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

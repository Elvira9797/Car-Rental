import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6542b2baad8044116ed3c951.mockapi.io';

export const fetchPartCars = createAsyncThunk(
  'cars/fetchPart',
  async (p, { rejectWithValue }) => {
    try {
      const respond = await axios.get(`/cars?p=${p}&l=12`);

      return respond.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAllCars = createAsyncThunk(
  'cars/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const respond = await axios.get(`/cars`);

      return respond.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchBrandCars = createAsyncThunk(
  'cars/fetchBrand',
  async (make, { rejectWithValue }) => {
    try {
      const respond = await axios.get(`/cars?make=${make}`);

      return respond.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

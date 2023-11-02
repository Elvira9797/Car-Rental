import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { fetchCars } from './operations';
import persistReducer from 'redux-persist/es/persistReducer';

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
  selectedCars: [],
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,

  reducers: {
    toggleCarSelection: (state, action) => {
      const carId = action.payload;
      if (state.selectedCars.includes(carId)) {
        state.selectedCars = state.selectedCars.filter(id => id !== carId);
      } else {
        state.selectedCars.push(carId);
      }
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

const persistConfig = {
  key: 'cars',
  storage,
};

export const persistedReducer = persistReducer(
  persistConfig,
  carsSlice.reducer
);

export const { toggleCarSelection } = carsSlice.actions;

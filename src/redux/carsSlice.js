import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { fetchPartCars, fetchAllCars, fetchBrandCars } from './operations';
import persistReducer from 'redux-persist/es/persistReducer';

const initialState = {
  partCars: [],
  allCars: [],
  filteredCars: [],
  isLoading: false,
  error: null,
  selectedCars: [],
  filter: '',
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
    filter(state, action) {
      state.filter = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchPartCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchPartCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.partCars = action.payload;
      })
      .addCase(fetchPartCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.allCars = action.payload;
      })
      .addCase(fetchAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchBrandCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchBrandCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (state.filter === '') {
          state.filteredCars = [];
        } else {
          state.filteredCars = action.payload;
        }
      })
      .addCase(fetchBrandCars.rejected, (state, action) => {
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

export const { toggleCarSelection, filter } = carsSlice.actions;

export const selectCars = state => state.cars.cars;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.cars.cars.isLoading;
export const selectError = state => state.cars.cars.error;
export const selectSelectedCar = state => state.cars.selectedCars;
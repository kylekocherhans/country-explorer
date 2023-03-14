import { configureStore } from '@reduxjs/toolkit';
import potentialCountriesReducer from '../redux/slices/potentialCountriesSlice';

export default configureStore({
    reducer: { potentialCountries: potentialCountriesReducer }
});
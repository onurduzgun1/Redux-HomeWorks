import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('covid/fetchData', async (country) => {
  if (country === '') {
    const { data } = await axios.get('https://covid19.mathdro.id/api');
    return data;
  } else {
    const { data } = await axios.get(`https://covid19.mathdro.id/api/countries/${country}`);
    return data;
  }
});

export const fetchDaily = createAsyncThunk('covid/fetchDaily', async () => {
  const { data } = await axios.get('https://covid19.mathdro.id/api/daily');
  return data;
});

export const fetchCountries = createAsyncThunk('covid/fetchCountries', async () => {
  const { data } = await axios.get('https://covid19.mathdro.id/api/countries');
  return data.countries;
});

export const covidSlice = createSlice({
  name: 'covid',
  initialState: {
    covidData: '',
    covidDaily: '',
    countries: [],
    country: '',
  },
  reducers: {
    getCountry: (state, action) => {
      state.country = action.payload;
    },
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.covidData = action.payload;
    },
    [fetchDaily.fulfilled]: (state, action) => {
      state.covidDaily = action.payload;
    },
    [fetchCountries.fulfilled]: (state, action) => {
      state.countries = action.payload;
    },
  },
});

export const { getCountry } = covidSlice.actions;
export default covidSlice.reducer;
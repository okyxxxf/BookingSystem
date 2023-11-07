import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Concert from "../../types/concert";
import ConcertService from "../../services/ConcertService";
import { RootState } from "../../store/store";

interface ConcertsState {
  concerts : Array<Concert> | null
}

const initialState : ConcertsState ={
  concerts : null
}

export const fetchAllConcert = createAsyncThunk(
  'concerts/', 
  async (thunkApi) => {
    const service = new ConcertService();
    const responce = await service.getResourses();
    return responce;
})

const concertsSlice = createSlice({
  name : 'concerts',
  initialState,
  reducers : {},
  extraReducers : (builder) => {
    builder.addCase(fetchAllConcert.pending, (state) => {
      state.concerts = null;
    });
    builder.addCase(fetchAllConcert.fulfilled, (state, action) => {
      state.concerts = action.payload;
    });
  }
})

export { concertsSlice };

export const getConcerts = (state : RootState) => state.concerts;

export default concertsSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quanLyPhimServ } from "../../services/quanLyPhimServ";

export const getAllMovieThunk = createAsyncThunk(
  "movie/getAllMovieThunk",
  async (data, thunkAPI) => {
    console.log(data);
    const result = await quanLyPhimServ.getAllMovies();
    return result.data.content;
  }
);

const initialState = {
  listMovie: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllMovieThunk.fulfilled, (state, action) => {
      console.log(state);
      console.log(action);
      state.listMovie = action.payload;
    });
  },
});

export const {} = movieSlice.actions;

export default movieSlice.reducer;

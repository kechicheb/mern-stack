import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchWorkouts = createAsyncThunk(
  "workoutSlice/fetchWorkouts",
  async () => {
    const response = await fetch("/api/workouts");
    const data = await response.json();

    if (response.ok) {
      return data;
    }
  }
);
export const workoutSlice = createSlice({
  initialState: [],
  name: "workoutSlice",
  reducers: {
    createWorkout: (state, action) => {
      return [...state, ...action.payload];
    },
    delWorkout: (state, action) => {
      const product = action.payload;

      return state.filter((x) => x.id !== product.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWorkouts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const { addWorkout, delWorkout } = workoutSlice.actions;
export default workoutSlice.reducer;

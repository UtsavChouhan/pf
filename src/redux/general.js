import { createSlice } from '@reduxjs/toolkit'

export const generalSlice = createSlice({
  name: 'general',
  initialState: {
    rows: 20,
    cols: 45,
    grid: null,
    entry: {x: -1, y: -1},
    exit: {x: -1, y: -1},
    inProgress: false
  },
  reducers: {
    setGrid: (state, action) => {
      // const { rows, cols, value } = action.payload;
      // state.rows = rows;
      // state.cols = cols;
      // state.grid = Array.from(new Array(rows), () => new Array(cols).fill(value));
      state.grid = action.payload;
    },
    setEntry: (state, action) => {
      state.entry = action.payload;
    },
    setExit: (state, action) => {
      state.exit = action.payload;
    },
    setInProgress: (state, action) => {
      state.inProgress = action.payload;
    },
    resetGrid: (state) => {
      const {rows, cols} = state;
      state.entry = {x: -1, y: -1};
      state.exit = {x: -1, y: -1};
      state.grid = Array.from(new Array(rows), () => new Array(cols).fill(0));
    },
  },
})

// Action creators are generated for each case reducer function
export const { setGrid, resetGrid, setEntry, setExit, setInProgress } = generalSlice.actions

export default generalSlice.reducer
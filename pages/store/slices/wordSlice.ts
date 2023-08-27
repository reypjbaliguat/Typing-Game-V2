import { createSlice } from "@reduxjs/toolkit";

interface word {
  content: String;
  value: String;
  gameOver: Boolean;
  playing: Boolean;
  time: number;
  wordsPerMinute: number;
}

// Type for our state
export interface WordState {
  word: word;
}

// Initial state
const initialState: WordState = {
  word: {
    content: "",
    value: "",
    gameOver: false,
    playing: false,
    time: 0,
    wordsPerMinute: 0,
  },
};

// Actual Slice
export const wordSlice = createSlice({
  name: "word",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.word.value = action.payload;
    },
    setContent: (state, action) => {
      state.word.content = action.payload;
    },
    setGameOver: (state, action) => {
      state.word.gameOver = action.payload;
    },
    setPlaying: (state, action) => {
      state.word.playing = action.payload;
    },
    addSecondToTime: (state) => {
      state.word.time = state.word.time + 1;
    },
    resetTime: (state) => {
      state.word.time = 0;
    },
    setWordPerMinute: (state, action) => {
      state.word.wordsPerMinute = action.payload;
    },
    reset: (state) => {
      Object.assign(state, initialState);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setValue,
  setGameOver,
  setPlaying,
  addSecondToTime,
  resetTime,
  setWordPerMinute,
  setContent,
  reset,
} = wordSlice.actions;

export default wordSlice.reducer;

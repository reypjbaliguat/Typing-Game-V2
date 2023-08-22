import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchUtil from "@/pages/utilities/fetchUtil";

interface word {
  status: String;
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
    status: "",
    content: "",
    value: "",
    gameOver: false,
    playing: false,
    time: 0,
    wordsPerMinute: 0,
  },
};

export const fetchWord = createAsyncThunk("word/fetchWord", async () => {
  return fetchUtil("https://api.quotable.io/random");
});

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchWord.pending, (state) => {
        state.word.status = "loading";
        // both `state` and `action` are now correctly typed
        // based on the slice state and the `pending` action creator
      })
      .addCase(fetchWord.fulfilled, (state, { payload }) => {
        state.word.content = payload.content;
        state.word.status = "loaded";
      })
      .addCase(fetchWord.rejected, (state) => {
        state.word.status = "failed";
      });
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

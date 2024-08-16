// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// type Theme = 'light' | 'dark';

// interface UIState {
//   theme: Theme;
// }

// const initialState: UIState = {
//   theme: 'light',
// };

// const uiSlice = createSlice({
//   name: 'ui',
//   initialState,
//   reducers: {
//     setTheme: (state, action: PayloadAction<Theme>) => {
//       state.theme = action.payload;
//     },
//   },
// });

// export const { setTheme } = uiSlice.actions;
// export default uiSlice.reducer;





import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Theme = 'light' | 'dark' | 'system';

interface UIState {
  theme: Theme;
  fontSize: number;
}

const initialState: UIState = {
  theme: 'system',
  fontSize: 16,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
    setFontSize: (state, action: PayloadAction<number>) => {
      state.fontSize = action.payload;
    },
  },
});

export const { setTheme, setFontSize } = uiSlice.actions;
export default uiSlice.reducer;
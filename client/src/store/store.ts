// // import { configureStore } from '@reduxjs/toolkit';
// // import chatReducer from './chatSlice';

// // export const store = configureStore({
// //   reducer: {
// //     chat: chatReducer,
// //   },
// // });

// // export type RootState = ReturnType<typeof store.getState>;
// // export type AppDispatch = typeof store.dispatch;




// import { configureStore } from '@reduxjs/toolkit';
// import chatReducer from './chatSlice';
// import uiReducer from './uiSlice';

// export const store = configureStore({
//   reducer: {
//     chat: chatReducer,
//     ui: uiReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;




import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './chatSlice';
import uiReducer from './uiSlice';

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
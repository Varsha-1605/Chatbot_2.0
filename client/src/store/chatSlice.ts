// // // import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// // // import { sendMessageToBackend } from '../utils/api';
// // // import axios from 'axios';

// // // export const sendMessage = createAsyncThunk(
// // //   'chat/sendMessage',
// // //   async (message: string, { rejectWithValue }) => {
// // //     try {
// // //       const response = await sendMessageToBackend(message);
// // //       return response.data;
// // //     } catch (error) {
// // //       if (axios.isAxiosError(error) && error.response) {
// // //         return rejectWithValue(error.response.data);
// // //       }
// // //       return rejectWithValue('An unexpected error occurred');
// // //     }
// // //   }
// // // );

// // // interface ChatState {
// // //   messages: Array<{ id: string; text: string; sender: 'user' | 'bot' }>;
// // //   status: 'idle' | 'loading' | 'succeeded' | 'failed';
// // //   error: string | null;
// // // }

// // // const initialState: ChatState = {
// // //   messages: [],
// // //   status: 'idle',
// // //   error: null,
// // // };

// // // const chatSlice = createSlice({
// // //   name: 'chat',
// // //   initialState,
// // //   reducers: {},
// // //   extraReducers: (builder) => {
// // //     builder
// // //       .addCase(sendMessage.pending, (state) => {
// // //         state.status = 'loading';
// // //       })
// // //       .addCase(sendMessage.fulfilled, (state, action) => {
// // //         state.status = 'succeeded';
// // //         state.messages.push(
// // //           { id: Date.now().toString(), text: action.meta.arg, sender: 'user' },
// // //           { id: (Date.now() + 1).toString(), text: action.payload.response, sender: 'bot' }
// // //         );
// // //       })
// // //       .addCase(sendMessage.rejected, (state, action) => {
// // //         state.status = 'failed';
// // //         state.error = action.payload as string || 'An error occurred';
// // //       });
// // //   },
// // // });

// // // export default chatSlice.reducer;









// // // import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// // // import { sendMessageToBackend } from '../utils/api';
// // // import axios from 'axios';

// // // export const sendMessage = createAsyncThunk(
// // //   'chat/sendMessage',
// // //   async (message: string, { rejectWithValue }) => {
// // //     try {
// // //       const response = await sendMessageToBackend(message);
// // //       return response.data.bot || response.data.response;
// // //     } catch (error) {
// // //       if (axios.isAxiosError(error) && error.response) {
// // //         return rejectWithValue(error.response.data.error || 'An unexpected error occurred');
// // //       }
// // //       return rejectWithValue('An unexpected error occurred');
// // //     }
// // //   }
// // // );

// // // interface ChatState {
// // //   messages: Array<{ id: string; text: string; sender: 'user' | 'bot' }>;
// // //   status: 'idle' | 'loading' | 'succeeded' | 'failed';
// // //   error: string | null;
// // // }

// // // const initialState: ChatState = {
// // //   messages: [],
// // //   status: 'idle',
// // //   error: null,
// // // };

// // // const chatSlice = createSlice({
// // //   name: 'chat',
// // //   initialState,
// // //   reducers: {},
// // //   extraReducers: (builder) => {
// // //     builder
// // //       .addCase(sendMessage.pending, (state) => {
// // //         state.status = 'loading';
// // //       })
// // //       .addCase(sendMessage.fulfilled, (state, action) => {
// // //         state.status = 'succeeded';
// // //         state.messages.push(
// // //           { id: Date.now().toString(), text: action.meta.arg, sender: 'user' },
// // //           { id: (Date.now() + 1).toString(), text: action.payload, sender: 'bot' }
// // //         );
// // //       })
// // //       .addCase(sendMessage.rejected, (state, action) => {
// // //         state.status = 'failed';
// // //         state.error = action.payload as string;
// // //       });
// // //   },
// // // });

// // // export default chatSlice.reducer;





// // import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// // import { sendMessageToBackend } from '../utils/api';
// // import axios from 'axios';

// // export const sendMessage = createAsyncThunk(
// //   'chat/sendMessage',
// //   async (message: string, { rejectWithValue }) => {
// //     try {
// //       const response = await sendMessageToBackend(message);
// //       return response.data.bot || response.data.response;
// //     } catch (error) {
// //       if (axios.isAxiosError(error) && error.response) {
// //         return rejectWithValue(error.response.data.error || 'An unexpected error occurred');
// //       }
// //       return rejectWithValue('An unexpected error occurred');
// //     }
// //   }
// // );

// // interface ChatState {
// //   messages: Array<{ id: string; text: string; sender: 'user' | 'bot' }>;
// //   status: 'idle' | 'loading' | 'succeeded' | 'failed';
// //   error: string | null;
// // }

// // const initialState: ChatState = {
// //   messages: [],
// //   status: 'idle',
// //   error: null,
// // };

// // const chatSlice = createSlice({
// //   name: 'chat',
// //   initialState,
// //   reducers: {},
// //   extraReducers: (builder) => {
// //     builder
// //       .addCase(sendMessage.pending, (state) => {
// //         state.status = 'loading';
// //       })
// //       .addCase(sendMessage.fulfilled, (state, action) => {
// //         state.status = 'succeeded';
// //         state.messages.push(
// //           { id: Date.now().toString(), text: action.meta.arg, sender: 'user' },
// //           { id: (Date.now() + 1).toString(), text: action.payload, sender: 'bot' }
// //         );
// //       })
// //       .addCase(sendMessage.rejected, (state, action) => {
// //         state.status = 'failed';
// //         state.error = action.payload as string || 'An error occurred';
// //       });
// //   },
// // });

// // export default chatSlice.reducer;





// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { sendMessageToBackend } from '../utils/api';
// import axios from 'axios';

// export const sendMessage = createAsyncThunk(
//   'chat/sendMessage',
//   async (message: string, { rejectWithValue }) => {
//     try {
//       const response = await sendMessageToBackend(message);
//       return response.data.bot || response.data.response;
//     } catch (error) {
//       if (axios.isAxiosError(error) && error.response) {
//         return rejectWithValue(error.response.data.error || 'An unexpected error occurred');
//       }
//       return rejectWithValue('An unexpected error occurred');
//     }
//   }
// );

// interface ChatState {
//   messages: Array<{ id: string; text: string; sender: 'user' | 'bot' }>;
//   status: 'idle' | 'loading' | 'succeeded' | 'failed';
//   error: string | null;
// }

// const initialState: ChatState = {
//   messages: [],
//   status: 'idle',
//   error: null,
// };

// const chatSlice = createSlice({
//   name: 'chat',
//   initialState,
//   reducers: {
//     clearChat: (state) => {
//       state.messages = [];
//       state.status = 'idle';
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(sendMessage.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(sendMessage.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.messages.push(
//           { id: Date.now().toString(), text: action.meta.arg, sender: 'user' },
//           { id: (Date.now() + 1).toString(), text: action.payload, sender: 'bot' }
//         );
//       })
//       .addCase(sendMessage.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload as string || 'An error occurred';
//       });
//   },
// });

// export const { clearChat } = chatSlice.actions;
// export default chatSlice.reducer;




import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { sendMessageToBackend } from '../utils/api';
import axios from 'axios';

export const sendMessage = createAsyncThunk(
  'chat/sendMessage',
  async (message: string, { rejectWithValue }) => {
    try {
      const response = await sendMessageToBackend(message);
      return response.data.bot || response.data.response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data.error || 'An unexpected error occurred');
      }
      return rejectWithValue('An unexpected error occurred');
    }
  }
);

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  category?: string;  // Optional property to categorize messages
}

interface ChatState {
  messages: Message[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  filter: string;  // New property to store the current filter
}

const initialState: ChatState = {
  messages: [],
  status: 'idle',
  error: null,
  filter: 'all',  // Default filter is 'all'
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    clearChat: (state) => {
      state.messages = [];
      state.status = 'idle';
      state.error = null;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.messages.push(
          { id: Date.now().toString(), text: action.meta.arg, sender: 'user', category: 'general' },  // Assign category if needed
          { id: (Date.now() + 1).toString(), text: action.payload, sender: 'bot', category: 'general' }  // Assign category if needed
        );
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string || 'An error occurred';
      });
  },
});

export const { clearChat, setFilter } = chatSlice.actions;
export default chatSlice.reducer;

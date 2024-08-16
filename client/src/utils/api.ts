// // import axios from 'axios';

// // const API_URL = 'http://localhost:5000/api';

// // export const sendMessageToBackend = async (message: string) => {
// //   return await axios.post(`${API_URL}/chat`, { message });
// // };





// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api';

// export const sendMessageToBackend = async (message: string) => {
//   return await axios.post(`${API_URL}/chat`, { prompt: message });
// };



import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const sendMessageToBackend = async (message: string) => {
  return await axios.post(`${API_URL}/chat`, { prompt: message });
};

export const fetchConversationHistory = async () => {
  return await axios.get(`${API_URL}/history`);
};

export const clearConversationHistory = async () => {
  return await axios.delete(`${API_URL}/history`);
};



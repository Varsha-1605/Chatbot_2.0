// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import { useDispatch } from 'react-redux';
// // // // // // // import { sendMessage } from '../store/chatSlice';
// // // // // // // import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
// // // // // // // import { useTranslation } from 'react-i18next';
// // // // // // // import { AppDispatch } from '../store/store'; // Update this import path if necessary

// // // // // // // const InputArea: React.FC = () => {
// // // // // // //   const [input, setInput] = useState('');
// // // // // // //   const dispatch = useDispatch<AppDispatch>();
// // // // // // //   const { t } = useTranslation();
// // // // // // //   const { isListening, toggleListening, transcript } = useSpeechRecognition();

// // // // // // //   const handleSubmit = (e: React.FormEvent) => {
// // // // // // //     e.preventDefault();
// // // // // // //     if (input.trim()) {
// // // // // // //       dispatch(sendMessage(input));
// // // // // // //       setInput('');
// // // // // // //     }
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     if (transcript) {
// // // // // // //       setInput(transcript);
// // // // // // //     }
// // // // // // //   }, [transcript]);

// // // // // // //   return (
// // // // // // //     <form onSubmit={handleSubmit} className="p-4 bg-white dark:bg-gray-800">
// // // // // // //       <div className="flex items-center space-x-2">
// // // // // // //         <input
// // // // // // //           type="text"
// // // // // // //           value={input}
// // // // // // //           onChange={(e) => setInput(e.target.value)}
// // // // // // //           className="flex-grow p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
// // // // // // //           placeholder={t('inputPlaceholder')}
// // // // // // //         />
// // // // // // //         <button
// // // // // // //           type="button"
// // // // // // //           onClick={toggleListening}
// // // // // // //           className={`p-2 rounded-full ${
// // // // // // //             isListening ? 'bg-red-500' : 'bg-blue-500'
// // // // // // //           } text-white`}
// // // // // // //         >
// // // // // // //           🎤
// // // // // // //         </button>
// // // // // // //         <button
// // // // // // //           type="submit"
// // // // // // //           className="p-2 bg-green-500 text-white rounded-lg"
// // // // // // //         >
// // // // // // //           {t('send')}
// // // // // // //         </button>
// // // // // // //       </div>
// // // // // // //     </form>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default InputArea;





// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import { useDispatch } from 'react-redux';
// // // // // // // import { sendMessage } from '../store/chatSlice';
// // // // // // // import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
// // // // // // // import { useTranslation } from 'react-i18next';
// // // // // // // import { AppDispatch } from '../store/store';

// // // // // // // const InputArea: React.FC = () => {
// // // // // // //   const [input, setInput] = useState('');
// // // // // // //   const dispatch = useDispatch<AppDispatch>();
// // // // // // //   const { t } = useTranslation();
// // // // // // //   const { isListening, toggleListening, transcript } = useSpeechRecognition();

// // // // // // //   const handleSubmit = (e: React.FormEvent) => {
// // // // // // //     e.preventDefault();
// // // // // // //     if (input.trim()) {
// // // // // // //       dispatch(sendMessage(input));
// // // // // // //       setInput('');
// // // // // // //     }
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     if (transcript) {
// // // // // // //       setInput(transcript);
// // // // // // //     }
// // // // // // //   }, [transcript]);

// // // // // // //   return (
// // // // // // //     <form onSubmit={handleSubmit} className="p-4 bg-white dark:bg-gray-800">
// // // // // // //       <div className="flex items-center space-x-2">
// // // // // // //         <input
// // // // // // //           type="text"
// // // // // // //           value={input}
// // // // // // //           onChange={(e) => setInput(e.target.value)}
// // // // // // //           className="flex-grow p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
// // // // // // //           placeholder={t('inputPlaceholder')}
// // // // // // //         />
// // // // // // //         <button
// // // // // // //           type="button"
// // // // // // //           onClick={toggleListening}
// // // // // // //           className={`p-2 rounded-full ${
// // // // // // //             isListening ? 'bg-red-500' : 'bg-blue-500'
// // // // // // //           } text-white`}
// // // // // // //         >
// // // // // // //           🎤
// // // // // // //         </button>
// // // // // // //         <button
// // // // // // //           type="submit"
// // // // // // //           className="p-2 bg-green-500 text-white rounded-lg"
// // // // // // //         >
// // // // // // //           {t('send')}
// // // // // // //         </button>
// // // // // // //       </div>
// // // // // // //     </form>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default InputArea;
















// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { useDispatch } from 'react-redux';
// // // // // // import { sendMessage } from '../store/chatSlice';
// // // // // // import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
// // // // // // import { useTranslation } from 'react-i18next';
// // // // // // import { AppDispatch } from '../store/store';
// // // // // // import { FaMicrophone, FaMicrophoneSlash, FaPaperPlane } from 'react-icons/fa';

// // // // // // // Optionally import sound functionality if you have sound effects
// // // // // // // import useSound from 'use-sound';
// // // // // // // import sendSound from '../assets/send.mp3'; 

// // // // // // const InputArea: React.FC = () => {
// // // // // //   const [input, setInput] = useState('');
// // // // // //   const dispatch = useDispatch<AppDispatch>();
// // // // // //   const { t } = useTranslation();
// // // // // //   const { isListening, toggleListening, transcript } = useSpeechRecognition();
// // // // // //   // const [playSend] = useSound(sendSound);

// // // // // //   const handleSubmit = (e: React.FormEvent) => {
// // // // // //     e.preventDefault();
// // // // // //     if (input.trim()) {
// // // // // //       // Uncomment to play sound on send
// // // // // //       // playSend(); 
// // // // // //       dispatch(sendMessage(input));
// // // // // //       setInput('');
// // // // // //     }
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     if (transcript) {
// // // // // //       setInput(transcript);
// // // // // //     }
// // // // // //   }, [transcript]);

// // // // // //   return (
// // // // // //     <form onSubmit={handleSubmit} className="p-4 bg-white dark:bg-gray-800 relative">
// // // // // //       <div className="flex items-center space-x-2">
// // // // // //         <input
// // // // // //           type="text"
// // // // // //           value={input}
// // // // // //           onChange={(e) => setInput(e.target.value)}
// // // // // //           className="flex-grow p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
// // // // // //           placeholder={t('inputPlaceholder')}
// // // // // //         />
// // // // // //         <button
// // // // // //           type="button"
// // // // // //           onClick={toggleListening}
// // // // // //           className="p-2 rounded-full bg-blue-500 text-white relative"
// // // // // //         >
// // // // // //           {isListening ? <FaMicrophoneSlash /> : <FaMicrophone />}
// // // // // //         </button>
// // // // // //         <button
// // // // // //           type="submit"
// // // // // //           className="p-2 bg-green-500 text-white rounded-lg"
// // // // // //         >
// // // // // //           <FaPaperPlane />
// // // // // //         </button>
// // // // // //       </div>
// // // // // //     </form>
// // // // // //   );
// // // // // // };

// // // // // // export default InputArea;





























// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { useDispatch } from 'react-redux';
// // // // // import { sendMessage } from '../store/chatSlice';
// // // // // import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
// // // // // import { useTranslation } from 'react-i18next';
// // // // // import { AppDispatch } from '../store/store';

// // // // // const InputArea: React.FC = () => {
// // // // //   const [input, setInput] = useState('');
// // // // //   const dispatch = useDispatch<AppDispatch>();
// // // // //   const { t } = useTranslation();
// // // // //   const { isListening, toggleListening, transcript } = useSpeechRecognition();

// // // // //   const handleSubmit = (e: React.FormEvent) => {
// // // // //     e.preventDefault();
// // // // //     if (input.trim()) {
// // // // //       dispatch(sendMessage(input));
// // // // //       setInput('');
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     if (transcript) {
// // // // //       setInput(transcript);
// // // // //     }
// // // // //   }, [transcript]);

// // // // //   return (
// // // // //     <form onSubmit={handleSubmit} className="p-4 bg-white dark:bg-gray-800 shadow-md">
// // // // //       <div className="flex items-center space-x-2">
// // // // //         <input
// // // // //           type="text"
// // // // //           value={input}
// // // // //           onChange={(e) => setInput(e.target.value)}
// // // // //           className="flex-grow p-2 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // //           placeholder={t('inputPlaceholder')}
// // // // //         />
// // // // //         <button
// // // // //           type="button"
// // // // //           onClick={toggleListening}
// // // // //           className={`p-2 rounded-full ${
// // // // //             isListening ? 'bg-red-500' : 'bg-blue-500'
// // // // //           } text-white`}
// // // // //         >
// // // // //           🎤
// // // // //         </button>
// // // // //         <button
// // // // //           type="submit"
// // // // //           className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
// // // // //         >
// // // // //           {t('send')}
// // // // //         </button>
// // // // //       </div>
// // // // //     </form>
// // // // //   );
// // // // // };

// // // // // export default InputArea;


// // // // import React, { useState, useEffect } from 'react';
// // // // import { useDispatch } from 'react-redux';
// // // // import { sendMessage } from '../store/chatSlice';
// // // // import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
// // // // import { useTranslation } from 'react-i18next';
// // // // import { AppDispatch } from '../store/store';
// // // // import { FaMicrophone, FaMicrophoneSlash, FaPaperPlane } from 'react-icons/fa';

// // // // const InputArea: React.FC = () => {
// // // //   const [input, setInput] = useState('');
// // // //   const dispatch = useDispatch<AppDispatch>();
// // // //   const { t } = useTranslation();
// // // //   const { isListening, toggleListening, transcript } = useSpeechRecognition();

// // // //   const handleSubmit = (e: React.FormEvent) => {
// // // //     e.preventDefault();
// // // //     if (input.trim()) {
// // // //       dispatch(sendMessage(input));
// // // //       setInput('');
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     if (transcript) {
// // // //       setInput((prev) => prev + ' ' + transcript);
// // // //     }
// // // //   }, [transcript]);

// // // //   return (
// // // //     <form onSubmit={handleSubmit} className="p-4 bg-white dark:bg-gray-800 shadow-md">
// // // //       <div className="flex items-center space-x-2">
// // // //         <input
// // // //           type="text"
// // // //           value={input}
// // // //           onChange={(e) => setInput(e.target.value)}
// // // //           className="flex-grow p-2 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
// // // //           placeholder={t('inputPlaceholder')}
// // // //         />
// // // //         <button
// // // //           type="button"
// // // //           onClick={toggleListening}
// // // //           className={`p-2 rounded-full ${
// // // //             isListening ? 'bg-red-500' : 'bg-blue-500'
// // // //           } text-white transition duration-200 hover:opacity-80`}
// // // //         >
// // // //           {isListening ? <FaMicrophoneSlash /> : <FaMicrophone />}
// // // //         </button>
// // // //         <button
// // // //           type="submit"
// // // //           className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200 flex items-center"
// // // //         >
// // // //           <FaPaperPlane className="mr-1" />
// // // //           {t('send')}
// // // //         </button>
// // // //       </div>
// // // //     </form>
// // // //   );
// // // // };

// // // // export default InputArea;




// // // import React, { useState, useEffect } from 'react';
// // // import { useDispatch } from 'react-redux';
// // // import { motion } from 'framer-motion';
// // // import { FaMicrophone, FaPaperPlane } from 'react-icons/fa';
// // // import { useTranslation } from 'react-i18next';
// // // import { sendMessage } from '../store/chatSlice';
// // // import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
// // // import { AppDispatch } from '../store/store';

// // // const InputArea: React.FC = () => {
// // //   const [input, setInput] = useState('');
// // //   const dispatch = useDispatch<AppDispatch>();
// // //   const { t } = useTranslation();
// // //   const { isListening, toggleListening, transcript } = useSpeechRecognition();

// // //   useEffect(() => {
// // //     if (transcript) {
// // //       setInput((prev) => prev + ' ' + transcript);
// // //     }
// // //   }, [transcript]);

// // //   const handleSubmit = (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     if (input.trim()) {
// // //       dispatch(sendMessage(input.trim()));
// // //       setInput('');
// // //     }
// // //   };

// // //   return (
// // //     <form onSubmit={handleSubmit} className="flex items-center space-x-2">
// // //       <input
// // //         type="text"
// // //         value={input}
// // //         onChange={(e) => setInput(e.target.value)}
// // //         className="flex-grow p-3 rounded-full bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
// // //         placeholder={t('inputPlaceholder')}
// // //       />
// // //       <motion.button
// // //         whileTap={{ scale: 0.95 }}
// // //         type="button"
// // //         onClick={toggleListening}
// // //         className={`p-3 rounded-full ${
// // //           isListening ? 'bg-red-500' : 'bg-blue-500'
// // //         } text-white transition duration-200`}
// // //       >
// // //         <FaMicrophone />
// // //       </motion.button>
// // //       <motion.button
// // //         whileTap={{ scale: 0.95 }}
// // //         type="submit"
// // //         className="p-3 bg-green-500 text-white rounded-full transition duration-200"
// // //       >
// // //         <FaPaperPlane />
// // //       </motion.button>
// // //     </form>
// // //   );
// // // };

// // // export default InputArea;



// // import React, { useState, useEffect } from 'react';
// // import { useDispatch } from 'react-redux';
// // import { motion } from 'framer-motion';
// // import { FaMicrophone, FaPaperPlane } from 'react-icons/fa';
// // import { useTranslation } from 'react-i18next';
// // import { sendMessage } from '../store/chatSlice';
// // import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
// // import { AppDispatch } from '../store/store';

// // const InputArea: React.FC = () => {
// //   const [input, setInput] = useState('');
// //   const dispatch = useDispatch<AppDispatch>();
// //   const { t } = useTranslation();
// //   const { isListening, toggleListening, transcript, error } = useSpeechRecognition();

// //   useEffect(() => {
// //     if (transcript) {
// //       setInput((prev) => prev + ' ' + transcript);
// //     }
// //   }, [transcript]);

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (input.trim()) {
// //       dispatch(sendMessage(input.trim()));
// //       setInput('');
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="flex items-center space-x-2">
// //       <input
// //         type="text"
// //         value={input}
// //         onChange={(e) => setInput(e.target.value)}
// //         className="flex-grow p-3 rounded-full bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
// //         placeholder={t('inputPlaceholder')}
// //       />
// //       <motion.button
// //         whileTap={{ scale: 0.95 }}
// //         type="button"
// //         onClick={toggleListening}
// //         className={`p-3 rounded-full ${
// //           isListening ? 'bg-red-500' : 'bg-blue-500'
// //         } text-white transition duration-200`}
// //       >
// //         <FaMicrophone />
// //       </motion.button>
// //       <motion.button
// //         whileTap={{ scale: 0.95 }}
// //         type="submit"
// //         className="p-3 bg-green-500 text-white rounded-full transition duration-200"
// //       >
// //         <FaPaperPlane />
// //       </motion.button>
// //       {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
// //     </form>
// //   );
// // };

// // export default InputArea;




// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { motion } from 'framer-motion';
// import { FaMicrophone, FaPaperPlane, FaStopCircle } from 'react-icons/fa';
// import { useTranslation } from 'react-i18next';
// import { sendMessage } from '../store/chatSlice';
// import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
// import { AppDispatch } from '../store/store';

// const InputArea: React.FC = () => {
//   const [input, setInput] = useState('');
//   const dispatch = useDispatch<AppDispatch>();
//   const { t } = useTranslation();
//   const { isListening, toggleListening, transcript, error } = useSpeechRecognition();

//   useEffect(() => {
//     if (transcript) {
//       setInput((prev) => prev + ' ' + transcript);
//     }
//   }, [transcript]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (input.trim()) {
//       dispatch(sendMessage(input.trim()));
//       setInput('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex items-center space-x-2">
//       <motion.input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         className="flex-grow p-4 rounded-full bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow-inner"
//         placeholder={t('inputPlaceholder')}
//         whileFocus={{ scale: 1.02 }}
//       />
//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.95 }}
//         type="button"
//         onClick={toggleListening}
//         className={`p-4 rounded-full ${
//           isListening ? 'bg-red-500' : 'bg-blue-500'
//         } text-white transition duration-200 shadow-md`}
//       >
//         {isListening ? <FaStopCircle /> : <FaMicrophone />}
//       </motion.button>
//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.95 }}
//         type="submit"
//         className="p-4 bg-green-500 text-white rounded-full transition duration-200 shadow-md"
//       >
//         <FaPaperPlane />
//       </motion.button>
//       {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//     </form>
//   );
// };

// export default InputArea;










import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { FaMicrophone, FaPaperPlane, FaStopCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { sendMessage } from '../store/chatSlice';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
import { AppDispatch } from '../store/store';

const InputArea: React.FC = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();
  const { isListening, toggleListening, transcript, error } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setInput((prev) => prev + ' ' + transcript);
    }
  }, [transcript]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(sendMessage(input.trim()));
      setInput('');
    }
  };

  const quickActions = [
    // { label: t('checkBalance'), action: 'Check my account balance' },
    { label: t('transferMoney'), action: 'How do I transfer money?' },
    { label: t('investmentAdvice'), action: 'Give me investment advice' },
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-center mb-2">
        {quickActions.map((action, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2"
            onClick={() => setInput(action.action)}
          >
            {action.label}
          </motion.button>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <motion.input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-4 rounded-full bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow-inner"
          placeholder={t('inputPlaceholder')}
          whileFocus={{ scale: 1.02 }}
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          onClick={toggleListening}
          className={`p-4 rounded-full ${
            isListening ? 'bg-red-500' : 'bg-blue-500'
          } text-white transition duration-200 shadow-md`}
        >
          {isListening ? <FaStopCircle /> : <FaMicrophone />}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="p-4 bg-green-500 text-white rounded-full transition duration-200 shadow-md"
        >
          <FaPaperPlane />
        </motion.button>
      </form>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default InputArea;
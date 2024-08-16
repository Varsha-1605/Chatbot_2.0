// // // // // // // // // import React from 'react';
// // // // // // // // // import Header from './components/Header';
// // // // // // // // // import Chat from './components/Chat';
// // // // // // // // // import InputArea from './components/InputArea';

// // // // // // // // // const App: React.FC = () => {
// // // // // // // // //   return (
// // // // // // // // //     <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
// // // // // // // // //       <Header />
// // // // // // // // //       <main className="flex-grow overflow-hidden">
// // // // // // // // //         <Chat />
// // // // // // // // //       </main>
// // // // // // // // //       <InputArea />
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default App;



// // // // // // // // import React from 'react';
// // // // // // // // import Header from './components/Header';
// // // // // // // // import Chat from './components/Chat';
// // // // // // // // import InputArea from './components/InputArea';

// // // // // // // // const App: React.FC = () => {
// // // // // // // //   return (
// // // // // // // //     <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
// // // // // // // //       <Header />
// // // // // // // //       <main className="flex-grow overflow-y-auto p-4">
// // // // // // // //         <Chat />
// // // // // // // //       </main>
// // // // // // // //       <InputArea />
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default App;





// // // // // // import React, { useState } from 'react';
// // // // // // import Header from './components/Header';
// // // // // // import Chat from './components/Chat';
// // // // // // import InputArea from './components/InputArea';
// // // // // // import { FaMoon, FaSun } from 'react-icons/fa';

// // // // // // const App: React.FC = () => {
// // // // // //   const [isDarkMode, setIsDarkMode] = useState(false);

// // // // // //   const toggleDarkMode = () => {
// // // // // //     setIsDarkMode(!isDarkMode);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className={`flex flex-col h-screen ${isDarkMode ? 'dark' : ''}`}>
// // // // // //       <div className="p-4 bg-gray-100 dark:bg-gray-900 flex justify-between items-center">
// // // // // //         <Header />
// // // // // //         <button
// // // // // //           onClick={toggleDarkMode}
// // // // // //           className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
// // // // // //           aria-label="Toggle Dark Mode"
// // // // // //         >
// // // // // //           {isDarkMode ? <FaSun /> : <FaMoon />}
// // // // // //         </button>
// // // // // //       </div>
// // // // // //       <main className="flex-grow overflow-hidden">
// // // // // //         <Chat />
// // // // // //       </main>
// // // // // //       <InputArea />
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default App;


// // // // // import React, { useState, useEffect } from 'react';
// // // // // import Header from './components/Header';
// // // // // import Chat from './components/Chat';
// // // // // import InputArea from './components/InputArea';
// // // // // import { FaMoon, FaSun } from 'react-icons/fa';
// // // // // import { useTranslation } from 'react-i18next';

// // // // // const App: React.FC = () => {
// // // // //   const [isDarkMode, setIsDarkMode] = useState(false);
// // // // //   const { i18n } = useTranslation();

// // // // //   useEffect(() => {
// // // // //     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
// // // // //     setIsDarkMode(prefersDark);
// // // // //   }, []);

// // // // //   const toggleDarkMode = () => {
// // // // //     setIsDarkMode(!isDarkMode);
// // // // //   };

// // // // //   const changeLanguage = (lng: string) => {
// // // // //     i18n.changeLanguage(lng);
// // // // //   };

// // // // //   return (
// // // // //     <div className={`flex flex-col h-screen ${isDarkMode ? 'dark' : ''}`}>
// // // // //       <div className="p-4 bg-gray-100 dark:bg-gray-900 flex justify-between items-center">
// // // // //         <Header />
// // // // //         <div className="flex items-center space-x-4">
// // // // //           <select
// // // // //             onChange={(e) => changeLanguage(e.target.value)}
// // // // //             className="bg-gray-200 dark:bg-gray-800 rounded p-1"
// // // // //           >
// // // // //             <option value="en">English</option>
// // // // //             <option value="es">Español</option>
// // // // //           </select>
// // // // //           <button
// // // // //             onClick={toggleDarkMode}
// // // // //             className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-200"
// // // // //             aria-label="Toggle Dark Mode"
// // // // //           >
// // // // //             {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //       <main className="flex-grow overflow-hidden">
// // // // //         <Chat />
// // // // //       </main>
// // // // //       <InputArea />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default App;



// // // import React, { useState, useEffect } from 'react';
// // // import { useDispatch, useSelector } from 'react-redux';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import { FaMoon, FaSun, FaCog } from 'react-icons/fa';
// // // import { useTranslation } from 'react-i18next';
// // // import Header from './components/Header';
// // // import Chat from './components/Chat';
// // // import InputArea from './components/InputArea';
// // // import SettingsModal from './components/SettingsModal';
// // // import { setTheme } from './store/uiSlice';
// // // import { AppDispatch, RootState } from './store/store';

// // // const App: React.FC = () => {
// // //   const [isSettingsOpen, setIsSettingsOpen] = useState(false);
// // //   const { i18n } = useTranslation();
// // //   const dispatch = useDispatch<AppDispatch>();
// // //   const theme = useSelector((state: RootState) => state.ui.theme);

// // //   useEffect(() => {
// // //     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
// // //     dispatch(setTheme(prefersDark ? 'dark' : 'light'));
// // //   }, [dispatch]);

// // //   useEffect(() => {
// // //     document.documentElement.classList.toggle('dark', theme === 'dark');
// // //   }, [theme]);

// // //   const toggleTheme = () => {
// // //     dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
// // //   };

// // //   const changeLanguage = (lng: string) => {
// // //     i18n.changeLanguage(lng);
// // //   };

// // //   return (
// // //     <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
// // //       <header className="bg-white dark:bg-gray-800 shadow-md">
// // //         <div className="container mx-auto px-4 py-3 flex justify-between items-center">
// // //           <Header />
// // //           <div className="flex items-center space-x-4">
// // //             <button
// // //               onClick={toggleTheme}
// // //               className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200"
// // //               aria-label="Toggle Theme"
// // //             >
// // //               <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.5 }}>
// // //                 {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
// // //               </motion.div>
// // //             </button>
// // //             <button
// // //               onClick={() => setIsSettingsOpen(true)}
// // //               className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200"
// // //               aria-label="Open Settings"
// // //             >
// // //               <FaCog className="text-gray-600 dark:text-gray-300" />
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </header>
// // //       <main className="flex-grow overflow-hidden container mx-auto px-4 py-8">
// // //         <Chat />
// // //       </main>
// // //       <footer className="bg-white dark:bg-gray-800 shadow-md">
// // //         <div className="container mx-auto px-4 py-4">
// // //           <InputArea />
// // //         </div>
// // //       </footer>
// // //       <AnimatePresence>
// // //         {isSettingsOpen && (
// // //           <SettingsModal
// // //             isOpen={isSettingsOpen}
// // //             onClose={() => setIsSettingsOpen(false)}
// // //             onLanguageChange={changeLanguage}
// // //           />
// // //         )}
// // //       </AnimatePresence>
// // //     </div>
// // //   );
// // // };

// // // export default App;


// // import React, { useState, useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { FaMoon, FaSun, FaCog, FaTrash } from 'react-icons/fa';
// // import { useTranslation } from 'react-i18next';
// // import Header from './components/Header';
// // import Chat from './components/Chat';
// // import InputArea from './components/InputArea';
// // import SettingsModal from './components/SettingsModal';
// // import { setTheme, setFontSize } from './store/uiSlice';
// // import { clearChat } from './store/chatSlice';
// // import { AppDispatch, RootState } from './store/store';
// // import { clearConversationHistory } from './utils/api';

// // const App: React.FC = () => {
// //   const [isSettingsOpen, setIsSettingsOpen] = useState(false);
// //   const { i18n } = useTranslation();
// //   const dispatch = useDispatch<AppDispatch>();
// //   const { theme, fontSize } = useSelector((state: RootState) => state.ui);

// //   useEffect(() => {
// //     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
// //     dispatch(setTheme(prefersDark ? 'dark' : 'light'));
// //   }, [dispatch]);

// //   useEffect(() => {
// //     document.documentElement.style.fontSize = `${fontSize}px`;
// //     document.documentElement.classList.toggle('dark', theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches));
// //   }, [theme, fontSize]);

// //   const toggleTheme = () => {
// //     dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
// //   };

// //   const changeLanguage = (lng: string) => {
// //     i18n.changeLanguage(lng);
// //   };

// //   const handleClearChat = async () => {
// //     await clearConversationHistory();
// //     dispatch(clearChat());
// //   };

// //   return (
// //     <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
// //       <header className="bg-white dark:bg-gray-800 shadow-md">
// //         <div className="container mx-auto px-4 py-3 flex justify-between items-center">
// //           <Header />
// //           <div className="flex items-center space-x-4">
// //             <button
// //               onClick={toggleTheme}
// //               className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200"
// //               aria-label="Toggle Theme"
// //             >
// //               <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.5 }}>
// //                 {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
// //               </motion.div>
// //             </button>
// //             <button
// //               onClick={handleClearChat}
// //               className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200"
// //               aria-label="Clear Chat"
// //             >
// //               <FaTrash className="text-gray-600 dark:text-gray-300" />
// //             </button>
// //             <button
// //               onClick={() => setIsSettingsOpen(true)}
// //               className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200"
// //               aria-label="Open Settings"
// //             >
// //               <FaCog className="text-gray-600 dark:text-gray-300" />
// //             </button>
// //           </div>
// //         </div>
// //       </header>
// //       <main className="flex-grow overflow-hidden container mx-auto px-4 py-8">
// //         <Chat />
// //       </main>
// //       <footer className="bg-white dark:bg-gray-800 shadow-md">
// //         <div className="container mx-auto px-4 py-4">
// //           <InputArea />
// //         </div>
// //       </footer>
// //       <AnimatePresence>
// //         {isSettingsOpen && (
// //           <SettingsModal
// //             isOpen={isSettingsOpen}
// //             onClose={() => setIsSettingsOpen(false)}
// //             onLanguageChange={changeLanguage}
// //             onFontSizeChange={(size) => dispatch(setFontSize(size))}
// //             currentFontSize={fontSize}
// //           />
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   );
// // };

// // export default App;



// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaMoon, FaSun, FaCog, FaTrash } from 'react-icons/fa';
// import { useTranslation } from 'react-i18next';
// import Header from './components/Header';
// import Chat from './components/Chat';
// import InputArea from './components/InputArea';
// import SettingsModal from './components/SettingsModal';
// import { setTheme, setFontSize } from './store/uiSlice';
// import { clearChat } from './store/chatSlice';
// import { AppDispatch, RootState } from './store/store';
// import { clearConversationHistory } from './utils/api';

// const App: React.FC = () => {
//   const [isSettingsOpen, setIsSettingsOpen] = useState(false);
//   const { i18n } = useTranslation();
//   const dispatch = useDispatch<AppDispatch>();
//   const { theme, fontSize } = useSelector((state: RootState) => state.ui);

//   useEffect(() => {
//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//     dispatch(setTheme(prefersDark ? 'dark' : 'light'));
//   }, [dispatch]);

//   useEffect(() => {
//     document.documentElement.style.fontSize = `${fontSize}px`;
//     document.documentElement.classList.toggle('dark', theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches));
//   }, [theme, fontSize]);

//   const toggleTheme = () => {
//     dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
//   };

//   const changeLanguage = (lng: string) => {
//     i18n.changeLanguage(lng);
//   };

//   const handleClearChat = async () => {
//     await clearConversationHistory();
//     dispatch(clearChat());
//   };

//   return (
//     <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300">
//       <header className="bg-white dark:bg-gray-800 shadow-lg">
//         <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//           <Header />
//           <div className="flex items-center space-x-4">
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={toggleTheme}
//               className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200 shadow-md"
//               aria-label="Toggle Theme"
//             >
//               <motion.div animate={{ rotate: theme === 'dark' ? 180 : 0 }} transition={{ duration: 0.5 }}>
//                 {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
//               </motion.div>
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleClearChat}
//               className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200 shadow-md"
//               aria-label="Clear Chat"
//             >
//               <FaTrash className="text-gray-600 dark:text-gray-300" />
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setIsSettingsOpen(true)}
//               className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200 shadow-md"
//               aria-label="Open Settings"
//             >
//               <FaCog className="text-gray-600 dark:text-gray-300" />
//             </motion.button>
//           </div>
//         </div>
//       </header>
//       <main className="flex-grow overflow-hidden container mx-auto px-4 py-8">
//         <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden h-full">
//           <Chat />
//         </div>
//       </main>
//       <footer className="bg-white dark:bg-gray-800 shadow-lg">
//         <div className="container mx-auto px-4 py-4">
//           <InputArea />
//         </div>
//       </footer>
//       <AnimatePresence>
//         {isSettingsOpen && (
//           <SettingsModal
//             isOpen={isSettingsOpen}
//             onClose={() => setIsSettingsOpen(false)}
//             onLanguageChange={changeLanguage}
//             onFontSizeChange={(size) => dispatch(setFontSize(size))}
//             currentFontSize={fontSize}
//           />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default App;



import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun, FaCog, FaTrash, FaUser, FaChartLine, FaQuestion, FaLock } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Chat from './components/Chat';
import InputArea from './components/InputArea';
import SettingsModal from './components/SettingsModal';
import Dashboard from './components/Dashboard';
import SecurityModal from './components/SecurityModal';
import HelpModal from './components/HelpModal';
import UserProfileModal from './components/UserProfileModal';
import { setTheme, setFontSize } from './store/uiSlice';
import { clearChat } from './store/chatSlice';
import { AppDispatch, RootState } from './store/store';
import { clearConversationHistory } from './utils/api';

const App: React.FC = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isSecurityModalOpen, setIsSecurityModalOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);
  const { i18n } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { theme, fontSize } = useSelector((state: RootState) => state.ui);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    dispatch(setTheme(prefersDark ? 'dark' : 'light'));
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
    document.documentElement.classList.toggle('dark', theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches));
  }, [theme, fontSize]);

  const toggleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleClearChat = async () => {
    await clearConversationHistory();
    dispatch(clearChat());
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300">
      <header className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Header />
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200 shadow-md"
              aria-label="Toggle Theme"
            >
              <motion.div animate={{ rotate: theme === 'dark' ? 180 : 0 }} transition={{ duration: 0.5 }}>
                {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
              </motion.div>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClearChat}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200 shadow-md"
              aria-label="Clear Chat"
            >
              <FaTrash className="text-gray-600 dark:text-gray-300" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSettingsOpen(true)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200 shadow-md"
              aria-label="Open Settings"
            >
              <FaCog className="text-gray-600 dark:text-gray-300" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDashboardOpen(true)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200 shadow-md"
              aria-label="Open Dashboard"
            >
              <FaChartLine className="text-gray-600 dark:text-gray-300" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSecurityModalOpen(true)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200 shadow-md"
              aria-label="Security Settings"
            >
              <FaLock className="text-gray-600 dark:text-gray-300" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsHelpModalOpen(true)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200 shadow-md"
              aria-label="Help"
            >
              <FaQuestion className="text-gray-600 dark:text-gray-300" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsUserProfileOpen(true)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200 shadow-md"
              aria-label="User Profile"
            >
              <FaUser className="text-gray-600 dark:text-gray-300" />
            </motion.button>
          </div>
        </div>
      </header>
      <main className="flex-grow overflow-hidden container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden h-full">
          <Chat />
        </div>
      </main>
      <footer className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <InputArea />
        </div>
      </footer>
      <AnimatePresence>
        {isSettingsOpen && (
          <SettingsModal
            isOpen={isSettingsOpen}
            onClose={() => setIsSettingsOpen(false)}
            onLanguageChange={changeLanguage}
            onFontSizeChange={(size) => dispatch(setFontSize(size))}
            currentFontSize={fontSize}
          />
        )}
        {isDashboardOpen && (
          <Dashboard
            isOpen={isDashboardOpen}
            onClose={() => setIsDashboardOpen(false)}
          />
        )}
        {isSecurityModalOpen && (
          <SecurityModal
            isOpen={isSecurityModalOpen}
            onClose={() => setIsSecurityModalOpen(false)}
          />
        )}
        {isHelpModalOpen && (
          <HelpModal
            isOpen={isHelpModalOpen}
            onClose={() => setIsHelpModalOpen(false)}
          />
        )}
        {isUserProfileOpen && (
          <UserProfileModal
            isOpen={isUserProfileOpen}
            onClose={() => setIsUserProfileOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
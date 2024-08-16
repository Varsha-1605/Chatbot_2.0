// // // // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // // // import { useSelector } from 'react-redux';
// // // // // // // // import { RootState } from '../store/store';
// // // // // // // // import Message from './Message';

// // // // // // // // const Chat: React.FC = () => {
// // // // // // // //   const messages = useSelector((state: RootState) => state.chat.messages);
// // // // // // // //   const chatRef = useRef<HTMLDivElement>(null);

// // // // // // // //   useEffect(() => {
// // // // // // // //     if (chatRef.current) {
// // // // // // // //       chatRef.current.scrollTop = chatRef.current.scrollHeight;
// // // // // // // //     }
// // // // // // // //   }, [messages]);

// // // // // // // //   return (
// // // // // // // //     <div ref={chatRef} className="h-full overflow-y-auto p-4 space-y-4">
// // // // // // // //       {messages.map((message) => (
// // // // // // // //         <Message key={message.id} message={message} />
// // // // // // // //       ))}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Chat;








// // // // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // // // import { useSelector } from 'react-redux';
// // // // // // // // import { RootState } from '../store/store';

// // // // // // // // const Chat: React.FC = () => {
// // // // // // // //   const messagesEndRef = useRef<HTMLDivElement | null>(null);
// // // // // // // //   const messages = useSelector((state: RootState) => state.chat.messages);

// // // // // // // //   const scrollToBottom = () => {
// // // // // // // //     if (messagesEndRef.current) {
// // // // // // // //       messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   useEffect(() => {
// // // // // // // //     scrollToBottom();
// // // // // // // //   }, [messages]);

// // // // // // // //   return (
// // // // // // // //     <div className="flex-1 overflow-y-auto p-4">
// // // // // // // //       {messages.map((msg) => (
// // // // // // // //         <div
// // // // // // // //           key={msg.id}
// // // // // // // //           className={`p-2 my-2 rounded-lg ${
// // // // // // // //             msg.sender === 'user'
// // // // // // // //               ? 'bg-blue-500 text-white self-end'
// // // // // // // //               : 'bg-gray-300 text-black self-start'
// // // // // // // //           }`}
// // // // // // // //         >
// // // // // // // //           {msg.text}
// // // // // // // //         </div>
// // // // // // // //       ))}
// // // // // // // //       <div ref={messagesEndRef} />
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Chat;




























// // // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // // import { useSelector } from 'react-redux';
// // // // // // // import { RootState } from '../store/store';

// // // // // // // const Chat: React.FC = () => {
// // // // // // //   const messagesEndRef = useRef<HTMLDivElement | null>(null);
// // // // // // //   const messages = useSelector((state: RootState) => state.chat.messages);

// // // // // // //   const scrollToBottom = () => {
// // // // // // //     if (messagesEndRef.current) {
// // // // // // //       messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
// // // // // // //     }
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     scrollToBottom();
// // // // // // //   }, [messages]);

// // // // // // //   return (
// // // // // // //     <div className="flex-1 overflow-y-auto p-4 space-y-4">
// // // // // // //       {messages.map((msg) => (
// // // // // // //         <div
// // // // // // //           key={msg.id}
// // // // // // //           className={`p-3 rounded-lg shadow-md ${
// // // // // // //             msg.sender === 'user'
// // // // // // //               ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white self-end'
// // // // // // //               : 'bg-gray-300 text-black self-start'
// // // // // // //           }`}
// // // // // // //         >
// // // // // // //           {msg.text}
// // // // // // //         </div>
// // // // // // //       ))}
// // // // // // //       <div ref={messagesEndRef} />
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Chat;








// // // // // // // import React from 'react';
// // // // // // // import { useSelector } from 'react-redux';
// // // // // // // import { RootState } from '../store/store';
// // // // // // // import { FaUser, FaRobot } from 'react-icons/fa';

// // // // // // // const Chat: React.FC = () => {
// // // // // // //   const messages = useSelector((state: RootState) => state.chat.messages);
// // // // // // //   const status = useSelector((state: RootState) => state.chat.status);

// // // // // // //   return (
// // // // // // //     <div className="p-4 overflow-y-auto flex-grow">
// // // // // // //       {messages.map((message) => (
// // // // // // //         <div
// // // // // // //           key={message.id}
// // // // // // //           className={`flex items-start mb-4 ${
// // // // // // //             message.sender === 'user' ? 'justify-end' : 'justify-start'
// // // // // // //           }`}
// // // // // // //         >
// // // // // // //          {message.sender === 'bot' && (
// // // // // // //             <FaRobot className="avatar mr-2 text-blue-500" />
// // // // // // //           )}
// // // // // // //           <div
// // // // // // //             className={`p-4 rounded-lg ${
// // // // // // //               message.sender === 'user'
// // // // // // //                 ? 'bg-green-500 text-white'
// // // // // // //                 : 'bg-gray-300 text-gray-900 dark:bg-gray-700 dark:text-white'
// // // // // // //             }`}
// // // // // // //           >
// // // // // // //             <div
// // // // // // //               className={`message collapsible ${
// // // // // // //                 message.text.length > 100 ? 'expanded' : ''
// // // // // // //               }`}
// // // // // // //             >
// // // // // // //               {message.text}
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //           {message.sender === 'user' && (
// // // // // // //             <FaUser className="avatar ml-2 text-green-500" />
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //       ))}
// // // // // // //       {status === 'loading' && (
// // // // // // //         <div className="typing-indicator">Bot is typing...</div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Chat;








// // // // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // // // import { useSelector } from 'react-redux';
// // // // // // // // import { RootState } from '../store/store';

// // // // // // // // const Chat: React.FC = () => {
// // // // // // // //   const messagesEndRef = useRef<HTMLDivElement | null>(null);
// // // // // // // //   const messages = useSelector((state: RootState) => state.chat.messages);

// // // // // // // //   const scrollToBottom = () => {
// // // // // // // //     if (messagesEndRef.current) {
// // // // // // // //       messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   useEffect(() => {
// // // // // // // //     scrollToBottom();
// // // // // // // //   }, [messages]);

// // // // // // // //   return (
// // // // // // // //     <div className="flex-1 overflow-y-auto p-4 space-y-4">
// // // // // // // //       {messages.map((msg) => (
// // // // // // // //         <div
// // // // // // // //           key={msg.id}
// // // // // // // //           className={`p-3 rounded-lg shadow-md ${
// // // // // // // //             msg.sender === 'user'
// // // // // // // //               ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white self-end'
// // // // // // // //               : 'bg-gray-300 text-black self-start'
// // // // // // // //           }`}
// // // // // // // //         >
// // // // // // // //           {msg.text}
// // // // // // // //         </div>
// // // // // // // //       ))}
// // // // // // // //       <div ref={messagesEndRef} />
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Chat;














// // // // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // // // import { useSelector } from 'react-redux';
// // // // // // // // import { RootState } from '../store/store';
// // // // // // // // import { FaUser, FaRobot } from 'react-icons/fa';

// // // // // // // // const Chat: React.FC = () => {
// // // // // // // //   const messagesEndRef = useRef<HTMLDivElement | null>(null);
// // // // // // // //   const messages = useSelector((state: RootState) => state.chat.messages);
// // // // // // // //   const status = useSelector((state: RootState) => state.chat.status);

// // // // // // // //   const scrollToBottom = () => {
// // // // // // // //     if (messagesEndRef.current) {
// // // // // // // //       messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   useEffect(() => {
// // // // // // // //     scrollToBottom();
// // // // // // // //   }, [messages]);

// // // // // // // //   return (
// // // // // // // //     <div className="flex-1 overflow-y-auto p-4 space-y-4">
// // // // // // // //       {messages.map((message) => (
// // // // // // // //         <div
// // // // // // // //           key={message.id}
// // // // // // // //           className={`flex items-start mb-4 ${
// // // // // // // //             message.sender === 'user' ? 'justify-end' : 'justify-start'
// // // // // // // //           }`}
// // // // // // // //         >
// // // // // // // //           {message.sender === 'bot' && (
// // // // // // // //             <FaRobot className="text-blue-500 text-2xl mr-2" />
// // // // // // // //           )}
// // // // // // // //           <div
// // // // // // // //             className={`p-4 rounded-lg ${
// // // // // // // //               message.sender === 'user'
// // // // // // // //                 ? 'bg-green-500 text-white'
// // // // // // // //                 : 'bg-gray-300 text-gray-900 dark:bg-gray-700 dark:text-white'
// // // // // // // //             }`}
// // // // // // // //           >
// // // // // // // //             <div
// // // // // // // //               className={`message ${
// // // // // // // //                 message.text.length > 100 ? 'expanded' : ''
// // // // // // // //               }`}
// // // // // // // //             >
// // // // // // // //               {message.text}
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //           {message.sender === 'user' && (
// // // // // // // //             <FaUser className="text-green-500 text-2xl ml-2" />
// // // // // // // //           )}
// // // // // // // //         </div>
// // // // // // // //       ))}
// // // // // // // //       {status === 'loading' && (
// // // // // // // //         <div className="text-gray-500">Bot is typing...</div>
// // // // // // // //       )}
// // // // // // // //       <div ref={messagesEndRef} />
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Chat;





// // // // // import React, { useEffect, useRef } from 'react';
// // // // // import { useSelector } from 'react-redux';
// // // // // import { RootState } from '../store/store';
// // // // // import { FaUser, FaRobot } from 'react-icons/fa';

// // // // // const Chat: React.FC = () => {
// // // // //   const messagesEndRef = useRef<HTMLDivElement | null>(null);
// // // // //   const messages = useSelector((state: RootState) => state.chat.messages);
// // // // //   const status = useSelector((state: RootState) => state.chat.status);

// // // // //   const scrollToBottom = () => {
// // // // //     if (messagesEndRef.current) {
// // // // //       messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     scrollToBottom();
// // // // //   }, [messages]);

// // // // //   return (
// // // // //     <div className="flex-1 overflow-y-auto p-4 space-y-4">
// // // // //       {messages.map((message) => (
// // // // //         <div
// // // // //           key={message.id}
// // // // //           className={`flex items-start mb-4 ${
// // // // //             message.sender === 'user' ? 'justify-end' : 'justify-start'
// // // // //           }`}
// // // // //         >
// // // // //           {message.sender === 'bot' && (
// // // // //             <FaRobot className="text-blue-500 text-2xl mr-2" />
// // // // //           )}
// // // // //           <div
// // // // //             className={`p-4 rounded-lg ${
// // // // //               message.sender === 'user'
// // // // //                 ? 'bg-green-500 text-white'
// // // // //                 : 'bg-gray-300 text-gray-900 dark:bg-gray-700 dark:text-white'
// // // // //             }`}
// // // // //           >
// // // // //             <div
// // // // //               className={`message ${
// // // // //                 message.text.length > 100 ? 'expanded' : ''
// // // // //               }`}
// // // // //             >
// // // // //               {message.text}
// // // // //             </div>
// // // // //           </div>
// // // // //           {message.sender === 'user' && (
// // // // //             <FaUser className="text-green-500 text-2xl ml-2" />
// // // // //           )}
// // // // //         </div>
// // // // //       ))}
// // // // //       {status === 'loading' && (
// // // // //         <div className="text-gray-500">Bot is typing...</div>
// // // // //       )}
// // // // //       <div ref={messagesEndRef} />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Chat;


// // // // #############################################################

// // // // import React, { useEffect, useRef } from 'react';
// // // // import { useSelector } from 'react-redux';
// // // // import { RootState } from '../store/store';
// // // // import { FaUser, FaRobot } from 'react-icons/fa';
// // // // import { motion, AnimatePresence } from 'framer-motion';

// // // // const Chat: React.FC = () => {
// // // //   const messagesEndRef = useRef<HTMLDivElement | null>(null);
// // // //   const messages = useSelector((state: RootState) => state.chat.messages);
// // // //   const status = useSelector((state: RootState) => state.chat.status);

// // // //   const scrollToBottom = () => {
// // // //     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
// // // //   };

// // // //   useEffect(scrollToBottom, [messages]);

// // // //   return (
// // // //     <div className="flex-1 overflow-y-auto p-4 space-y-4">
// // // //       <AnimatePresence>
// // // //         {messages.map((message) => (
// // // //           <motion.div
// // // //             key={message.id}
// // // //             initial={{ opacity: 0, y: 50 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             exit={{ opacity: 0, y: -50 }}
// // // //             transition={{ duration: 0.3 }}
// // // //             className={`flex items-start mb-4 ${
// // // //               message.sender === 'user' ? 'justify-end' : 'justify-start'
// // // //             }`}
// // // //           >
// // // //             {message.sender === 'bot' && (
// // // //               <FaRobot className="text-blue-500 text-2xl mr-2" />
// // // //             )}
// // // //             <div
// // // //               className={`p-4 rounded-lg shadow-md ${
// // // //                 message.sender === 'user'
// // // //                   ? 'bg-green-500 text-white'
// // // //                   : 'bg-gray-300 text-gray-900 dark:bg-gray-700 dark:text-white'
// // // //               }`}
// // // //             >
// // // //               <div className={`message ${message.text.length > 100 ? 'expanded' : ''}`}>
// // // //                 {message.text}
// // // //               </div>
// // // //             </div>
// // // //             {message.sender === 'user' && (
// // // //               <FaUser className="text-green-500 text-2xl ml-2" />
// // // //             )}
// // // //           </motion.div>
// // // //         ))}
// // // //       </AnimatePresence>
// // // //       {status === 'loading' && (
// // // //         <div className="text-gray-500 flex items-center">
// // // //           <div className="typing-indicator mr-2">Bot is typing</div>
// // // //           <div className="flex space-x-1">
// // // //             <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
// // // //             <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
// // // //             <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //       <div ref={messagesEndRef} />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Chat;


// // // // ###############################################################################################33


// // // import React, { useEffect, useRef } from 'react';
// // // import { useSelector } from 'react-redux';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import { RootState } from '../store/store';
// // // import Message from './Message';

// // // const Chat: React.FC = () => {
// // //   const messagesEndRef = useRef<HTMLDivElement>(null);
// // //   const messages = useSelector((state: RootState) => state.chat.messages);
// // //   const status = useSelector((state: RootState) => state.chat.status);

// // //   useEffect(() => {
// // //     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
// // //   }, [messages]);

// // //   return (
// // //     <div className="flex flex-col space-y-4 overflow-y-auto p-4 rounded-lg bg-white dark:bg-gray-800 shadow-inner">
// // //       <AnimatePresence>
// // //         {messages.map((message) => (
// // //           <motion.div
// // //             key={message.id}
// // //             initial={{ opacity: 0, y: 20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             exit={{ opacity: 0, y: -20 }}
// // //             transition={{ duration: 0.3 }}
// // //           >
// // //             <Message message={message} />
// // //           </motion.div>
// // //         ))}
// // //       </AnimatePresence>
// // //       {status === 'loading' && (
// // //         <div className="flex justify-center">
// // //           <motion.div
// // //             animate={{ scale: [1, 1.2, 1] }}
// // //             transition={{ repeat: Infinity, duration: 1 }}
// // //             className="bg-blue-500 rounded-full w-3 h-3"
// // //           />
// // //         </div>
// // //       )}
// // //       <div ref={messagesEndRef} />
// // //     </div>
// // //   );
// // // };

// // // export default Chat;





// // import React, { useEffect, useRef } from 'react';
// // import { useSelector } from 'react-redux';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { FixedSizeList as List } from 'react-window';
// // import AutoSizer from 'react-virtualized-auto-sizer';
// // import { RootState } from '../store/store';
// // import Message from './Message';

// // const Chat: React.FC = () => {
// //   const messagesEndRef = useRef<HTMLDivElement>(null);
// //   const messages = useSelector((state: RootState) => state.chat.messages);
// //   const status = useSelector((state: RootState) => state.chat.status);

// //   useEffect(() => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
// //   }, [messages]);

// //   const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
// //     <div style={style}>
// //       <Message message={messages[index]} />
// //     </div>
// //   );

// //   return (
// //     <div className="flex flex-col space-y-4 h-full">
// //       <AutoSizer>
// //         {({ height, width }: { height: number; width: number }) => (
// //           <List
// //             height={height}
// //             itemCount={messages.length}
// //             itemSize={100}
// //             width={width}
// //           >
// //             {Row}
// //           </List>
// //         )}
// //       </AutoSizer>
// //       {status === 'loading' && (
// //         <div className="flex justify-center">
// //           <motion.div
// //             animate={{ scale: [1, 1.2, 1] }}
// //             transition={{ repeat: Infinity, duration: 1 }}
// //             className="bg-blue-500 rounded-full w-3 h-3"
// //           />
// //         </div>
// //       )}
// //       <div ref={messagesEndRef} />
// //     </div>
// //   );
// // };

// // export default Chat;




// import React, { useEffect, useRef } from 'react';
// import { useSelector } from 'react-redux';
// import { motion, AnimatePresence } from 'framer-motion';
// import AutoSizer from 'react-virtualized-auto-sizer';
// import { VariableSizeList as List } from 'react-window';
// import { RootState } from '../store/store';
// import Message from './Message';

// const Chat: React.FC = () => {
//   const messagesEndRef = useRef<HTMLDivElement>(null);
//   const listRef = useRef<List>(null);
//   const messages = useSelector((state: RootState) => state.chat.messages);
//   const status = useSelector((state: RootState) => state.chat.status);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//     listRef.current?.scrollToItem(messages.length - 1, 'end');
//   }, [messages]);

//   const getItemSize = (index: number) => {
//     return 100 + messages[index].text.length / 3;
//   };

//   const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
//     <div style={style}>
//       <Message message={messages[index]} />
//     </div>
//   );

//   return (
//     <div className="flex flex-col space-y-4 h-full">
//       <AutoSizer>
//         {({ height, width }: { height: number; width: number }) => (
//           <List
//             ref={listRef}
//             height={height}
//             itemCount={messages.length}
//             itemSize={getItemSize}
//             width={width}
//             overscanCount={5}
//           >
//             {Row}
//           </List>
//         )}
//       </AutoSizer>
//       <AnimatePresence>
//         {status === 'loading' && (
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             className="flex justify-center"
//           >
//             <div className="typing-indicator">
//               <span></span>
//               <span></span>
//               <span></span>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//       <div ref={messagesEndRef} />
//     </div>
//   );
// };

// export default Chat;



import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeList as List } from 'react-window';
import { RootState } from '../store/store';
import Message from './Message';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { setFilter } from '../store/chatSlice';

const Chat: React.FC = () => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<List>(null);
  const messages = useSelector((state: RootState) => state.chat.messages);
  const filter = useSelector((state: RootState) => state.chat.filter);
  const status = useSelector((state: RootState) => state.chat.status);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    listRef.current?.scrollToItem(messages.length - 1, 'end');
  }, [messages]);

  const getItemSize = (index: number) => {
    return 100 + messages[index].text.length / 3;
  };

  const filteredMessages = messages.filter(
    (message) =>
      message.text.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === 'all' || message.category === filter)
  );

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
    <div style={style}>
      <Message message={filteredMessages[index]} />
    </div>
  );

  return (
    <div className="flex flex-col space-y-4 h-full">
      <div className="flex items-center space-x-2 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <div className="relative flex-grow">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t('searchMessages')}
            className="w-full pl-10 pr-4 py-2 rounded-md bg-white dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select
          value={filter}
          onChange={(e) => dispatch(setFilter(e.target.value))}
          className="p-2 rounded-md bg-white dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">{t('allCategories')}</option>
          <option value="general">{t('general')}</option>
          <option value="finance">{t('finance')}</option>
          <option value="support">{t('support')}</option>
        </select>
        <FaFilter className="text-gray-400" />
      </div>
      <AutoSizer>
        {({ height, width }: { height: number; width: number }) => (
          <List
            ref={listRef}
            height={height}
            itemCount={filteredMessages.length}
            itemSize={getItemSize}
            width={width}
            overscanCount={5}
          >
            {Row}
          </List>
        )}
      </AutoSizer>
      <AnimatePresence>
        {status === 'loading' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex justify-center"
          >
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Chat;
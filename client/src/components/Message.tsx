// // // // // // import React from 'react';
// // // // // // import ReactMarkdown from 'react-markdown';
// // // // // // import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// // // // // // import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

// // // // // // interface MessageProps {
// // // // // //   message: {
// // // // // //     id: string;
// // // // // //     text: string;
// // // // // //     sender: 'user' | 'bot';
// // // // // //   };
// // // // // // }

// // // // // // const Message: React.FC<MessageProps> = ({ message }) => {
// // // // // //   return (
// // // // // //     <div
// // // // // //       className={`flex ${
// // // // // //         message.sender === 'user' ? 'justify-end' : 'justify-start'
// // // // // //       }`}
// // // // // //     >
// // // // // //       <div
// // // // // //         className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-2 rounded-lg ${
// // // // // //           message.sender === 'user'
// // // // // //             ? 'bg-blue-500 text-white'
// // // // // //             : 'bg-gray-300 text-black'
// // // // // //         }`}
// // // // // //       >
// // // // // //         <ReactMarkdown
// // // // // //           components={{
// // // // // //             code: ({ className, children }) => {
// // // // // //               const match = /language-(\w+)/.exec(className || '');
// // // // // //               return match ? (
// // // // // //                 <SyntaxHighlighter
// // // // // //                   style={tomorrow as any}
// // // // // //                   language={match[1]}
// // // // // //                   PreTag="div"
// // // // // //                 >
// // // // // //                   {String(children).replace(/\n$/, '')}
// // // // // //                 </SyntaxHighlighter>
// // // // // //               ) : (
// // // // // //                 <code className={className}>{children}</code>
// // // // // //               );
// // // // // //             },
// // // // // //           }}
// // // // // //         >
// // // // // //           {message.text}
// // // // // //         </ReactMarkdown>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Message;













// // // // #####################################################################################################3
// // // // import React from 'react';
// // // // import ReactMarkdown from 'react-markdown';
// // // // import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// // // // import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

// // // // interface MessageProps {
// // // //   message: {
// // // //     id: string;
// // // //     text: string;
// // // //     sender: 'user' | 'bot';
// // // //   };
// // // // }

// // // // const Message: React.FC<MessageProps> = ({ message }) => {
// // // //   return (
// // // //     <div
// // // //       className={`flex ${
// // // //         message.sender === 'user' ? 'justify-end' : 'justify-start'
// // // //       }`}
// // // //     >
// // // //       <div
// // // //         className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-2 rounded-lg shadow-md ${
// // // //           message.sender === 'user'
// // // //             ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
// // // //             : 'bg-gray-300 text-black'
// // // //         }`}
// // // //       >
// // // //         <ReactMarkdown
// // // //           components={{
// // // //             code: ({ className, children }) => {
// // // //               const match = /language-(\w+)/.exec(className || '');
// // // //               return match ? (
// // // //                 <SyntaxHighlighter
// // // //                   style={tomorrow as any}
// // // //                   language={match[1]}
// // // //                   PreTag="div"
// // // //                 >
// // // //                   {String(children).replace(/\n$/, '')}
// // // //                 </SyntaxHighlighter>
// // // //               ) : (
// // // //                 <code className={className}>{children}</code>
// // // //               );
// // // //             },
// // // //           }}
// // // //         >
// // // //           {message.text}
// // // //         </ReactMarkdown>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Message;

// // // // #############################################################################################

































// // // // import React, { useState } from 'react';
// // // // import { FaUser, FaRobot, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// // // // interface MessageProps {
// // // //   id: string;
// // // //   text: string;
// // // //   sender: 'user' | 'bot';
// // // // }

// // // // const Message: React.FC<MessageProps> = ({ id, text, sender }) => {
// // // //   const [isExpanded, setIsExpanded] = useState(false);
// // // //   const toggleExpand = () => setIsExpanded(!isExpanded);

// // // //   const isLongMessage = text.length > 100;

// // // //   return (
// // // //     <div
// // // //       key={id}
// // // //       className={`flex items-start mb-4 ${
// // // //         sender === 'user' ? 'justify-end' : 'justify-start'
// // // //       }`}
// // // //     >
// // // //       {sender === 'bot' && (
// // // //         <FaRobot className="avatar mr-2 text-blue-500" />
// // // //       )}
// // // //       <div
// // // //         className={`p-4 rounded-lg ${
// // // //           sender === 'user'
// // // //             ? 'bg-green-500 text-white'
// // // //             : 'bg-gray-300 text-gray-900 dark:bg-gray-700 dark:text-white'
// // // //         }`}
// // // //       >
// // // //         <div
// // // //           className={`message collapsible ${
// // // //             isExpanded || !isLongMessage ? 'expanded' : ''
// // // //           }`}
// // // //         >
// // // //           {text}
// // // //         </div>
// // // //         {isLongMessage && (
// // // //           <button
// // // //             onClick={toggleExpand}
// // // //             className="mt-2 text-sm text-blue-500 flex items-center"
// // // //           >
// // // //             {isExpanded ? (
// // // //               <>
// // // //                 Collapse <FaChevronUp className="ml-1" />
// // // //               </>
// // // //             ) : (
// // // //               <>
// // // //                 Expand <FaChevronDown className="ml-1" />
// // // //               </>
// // // //             )}
// // // //           </button>
// // // //         )}
// // // //       </div>
// // // //       {sender === 'user' && (
// // // //         <FaUser className="avatar ml-2 text-green-500" />
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Message;




// // // // import React, { useState } from 'react';
// // // // import { motion } from 'framer-motion';
// // // // import ReactMarkdown from 'react-markdown';
// // // // import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// // // // import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
// // // // import { FaUser, FaRobot, FaCopy } from 'react-icons/fa';

// // // // interface MessageProps {
// // // //   message: {
// // // //     id: string;
// // // //     text: string;
// // // //     sender: 'user' | 'bot';
// // // //   };
// // // // }

// // // // const Message: React.FC<MessageProps> = ({ message }) => {
// // // //   const [isCopied, setIsCopied] = useState(false);

// // // //   const copyToClipboard = () => {
// // // //     navigator.clipboard.writeText(message.text);
// // // //     setIsCopied(true);
// // // //     setTimeout(() => setIsCopied(false), 2000);
// // // //   };

// // // //   return (
// // // //     <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
// // // //       <div className={`flex max-w-3/4 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
// // // //         <div className={`flex-shrink-0 ${message.sender === 'user' ? 'ml-3' : 'mr-3'}`}>
// // // //           {message.sender === 'user' ? (
// // // //             <FaUser className="text-blue-500 text-2xl" />
// // // //           ) : (
// // // //             <FaRobot className="text-green-500 text-2xl" />
// // // //           )}
// // // //         </div>
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 10 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.3 }}
// // // //           className={`relative p-3 rounded-lg ${
// // // //             message.sender === 'user'
// // // //               ? 'bg-blue-100 dark:bg-blue-900'
// // // //               : 'bg-gray-100 dark:bg-gray-700'
// // // //           }`}
// // // //         >
// // // //           <ReactMarkdown
// // // //             components={{
// // // //               code: ({ node, inline, className, children, ...props }) => {
// // // //                 const match = /language-(\w+)/.exec(className || '');
// // // //                 return !inline && match ? (
// // // //                   <SyntaxHighlighter
// // // //                     style={tomorrow}
// // // //                     language={match[1]}
// // // //                     PreTag="div"
// // // //                     {...props}
// // // //                   >
// // // //                     {String(children).replace(/\n$/, '')}
// // // //                   </SyntaxHighlighter>
// // // //                 ) : (
// // // //                   <code className={className} {...props}>
// // // //                     {children}
// // // //                   </code>
// // // //                 );
// // // //               },
// // // //             }}
// // // //           >
// // // //             {message.text}
// // // //           </ReactMarkdown>
// // // //           <button
// // // //             onClick={copyToClipboard}
// // // //             className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
// // // //           >
// // // //             <FaCopy />
// // // //           </button>
// // // //           {isCopied && (
// // // //             <motion.div
// // // //               initial={{ opacity: 0, y: 10 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               exit={{ opacity: 0, y: -10 }}
// // // //               className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded"
// // // //             >
// // // //               Copied!
// // // //             </motion.div>
// // // //           )}
// // // //         </motion.div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Message;







// // // // import React, { useState } from 'react';
// // // // import { motion } from 'framer-motion';
// // // // import ReactMarkdown from 'react-markdown';
// // // // import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// // // // import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
// // // // import { FaUser, FaRobot, FaCopy } from 'react-icons/fa';

// // // // interface MessageProps {
// // // //   message: {
// // // //     id: string;
// // // //     text: string;
// // // //     sender: 'user' | 'bot';
// // // //   };
// // // // }

// // // // const Message: React.FC<MessageProps> = ({ message }) => {
// // // //   const [isCopied, setIsCopied] = useState(false);

// // // //   const copyToClipboard = () => {
// // // //     navigator.clipboard.writeText(message.text);
// // // //     setIsCopied(true);
// // // //     setTimeout(() => setIsCopied(false), 2000);
// // // //   };

// // // //   const CodeBlock = ({ language, value }: { language: string; value: string }) => (
// // // //     <SyntaxHighlighter language={language} style={tomorrow}>
// // // //       {value}
// // // //     </SyntaxHighlighter>
// // // //   );

// // // //   return (
// // // //     <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
// // // //       <div className={`flex max-w-3/4 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
// // // //         <div className={`flex-shrink-0 ${message.sender === 'user' ? 'ml-3' : 'mr-3'}`}>
// // // //           {message.sender === 'user' ? (
// // // //             <FaUser className="text-blue-500 text-2xl" />
// // // //           ) : (
// // // //             <FaRobot className="text-green-500 text-2xl" />
// // // //           )}
// // // //         </div>
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 10 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.3 }}
// // // //           className={`relative p-3 rounded-lg ${
// // // //             message.sender === 'user'
// // // //               ? 'bg-blue-100 dark:bg-blue-900'
// // // //               : 'bg-gray-100 dark:bg-gray-700'
// // // //           }`}
// // // //         >
// // // //           <ReactMarkdown
// // // //             components={{
// // // //               code({ node, inline, className, children, ...props }) {
// // // //                 const match = /language-(\w+)/.exec(className || '');
// // // //                 return !inline && match ? (
// // // //                   <CodeBlock language={match[1]} value={String(children).replace(/\n$/, '')} />
// // // //                 ) : (
// // // //                   <code className={className} {...props}>
// // // //                     {children}
// // // //                   </code>
// // // //                 );
// // // //               },
// // // //             }}
// // // //           >
// // // //             {message.text}
// // // //           </ReactMarkdown>
// // // //           <button
// // // //             onClick={copyToClipboard}
// // // //             className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
// // // //           >
// // // //             <FaCopy />
// // // //           </button>
// // // //           {isCopied && (
// // // //             <motion.div
// // // //               initial={{ opacity: 0, y: 10 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               exit={{ opacity: 0, y: -10 }}
// // // //               className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded"
// // // //             >
// // // //               Copied!
// // // //             </motion.div>
// // // //           )}
// // // //         </motion.div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Message;





// // // import React, { useState } from 'react';
// // // import { motion } from 'framer-motion';
// // // import ReactMarkdown from 'react-markdown';
// // // import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// // // import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
// // // import { FaUser, FaRobot, FaCopy } from 'react-icons/fa';

// // // interface MessageProps {
// // //   message: {
// // //     id: string;
// // //     text: string;
// // //     sender: 'user' | 'bot';
// // //   };
// // // }

// // // const Message: React.FC<MessageProps> = ({ message }) => {
// // //   const [isCopied, setIsCopied] = useState(false);

// // //   const copyToClipboard = () => {
// // //     navigator.clipboard.writeText(message.text);
// // //     setIsCopied(true);
// // //     setTimeout(() => setIsCopied(false), 2000);
// // //   };

// // //   const CodeBlock = ({ language, value }: { language: string; value: string }) => (
// // //     <SyntaxHighlighter language={language} style={tomorrow}>
// // //       {value}
// // //     </SyntaxHighlighter>
// // //   );

// // //   return (
// // //     <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
// // //       <div className={`flex max-w-3/4 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
// // //         <div className={`flex-shrink-0 ${message.sender === 'user' ? 'ml-3' : 'mr-3'}`}>
// // //           {message.sender === 'user' ? (
// // //             <FaUser className="text-blue-500 text-2xl" />
// // //           ) : (
// // //             <FaRobot className="text-green-500 text-2xl" />
// // //           )}
// // //         </div>
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 10 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.3 }}
// // //           className={`relative p-3 rounded-lg ${
// // //             message.sender === 'user'
// // //               ? 'bg-blue-100 dark:bg-blue-900'
// // //               : 'bg-gray-100 dark:bg-gray-700'
// // //           }`}
// // //         >
// // //           <ReactMarkdown
// // //             components={{
// // //               code({ node, className, children, ...props }) {
// // //                 const match = /language-(\w+)/.exec(className || '');
// // //                 const codeString = String(children).replace(/\n$/, '');
// // //                 const isInline = !match && codeString.split('\n').length === 1;
                
// // //                 return isInline ? (
// // //                   <code className={className} {...props}>
// // //                     {codeString}
// // //                   </code>
// // //                 ) : (
// // //                   <CodeBlock 
// // //                     language={match ? match[1] : ''} 
// // //                     value={codeString} 
// // //                   />
// // //                 );
// // //               },
// // //             }}
// // //           >
// // //             {message.text}
// // //           </ReactMarkdown>
// // //           <button
// // //             onClick={copyToClipboard}
// // //             className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
// // //           >
// // //             <FaCopy />
// // //           </button>
// // //           {isCopied && (
// // //             <motion.div
// // //               initial={{ opacity: 0, y: 10 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               exit={{ opacity: 0, y: -10 }}
// // //               className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded"
// // //             >
// // //               Copied!
// // //             </motion.div>
// // //           )}
// // //         </motion.div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Message;



// // import React, { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import ReactMarkdown from 'react-markdown';
// // import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// // import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
// // import { FaUser, FaRobot, FaCopy } from 'react-icons/fa';
// // import { useTranslation } from 'react-i18next';

// // interface MessageProps {
// //   message: {
// //     id: string;
// //     text: string;
// //     sender: 'user' | 'bot';
// //   };
// // }

// // const Message: React.FC<MessageProps> = ({ message }) => {
// //   const [isCopied, setIsCopied] = useState(false);
// //   const { t } = useTranslation();

// //   const copyToClipboard = () => {
// //     navigator.clipboard.writeText(message.text);
// //     setIsCopied(true);
// //     setTimeout(() => setIsCopied(false), 2000);
// //   };

// //   const CodeBlock = ({ language, value }: { language: string | undefined; value: string }) => (
// //     <SyntaxHighlighter language={language} style={tomorrow}>
// //       {value}
// //     </SyntaxHighlighter>
// //   );

// //   return (
// //     <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
// //       <div className={`flex max-w-3/4 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
// //         <div className={`flex-shrink-0 ${message.sender === 'user' ? 'ml-3' : 'mr-3'}`}>
// //           {message.sender === 'user' ? (
// //             <FaUser className="text-blue-500 text-2xl" />
// //           ) : (
// //             <FaRobot className="text-green-500 text-2xl" />
// //           )}
// //         </div>
// //         <motion.div
// //           initial={{ opacity: 0, y: 10 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.3 }}
// //           className={`relative p-3 rounded-lg ${
// //             message.sender === 'user'
// //               ? 'bg-blue-100 dark:bg-blue-900'
// //               : 'bg-gray-100 dark:bg-gray-700'
// //           }`}
// //         >
// //           <ReactMarkdown
// //             components={{
// //               code({ className, children }) {
// //                 const language = className ? className.replace('language-', '') : undefined;
// //                 return (
// //                   <CodeBlock
// //                     language={language}
// //                     value={String(children).replace(/\n$/, '')}
// //                   />
// //                 );
// //               },
// //             }}
// //           >
// //             {message.text}
// //           </ReactMarkdown>
// //           <button
// //             onClick={copyToClipboard}
// //             className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
// //           >
// //             <FaCopy />
// //           </button>
// //           {isCopied && (
// //             <motion.div
// //               initial={{ opacity: 0, y: 10 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={{ opacity: 0, y: -10 }}
// //               className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded"
// //             >
// //               {t('copied')}
// //             </motion.div>
// //           )}
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Message;





// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import ReactMarkdown from 'react-markdown';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { FaUser, FaRobot, FaCopy, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
// import { useTranslation } from 'react-i18next';

// interface MessageProps {
//   message: {
//     id: string;
//     text: string;
//     sender: 'user' | 'bot';
//   };
// }

// const Message: React.FC<MessageProps> = ({ message }) => {
//   const [isCopied, setIsCopied] = useState(false);
//   const [reaction, setReaction] = useState<'like' | 'dislike' | null>(null);
//   const { t } = useTranslation();

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(message.text);
//     setIsCopied(true);
//     setTimeout(() => setIsCopied(false), 2000);
//   };

//   const CodeBlock = ({ language, value }: { language: string | undefined; value: string }) => (
//     <SyntaxHighlighter 
//       language={language} 
//       style={tomorrow}
//       customStyle={{
//         borderRadius: '0.375rem',
//         padding: '1rem',
//         margin: '0.5rem 0',
//       }}
//     >
//       {value}
//     </SyntaxHighlighter>
//   );

//   const renderCodeBlock = (props: any) => {
//     const { inline, className, children } = props;
//     const match = /language-(\w+)/.exec(className || '');
//     return !inline && match ? (
//       <CodeBlock
//         language={match[1]}
//         value={String(children).replace(/\n$/, '')}
//       />
//     ) : (
//       <code className={className}>
//         {children}
//       </code>
//     );
//   };

//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.3 }}
//       className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
//     >
//       <div className={`flex max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
//         <div className={`flex-shrink-0 ${message.sender === 'user' ? 'ml-3' : 'mr-3'}`}>
//           {message.sender === 'user' ? (
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               className="bg-blue-500 rounded-full p-2 shadow-md"
//             >
//               <FaUser className="text-white text-xl" />
//             </motion.div>
//           ) : (
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               className="bg-green-500 rounded-full p-2 shadow-md"
//             >
//               <FaRobot className="text-white text-xl" />
//             </motion.div>
//           )}
//         </div>
//         <motion.div
//           whileHover={{ scale: 1.01 }}
//           className={`relative p-4 rounded-lg shadow-lg ${
//             message.sender === 'user'
//               ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100'
//               : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100'
//           }`}
//         >
//           <ReactMarkdown
//             components={{
//               code: renderCodeBlock,
//             }}
//             className="markdown-content"
//           >
//             {message.text}
//           </ReactMarkdown>
//           <div className="absolute top-2 right-2 flex space-x-2">
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={copyToClipboard}
//               className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
//             >
//               <FaCopy />
//             </motion.button>
//             {message.sender === 'bot' && (
//               <>
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={() => setReaction('like')}
//                   className={`${
//                     reaction === 'like' ? 'text-green-500' : 'text-gray-500'
//                   } hover:text-green-700 transition-colors duration-200`}
//                 >
//                   <FaThumbsUp />
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={() => setReaction('dislike')}
//                   className={`${
//                     reaction === 'dislike' ? 'text-red-500' : 'text-gray-500'
//                   } hover:text-red-700 transition-colors duration-200`}
//                 >
//                   <FaThumbsDown />
//                 </motion.button>
//               </>
//             )}
//           </div>
//           <AnimatePresence>
//             {isCopied && (
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.2 }}
//                 className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded shadow-lg"
//               >
//                 {t('copied')}
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default Message;




import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaUser, FaRobot, FaCopy, FaThumbsUp, FaThumbsDown, FaChartBar, FaImage, FaFileAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface MessageProps {
  message: {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    category?: string;
    attachment?: {
      type: 'image' | 'chart' | 'document';
      url: string;
    };
  };
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [reaction, setReaction] = useState<'like' | 'dislike' | null>(null);
  const { t } = useTranslation();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(message.text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const CodeBlock = ({ language, value }: { language: string | undefined; value: string }) => (
    <SyntaxHighlighter 
      language={language} 
      style={tomorrow}
      customStyle={{
        borderRadius: '0.375rem',
        padding: '1rem',
        margin: '0.5rem 0',
      }}
    >
      {value}
    </SyntaxHighlighter>
  );

  const renderCodeBlock = (props: any) => {
    const { inline, className, children } = props;
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <CodeBlock
        language={match[1]}
        value={String(children).replace(/\n$/, '')}
      />
    ) : (
      <code className={className}>
        {children}
      </code>
    );
  };

  const renderAttachment = () => {
    if (!message.attachment) return null;

    switch (message.attachment.type) {
      case 'image':
        return (
          <div className="mt-2">
            <img src={message.attachment.url} alt="Attached image" className="max-w-full h-auto rounded-lg" />
          </div>
        );
      case 'chart':
        return (
          <div className="mt-2">
            <FaChartBar className="text-4xl text-blue-500" />
            <p>Chart: {message.attachment.url}</p>
          </div>
        );
      case 'document':
        return (
          <div className="mt-2 flex items-center">
            <FaFileAlt className="text-2xl text-gray-500 mr-2" />
            <a href={message.attachment.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View Document
            </a>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div className={`flex max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`flex-shrink-0 ${message.sender === 'user' ? 'ml-3' : 'mr-3'}`}>
          {message.sender === 'user' ? (
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-blue-500 rounded-full p-2 shadow-md"
            >
              <FaUser className="text-white text-xl" />
            </motion.div>
          ) : (
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-green-500 rounded-full p-2 shadow-md"
            >
              <FaRobot className="text-white text-xl" />
            </motion.div>
          )}
        </div>
        <motion.div
          whileHover={{ scale: 1.01 }}
          className={`relative p-4 rounded-lg shadow-lg ${
            message.sender === 'user'
              ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100'
              : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100'
          }`}
        >
          {message.category && (
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 block">
              {t(message.category)}
            </span>
          )}
          <ReactMarkdown
            components={{
              code: renderCodeBlock,
            }}
            className="markdown-content"
          >
            {message.text}
          </ReactMarkdown>
          {renderAttachment()}
          <div className="absolute top-2 right-2 flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={copyToClipboard}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
            >
              <FaCopy />
            </motion.button>
            {message.sender === 'bot' && (
              <>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setReaction('like')}
                  className={`${
                    reaction === 'like' ? 'text-green-500' : 'text-gray-500'
                  } hover:text-green-700 transition-colors duration-200`}
                >
                  <FaThumbsUp />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setReaction('dislike')}
                  className={`
                                      ${
                    reaction === 'dislike' ? 'text-red-500' : 'text-gray-500'
                  } hover:text-red-700 transition-colors duration-200`}
                >
                  <FaThumbsDown />
                </motion.button>
              </>
            )}
          </div>
          {isCopied && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-0 right-0 mt-8 mr-4 p-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg text-xs shadow-lg"
            >
              {t('Copied!')}
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Message;

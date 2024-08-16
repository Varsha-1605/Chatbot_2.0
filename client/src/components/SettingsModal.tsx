// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { useTranslation } from 'react-i18next';
// // import { FaTimes } from 'react-icons/fa';

// // interface SettingsModalProps {
// //   isOpen: boolean;
// //   onClose: () => void;
// //   onLanguageChange: (lang: string) => void;
// // }

// // const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, onLanguageChange }) => {
// //   const { t, i18n } = useTranslation();

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       exit={{ opacity: 0 }}
// //       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
// //     >
// //       <motion.div
// //         initial={{ y: 50, opacity: 0 }}
// //         animate={{ y: 0, opacity: 1 }}
// //         exit={{ y: 50, opacity: 0 }}
// //         className="bg-white dark:bg-gray-800 rounded-lg p-6 w-96"
// //       >
// //         <div className="flex justify-between items-center mb-4">
// //           <h2 className="text-xl font-bold">{t('settings')}</h2>
// //           <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
// //             <FaTimes />
// //           </button>
// //         </div>
// //         <div className="mb-4">
// //           <label className="block mb-2 font-medium">{t('language')}</label>
// //           <select
// //             value={i18n.language}
// //             onChange={(e) => onLanguageChange(e.target.value)}
// //             className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
// //           >
// //             <option value="en">English</option>
// //             <option value="es">Español</option>
// //           </select>
// //         </div>
// //         {/* Add more settings options here */}
// //       </motion.div>
// //     </motion.div>
// //   );
// // };

// // export default SettingsModal;



// import React from 'react';
// import { motion } from 'framer-motion';
// import { useTranslation } from 'react-i18next';
// import { FaTimes } from 'react-icons/fa';

// interface SettingsModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onLanguageChange: (lang: string) => void;
//   onFontSizeChange: (size: number) => void;
//   currentFontSize: number;
// }

// const SettingsModal: React.FC<SettingsModalProps> = ({
//   isOpen,
//   onClose,
//   onLanguageChange,
//   onFontSizeChange,
//   currentFontSize,
// }) => {
//   const { t, i18n } = useTranslation();

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//     >
//       <motion.div
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: 50, opacity: 0 }}
//         className="bg-white dark:bg-gray-800 rounded-lg p-6 w-96"
//       >
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold">{t('settings')}</h2>
//           <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//             <FaTimes />
//           </button>
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 font-medium">{t('language')}</label>
//           <select
//             value={i18n.language}
//             onChange={(e) => onLanguageChange(e.target.value)}
//             className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
//           >
//             <option value="en">English</option>
//             <option value="es">Español</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 font-medium">{t('fontSize')}</label>
//           <input
//             type="range"
//             min="12"
//             max="24"
//             step="1"
//             value={currentFontSize}
//             onChange={(e) => onFontSizeChange(Number(e.target.value))}
//             className="w-full"
//           />
//           <span className="text-sm">{currentFontSize}px</span>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default SettingsModal;





import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaTimes } from 'react-icons/fa';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLanguageChange: (lang: string) => void;
  onFontSizeChange: (size: number) => void;
  currentFontSize: number;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  onLanguageChange,
  onFontSizeChange,
  currentFontSize,
}) => {
  const { t, i18n } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-lg p-6 w-96 shadow-2xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{t('settings')}</h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes />
          </motion.button>
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-medium text-lg">{t('language')}</label>
          <select
            value={i18n.language}
            onChange={(e) => onLanguageChange(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-medium text-lg">{t('fontSize')}</label>
          <input
            type="range"
            min="12"
            max="24"
            step="1"
            value={currentFontSize}
            onChange={(e) => onFontSizeChange(Number(e.target.value))}
            className="w-full"
          />
          <span className="text-sm mt-1 block">{currentFontSize}px</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SettingsModal;
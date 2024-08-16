// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaTimes, FaUser, FaEnvelope, FaSave } from 'react-icons/fa';
// import { useTranslation } from 'react-i18next';

// interface UserProfileModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const UserProfileModal: React.FC<UserProfileModalProps> = ({ isOpen, onClose }) => {
//   const { t } = useTranslation();
//   const [name, setName] = useState('John Doe');
//   const [email, setEmail] = useState('john.doe@example.com');

//   const handleSave = () => {
//     // In a real application, this would involve backend communication
//     console.log('Saving user profile:', { name, email });
//     onClose();
//   };

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
//         className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md shadow-2xl"
//       >
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-bold">{t('userProfile')}</h2>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700"
//           >
//             <FaTimes />
//           </motion.button>
//         </div>
//         <div className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//               {t('name')}
//             </label>
//             <div className="relative">
//               <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="pl-10 w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//               {t('email')}
//             </label>
//             <div className="relative">
//               <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="pl-10 w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="mt-6">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleSave}
//             className="w-full bg-blue-500 text-white p-2 rounded-md flex items-center justify-center"
//           >
//             <FaSave className="mr-2" />
//             {t('saveChanges')}
//           </motion.button>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default UserProfileModal;



import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaUser, FaEnvelope, FaSave } from 'react-icons/fa';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialName?: string;
  initialEmail?: string;
}

const UserProfileModal: React.FC<UserProfileModalProps> = ({ isOpen, onClose, initialName = '', initialEmail = '' }) => {
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching user data from an API or local storage
    const fetchUserData = () => {
      setLoading(true);
      setTimeout(() => {
        setName('John Doe'); // Simulated fetched data
        setEmail('john.doe@example.com'); // Simulated fetched data
        setLoading(false);
      }, 1000); // Simulate a 1-second network delay
    };

    fetchUserData();
  }, []);

  const handleSave = () => {
    // In a real application, this would involve a backend API call to update the user's profile
    console.log('Saving user profile:', { name, email });
    // Simulate a successful save with a timeout
    setTimeout(() => {
      alert('Profile updated successfully!');
      onClose();
    }, 500); // Simulate a delay before closing the modal
  };

  if (loading) {
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
          className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md shadow-2xl"
        >
          <p className="text-center text-gray-700 dark:text-gray-300">Loading user profile...</p>
        </motion.div>
      </motion.div>
    );
  }

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
        className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md shadow-2xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">User Profile</h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes />
          </motion.button>
        </div>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10 w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSave}
            className="w-full bg-blue-500 text-white p-2 rounded-md flex items-center justify-center"
          >
            <FaSave className="mr-2" />
            Save Changes
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default UserProfileModal;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaLock, FaUnlock } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface SecurityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SecurityModal: React.FC<SecurityModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);

  const toggleTwoFactor = () => {
    // In a real application, this would involve backend communication
    setIsTwoFactorEnabled(!isTwoFactorEnabled);
  };

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
          <h2 className="text-2xl font-bold">{t('security')}</h2>
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
          <div className="flex items-center justify-between">
            <span>{t('twoFactorAuth')}</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTwoFactor}
              className={`p-2 rounded-full ${
                isTwoFactorEnabled ? 'bg-green-500' : 'bg-red-500'
              } text-white`}
            >
              {isTwoFactorEnabled ? <FaLock /> : <FaUnlock />}
            </motion.button>
          </div>
          <div>
            <h3 className="font-semibold mb-2">{t('dataHandling')}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t('dataHandlingInfo')}
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">{t('encryptionStatus')}</h3>
            <p className="text-sm text-green-600 dark:text-green-400">
              {t('encryptionActive')}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SecurityModal;
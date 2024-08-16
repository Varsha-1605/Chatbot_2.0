// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaTimes } from 'react-icons/fa';
// import { useTranslation } from 'react-i18next';

// interface HelpModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
//   const { t } = useTranslation();

//   const faqs = [
//     { question: t('faq1Question'), answer: t('faq1Answer') },
//     { question: t('faq2Question'), answer: t('faq2Answer') },
//     { question: t('faq3Question'), answer: t('faq3Answer') },
//   ];

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
//         className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl h-3/4 overflow-auto shadow-2xl"
//       >
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-bold">{t('help')}</h2>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700"
//           >
//             <FaTimes />
//           </motion.button>
//         </div>
//         <div className="space-y-6">
//           <section>
//             <h3 className="text-xl font-semibold mb-2">{t('faqTitle')}</h3>
//             {faqs.map((faq, index) => (
//               <div key={index} className="mb-4">
//                 <h4 className="font-medium mb-1">{faq.question}</h4>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">{faq.answer}</p>
//               </div>
//             ))}
//           </section>
//           <section>
//             <h3 className="text-xl font-semibold mb-2">{t('contactSupport')}</h3>
//             <p className="text-sm text-gray-600 dark:text-gray-400">
//               {t('contactSupportInfo')}
//             </p>
//           </section>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default HelpModal;





import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  
  // Custom static FAQ data
  const faqs = [
    { question: 'How do I reset my password?', answer: 'To reset your password, go to the settings page, click on "Change Password", and follow the instructions.' },
    { question: 'How can I contact support?', answer: 'You can contact support by emailing us at support@example.com or by calling our toll-free number 1-800-555-5555.' },
    { question: 'Where can I find the user manual?', answer: 'The user manual is available in the help section of the application, or you can download it from our website.' },
  ];

  const contactSupportInfo = 'If you need further assistance, please reach out to our support team at support@example.com or call 1-800-555-5555.';

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
        className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl h-3/4 overflow-auto shadow-2xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Help & Support</h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes />
          </motion.button>
        </div>
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-2">Frequently Asked Questions</h3>
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <h4 className="font-medium mb-1">{faq.question}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-2">Contact Support</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {contactSupportInfo}
            </p>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HelpModal;

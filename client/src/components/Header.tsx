// // // // import React from 'react';
// // // // import { useTranslation } from 'react-i18next';

// // // // const Header: React.FC = () => {
// // // //   const { t } = useTranslation();

// // // //   return (
// // // //     <header className="bg-blue-600 text-white p-4">
// // // //       <h1 className="text-2xl font-bold">{t('appTitle')}</h1>
// // // //     </header>
// // // //   );
// // // // };

// // // // export default Header;




// // // import React from 'react';
// // // import { useTranslation } from 'react-i18next';

// // // const Header: React.FC = () => {
// // //   const { t } = useTranslation();

// // //   return (
// // //     <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 shadow-lg">
// // //       <h1 className="text-3xl font-bold tracking-wide">{t('appTitle')}</h1>
// // //     </header>
// // //   );
// // // };

// // // export default Header;




// import React from 'react';
// import { useTranslation } from 'react-i18next';

// const Header: React.FC = () => {
//   const { t } = useTranslation();

//   return (
//     <header className="text-center text-2xl font-bold text-gray-900 dark:text-white">
//       {t('appTitle')}
//     </header>
//   );
// };

// export default Header;



import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="text-center">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-900 dark:text-white"
      >
        {t('appTitle')}
      </motion.h1>
    </header>
  );
};

export default Header;
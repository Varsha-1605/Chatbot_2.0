// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaTimes, FaChartLine, FaMoneyBillWave, FaNewspaper } from 'react-icons/fa';
// import { useTranslation } from 'react-i18next';

// interface DashboardProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const Dashboard: React.FC<DashboardProps> = ({ isOpen, onClose }) => {
//   const { t } = useTranslation();

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
//         className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-4xl h-3/4 overflow-auto shadow-2xl"
//       >
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-bold">{t('dashboard')}</h2>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700"
//           >
//             <FaTimes />
//           </motion.button>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           <DashboardCard icon={FaChartLine} title={t('marketOverview')} />
//           <DashboardCard icon={FaMoneyBillWave} title={t('portfolioPerformance')} />
//           <DashboardCard icon={FaNewspaper} title={t('latestNews')} />
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// interface DashboardCardProps {
//   icon: React.ElementType;
//   title: string;
// }

// const DashboardCard: React.FC<DashboardCardProps> = ({ icon: Icon, title }) => {
//   return (
//     <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md">
//       <div className="flex items-center mb-2">
//         <Icon className="text-blue-500 mr-2" />
//         <h3 className="text-lg font-semibold">{title}</h3>
//       </div>
//       <p className="text-sm text-gray-600 dark:text-gray-300">
//         {/* Add real data or placeholder text here */}
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//       </p>
//     </div>
//   );
// };

// export default Dashboard;



import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaChartLine, FaMoneyBillWave, FaNewspaper } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface DashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  // Custom static data for the dashboard
  const marketOverviewData = {
    indexName: 'S&P 500',
    currentValue: 4432.99,
    changePercentage: -0.23,
  };

  const portfolioPerformanceData = {
    totalValue: 1052345.67,
    changeToday: 1234.56,
    changePercentage: 0.12,
  };

  const latestNewsData = [
    {
      title: 'Market hits all-time high',
      source: 'Reuters',
      time: '2 hours ago',
    },
    {
      title: 'Tech stocks lead the rally',
      source: 'Bloomberg',
      time: '4 hours ago',
    },
    {
      title: 'Federal Reserve announces new policies',
      source: 'The Wall Street Journal',
      time: '6 hours ago',
    },
  ];

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
        className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-4xl h-3/4 overflow-auto shadow-2xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{t('dashboard')}</h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes />
          </motion.button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <DashboardCard 
            icon={FaChartLine} 
            title={t('marketOverview')} 
            data={`
              ${marketOverviewData.indexName}: ${marketOverviewData.currentValue} 
              (${marketOverviewData.changePercentage > 0 ? '+' : ''}${marketOverviewData.changePercentage}%)
            `} 
          />
          <DashboardCard 
            icon={FaMoneyBillWave} 
            title={t('portfolioPerformance')} 
            data={`
              Total Value: $${portfolioPerformanceData.totalValue.toLocaleString()}
              Today's Change: ${portfolioPerformanceData.changeToday > 0 ? '+' : ''}${portfolioPerformanceData.changeToday} 
              (${portfolioPerformanceData.changePercentage > 0 ? '+' : ''}${portfolioPerformanceData.changePercentage}%)
            `} 
          />
          <DashboardCard 
            icon={FaNewspaper} 
            title={t('latestNews')} 
            data={
              latestNewsData.length > 0 ? (
                <div>
                  {latestNewsData.map(article => (
                    <div key={article.title} className="mb-2">
                      <strong>{article.title}</strong> - {article.source} ({article.time})
                    </div>
                  ))}
                </div>
              ) : (
                "No news available"
              )
            } 
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

interface DashboardCardProps {
  icon: React.ElementType;
  title: string;
  data: string | JSX.Element | JSX.Element[];
}

const DashboardCard: React.FC<DashboardCardProps> = ({ icon: Icon, title, data }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md">
      <div className="flex items-center mb-2">
        <Icon className="text-blue-500 mr-2" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-300">
        {Array.isArray(data) ? data.map((item, index) => <div key={index}>{item}</div>) : data}
      </div>
    </div>
  );
};

export default Dashboard;

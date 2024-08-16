// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { store } from './store/store';
// import './index.css';
// import App from './App';
// import { I18nextProvider } from 'react-i18next';
// import i18n from './i18n';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <I18nextProvider i18n={i18n}>
//         <App />
//       </I18nextProvider>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './index.css';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
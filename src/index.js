import React, { Suspense } from 'react';
import './index.css';
import App from './App';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      // translation file path
      loadPath: '/assets/i18n/{{ns}}/{{lng}}.json',
    },
    fallbackLng: 'en',
    // disabled in production
    debug: false,
    // can have multiple namespaces, in case you want to divide a huge
    // translation into smaller pieces and load them on demand
    ns: ['common'],

    interpolation: {
      espaceValue: false,
      formatSeparator: ',',
    },
    react: {
      wait: true,
    },
  });

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <Suspense fallback="...">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App tab="home" />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </Suspense>,
);

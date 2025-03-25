import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HelmetProvider>
        <App />
    </HelmetProvider>
  </React.StrictMode>
);

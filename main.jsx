import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './portfolio.jsx'; // This imports your portfolio code

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
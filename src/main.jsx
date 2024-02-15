import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize';
import ReactDOM from 'react-dom/client';
import { App } from './jsx/App';
import './css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ProviderAuth } from './context/authContext';

ReactDOM.render(
  <React.StrictMode>
    <ProviderAuth>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProviderAuth>
  </React.StrictMode>,
  document.getElementById('root')
);
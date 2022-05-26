import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import * as ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles/global.scss';

const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();

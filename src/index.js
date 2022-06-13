import React from 'react';
import ReactDOM from 'react-dom';
import "grapesjs/dist/css/grapes.min.css";
import App from './App';
import reportWebVitals from './reportWebVitals';

// grapesjs uses local storage by default

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

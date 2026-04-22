import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Disable right-click and inspection keys for "Military-Grade" security feel
document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('keydown', (e) => {
  if (
    e.key === 'F12' || 
    (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J')) || 
    (e.ctrlKey && e.key === 'U')
  ) {
    e.preventDefault();
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

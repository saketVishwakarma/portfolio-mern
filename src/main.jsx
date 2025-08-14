// File: main.jsx
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'materialize-css/dist/css/materialize.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="main-app-container">
      <App />
      <button
        id="themeToggle"
        className="btn-floating btn-large pulse tooltipped theme-toggle-btn"
        data-tooltip="Toggle Dark Mode"
        onClick={() => {
          document.body.classList.toggle('dark-mode');
        }}
      >
        🎮
      </button>
    </div>
  </React.StrictMode>
);

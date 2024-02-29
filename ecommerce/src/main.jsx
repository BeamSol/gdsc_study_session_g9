import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Create a root for rendering the app
const root = document.getElementById('root');

// Check if the root exists before rendering
if (root) {
  // Use ReactDOM.createRoot to render the app
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Failed to find root element with id "root"');
}

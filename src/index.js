import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
//This line is renaming BrowserRouter to Router for use in the code
import {BrowserRouter as Router} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Must make sure App is wrapped in Router for functionality to work! */}
    <Router>
        <App />
    </Router>
  </React.StrictMode>
);
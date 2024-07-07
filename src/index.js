import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import CreateContext from './Context/CreateContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <CreateContext>
        <App />
      </CreateContext>
    </Router>
  </React.StrictMode>
);

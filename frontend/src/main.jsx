import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faTractor, 
  faBoxes, 
  faMapMarkedAlt, 
  faSeedling, 
  faCalculator,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

library.add(faTractor, faBoxes, faMapMarkedAlt, faSeedling, faCalculator, faUsers);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
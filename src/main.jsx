import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';

// Importamos los estilos desde la subcarpeta /styles/
import './styles/style.css';
import './styles/grid.css';
import './styles/flex.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
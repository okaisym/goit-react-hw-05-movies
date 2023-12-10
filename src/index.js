import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '../src/components/App/App';
import { BrowserRouter } from 'react-router-dom'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/goit-react-hw-05-movies">
  <App />
</BrowserRouter>
);

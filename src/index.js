import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import PagesRouter from './pages/PagesRouter';
import PagesLinks from './pages/PagesLinks';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <PagesLinks />
    <PagesRouter />
  </BrowserRouter>
);




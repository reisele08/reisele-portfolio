import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {BrowserRouter} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
  <App />
  </HashRouter>,
  document.getElementById('root')
);

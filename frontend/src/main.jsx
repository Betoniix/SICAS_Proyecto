import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { FormApp } from './FormApp';

ReactDOM.render(
  <Router>
    <FormApp></FormApp>
  </Router>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Container from '@mui/material/Container';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Container fixed>
      <App />
    </Container>
  </BrowserRouter>,
  document.getElementById('root')
);
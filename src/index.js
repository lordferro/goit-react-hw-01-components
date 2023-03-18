import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { App } from 'components/App/App';
import './index.css';

const theme = {
  colors: {
    black: 'black',
    white: 'white',
    grey: 'grey',
    lightcyan: 'lightcyan',
    lightgrey: 'lightgrey',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './containers/GlobalStyle';
import AppRouters from './routers/AppRouters';
import DataRouters from './routers/DataRouters';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppRouters/>
    <DataRouters/>
  </React.StrictMode>,
  document.getElementById('root')
);
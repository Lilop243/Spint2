import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './containers/GlobalStyle';
import Todo from './containers/Todo';
import Link from './containers/Link';
import AppRouters from './routers/AppRouters';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    {/* <Todo/>
    <Link/> */}
<AppRouters/>
  </React.StrictMode>,
  document.getElementById('root')
);
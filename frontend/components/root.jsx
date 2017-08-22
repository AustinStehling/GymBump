import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom'
import App from './App'
const Root = ({ store }) => (
  <HashRouter>
    <Provider store={ store }>
      <App/>
    </Provider>
  </HashRouter>
);

export default Root;

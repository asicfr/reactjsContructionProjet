import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { getRoutes } from './routes';
import store from './store';

import './index.css';

const storeInstance = store();
const routes = getRoutes(storeInstance.getState);

ReactDOM.render(
  <Provider store={storeInstance}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);

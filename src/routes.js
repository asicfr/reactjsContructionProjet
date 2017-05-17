import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import NotFound from './components/NotFound/NotFound';
import Calendrier from './components/Calendrier/Calendrier';
import { get, isEmpty } from 'lodash';
import { strgify } from './services/tools';

export function getRoutes(getState) {

  const checkAuth = (nextState, replace) => {
    console.log("checkAuth");
    // store
    // const cle = get(getState(), 'init.currentUser.uid');
    // console.log("routes state", strgify(getState()));
  };

  return (
    <Route path="/" component={App}>
      <Route path="/calendrier" component={Calendrier} onEnter={checkAuth} />
      <Route path="*" component={NotFound} />
      <IndexRoute component={Calendrier} onEnter={checkAuth} />
    </Route>
  );
}

import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import rootReducer from './reducers';

export default (initialState) => {
    const routing = routerMiddleware(browserHistory);
    const enhancers = applyMiddleware(thunk, routing);
    return createStore(rootReducer, initialState, enhancers);
};


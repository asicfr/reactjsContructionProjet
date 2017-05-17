import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import init from './login';

const rootReducer = combineReducers({
    routing,
    init
});

export default rootReducer;

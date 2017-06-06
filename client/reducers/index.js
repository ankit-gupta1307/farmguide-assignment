
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import employees from './employee';
import posts from './posts';

const rootReducer = combineReducers({
    employees,
    routing: routerReducer
});

export default rootReducer;
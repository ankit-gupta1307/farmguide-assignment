import {createStore, compse} from 'redux';
import { syncHistoryWithStore} from 'react-router-redux'; //sync reddux with react router
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import employees from './data/employee';
import posts from './data/posts';

const defaultState = {
  employees
};
console.log(employees);

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

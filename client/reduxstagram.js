
import React from 'react';

import {render} from 'react-dom';

import css from './styles/style.styl';
import Single from './components/Single';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';
import App from './components/app';
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Single}></IndexRoute>
      </Route>
    </Router>
  </Provider>
  
)

render(router, document.getElementById('root'));

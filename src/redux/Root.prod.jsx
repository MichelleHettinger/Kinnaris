/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { Spinner } from 'react-redux-spinner';
import DevTools from './components/DevTools';
import configureStore from './store/configureStore.prod';
import App from './components';

const store = configureStore();

const ProdRoot = () => (
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path='/(:filter)' component={ App } />
    </Router>
    <DevTools />
    <Spinner />
  </Provider>
);

export default ProdRoot;

import thunk from 'redux-thunk';
import Cookies from 'cookies-js';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createCookieMiddleware } from 'redux-cookie';
import * as reducers from '../reducers/index';
import DevTools from '../components/DevTools';

const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(thunk),
  applyMiddleware(createCookieMiddleware(Cookies, '/redux/cookie/')),
  DevTools.instrument(),
);

const reducer = combineReducers(reducers);

export default function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = createStore(reducer, initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const reducerReplaced = combineReducers(reducers);
      store.replaceReducer(reducerReplaced); /* .default if you use Babel 6+ */
    });
  }

  return store;
}

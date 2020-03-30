import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducer';
import {routerMiddleware} from 'connected-react-router';
import history from './appHistory';
import thunk from 'redux-thunk';

/** 
 * Use routerMiddleware(history) if you want to dispatch history actions (e.g. to change URL with push('/path/to/somewhere')).
 */
const middlewares = [thunk, routerMiddleware(history)];

const store = createStore(rootReducer, compose(
  applyMiddleware(...middlewares),
  // this is to avoid including redux-devtools-extension package
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
));

if (module.hot) {
  // If the change is below reducer.js (any module that is under reducer's "tree"), this fallback here will intercept
  // the change and it will stop the "change event" to bubble up to the Root's handler. If this code wasn't here, the change would
  // go straight to the './Root.js' (in index.js).
  // If there are no handlers in entire app - by default everything will refresh.
  module.hot.accept('./reducer.js', () => {
    store.replaceReducer(rootReducer);
  });
}

export default store;

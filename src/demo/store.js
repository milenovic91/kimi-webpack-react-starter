import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducer';
import {routerMiddleware} from 'connected-react-router';
import history from './appHistory';

/** 
 * Use routerMiddleware(history) if you want to dispatch history actions (e.g. to change URL with push('/path/to/somewhere')).
 */
const middlewares = [routerMiddleware(history)];

const store = createStore(rootReducer, compose(
  applyMiddleware(...middlewares),
  // this is to avoid including redux-devtools-extension package
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
));

export default store;

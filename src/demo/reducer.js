import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import history from './appHistory';

const defaultHomeState = {
  message: 'home page'
};


export const homePageReducer = (state = defaultHomeState, action) => {
  return state;
};

export const counterPageReducer = (state = 0, action) => {
  return state;
};

const reducer = combineReducers({
  router: connectRouter(history),
  homePage: homePageReducer,
  counterPage: counterPageReducer
});

export default reducer;

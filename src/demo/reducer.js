import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import history from './appHistory';
import {
  CHANNGE_HOMEPAGE_MESSAGE,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  REPLACE_TODOS
} from './actions';

const defaultHomeState = {
  message: 'home page'
};

export const homePageReducer = (state = defaultHomeState, action) => {
  if (action.type === CHANNGE_HOMEPAGE_MESSAGE) {
    return {...state, message: action.message};
  }
  return state;
};

export const counterPageReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
  }
  return state;
};

export const todosPageReducer = (state = {
  todos: []
}, action) => {
  switch (action.type) {
    case REPLACE_TODOS:
      return {
        ...state,
        todos: action.todos
      };
    default:
      return state;
  }
}

const reducer = combineReducers({
  router: connectRouter(history),
  homePage: homePageReducer,
  counterPage: counterPageReducer,
  todosPage: todosPageReducer
});

export default reducer;

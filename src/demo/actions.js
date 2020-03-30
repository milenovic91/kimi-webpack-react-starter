import * as todosApi from './TodosPageFakeApi';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const CHANNGE_HOMEPAGE_MESSAGE = 'CHANNGE_HOMEPAGE_MESSAGE';
export const REPLACE_TODOS = 'REPLACE_TODOS';

export function fetchTodos() {
  return dispatch => {
    return todosApi.getAll().then((todos) => {
      dispatch({
        type: REPLACE_TODOS,
        todos
      });
    });
  }
}
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchTodos} from './actions';

export function TodosPage({
  todos,
  getAll
}) {
  let [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (todos.length === 0) {
      setIsLoading(true);
      getAll().then(() => setIsLoading(false));
    }
  }, []);
  // passing an empty array ensures that the effects runs only once,
  // after initial mount.
  return (
    <div>
      todos page
      {isLoading && <div>Loading...</div>}
      {!isLoading &&
      <div>
        {todos.map(item => (
          <div key={item.id}>
            <div>{item.name}</div>
          </div>
        ))}
      </div>}
    </div>
  );
}

export default connect(
  state => ({
    ...state.todosPage
  }),
  dispatch => ({
    getAll: () => dispatch(fetchTodos())
  })
)(TodosPage);

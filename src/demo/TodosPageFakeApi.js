const todos = [{
  id: 1, name: 'create new repo', completed: false
}, {
  id: 2, name: 'submit README.md file', completed: false
}, {
  id: 3, name: 'setup tests', completed: false
}];

let nextId = 4;

export const getAll = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(todos);
    }, 1000);
  });
};

export const getById = (id) => {
  return new Promise((res, rej) => {
    let todo = todos.find(item => item.id === id);
    if (!todo) {
      rej();
    } else {
      setTimeout(() => res(todo), 1000);
    }
  });
};

export const add = (todo) => {
  return new Promise((res) => {
    let newTodo = {
      id: nextId++,
      ...todo,
      completed: false
    };
    todos.push(newTodo);
    setTimeout(() => res(newTodo), 1000);
  });
};

// export const update = (id) => {};

// export const remove = (id) => {};

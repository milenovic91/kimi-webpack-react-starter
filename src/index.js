import ReactDOM from 'react-dom';
import Root from './Root';
import React from 'react';

const init = App => {
  ReactDOM.render(<App />, document.getElementById('app-root'))
}

init(Root);

if (module.hot) {
  module.hot.accept('./Root.js', function () {
    // This is going to be called everytime Root (or it's subpart) updates.
    // Everytime some change happens, webpack runtime is going to follow up imports and if it reaches Root,
    // this handler is going to be called.
    init(Root);
  });
}

init(Root);

import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import history from './appHistory';
import {Route, Switch, Redirect, Link} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import HomePage from './HomePage';
import CounterPage from './CounterPage';

export default function Demo() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <div>
            <Link to="/home">home</Link>
            <Link to="/counter">counter</Link>
          </div>
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/counter" component={CounterPage} />
            <Redirect path="*" to="/home" />
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}


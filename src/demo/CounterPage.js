import React from 'react';
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from './actions';
import { connect } from 'react-redux';

export function CounterPage({
  counterValue,
  increment,
  decrement
}) {
  return (
    <div>
      counter page
      <div>
        <div>current value: {counterValue}</div>
        <button onClick={decrement}>decrement</button>
        <button onClick={increment}>increment</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  counterValue: state.counterPage
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({type: INCREMENT_COUNTER}),
  decrement: () => dispatch({type: DECREMENT_COUNTER})
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);

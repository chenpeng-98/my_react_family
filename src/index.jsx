// import { render } from 'react-dom';
// import React, { Component } from 'react';

// import App from './components/app.jsx';

// import BasicExample from './example/basic.jsx';
// import AuthExample from './example/redirect.jsx';
// import ModalGallery from './example/modalGally.jsx';

// render(<App />, document.getElementById('box'));



import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { render } from 'react-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import { connect, Provider } from 'react-redux';

var getRandomColor = function() {
  var grb = [];
  for (var i = 0; i < 3; i += 1) {
    grb.push(parseInt(Math.random() * 255).toString(16));
  }
  return `#${grb.join('')}`;
}

const calculate = (count = 1, action) => {
  const preCount = count;
  switch(action.type) {
    case 'add':
      return preCount + 1;
    case 'minus':
      return  preCount - 1;
      case 'multi':
        return preCount + 1234
    default:
      return count;
  }
};
const changeStatus = (color = '#64d', action) => {
  if (action.type === 'change_color') {
    return getRandomColor();
  }

  return color;
}
const info = (state = {name: 'cp', age: 15}, action) => {
  return state;
}

const myreducers = combineReducers({
  count: calculate,
  color: changeStatus,
  info
});
const store = createStore(myreducers, applyMiddleware(thunk, reduxPromise));

class Counter extends Component {
  render() {
    const { count, color, add, minus, middleware, changeColor } = this.props;
    return <div style={{backgroundColor: color}}>
      <p>count: {count}</p>
      <button onClick={add}>add</button>
      <button onClick={minus}>minus</button>
      <button onClick={middleware}>middleware</button>
      <button onClick={changeColor}>changeColor</button>
    </div>
  }
}

Counter.propTypes = {
  add: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    count: state.count,
    color: state.color
  }
};

const mapDispatchToProps = (dispatch) => ({
  add: () => {
    dispatch({
      type: 'add'
    });
  },
  minus: () => {
    dispatch({type: 'minus'});
  },
  middleware: () => {
    dispatch((dispatch) => {
      dispatch({type: 'add'});
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({type: 'multi'})
        }, 1000);
      }).then(res => dispatch(res));
    });
  },
  changeColor() {
    dispatch({type: 'change_color'});
  }
});

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('box')
);
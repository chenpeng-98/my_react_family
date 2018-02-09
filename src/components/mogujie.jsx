import React, { Component } from 'react';
import { Rotate } from './rotate.jsx';

class Mogujie extends Component {
  render() {
    return <div className="rotate-wrap">
      <Rotate />
      <Rotate />
      <Rotate />
      <Rotate />
      <Rotate />
    </div>
  }
}

export { Mogujie };
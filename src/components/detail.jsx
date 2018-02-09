import React, { Component } from 'react';

class Detail extends Component {
  render() {
    return <span className="detail-count">
      count: { this.props.count }
      <button className="detail-clear-btn" onClick={this.props.clear}>Clear</button>
    </span>
  }
}

export { Detail };
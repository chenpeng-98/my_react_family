import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Back extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    this.props.history.goBack(-1);
  }
  render() {
    return <span style={{
      position: 'absolute',
      display: 'inline-block',
      height: '16px',
      left: '10px',
      top: '10px',
      backgroundColor: 'pink'
    }}
    onClick={this.goBack}>back</span>
  }
}

export default withRouter(Back);
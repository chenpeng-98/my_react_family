import React, { Component } from 'react';
import ReactPropTypes from 'prop-types';

class UserName extends Component {
  render() {
    return <span className="info-user-name">
      name: {this.context.userName}
    </span>
  }
}

UserName.contextTypes = {
  userName: ReactPropTypes.string
}

export { UserName };
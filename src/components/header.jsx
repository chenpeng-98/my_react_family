import React, { Component } from 'react';
import ReactPropTypes from 'prop-types';
import { UserInfo } from './userInfo.jsx';

class Header extends Component {
  getChildContext() {
    return {
      userName: 'yueleniao'
    }
  }
  render() {
    return <div className="header">
      Hello:
      <UserInfo />
    </div>
  }
}

Header.childContextTypes = {
  userName: ReactPropTypes.string
}

export {
  Header
};
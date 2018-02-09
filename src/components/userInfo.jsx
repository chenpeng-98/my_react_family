import React, { Component } from 'react';
import { UserName } from './userName.jsx';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 25
    }
  }
  render() {
    return <div>
      <UserName />
      <span>age:{this.state.age}</span>
    </div>
  }
}

export { UserInfo };
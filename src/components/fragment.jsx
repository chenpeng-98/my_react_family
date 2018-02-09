import React, { Component } from 'react';

class FragmentAttr extends Component {
  render() {
    return <React.Fragment>
      <p>test fragment</p>
      <p>if it's posibble ,there will be no warn.</p>
    </React.Fragment>
  }
}

export default FragmentAttr;
import React, { Component } from 'react';

class NoMatch extends Component {
  render() {
    return <p>
      No match for {this.props.location.pathname}.
    </p>
  }
}

export { NoMatch };
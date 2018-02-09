import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

class PromptText extends Component {
  constructor() {
    super();
    this.state = {
      isBlocking: false
    };
    this.toBlock = this.toBlock.bind(this);
  }

  toBlock() {
    this.setState((preState) => ({
      isBlocking: !preState.isBlocking
    }));
  }

  render() {
    return <div>
      <Prompt
        when={this.state.isBlocking}
        message={location => (
          `Are you sure you want to go to ${location.pathname}`
        )}
      />
      <button onClick={this.toBlock}>Click to block.</button><span>  now status:  {this.state.isBlocking.toString()}</span>
    </div>
  }
}

export { PromptText };
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Detail } from './detail.jsx';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.clear = this.clear.bind(this);
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((preState) => ({
        count: preState.count + 1
      }))
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  clear() {
    this.setState({
      count: 0
    });
  }

  render() {
    return <div className="footer">
      <p>Footer
        <Detail count={this.state.count} clear={this.clear}/>
        <span style={{marginLeft: '30px'}}><Link to="/mogujie">To ，蘑菇街</Link></span>
      </p>
    </div>
  }
}

export { Footer };
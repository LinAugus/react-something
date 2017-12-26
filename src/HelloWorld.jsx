import React, { Component } from 'react';

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'hello, world'
    };
  }

  componentWillMount() {
    console.log('children component will mount');
  }

  componentDidMount() {
    console.log('children componentDidMount');
  }

  componentWillUpdate() {
    console.log('children component will update');
  }
  

  componentDidUpdate() {
    console.log('children component did update');
  }

  render() {
    return <span className={this.state.message}>
      {this.state.message}
    </span>;
  }
}

export default HelloWorld;
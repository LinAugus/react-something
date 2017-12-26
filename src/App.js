import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HelloWorld from './HelloWorld';

class App extends Component {

  componentWillMount() {
    console.log('parent component will mount');
  }

  componentDidMount() {
    console.log('parent componentDidMount');
  }

  componentWillUpdate() {
    console.log('parent component will update');
  }
  

  componentDidUpdate() {
    console.log('parent component did update');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <HelloWorld />
      </div>
    );
  }
}

export default App;

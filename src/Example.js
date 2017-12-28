import React, { Component } from 'react';

class Example extends Component {
  constructor() {
    super();
    this.state = {
      val: 0,
      age: 0
    };
  }

  componentDidMount() {
    
    const val = this.state.val;

    this.setState({ val: val + 3, age: 1 });
    console.log(this.state); // 第一次打印
    
    this.setState({ val : val + 2  });
    console.log(this.state); // 第二次打印

    setTimeout(() => {
      this.setState({ val: this.state.val + 1 });
      console.log(this.state); // 第三次打印

      this.setState({ val: this.state.val + 1 });
      console.log(this.state); // 第四次打印
    }, 0);
  }

  render() {
    // console.log('##', this.state.val);
    return null;
  }
}

export default Example;
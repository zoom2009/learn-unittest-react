import React, { Component } from 'react'
import Foo from './components/Foo';
import Click from './components/Click';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }
  
  click = () => {
    this.setState({count: this.state.count+1})
  }

  render() {
    return (
      <div>
        <Foo />
        <Foo />
        <Foo />
        <p id="counter">Count is : {this.state.count}</p>
        <Click
          MethodClick={this.click}
          />
      </div>
    )
  }
}

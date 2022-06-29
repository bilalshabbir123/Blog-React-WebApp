import './App.css';
import React from 'react';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  shouldComponentUpdate()
  {
    console.warn("shouldComponentUpdate",this.state.count);
    return true;
  }
  render() {
    return (
       <div className='App'>
        <h2 style={{ color: "red" }}>Update Count {this.state.count}</h2>
        <button onClick={() => { this.setState({count:this.state.count + 1})}}>Update Count</button>
      </div>
    );
  }
}

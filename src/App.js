import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import Info from './components/Info';

class App extends Component {
  state = {
    found: 0,
    info: []
  };

  handleSubmit = (data, ret) =>{
    this.setState({info: data, found: ret});
    console.log('Setting state');
    console.log(data);
    console.log(ret);
  }

  render() {
    return (
      <div className="App">
        <Info info={this.state.info} found={this.state.found}/>
        <br/>
        <Search submit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;

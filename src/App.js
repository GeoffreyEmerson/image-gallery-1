import React, { Component } from 'react';
import './App.css';
import Toolbar from './Toolbar';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Image Gallery App</h2>
        </div>
        <Toolbar />
      </div>
    );
  }
}

export default App;

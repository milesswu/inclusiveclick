import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import HomeButton from './HomeButton'

class App extends Component {
  render() {
    return (
      <div>
        <HomeButton/>
        <Routes/>
      </div>
    );
  }
}

export default App;

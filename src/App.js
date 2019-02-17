import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory} from 'react-router'
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

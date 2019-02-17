import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory} from 'react-router'
import './App.css';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div>
        <Routes/>
      </div>
    );
  }
}

export default App;

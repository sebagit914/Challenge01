import React, { Component } from 'react';
import './App.css';
import Routes from './routes';
import Header from '../src/Components/Shared/Header/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Routes></Routes>
      </div>
    );
  }
}

export default App;

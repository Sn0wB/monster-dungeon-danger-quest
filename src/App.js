import React, { Component } from 'react';
import Game from './Game/Game'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <body className="App-body">
          <Game />
        </body>
      </div>
    );
  }
}

export default App;

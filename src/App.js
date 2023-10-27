import React, { Component } from 'react';
import './App.css';
import './assets/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import BasicExample from './router/routers'

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="main-container">
              <BasicExample />
          </div>
        </div>
    );
  }
}

export default App;


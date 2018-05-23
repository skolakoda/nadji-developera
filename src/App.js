import React, { Component } from 'react';
import Developer from './components/Developer'
import developers from './data/developers.json'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const devList = developers.map((dev, i) => 
      <Developer name={dev.name} skills={dev.skills} image={dev.image} key={i} />
    )
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Nađi developera</h1>
        </header>

        <div className="flex-wrapper">
          {devList}
        </div>
      </div>

    );
  }
}

export default App;

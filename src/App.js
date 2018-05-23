import React, { Component } from 'react';
import Developer from './components/Developer'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      developers: []
    }
  }

  componentWillMount() {
    this.setState({ loading: true })
    fetch('https://raw.githubusercontent.com/skolakoda/nadji-developera/master/src/data/developers.json')
    .then(data => data.json())
    .then(data => this.setState({
      developers: data,
      loading: false
    }))
  }

  render() {
    const devList = this.state.developers.map((dev, i) => 
      <Developer name={dev.name} skills={dev.skills} image={dev.image} key={i} />
    )
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Nađi developera</h1>
        </header>

        <div className="flex-wrapper">
          {this.state.loading ? "Loading..." : devList}
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from './components/Header'
import MainScreen from './components/MainScreen'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      developers: [],
      filtered: [],
    }
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch('https://raw.githubusercontent.com/skolakoda/nadji-developera/master/src/data/developers.json')
    .then(data => data.json())
    .then(data => this.setState({
      developers: data,
      filtered: data,
      loading: false
    }))
  }

  setFiltered = filtered => {
    this.setState({filtered})
  }

  render() {

    return (
      <div className="App">
        <Header developers={this.state.developers} setFiltered={this.setFiltered} />
        <MainScreen filtered={this.state.filtered} loading={this.state.loading} />
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react'
import {connect} from 'react-redux'

import {setLoading, setDevelopers, setFiltered} from './store'
import Header from './components/Header'
import MainScreen from './components/MainScreen'
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.setLoading(true)
    fetch('https://raw.githubusercontent.com/skolakoda/nadji-developera/master/src/data/developers.json')
    .then(data => data.json())
    .then(data => {
      this.props.setLoading(false)
      this.props.setDevelopers(data)
      this.props.setFiltered(data)
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MainScreen />
      </div>
    )
  }
}

const mapDispatchToProps = {setLoading, setDevelopers, setFiltered}

export default connect(null, mapDispatchToProps)(App)
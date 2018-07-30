import React, { Component } from 'react'
import {connect} from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'

import {setLoading, setDevelopers, setFiltered} from './store/actions'
import Header from './components/Header'
import MainScreen from './components/MainScreen'
import About from './components/About'
import './App.css'

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
        <Router>
          <div>
          <Header />
            <Route exact path="/" component={MainScreen} />
            <Route path="/about" component={About} />
          </div>
        </Router>
      </div>
    )
  }
}

const mapDispatchToProps = {setLoading, setDevelopers, setFiltered}

export default connect(null, mapDispatchToProps)(App)
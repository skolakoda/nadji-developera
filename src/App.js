import React, { Component } from 'react'

import {store} from './store'
import Header from './components/Header'
import MainScreen from './components/MainScreen'
import './App.css';

class App extends Component {
  componentDidMount() {
    store.dispatch({type: 'SET_LOADING', loading: true})
    fetch('https://raw.githubusercontent.com/skolakoda/nadji-developera/master/src/data/developers.json')
    .then(data => data.json())
    .then(data => {
      store.dispatch({type: 'SET_LOADING', loading: false})
      store.dispatch({type: 'SET_DEVELOPERS', developers: data})
      store.dispatch({type: 'SET_FILTERED', filtered: data})
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

export default App;
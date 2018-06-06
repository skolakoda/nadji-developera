import React from 'react'

import {store} from '../store'
import logo from '../logo.svg';

const filterDevelopers = e => {
  store.dispatch({type: 'FILTER_DEVELOPERS', skill: e.target.value })
}

const Header = props => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Nađi developera</h1>
      <input onChange={filterDevelopers} />
    </header>
  )
}

export default Header
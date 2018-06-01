import React from 'react'
import logo from '../logo.svg';
import {filterDevelopers} from '../shared/helpers'

const Header = props => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Nađi developera</h1>
      <input onChange={(e) => filterDevelopers(e, props.developers, props.setFiltered)} />
    </header>
  )
}

export default Header
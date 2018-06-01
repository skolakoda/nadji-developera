import React from 'react'
import logo from '../logo.svg';

const Header = props => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Nađi developera</h1>
    <input onChange={props.filterDevelopers} />
  </header>
)

export default Header
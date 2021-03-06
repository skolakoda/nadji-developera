import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import {filterDevelopers} from '../store/actions'
import logo from '../logo.svg';

const Header = props => {
  return (
    <header className="App-header">

      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Nađi developera</h1>
      <nav>
        <NavLink replace={true} to="/">Home</NavLink>{' '}
        <NavLink to="/about">About</NavLink>
      </nav>
      Unesi veštinu: <input onChange={e => props.filterDevelopers(e.target.value)} />
      {props.selectedDeveloper && <span> Izabrali ste {props.selectedDeveloper.name}. <button>Kontaktiraj developera</button> </span>}
    </header>
  )
}

const mapStateToProps = ({selectedDeveloper}) => ({selectedDeveloper})
const mapDispatchToProps = { filterDevelopers }

export default connect(mapStateToProps, mapDispatchToProps)(Header)
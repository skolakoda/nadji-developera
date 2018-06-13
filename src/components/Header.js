import React from 'react'
import { connect } from 'react-redux'

import {store} from '../store'
import logo from '../logo.svg';

const filterDevelopers = e => {
  store.dispatch({type: 'FILTER_DEVELOPERS', skill: e.target.value })
}

const Header = props => {
  console.log(props.selectedDeveloper)
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Nađi developera</h1>
      <input onChange={filterDevelopers} />
      {props.selectedDeveloper && <span> Izabrali ste {props.selectedDeveloper.name}. <button>Kontaktiraj developera</button> </span>}
    </header>
  )
}

const mapStateToProps = ({selectedDeveloper}) => ({selectedDeveloper})
// const mapDispatchToProps = { selectDeveloper }

export default connect(mapStateToProps)(Header)
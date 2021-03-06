import React from 'react'
import { connect } from 'react-redux'

import {selectDeveloper} from '../store/actions'
import './developer.css'

class Developer extends React.Component {
  selecteMe = e => {
    this.props.selectDeveloper(this.props.dev)
  }

  render() {
    const selected = this.props.selectedDeveloper && this.props.dev.id === this.props.selectedDeveloper.id
    const cssStyles = `dev-wrapper dev-${this.props.dev.id} ${selected ? 'selected' : ''}`
    return (
      <div 
        className={cssStyles} 
        onClick={this.selecteMe}
      >
        <h3 className="dev-name">{this.props.dev.name}</h3>
        <img alt="developer" src={this.props.dev.image} />
        <p>Moje glavne veštine su {this.props.dev.skills}.</p>
        {selected && <p>Portfolio vidi moj portfolio iz JSON-a</p>}
      </div>
    )
  }
}

const mapStateToProps = ({selectedDeveloper}) => ({selectedDeveloper})
const mapDispatchToProps = { selectDeveloper }

export default connect(mapStateToProps, mapDispatchToProps)(Developer)

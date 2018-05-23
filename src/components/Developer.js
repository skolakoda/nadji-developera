import React, {Component} from 'react'
import './developer.css'

export default class Developer extends Component {
  render() {
    return (
      <div className="dev-wrapper">
        <h3 className="dev-name">{this.props.name}</h3>
        <img alt="developer" src={this.props.image} />
        <p>Moje glavne veštine su {this.props.skills}.</p>
      </div>
    )
  }
}
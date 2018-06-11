import React from 'react'
import './developer.css'

class Developer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
  }

  toggleSelected = () => {
    this.setState({selected: !this.state.selected})
  }

  render() {
    const cssStyles = `dev-wrapper ${this.state.selected ? 'selected' : ''}`
    return (
      <div 
        className={cssStyles} 
        onClick={this.toggleSelected}
      >
        <h3 className="dev-name">{this.props.name}</h3>
        <img alt="developer" src={this.props.image} />
        <p>Moje glavne veštine su {this.props.skills}.</p>
        {this.state.selected &&  <p>Portfolio vidi moj portfolio iz JSON-a</p>}
      </div>
    )
  }
}

export default Developer
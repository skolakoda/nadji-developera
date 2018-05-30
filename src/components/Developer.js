import React from 'react'
import './developer.css'

const Developer = props => (
  <div className="dev-wrapper">
    <h3 className="dev-name">{props.name}</h3>
    <img alt="developer" src={props.image} />
    <p>Moje glavne veštine su {props.skills}.</p>
  </div>
)

export default Developer
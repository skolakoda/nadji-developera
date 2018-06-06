import React from 'react'
import {connect} from 'react-redux'

import Developer from '../components/Developer'

const MainScreen = props => {
  const devList = props.filtered.map((dev, i) => 
    <Developer name={dev.name} skills={dev.skills} image={dev.image} key={i} />
  )
  return (
    <div className="flex-wrapper">
      {props.loading ? "Loading..." : devList}
    </div>
  )
}

const mapStateToProps = ({filtered, loading}) => {
  return {filtered, loading}
}

export default connect(mapStateToProps)(MainScreen)
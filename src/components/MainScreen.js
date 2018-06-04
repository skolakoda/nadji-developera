import React from 'react'
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

export default MainScreen
import React from 'react'

function Puck(props) {

  return (
    <div>
      <h4>{props.puck.name}</h4>
      <img src={props.puck.image} />
    </div>
  )
}

export default Puck;
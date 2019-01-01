import React from 'react'
import { Col } from 'react-bootstrap'


function Puck(props) {

  return (
    <div>
    <Col xs={4} sm={3} md={3}>
        {/* <h4>{props.puck.name}</h4> */}
        <br></br>
        <img src={props.puck.image} onClick={() => props.puckId(props.puck.id)} />
      </Col>
      
    </div>
  )
}

export default Puck;
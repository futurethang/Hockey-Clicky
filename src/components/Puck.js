import React from 'react'
import { Col } from 'react-bootstrap'


function Puck(props) {
  let alertProps = [
    props.puck.id.toString(),
    props.puck.name.toString(),
    props.puck.clicked.toString()
  ]


return (
  <div>
    <Col xs={4} sm={3} md={3}>
      {/* <h4>{props.puck.name}</h4> */}
      <br></br>
      <img src={props.puck.image} onClick={() => {
        console.log("from the img click", alertProps)
        props.puckId(props.puck.id);
        {/* props.shuffle() */}
      }} />
      {/* helper text for dev */}
      {/* <span>{props.puck.id.toString()}</span> */}
      {/* <span>{props.puck.name.toString()}</span> */}
      {/* <span>{props.puck.clicked.toString()}</span> */}
    </Col>

  </div>
)
}

export default Puck;
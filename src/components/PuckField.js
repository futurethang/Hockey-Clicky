import React from 'react'
// import Grid from '@material-ui/core/Grid'
// import TextField from '@material-ui/core/TextField'
// import * as contentful from 'contentful'
import { Grid, Row } from 'react-bootstrap'
import Puck from '../components/Puck'

class PuckArea extends React.Component {
  constructor(props) {
    super(props);
    this.puckId = this.puckId.bind(this)
  }

  puckId(p) {
    console.log(p)
  }

  render() {
    return (
      <div>
        <div>
          <Grid fluid="true">
            <Row className="show-grid text-center">
              {
                this.props.data.map((puck) => {
                  console.log(puck.name)
                  return <Puck key={puck.id} puck={puck} puckId={this.props.puckId}/>
                })
              }
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}

export default PuckArea;

import React from 'react'
// import Grid from '@material-ui/core/Grid'
// import TextField from '@material-ui/core/TextField'
// import * as contentful from 'contentful'
import { Grid, Row } from 'react-bootstrap'
import Puck from '../components/Puck'

class PuckArea extends React.Component {
  constructor(props) {
    super(props);
    this.clickShuffle = this.clickShuffle.bind(this);
    this.shuffleArray = this.shuffleArray.bind(this);
    this.puckArray = this.props.data;
    this.state = {
      pucks: this.shuffleArray(this.props.data)
    }
  }

  clickShuffle = () => {
    this.setState({
      pucks: this.shuffleArray(this.state.pucks)
    })
  }

  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  render() {
    return (
      <div>
        <div>
          <Grid fluid="true">
            <Row className="show-grid text-center">
              {
                this.state.pucks.map((puck) => {
                  return <Puck key={puck.id} puck={puck} puckId={this.props.puckId} shuffle={this.clickShuffle}/>
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

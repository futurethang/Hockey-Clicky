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
  }
  // refactor so that the state is pure from the props, but is simply randomized before the view is rendered

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
    let copiedArr = this.props.data.slice(0);
    let shuffledPucks = this.shuffleArray(copiedArr);
    return (
      <div>
        <div>
          <Grid fluid="true">
            <Row className="show-grid text-center">
              {
                // make a temp copy that is shuffled for mapping, and remove the shuffle click
                
                shuffledPucks.map((puck) => {
                  return <Puck key={puck.id} puck={puck} puckId={this.props.puckId} />
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

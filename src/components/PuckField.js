import React from 'react'
// import Grid from '@material-ui/core/Grid'
// import TextField from '@material-ui/core/TextField'
// import * as contentful from 'contentful'
import Puck from '../components/Puck'

class PuckArea extends React.Component {


  render() {
    return (
      <div>
        <h4>Pucks Below</h4>
        <div>
          {
            this.props.data.map((puck) => {
              console.log(puck.name)
              return <Puck key={puck.id} puck={puck} />
            })
          }
        </div>
      </div>
        )
      }
    }
    
    export default PuckArea;

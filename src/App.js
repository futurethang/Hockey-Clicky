import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import PuckField from './components/PuckField'
import pucks from './pucks.json'

class App extends Component {
  state ={
    data: pucks,
    score: 0,
    topScore: 0,
  }

  handleClick = (i) => {
    alert(i)
  }

  render() {
    return (
      <div>
        <NavBar />
        <PuckField data={this.state.data} puckId={this.handleClick}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import PuckField from './components/PuckField'
import pucks from './pucks.json'

class App extends Component {
  state = {
    data: pucks,
    score: 0,
    topScore: 0,
  }

  incrementScore = (e) => {
    let newScore = this.state.score += 1;
    this.setState({ score: newScore })
    console.log(this.state.score)
  }
  puckClicked = (id) => {
    let thisPuck = this.state.data[id];
    thisPuck.clicked = true;
    this.setState({
      data: pucks
    })
  }
  shufflePucks = () => {
    console.log("shuffle pucks")
  }

  handleClick = (i) => {
    this.incrementScore();
    this.puckClicked(i);
    this.shufflePucks()
  }

  render() {
    return (
      <div>
        <NavBar />
        <PuckField data={this.state.data} puckId={this.handleClick} />
      </div>
    );
  }
}

export default App;

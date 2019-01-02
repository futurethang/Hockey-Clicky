import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import PuckField from './components/PuckField'
import GameOverModal from './components/GameOverModal'
import pucks from './pucks.json'


class App extends Component {
  state = {
    data: pucks,
    score: 0,
    topScore: 0,
    gameOver: false
  }

  incrementScore = (e) => {
    let newScore = this.state.score += 1;
    this.setState({ score: newScore })
    console.log(this.state.score)
  }

  checkPuckClickedStatus = (id) => {
    //replace messages with methods
    this.state.data[id].clicked ? this.gameOver() : this.incrementScore()
  };

  puckClicked = (id) => {
    this.checkPuckClickedStatus(id);
    let thisPuck = this.state.data[id];
    thisPuck.clicked = true;
    this.setState({
      data: pucks
    })
  }

  handleClick = (i) => {
    this.puckClicked(i);
  }

  gameOver = () => {
    let newScore = this.state.score;
    this.setState({
      topScore: newScore,
      gameOver: true
    })
  }

  newGame = () => {
    //need to clear the already clicked pucks
    this.setState({
      score: 0,
      gameOver: false
    })
  }

  render() {
    return (
      this.state.gameOver === true ?
        <div>
          <GameOverModal newGame={this.newGame}/>
        </div>
        :
        <div>
          <NavBar score={this.state.score} topScore={this.state.topScore} />
          <PuckField data={this.state.data} puckId={this.handleClick} />
        </div>
    );
  }
}

export default App;

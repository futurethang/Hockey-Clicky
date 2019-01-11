import React, { Component } from 'react';
import update from 'react-addons-update'; // ES6
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
    let newScore = this.state.score + 1;
    this.setState({ score: newScore })
    console.log(this.state.score)
  }

  checkPuckClickedStatus = (id) => {
    console.log(this.state.data[id]);
    this.state.data[id].clicked === true ? this.gameOver() : this.incrementScore()
  } 

  puckClicked = (id) => {
    this.checkPuckClickedStatus(id);
    // let thisPuck = this.state.data[id];
    // thisPuck.clicked = true;
    this.setState({
      data: update(this.state.data, {[id]: {clicked: {$set: true}}})
    })
    // this.setState({
    //   data: {
    //     clicked: true
    //   }
    // })
  }

  handleClick = (i) => {
    console.log(i, this.state.data[i])
    this.puckClicked(i);
  }

  gameOver = () => {
    let newScore = this.state.score > this.state.topScore ? this.state.score : this.state.topScore;
    this.setState({
      topScore: newScore,
      gameOver: true
    })
  }

  newGame = () => {
    //need to clear the already clicked pucks
    let uncheckedPucks = this.state.data;
    uncheckedPucks.forEach((i) => {
      i.clicked = false
    })

    this.setState({
      score: 0,
      gameOver: false,
      data: uncheckedPucks
    })
  }

  render() {
    return (
      this.state.gameOver === true ?
        
        <div>
          <GameOverModal
            newGame={this.newGame}
            score={this.state.score}
            topScore={this.state.topScore} />
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

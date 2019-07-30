import React from 'react';
import './App.css';
import { GameBoard } from './components/GameBoard';
import { Leaderboard } from './components/Leaderboard';

class App extends React.Component {
  state = {
    running: false,
    playerList: []
  }

  startRace = () => {
    this.setState({
      running: true
    });
  }

  printToLeaderboard = name => {
    const newPlayerList = [...this.state.playerList];
    newPlayerList.push(name);
    this.setState({
      playerList: newPlayerList
    });
  }

  render() {
    const players = [
      'becca',
      'andy',
      'fred',
      'joe',
      'corey',
      'robert',
      'wallace',
      'jeff',
      'josh'
    ];
    const height = `${players.length * 60}px`;

    return (
      <div className="App">
        <GameBoard
          height={height}
          players={players}
          running={this.state.running}
          startRace={this.startRace}
          printToLeaderboard={this.printToLeaderboard}
        />
        <Leaderboard
          height={height}
          playerList={this.state.playerList}
        />
      </div>
    );
  }
}

export default App;

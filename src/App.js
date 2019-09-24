import React from 'react';
import './App.css';
import { GameBoard } from './components/GameBoard';
import { Leaderboard } from './components/Leaderboard';
import { WinnerAnimation } from './components/WinnerAnimation';

class App extends React.Component {
  players = [
    'becca',
    'andy',
    'fred',
    'joe',
    'corey',
    'robert',
    'jeff',
    'josh',
    'stephen'
  ];

  state = {
    running: false,
    playerList: [],
    showWinnerAnimation: false
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
    }, () => {
      if (this.state.playerList.length === this.players.length) {
        this.setState({
          showWinnerAnimation: true
        }, () => {
          setTimeout(() => {
            this.setState({
              showWinnerAnimation: false
            })
          }, 8000);
        });
      }
    });
  }

  render() {
    const height = `${this.players.length * 60}px`;

    return (
      <div className="App">
        <GameBoard
          height={height}
          players={this.players}
          running={this.state.running}
          startRace={this.startRace}
          printToLeaderboard={this.printToLeaderboard}
        />
        <Leaderboard
          height={height}
          playerList={this.state.playerList}
        />
        { this.state.showWinnerAnimation &&
          <WinnerAnimation winner={this.state.playerList[0]} />
        }
      </div>
    );
  }
}

export default App;

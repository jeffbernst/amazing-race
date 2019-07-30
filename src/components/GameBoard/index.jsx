import React from 'react';
import './index.css';
import { Player } from '../Player';

export class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.gameBoard = React.createRef();
    this.state = { end: null, }
  }

  componentDidMount() {
    const end = this.gameBoard.current.offsetWidth;
    this.setState({ end });
  }

  render() {
    return (
      <div
        className="game-board"
        ref={this.gameBoard}
        onClick={this.props.startRace}
        style={{ height: this.props.height}}
      >
        {this.props.players.map((player, index) => (
          <Player
            key={index}
            player={player}
            end={this.state.end - 50}
            running={this.props.running}
            top={index * 60}
            printToLeaderboard={this.props.printToLeaderboard}
          />
        ))}
      </div>
    );
  };
};

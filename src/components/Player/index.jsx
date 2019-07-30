import React from 'react';
import './index.css';

export class Player extends React.Component {
  state = {
    left: 0,
    time: 0
  }

  componentDidMount() {
    this.move();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.running === false && this.props.running === true) {
      this.move();
    }
  }

  move = () => {
    if (this.props.running === false) return;

    const intervalDuration = 75;
    const interval = setInterval(() => {
      if (this.state.left >= this.props.end) {
        this.props.printToLeaderboard(this.props.player);
        return clearInterval(interval);
      }

      const moveThisMuch = Math.floor(Math.random() * 15) + 1;
      const nextPosition = this.state.left + moveThisMuch;

      this.setState({
        time: this.state.time + intervalDuration,
        left: nextPosition >= this.props.end ? this.props.end : nextPosition
      });
    }, intervalDuration);

  }

  render() {
    const { player } = this.props;

    return (
      <div
        className="player"
        style={{
          left: this.state.left,
          top: this.props.top
        }}
      >
        <img src={require(`../../images/${player}.png`)} alt={player} />
      </div>
    );
  };
};

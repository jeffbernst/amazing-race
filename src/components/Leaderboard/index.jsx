import React from 'react';
import './index.css';

export const Leaderboard = ({ playerList, height }) => {
  return (
    <div
      className="leaderboard"
      style={{ height }}
    >
      {playerList.map((name, index) =>
        <div key={index}>{index + 1}. {name}</div>
      )}
    </div>
  )
};

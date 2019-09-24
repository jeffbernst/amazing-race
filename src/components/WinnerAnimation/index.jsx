import React from 'react';
import './index.css';

export const WinnerAnimation = ({ winner }) => {
  return (
    <div className="winner-animation">
      <img className="winner" src={require(`../../images/${winner}.png`)} alt={winner} />
      <img className="gorilla-shark inner" src={require(`../../images/gorilla-shark.jpg`)} alt="gorilla shark" />
      <img className="gorilla-shark middle" src={require(`../../images/gorilla-shark.jpg`)} alt="gorilla shark" />
      <img className="gorilla-shark outer" src={require(`../../images/gorilla-shark.jpg`)} alt="gorilla shark" />
    </div>
  );
};

import React from "react";
import PropTypes from "prop-types";

const greenBallPath = "/assets/green-ball.avif";
const redBallPath = "/assets/red-ball.avif";
const ballsGrid = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const Board = ({ greenBallNumber, onBallClick, roundNumber }) => {
  return (
    <>
      <h3>Round #{roundNumber}</h3>
      <div className="grid">
        {ballsGrid.map(ballNumber => {
          return (
            <div
              key={ballNumber}
              className="ball"
              onClick={() => {
                onBallClick(ballNumber);
              }}
            >
              <img
                src={
                  greenBallNumber === ballNumber ? greenBallPath : redBallPath
                }
                alt=""
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

Board.propTypes = {
  roundNumber: PropTypes.number.isRequired,
  greenBallNumber: PropTypes.number.isRequired,
  onBallClick: PropTypes.func.isRequired
};

export default Board;

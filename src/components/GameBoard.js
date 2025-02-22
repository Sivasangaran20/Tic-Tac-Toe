import { React, useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectPlayer, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // const updateGameBoard = function (rowIndex, colIndex) {
  //   setGameBoard((prevState) => {
  //     const deepCopyState = [...prevState.map((innerArr) => [...innerArr])];
  //     deepCopyState[rowIndex][colIndex] = activePlayerSymbol;
  //     return deepCopyState;
  //   });

  //   onSelectPlayer();
  // };
  return (
    <>
      GameBoard
      <ol id="game-board">
        {gameBoard.map((row, rowInd) => (
          <li id={rowInd}>
            <ol>
              {row.map((col, colInd) => (
                <li id={colInd}>
                  {/* <button onClick={() => updateGameBoard(rowInd, colInd)}> */}
                  <button
                    onClick={() => onSelectPlayer(rowInd, colInd)}
                    disabled={col !== null}
                  >
                    {col}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}

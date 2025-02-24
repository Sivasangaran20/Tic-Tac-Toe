import { React } from "react";

export default function GameBoard({ onSelectPlayer, board }) {
  return (
    <>
      GameBoard
      <ol id="game-board">
        {board.map((row, rowInd) => (
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

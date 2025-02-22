import "./App.css";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations";

function deriveActivePlayerState(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("X");
  const activePlayer = deriveActivePlayerState(gameTurns);

  function handleActivePlayer(rowInd, colInd) {
    // setActivePlayer((prevState) => (prevState === "X" ? "O" : "X"));
    setGameTurns((prevState) => {
      const currentPlayer = deriveActivePlayerState(prevState);
      const updatedTurns = [
        { square: { row: rowInd, col: colInd }, player: currentPlayer },
        ...prevState,
      ];
      return updatedTurns;
    });
  }
  return (
    <div className="App">
      {/* <p>Coming Soon...</p> */}
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              initialName="player1"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <Player
              initialName="player2"
              symbol="O"
              isActive={activePlayer === "O"}
            />
          </ol>
          <GameBoard
            onSelectPlayer={handleActivePlayer}
            // activePlayerSymbol={activePlayer}
            turns={gameTurns}
          />
        </div>
        <Log turns={gameTurns} />
      </main>
    </div>
  );
}

export default App;

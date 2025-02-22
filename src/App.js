import "./App.css";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleActivePlayer(rowInd, colInd) {
    setActivePlayer((prevState) => (prevState === "X" ? "O" : "X"));
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
            activePlayerSymbol={activePlayer}
          />
        </div>
        <Log />
      </main>
    </div>
  );
}

export default App;

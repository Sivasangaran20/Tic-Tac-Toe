import React from "react";

export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>GameOver!</h2>
      {winner && <p>You Won {winner}!</p>}
      {!winner && <p>It&apos;s a Draw!</p>}
      <p>
        <button onClick={onRestart}>Rematch</button>
      </p>
    </div>
  );
}

import { React, useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEdit, setIsEdit] = useState(false);
  function handleEdit() {
    setIsEdit((editing) => !editing);
  }

  function handlePlayerName(event) {
    setPlayerName(event.target.value);
  }
  let playerEdit = <span className="player-name">{playerName}</span>;
  if (isEdit)
    playerEdit = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handlePlayerName}
      />
    );
  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {/* {!isEdit ? (
            <span className="player-name">{name}</span>
          ) : (
            <input type="text" required />
          )} */}
          {playerEdit}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEdit}>{isEdit ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}

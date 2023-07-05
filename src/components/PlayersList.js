import React from "react";
import Player from "./player";
import players from "../players";

const PlayerList = () => {
  return (
    <div>
      <h1>Player List</h1>
      {players.map((player) => (
        <Player key={player.id} {...player} />
      ))}
    </div>
  );
};

export default PlayerList;

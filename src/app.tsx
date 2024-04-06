import { useState } from "preact/hooks";
import "./app.css";

interface PlayerState {
  numActions: number;
  numCoins: number;
  numBuys: number;
}

interface PlayerPanelProps {
  playerState: PlayerState;
  setPlayerState: SetPlayerState;
}

type SetPlayerState = (
  stateUpdater: (prevState: PlayerState) => PlayerState
) => void;

export function App() {
  return <PlayerContainer />;
}

function PlayerContainer() {
  const [players, setPlayers] = useState<PlayerState[]>([
    { numActions: 1, numCoins: 0, numBuys: 1 },
  ]);

  const updatePlayerState = (
    index: number,
    stateUpdater: (prevState: PlayerState) => PlayerState
  ) => {
    setPlayers((prevPlayers) => {
      const newPlayers = [...prevPlayers];
      newPlayers[index] = stateUpdater(prevPlayers[index]);
      return newPlayers;
    });
  };

  return (
    <>
      {players.map((player, index) => (
        <PlayerPanel
          key={index}
          playerState={player}
          setPlayerState={(updater) => updatePlayerState(index, updater)}
        />
      ))}
    </>
  );
}

function PlayerPanel({ playerState, setPlayerState }: PlayerPanelProps) {
  function updatePlayerState(
    stateUpdater: (prevState: PlayerState) => PlayerState
  ) {
    setPlayerState((prevState) => stateUpdater(prevState));
  }

  function incrementAttribute(attr: keyof PlayerState) {
    updatePlayerState((prevState) => ({
      ...prevState,
      [attr]: prevState[attr] + 1,
    }));
  }

  function decrementAttribute(attr: keyof PlayerState) {
    updatePlayerState((prevState) => ({
      ...prevState,
      [attr]: Math.max(prevState[attr] - 1, 0),
    }));
  }

  function endTurn() {
    updatePlayerState(() => ({
      numActions: 1,
      numCoins: 0,
      numBuys: 1,
    }));
  }

  return (
    <div className={"player-panel"}>
      <div className={"attribute-button"}>
        <button
          className={"button-top-gradient"}
          onClick={() => incrementAttribute("numActions")}
        >
          +
        </button>
        <span>Actions: {playerState.numActions}</span>
        <button
          className={"button-bottom-gradient"}
          onClick={() => decrementAttribute("numActions")}
        >
          -
        </button>
      </div>
      <div className={"attribute-button"}>
        <button
          className={"button-top-gradient"}
          onClick={() => incrementAttribute("numCoins")}
        >
          +
        </button>
        <span>Coins: {playerState.numCoins}</span>
        <button
          className={"button-bottom-gradient"}
          onClick={() => decrementAttribute("numCoins")}
        >
          -
        </button>
      </div>
      <div className={"attribute-button"}>
        <button
          className={"button-top-gradient"}
          onClick={() => incrementAttribute("numBuys")}
        >
          +
        </button>
        <span>Buys: {playerState.numBuys}</span>
        <button
          className={"button-bottom-gradient"}
          onClick={() => decrementAttribute("numBuys")}
        >
          -
        </button>
      </div>
      <button className={"end-turn-button"} onClick={endTurn}>
        End Turn
      </button>
    </div>
  );
}

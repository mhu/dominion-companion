import { useState } from "preact/hooks";
import "./app.css";

export function App() {
  return <PlayerContainer />;
}

function PlayerContainer() {
  const [actions, setActions] = useState(1);
  const [coins, setCoins] = useState(0);
  const [buys, setBuys] = useState(1);

  function incrementActions() {
    setActions(actions + 1);
  }

  function decrementActions() {
    setActions(Math.max(actions - 1, 0));
  }

  function incrementCoins() {
    setCoins(coins + 1);
  }

  function decrementCoins() {
    setCoins(Math.max(coins - 1, 0));
  }

  function incrementBuys() {
    setBuys(buys + 1);
  }

  function decrementBuys() {
    setBuys(Math.max(buys - 1, 0));
  }

  function endTurn() {
    setActions(1);
    setCoins(0);
    setBuys(1);
  }

  return (
    <div className={"player-container"}>
      <div className={"stat-container"}>
        <button onClick={incrementActions} className={"button-top-gradient"}>
          +
        </button>
        <span>Actions: {actions}</span>
        <button onClick={decrementActions} className={"button-bottom-gradient"}>
          -
        </button>
      </div>
      <div className={"stat-container"}>
        <button onClick={incrementCoins} className={"button-top-gradient"}>
          +
        </button>
        <span>Coins: {coins}</span>
        <button onClick={decrementCoins} className={"button-bottom-gradient"}>
          -
        </button>
      </div>
      <div className={"stat-container"}>
        <button onClick={incrementBuys} className={"button-top-gradient"}>
          +
        </button>
        <span>Buys: {buys}</span>
        <button onClick={decrementBuys} className={"button-bottom-gradient"}>
          -
        </button>
      </div>
      <button onClick={endTurn} className={"end-turn-button"}>
        End Turn
      </button>
    </div>
  );
}

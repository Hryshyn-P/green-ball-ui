import "./App.css";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

import MessageBox from "./components/MessageBox";
import Board from "./components/Board";
import config from "./config";

const socket = io(config.webSocketEndpoint);

function App() {
  const [inGameMessages, setInGameMessages] = useState(["Welcome"]);
  const [username, setUsername] = useState("");
  const [roundData, setRoundData] = useState({});
  const [boardIsVisible, setBoardIsVisible] = useState(false);

  useEffect(() => {
    // events received
    socket.on("game-message", data => {
      setInGameMessages(data);
    });

    socket.on("new-round", data => {
      setRoundData(data);
      setBoardIsVisible(true);
    });

    socket.on("game-end", data => {
      setBoardIsVisible(false);
      setInGameMessages(data);
    });

    socket.on("hide-board", () => {
      setBoardIsVisible(false);
    });
  }, []);

  const onUsernameChange = e => setUsername(e.target.value);

  // events emited
  const onUsernameSubmit = () => socket.emit("set-username", username);
  const onBallClick = ballNumber => socket.emit("ball-clicked", ballNumber);

  return (
    <div className="App">
      <h3>Catch green ball!</h3>
      <MessageBox inGameMessages={inGameMessages} />
      Enter username
      <input type="text" value={username} onChange={onUsernameChange} />
      <button type="button" onClick={onUsernameSubmit}>
        Submit
      </button>
      {boardIsVisible && (
        <Board
          roundNumber={roundData.roundNumber}
          greenBallNumber={roundData.greenBallNumber}
          onBallClick={onBallClick}
        />
      )}
    </div>
  );
}

export default App;

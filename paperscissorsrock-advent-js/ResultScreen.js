import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import clsx from "clsx";
import "./App.css";
import App from "./App.js";
import paperImage from "./images/paper.png";
import scissorsImage from "./images/scissors.png";
import rockImage from "./images/rock.png";

export default function ResultScreen(props) {
  const player = props.player;
  const computer = getComputerChoice();
  const winner = findWinner(player, computer);

  function getComputerChoice() {
    let computerChoice = "";
    const computerChoiceNumber = Math.floor(Math.random() * 3);
    switch (computerChoiceNumber) {
      case 0:
        computerChoice = "paper";
        break;
      case 1:
        computerChoice = "scissors";
        break;
      case 2:
        computerChoice = "rock";
        break;
    }
    return computerChoice;
  }

  function handlePlayAgainClick() {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById("root")
    );
    return;
  }

  // This assigns the image url for the player and computer
  function playerUrl() {
    if (player === "paper") {
      return paperImage;
    } else if (player === "scissors") {
      return scissorsImage;
    } else if (player === "rock") {
      return rockImage;
    }
  }
  function computerUrl() {
    if (computer === "paper") {
      return paperImage;
    } else if (computer === "scissors") {
      return scissorsImage;
    } else if (computer === "rock") {
      return rockImage;
    }
  }

  // determines the winner
  function findWinner(player, computer) {
    if (player === "paper") {
      if (computer === "paper") {
        return "tie";
      } else if (computer === "scissors") {
        return "computer";
      } else if (computer === "rock") {
        return "player";
      }
    } else if (player === "scissors") {
      if (computer === "paper") {
        return "player";
      } else if (computer === "scissors") {
        return "tie";
      } else if (computer === "rock") {
        return "computer";
      }
    } else if (player === "rock") {
      if (computer === "paper") {
        return "computer";
      } else if (computer === "scissors") {
        return "player";
      } else if (computer === "rock") {
        return "tie";
      }
    }
  }

  function playerMessage(winner) {
    if (winner === "player") {
      return "You Win!";
    }
    return "";
  }
  function tieMessage(winner) {
    if (winner === "tie") {
      return "Tie!";
    }
    return "";
  }
  function computerMessage(winner) {
    if (winner === "computer") {
      return "Computer wins.";
    }
    return "";
  }

  useEffect(() => {
    document.title = playerMessage(winner) + tieMessage(winner) + computerMessage(winner);
  });

  const className = clsx({
    "player-win-background": winner === "player",
    "computer-win-background": winner === "computer",
  });

  return (
    <>
      <div className={className} id="results-page">
        <div id="message-area">
          <div id="player-message">{playerMessage(winner)}</div>
          <div id="tie-message">{tieMessage(winner)}</div>
          <div id="computer-message">{computerMessage(winner)}</div>
        </div>
        <div id="result-images-area">
          <div className="result-image" id="player-side">
            <img src={playerUrl()}></img>
          </div>
          <div className="result-image" id="computer-side">
            <img src={computerUrl()}></img>
          </div>
        </div>
        <button className="play-again-button" onClick={handlePlayAgainClick}>
          play again
        </button>
      </div>
    </>
  );
}

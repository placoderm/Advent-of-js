import React from "react";
import ReactDOM from "react-dom";
import paperImage from "./images/paper.png";
import scissorsImage from "./images/scissors.png";
import rockImage from "./images/rock.png";
import ResultScreen from "./ResultScreen";

export default function ChooseScreen() {
  function handleButtonClick(event) {
    const player = event.currentTarget.value;
    ReactDOM.render(
      <React.StrictMode>
        <ResultScreen player={player} />
      </React.StrictMode>,
      document.getElementById("root")
    );
    return;
  }

  return (
    <div id="pick-screen">
      <h1>pick one</h1>
      <div id="button-choices">
        <button value="paper" className="image-button" onClick={handleButtonClick}>
          <img src={paperImage} alt="paper"></img>
          <div className="label">paper</div>
        </button>
        <button value="scissors" className="image-button" onClick={handleButtonClick}>
          <img src={scissorsImage} alt="scissors"></img>
          <div className="label">scissors</div>
        </button>
        <button value="rock" className="image-button" onClick={handleButtonClick}>
          <img src={rockImage} alt="rock"></img>
          <div className="label">rock</div>
        </button>
      </div>
    </div>
  );
}

import "./App.css";
import ChooseScreen from "./ChooseScreen.js";
import ResultScreen from "./ResultScreen.js";
import favicon from "./images/scissors-icon.png";

function App() {
  function setFavicons(favImg) {
    let headTitle = document.querySelector("head");
    let setFavicon = document.createElement("link");
    setFavicon.setAttribute("rel", "shortcut icon");
    setFavicon.setAttribute("href", favImg);
    headTitle.appendChild(setFavicon);
  }
  setFavicons(favicon);

  document.title = "PaperScissorsRock";

  return (
    <div className="App">
      <ChooseScreen></ChooseScreen>
    </div>
  );
}

export default App;

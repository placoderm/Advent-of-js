import "./App.css";
import favicon from "./images/pwFavicon.png";
import checked from "./images/checkbox--checked.svg";
import unchecked from "./images/checkbox--unchecked.svg";
import reload from "./images/icon-1294478.svg";
import { useState, useEffect } from "react";
import faviconTitle from "./faviconTitle";

faviconTitle(favicon, "Password Generator");

function App() {
  const capitol = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "~!@#$%^&*()_+-=[]{};:<>/?";
  const exclude = "ilLI10oO";
  let [password, setPassword] = useState("");
  let [length, setLength] = useState(16);
  let [capitolToggle, setCapitolToggle] = useState(true);
  let [lowerToggle, setLowerToggle] = useState(true);
  let [numbersToggle, setNumbersToggle] = useState(true);
  let [symbolsToggle, setSymbolsToggle] = useState(true);
  let [excludeToggle, setExcludeToggle] = useState(false);
  let [refresh, setRefresh] = useState(true);

  function grabRandomGlyph(possibleGlyphs) {
    const glyphPosition = Math.floor(Math.random() * possibleGlyphs.length);
    return possibleGlyphs[glyphPosition];
  }

  useEffect(() => {
    let newPassword = "";
    // build pool of possible glyphs
    let possibleGlyphs = "";
    if (capitolToggle) {
      possibleGlyphs += capitol;
    }
    if (lowerToggle) {
      possibleGlyphs += lower;
    }
    if (numbersToggle) {
      possibleGlyphs += numbers;
    }
    if (symbolsToggle) {
      possibleGlyphs += symbols;
    }
    if (excludeToggle) {
      possibleGlyphs = possibleGlyphs.replace(/[ilLI10oO]/g, "");
    }
    if (possibleGlyphs != "") {
      for (let i = 0; i < length - 1; i++) {
        newPassword = newPassword + grabRandomGlyph(possibleGlyphs);
      }
      setPassword(newPassword);
    } else {
      setLowerToggle(true);
      setNumbersToggle(true);
      setSymbolsToggle(true);
      setCapitolToggle(true);
    }
  }, [length, lowerToggle, capitolToggle, numbersToggle, symbolsToggle, excludeToggle, refresh]);

  function copyPassword() {
    navigator.clipboard.writeText(password);
    const copyNoticeArea = document.getElementById("copy-notice");
    const copyIconParts = document.querySelectorAll("path.normal-icon");
    copyNoticeArea.innerText = "Copied!";
    copyIconParts.forEach(part => part.classList.add("copy-clicked"));
    setTimeout(() => {
      copyNoticeArea.innerText = "";
      copyIconParts.forEach(part => part.classList.remove("copy-clicked"));
    }, 1000);
  }

  function copyPasswordTextButton() {
    navigator.clipboard.writeText(password);
    const copyNoticeArea = document.getElementById("text-copy-button");
    copyNoticeArea.innerText = "Copied!";
    setTimeout(() => {
      copyNoticeArea.innerText = "Copy Password";
    }, 1000);
  }

  return (
    <div className="App">
      <div id="generator">
        <h1>Make a great password!</h1>
        <div id="password-line">
          <div className="password">{password}</div>
          <div id="copy-area">
            <button title="Copy Password" onClick={copyPassword}>
              <svg width="40" height="40" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="normal-icon"
                  d="M37.3147 2.83081H20.6332C18.1514 2.83081 16.1332 4.85131 16.1332 7.33081V38.8308C16.1332 41.3126 18.1514 43.3308 20.6332 43.3308H43.1332C45.6149 43.3308 47.6332 41.3126 47.6332 38.8308V13.1493L37.3147 2.83081ZM43.1354 38.8308H20.6332V7.33081H34.1332V16.3308H43.1332L43.1354 38.8308Z"
                />
                <path
                  className="normal-icon"
                  d="M11.6332 11.8308H7.13318V47.8308C7.13318 50.3126 9.15143 52.3308 11.6332 52.3308H38.6332V47.8308H11.6332V11.8308Z"
                />
              </svg>
              <span id="copy-notice"></span>
            </button>
          </div>
        </div>
        <div id="range-slider">
          <input
            className="slider"
            type="range"
            min="6"
            max="32"
            onChange={event => setLength(event.currentTarget.value)}
            value={length}
          />
          <div className="length-number">{length}</div>
          <div> characters</div>
          <button
            onClick={() => {
              setRefresh(!refresh);
            }}
            id="refresh"
            title="refresh"
          >
            <img src={reload}></img>
          </button>
        </div>
        {/*--- SYMBOLS ---*/}
        <div id="symbols">
          <button onClick={() => setSymbolsToggle(!symbolsToggle)}>
            <img className="checkbox" src={symbolsToggle ? checked : unchecked} alt="checkbox"></img>
          </button>
          <strong>Include Symbols</strong>&nbsp; (@#$%)
        </div>
        {/*--- NUMBERS ---*/}
        <div id="numbers">
          <button onClick={() => setNumbersToggle(!numbersToggle)}>
            <img className="checkbox" src={numbersToggle ? checked : unchecked} alt="checkbox"></img>
          </button>
          <strong>Include Numbers</strong>&nbsp;(1234)
        </div>
        {/*--- LOWER ---*/}
        <div id="lower">
          <button onClick={() => setLowerToggle(!lowerToggle)}>
            <img className="checkbox" src={lowerToggle ? checked : unchecked} alt="checkbox"></img>
          </button>
          <strong>Include Lowercase Characters</strong>&nbsp; (abcd)
        </div>
        {/*--- CAPITOL ---*/}
        <div id="capitol">
          <button onClick={() => setCapitolToggle(!capitolToggle)}>
            <img className="checkbox" src={capitolToggle ? checked : unchecked} alt="checkbox"></img>
          </button>
          <strong>Include Uppercase Characters</strong>&nbsp; (ABCD)
        </div>
        {/*--- EXCLUDE ---*/}
        <div id="exclude">
          <button onClick={() => setExcludeToggle(!excludeToggle)}>
            <img className="checkbox" src={excludeToggle ? checked : unchecked} alt="checkbox"></img>
          </button>
          <strong>Exclude Similar Characters</strong>&nbsp; (i, l, 1, L, o, 0, O)
        </div>
        <div id="text-copy-button-area">
          <button onClick={copyPasswordTextButton} id="text-copy-button" className="text-copy-button">
            Copy Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

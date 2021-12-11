import { useEffect, useState } from "react";
import favicon from "./images/TipCalculator.png";
import dollar from "./images/dollar.svg";
import people from "./images/people.svg";
import snackbar from "snackbar";
import "./App.css";

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [peopleNumber, setPeopleNumber] = useState(2);
  const [tipPercent, setTipPercent] = useState(0.2);

  function handlePeopleNumber(event) {
    //prevents letter and fractions of people
    let people = event.target.value;
    if (people === "") {
      setPeopleNumber(1);
      return;
    }
    setPeopleNumber(people.match(/\d+/).toString());
  }

  function handleBillAmount(event) {
    let dollars = event.target.value;
    if (dollars === "") {
      setBillAmount(0);
      return;
    }

    dollars = dollars.match(/[.\d]+/);

    if (dollars === null) {
      setBillAmount(0);
      return;
    }

    if (dollars === []) {
      setBillAmount(0);

      return;
    }

    dollars = dollars.toString();

    if (dollars[0] == 0) {
      setBillAmount(dollars.slice(1));
      return;
    }
    setBillAmount(dollars);
  }

  useEffect(() => {
    document.title = `Tip Total: $${billAmount * tipPercent}`;
  });

  function setFavicons(favImg) {
    let headTitle = document.querySelector("head");
    let setFavicon = document.createElement("link");
    setFavicon.setAttribute("rel", "shortcut icon");
    setFavicon.setAttribute("href", favImg);
    headTitle.appendChild(setFavicon);
  }

  setFavicons(favicon);
  snackbar.duration = 4000;

  function tipButtonClick(event) {
    const buttons = document.querySelectorAll("#tip-button-bar button");
    buttons.forEach(element => {
      element.classList.remove("selected");
    });

    event.currentTarget.classList = "selected";
    setTipPercent(parseFloat(event.currentTarget.value));
    switch (event.currentTarget.value) {
      case "0.05":
        snackbar.show("Are you sure it was the server's fault?");
        break;
      case "0.1":
        snackbar.show("If you don't have enough money to tip well, you probably shouldn't go out to eat");
        break;
      case "0.15":
        snackbar.show("Surely you can afford another 5%, eh?");
        break;
    }
  }

  function handleClear() {
    setBillAmount(0);
    setPeopleNumber(2);
  }

  return (
    <div id="calculator">
      <div id="tip-amount">
        <span className="label">Tip Amount </span>
        <span className="number-result">
          <span className="dollar-sign">$</span>
          {(billAmount * tipPercent).toFixed(2)}
        </span>
      </div>
      <hr />
      <div id="total-per-person">
        <span className="label">Total per Person </span>
        <span className="number-result">
          <span className="dollar-sign">$</span>
          {((billAmount * (tipPercent + 1)) / peopleNumber).toFixed(2)}
        </span>
      </div>
      <div id="lower-half">
        <div id="input-form">
          <div id="bill">
            <div id="bill-amount">
              <img alt="dollar" src={dollar}></img>
              <input
                className="dolar-amount-input"
                inputMode="decimal"
                type="text"
                size="3"
                value={billAmount}
                maxLength="7"
                onChange={handleBillAmount}
              />
            </div>
            <div id="amount-label" className="label">
              Bill Amount
            </div>
          </div>
          <div id="people">
            <div id="number-people">
              <img alt="" src={people}></img>
              <input
                size="2"
                maxLength="3"
                inputMode="decimal"
                type="text"
                value={peopleNumber}
                onChange={handlePeopleNumber}
              />
            </div>
            <div id="people-label" className="label">
              Number of People
            </div>
          </div>
        </div>
        <div id="tip-button-bar">
          <button value={0.05} onClick={tipButtonClick}>
            5%
          </button>
          <button value={0.1} onClick={tipButtonClick}>
            10%
          </button>
          <button value={0.15} onClick={tipButtonClick}>
            15%
          </button>
          <button value={0.2} className="selected" onClick={tipButtonClick}>
            20%
          </button>
        </div>
        <div id="calculate-bar">
          <button className="clear" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

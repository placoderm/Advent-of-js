import "./App.css";
import { useState, useEffect } from "react";
import setFavicons from "./setFavicons.js";

function App() {
  const [starRatings, setStarRatings] = useState([true, true, true, false, false]);

  function handleMouseEnter(e) {
    const index = e.currentTarget.id.slice(2);
    for (let i = 0; i <= index; i++) {
      const item = document.querySelector("#id" + i + " svg path");
      item.classList.add("selected");
    }
    for (let i = parseInt(index) + 1; i <= 4; i++) {
      const element = "#id" + i + " svg path";
      const item = document.querySelector(element);
      item.classList.remove("selected");
    }
  }
  function handleMouseLeave(e) {
    matchScreenToArray();
  }

  function handleMouseClick(e) {
    const tempArray = [...starRatings];
    const index = parseInt(e.currentTarget.id.slice(2), 10);
    const highestTrue = tempArray.lastIndexOf(true);
    if (index === highestTrue) {
      tempArray[index] = false;
      setStarRatings([...tempArray]);
      return;
    }
    tempArray.forEach((star, x) => {
      if (x <= index) {
        tempArray[x] = true;
      } else {
        tempArray[x] = false;
      }
    });
    setStarRatings([...tempArray]);
  }

  function matchScreenToArray() {
    starRatings.forEach((star, index) => {
      const id = "#id" + index + " svg path";
      const item = document.querySelector(id);
      if (star) {
        item.classList.add("selected");
      } else {
        item.classList.remove("selected");
      }
    });
  }

  useEffect(() => {
    const highestTrue = starRatings.lastIndexOf(true) + 1;
    setFavicons(highestTrue);
    matchScreenToArray();
  });

  return (
    <div className="App">
      <p className="your-rating">Your rating: {starRatings.lastIndexOf(true) + 1}</p>
      <div id="star-area">
        {starRatings.map((star, index) => {
          return (
            <div
              id={"id" + index}
              key={index}
              onClick={handleMouseClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="star"
            >
              <svg width="152" height="151" viewBox="-5 -5 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="normal"
                  d="M116.805 149.588C118.072 150.433 119.534 150.855 120.989 150.855C122.55 150.855 124.11 150.372 125.437 149.407C127.985 147.545 129.101 144.289 128.234 141.251L114.378 92.7403L148.934 58.1838C151.09 56.0354 151.731 52.7863 150.57 49.9669C149.409 47.155 146.65 45.3156 143.605 45.3156H103.04L82.505 4.25334C79.9495 -0.850234 71.5742 -0.850234 69.0186 4.25334L48.4837 45.3156H7.91146C4.86591 45.3156 2.10681 47.155 0.945881 49.9669C-0.215049 52.7863 0.425724 56.0354 2.58174 58.1838L37.1383 92.7403L23.2825 141.251C22.4156 144.289 23.5313 147.545 26.0793 149.407C28.6424 151.277 32.0875 151.337 34.7109 149.588L75.758 122.223L116.805 149.588Z"
                />
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

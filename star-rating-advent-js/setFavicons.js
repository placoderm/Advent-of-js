import star0 from "./images/star0.png";
import star1 from "./images/star1.png";
import star2 from "./images/star2.png";
import star3 from "./images/star3.png";
import star4 from "./images/star4.png";
import star5 from "./images/star5.png";

export default function setFavicons(number) {
  let favImage;
  switch (number) {
    case 0:
      favImage = star0;
      break;
    case 1:
      favImage = star1;
      break;
    case 2:
      favImage = star2;
      break;
    case 3:
      favImage = star3;
      break;
    case 4:
      favImage = star4;
      break;
    case 5:
      favImage = star5;
      break;
  }

  let headTitle = document.querySelector("head");
  let setFavicon = document.createElement("link");
  setFavicon.setAttribute("rel", "shortcut icon");
  setFavicon.setAttribute("href", favImage);
  headTitle.appendChild(setFavicon);
}

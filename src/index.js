import _ from "lodash";
import './style.css';
import Spooky from "./spooky.png";

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add("hello");
  
    // Add the image to my exisitng div.
    const myIcon = new Image();
    myIcon.src = Spooky;

    element.appendChild(myIcon);

    return element;
  }
  
  document.body.appendChild(component());
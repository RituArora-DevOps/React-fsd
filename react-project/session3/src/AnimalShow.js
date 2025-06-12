import { useState } from "react";
import "./AnimalShow.css";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse: horse,
};

function AnimalShow({ type }) {
  console.log(type);

  const [clickCount, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clickCount + 1);
  }
  return <div className="animal-show" onClick={handleClick  }>
    <img src={svgMap[type]} alt="animal" />
    <img className="heart" src={heart} alt="heart" style={{ width: 10 + 10 * clickCount + "px" }} />
  </div>
}

export default AnimalShow;

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

function AnimalShow({type, clicks, onClick}) {
  return (
    <div className="animal-show" onClick={onClick}>
      <img className="animal" alt={type} src={svgMap[type]} />
      <img className="heart" alt="heart" src={heart} style={{width: 10 + 10 * clicks + 'px'}} />
    </div>

  );
 
}

export default AnimalShow;

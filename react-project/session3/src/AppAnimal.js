import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const Animal  = ["bird", "cat", "cow", "dog", "gator", "horse"];
  const randomIndex = Math.floor(Math.random() * animals.length);
  return animals[randomIndex];
}
function App() {
  const [animals, setAnimals] = useState([]);
  // the logic
  const renderedAnimals = animals.map(animal, index) => {
    return <AnimalShow key={index} type={animal} />;
  });
  const handleClick = () => {

    // I have already one array and I want to have a new array that
    // has a new field and override the new array to the previous one
    setAnimals([...animals, getRandomAnimal()]); // spread operator -> have the list and add one element
  };

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>{renderedAnimals}</div>
    </div>
    );
}

export default App;

// import react and AnimalShow
import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from 'react-bootstrap';

// create the animal type array
const animalTypes = ["bird", "cat", "cow", "dog", "gator", "horse"];

function App() {
  const [animals, setAnimals] = useState([]);

  /*Add the function handleAddAnimal */
  const handleAddAnimal = () => {
    // generate a new animal object - plain javascript object with id, type and clicks properties - always contain Strings/symbols
    const newAnimal = {
      id: Math.random(), // React doesn’t care if the ID is a float, string, or integer — it just needs a unique identifier.
      type: animalTypes[Math.floor(Math.random() * animalTypes.length)],
      clicks: 0
    };

    // updating the state with the new animal
    setAnimals([...animals, newAnimal]); // [...animal] - a copy of the current array, and [...animals, newAnimal] - a new array with the new animal added
    // push() modifies the original array in-place and therefore should not be used
    // [...animals, newAnimal] creates a new array → triggers re-render
    // animals.push(...) mutates the old array → React might not notice the change
    // React stores this new array in the memory as the new animals state
  };

  // handleAnimalClick(id) function to increase the clicks for a given animal
  const handleAnimalClick = (id) => {
    const newAnimals = animals.map((animal) => { 
      //.map() creates a new array by applying a function to each item in the existing array.
      //React prefers immutable updates (no in-place changes).
      if (animal.id === id) {
        return { ...animal, clicks: animal.clicks + 1 };
      } else {
        return animal;
      }
    });
    setAnimals(newAnimals); // needs a fresh array reference to trigger re-render
  }; 

  return (
  // the logic to generate the animals
    // <Container>
    //     {/*add a button with handleAddAnimal */}
    //     {/* Button container */}
    //       <Row className="mb-4">
    //         <Col xs="auto">
    //           <button variant="primary" onClick={handleAddAnimal}>Add animal</button>
    //         </Col>
    //       </Row>

    //     {/* Animal container */}
    //   <Row className="g-3"> 
    //     {animals.map((animal) => (
    //       <AnimalShow 
    //         key={animal.id} 
    //         type={animal.type} 
    //         clicks={animal.clicks}
    //         onClick={() => handleAnimalClick(animal.id)} 
    //       />
    //     ))}
    //   </Row>
    // </Container>

        <div>
        {/*add a button with handleAddAnimal */}
        {/* Button container */}

              <button variant="primary" onClick={handleAddAnimal}>Add animal</button>


        {/* Animal container */}

        {animals.map((animal) => (
          <AnimalShow 
            key={animal.id} 
            type={animal.type} 
            clicks={animal.clicks}
            onClick={() => handleAnimalClick(animal.id)} 
          />
        ))}

    </div>
  );
}

export default App;

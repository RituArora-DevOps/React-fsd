import './App.css';
import BreedDropdown from "./component/BreedDropdown";
import CatImages from "./component/CatImages";
import {useContext, useEffect} from "react";
import {CatsContext} from "./context/CatsContext";

function App() {

  const {fetchCats} = useContext(CatsContext) ?? {};

  useEffect(() => {
    fetchCats();
  }, [fetchCats]);

  return (
    <div>
      <h1>Cat Breed Explorer</h1>
      <BreedDropdown  />
      <CatImages />
    </div>
  );
}

export default App;

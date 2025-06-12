import { useContext, useState } from "react";
import { CatsContext } from "../context/CatsContext";
import CatImages from "./CatImages";

const BreedDropdown = () => {
  const {cats, selectedBreed, selectBreed} = useContext(CatsContext) ?? {};
  const [isOpen, setIsOpen] = useState(false);
  //console.log(cats);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative inline-block center">
        <button 
            className="px-4 py-2 bg-blue-500 text-white rounded" 
            onClick={handleClick}
        >
            Select a cat breed
        </button>

        {isOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white border rounded shadow">
                <ul>
                    {cats.map((cat) => (
                        <li 
                            className="px-4 py-2 hover:bg-gray-200" 
                            key={cat.id} 
                            onClick={() => {
                                selectBreed(cat);
                                setIsOpen(false);
                            }}>
                                {cat.name}
                        </li>
                    ))}
                </ul>
            </div>
        )}

        {selectedBreed && <CatImages />}
    </div>

  )
}

export default BreedDropdown

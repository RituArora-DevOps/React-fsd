import { useContext} from 'react'
import {CatsContext} from "../context/CatsContext";

const CatImages = () => {
  const {selectedBreed, images} = useContext(CatsContext) ?? {};

  if (!selectedBreed) return null;


  return (
    <div>
      <h2>{selectedBreed.name}</h2>
      <p>{selectedBreed.description}</p>

      <ul className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <li key={image.id}>
            <img src={image.url} alt={image.id} className="w-full h-auto" />
          </li>
        ))}    
      </ul>     
    </div>
  )
}

export default CatImages

import { createContext, useState, useCallback } from "react";
import axios from "axios";

export const CatsContext = createContext();

export function CatsProvider({ children }) {
    const [cats, setCats] = useState([]);
    const [images, setImages] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState(null);

    const fetchCats = useCallback(async () => {
        try {
            const response = await axios.get("https://api.thecatapi.com/v1/breeds");
            setCats(response.data);
        } catch (error) {
            console.error(error);
        }
    },[]);

    const fetchImagesByBreed = useCallback(async (breedId) => {
        try {
            const response = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&limit=6`);
            setImages(response.data);
        } catch (error) {
            console.error(error);
            setImages([]); 
        }
    },[]);

    const selectBreed = useCallback((breed) => {
    setSelectedBreed(breed);
    fetchImagesByBreed(breed.id);
}, [fetchImagesByBreed]);



    return (
        <CatsContext.Provider value={{ cats, fetchCats, selectBreed, selectedBreed, images, fetchImagesByBreed }}>
            {children}
        </CatsContext.Provider>
    );
}

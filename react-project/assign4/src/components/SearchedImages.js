import React, { useState } from 'react';

export default function ImageGallery() {

    
    const [searchedImages, setSearchedImages] = useState([]);
    const [query, setQuery] = useState("");

    // useEffect runs only once on mount
    // useEffect(() => {
    const fetchSearchedImages = async (searchTerm) => {
      if (!searchTerm.trim()) return;    

      try {
        const response = await fetch(`https://api.unsplash.com/search/photos/?query=${searchTerm}&client_id=hfWN2N3AGa5ECu5CvnJT8KIlMIFPlKfIfR2656wmOKQ`);
        if (!response.ok) throw new Error("Failed to fetch data");
        const json = await response.json();
        setSearchedImages(json.results); // only `json.results` contains the image array
      } catch (error) {
        console.error(error);
      }
    };


  //   fetchSearchedImages(searchTerm);
  // }, []);

    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        fetchSearchedImages(query);
      }
    };

    return (
        <div className="p-4">
            <input 
                type="text" 
                placeholder="Search for images" 
                className="w-full p-2 mb-4 border border-gray-300 rounded" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyPress} /> 

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {searchedImages.length > 0 ? (
                searchedImages.map((image) => (
                <div key={image.id}>
                <img 
                    src={image.urls.small} 
                    alt={image.alt_description} 
                />
                </div>
            ))
            ) : (
              <p className="text-gray-500">No images found</p>
            )}               
             </div>
        </div>
    );
}
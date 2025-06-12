import React, { useState, useEffect } from 'react';
import Modal from './Modal';
export default function ImageGallery() {

    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [query, setQuery] = useState("");

    // we ned to fill this array
    // and the goal is calling the unsplash api to use for fetching the data

    // access-key:hfWN2N3AGa5ECu5CvnJT8KIlMIFPlKfIfR2656wmOKQ
    //
    
    // new hook -> useEffect
    // side effect -> like fetching data that cause the component re-renders multiple times and it is unexpected
    // then we use useEffects hook to force the dependencies as run only in mounting the component
//    useEffect(() => {
//     fetch("https://api.unsplash.com/photos/?client_id=hfWN2N3AGa5ECu5CvnJT8KIlMIFPlKfIfR2656wmOKQ")
//     .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch data")
//         return (res.json());
//     })
//     .then((data) => setImages(data))
//     .catch((error) => console.log(error));
//     }, []);

    // above is syncronous calling
    // better way will be asychronous
    useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://api.unsplash.com/photos/?client_id=hfWN2N3AGa5ECu5CvnJT8KIlMIFPlKfIfR2656wmOKQ");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, []);

    // Fetch searched images from Unsplash API
  const fetchSearchedImages = async (searchTerm) => {
    if (!searchTerm.trim()) return;

    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos/?query=${searchTerm}&client_id=hfWN2N3AGa5ECu5CvnJT8KIlMIFPlKfIfR2656wmOKQ`
      );
      if (!response.ok) throw new Error('Search failed');
      const json = await response.json();
      setImages(json.results);
    } catch (error) {
      console.error(error);
    }
  };

  // Trigger search on Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchSearchedImages(query);
    }
  };


    return (
        <div className="p-4">
          
            <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
            {/* //use https://unsplash.com/documentation#search-photos to fetch the photos based on the input get from the user.
when the user enter the search key and enters, use the api to fetch data from the API and show it to the user.
if there is no data, then show a message with "no data found" */}
            <input type="text" placeholder="Search for images" className="w-full p-2 mb-4 border border-gray-300 rounded" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyPress} />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {images.length > 0 ? (
                images.map((image) => (
                  <div key={image.id} onClick={() => setSelectedImage(image)}>
                    <img src={image.urls.small} alt={image.alt_description} />
                  </div>
                ))
              ) : (
                <p>No data found</p>
              )}
            </div>
        </div>
    );
}
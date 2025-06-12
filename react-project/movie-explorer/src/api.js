import axios from 'axios';
export const searchMovies = async (term) => {
    try {
        const url = new URL("https://api.themoviedb.org/3/search/movie");

        const response = await axios.get(
                url.toString(), {
                headers: {
                    accept: "application/json",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzRkZGU2ODVkMmRhMmIxOWExZmRkYjJjNzQ5ZjU3OSIsIm5iZiI6MTc0OTU4NjIzNS43Miwic3ViIjoiNjg0ODkxM2I3MGQ0OTM5YWIwM2UwNmJjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.MM_ODj8uLyTpAtlD7dXR2derBJfu_iqFvthxgYpGTII"
                },
                params: {
                    language: "en-US",
                    page: 1,
                    include_adult: false,
                    query: term
                }});
        return response.data.results 
        
    } catch (error) {
        console.error("Error fetching movies", error);
        throw error;        
    }   


}


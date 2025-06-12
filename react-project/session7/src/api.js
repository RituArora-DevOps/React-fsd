export const searchImages = async (term) => {
    //https://api.unsplash.com/search/photos/?query=term&client_id=hfWN2N3AGa5ECu5CvnJT8KIlMIFPlKfIfR2656wmOKQ
    
    const url = new URL("https://api.unsplash.com/search/photos/");
    url.searchParams.append("query", term);
    const response = await fetch(url.toString(), {
        headers: {
            Authorization: "Client-ID hfWN2N3AGa5ECu5CvnJT8KIlMIFPlKfIfR2656wmOKQ"
        },
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data.results;
};
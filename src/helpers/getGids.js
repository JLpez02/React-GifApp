export const getGifs = async (category, setImages) => {
    const url =  `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}¿&api_key=xI55Jy28TOubJwB2B7TT8MlKw7kikbEz&limit=6`;

    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
    return gifs;
}
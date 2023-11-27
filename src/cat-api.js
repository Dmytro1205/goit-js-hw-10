import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_JGdMyr9Yf1q1tdWXFGxdBtOHulSFo5IgfAfOjo9m0DpXMxQMXk0HFizfaZpGsIcY";
function fetchCatByBreed(breedId) {
    return fetch(
      `https://api.thecatapi.com/v1/images/${breedId}?api_key=${API_KEY}`
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }
  
  export { fetchBreeds, fetchCatByBreed };
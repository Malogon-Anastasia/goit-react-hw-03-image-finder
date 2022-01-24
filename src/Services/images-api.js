import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";
const KEY = "20648109-aff5f53cd54a5f40fa07937d6";

export const fetchImages = async (searchQuery, counter) => {
  const response = await axios.get(
    `?q=${searchQuery}&page=${counter}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};

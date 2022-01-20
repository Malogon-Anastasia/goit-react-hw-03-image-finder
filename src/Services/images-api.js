const API_KEY = "20648109-aff5f53cd54a5f40fa07937d6";

function fetchImages(name) {
  return fetch(
    `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Нет покемона с именем ${name}`));
  });
}

const api = {
  fetchImages,
};

export default api;

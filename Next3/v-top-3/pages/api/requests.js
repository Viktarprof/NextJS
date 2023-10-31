const baseUrl = "https://fakestoreapi.com/";
const newsUrl = `${baseUrl}Products`;

export const load_news = (callback) => {
  fetch(newsUrl)
    .then((res) => res.json())
    .then(json => {
      callback(json);
    })
    .catch((error) => console.error("Error:", error));
};

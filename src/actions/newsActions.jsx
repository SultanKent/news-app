// actions/newsActions.js
import axios from 'axios';

export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';

const apiKey = 'b1c5d0ef056449d390e84bbe7a7cb541'; 
const apiUrl =
  'https://newsapi.org/v2/everything?' +
  'q=Apple&' +
  'from=2023-08-02&' +
  'sortBy=popularity&' +
  `apiKey=${apiKey}`;

const getRandomCategory = () => {
  const categories = ['Technology', 'Science'];
  const randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
};

export const fetchNews = () => async (dispatch) => {
  try {
    const response = await axios.get(apiUrl);
    const newsData = response.data.articles.map((item, index) => ({
      ...item,
      id: index + 1,
      category: getRandomCategory(),
    }));
    dispatch({ type: FETCH_NEWS_SUCCESS, payload: newsData });
  } catch (error) {
    console.error('Error fetching news:', error);
  }
};

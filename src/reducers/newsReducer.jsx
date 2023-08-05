// reducers/newsReducer.js
import { FETCH_NEWS_SUCCESS } from '../actions/newsActions';

const initialState = {
  news: [],
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_SUCCESS:
      const newsWithIds = action.payload.map((newsItem, index) => ({
        ...newsItem,
        id: index + 1, // Простой способ создать уникальный id (вместо index может быть другая логика)
      }));
      return { ...state, news: newsWithIds };
    default:
      return state;
  }
};

export default newsReducer;

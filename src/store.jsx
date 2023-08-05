// store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import newsReducer from './reducers/newsReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
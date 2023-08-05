// reducers/userReducer.js
import { SELECT_TOPIC } from '../actions/userActions';

const initialState = {
  selectedTopic: 'All',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TOPIC:
      return {
        ...state,
        selectedTopic: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
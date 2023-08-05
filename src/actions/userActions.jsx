// actions/userActions.js
export const SELECT_TOPIC = 'SELECT_TOPIC';

export const selectTopic = (topic) => {
  return { type: SELECT_TOPIC, payload: topic };
};
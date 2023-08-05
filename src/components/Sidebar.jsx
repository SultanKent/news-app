// components/Sidebar.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTopic } from '../actions/userActions';

const Sidebar = () => {
  const dispatch = useDispatch();
  const selectedTopic = useSelector((state) => state.user.selectedTopic);
  const handleTopicSelect = (topic) => {
    dispatch(selectTopic(topic));
  };
  return (
    <div className="sidebar">
      <h2 style={{color: '#FC6652'}}>Topics</h2>
      <ul>
        <li
          onClick={() => handleTopicSelect('All')}
          className={selectedTopic === 'All' ? 'active' : ''}
        >
          All
        </li>
        <li
          onClick={() => handleTopicSelect('Technology')}
          className={selectedTopic === 'Technology' ? 'active' : ''}
        >
          Technology
        </li>
        <li
          onClick={() => handleTopicSelect('Science')}
          className={selectedTopic === 'Science' ? 'active' : ''}
        >
          Science
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
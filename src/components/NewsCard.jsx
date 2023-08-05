import React from 'react';
import './News.css'
import { formatDistanceToNow } from 'date-fns';

const NewsCard = ({ newsItem }) => {
  const formatDate = (date) => {
    return formatDistanceToNow(new Date(date), { addSuffix: true });
  };
  return (
    <div className="news-card">
      <img src={newsItem.urlToImage}/>
      <h3>{newsItem.title}</h3>
      <p>{newsItem.description}</p>
      <p>{newsItem.author}</p>
      <p>Category: {newsItem.category}</p>
      <p>{formatDate(newsItem.publishedAt)}</p>
    </div>
  );
};

export default NewsCard;

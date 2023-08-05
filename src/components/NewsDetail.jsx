import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchNews } from '../actions/newsActions';
import './News.css';

const NewsDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.news);
  const selectedNewsId = parseInt(id, 10);
  const selectedNews = news.find((item) => item.id === selectedNewsId);
  const [isLoading, setIsLoading] = useState(!selectedNews);

  useEffect(() => {
    dispatch(fetchNews()).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  if (isLoading) {
    return <div className='loading'>Loading ...</div>;
  }

  if (!selectedNews) {
    return <div>News not found</div>;
  }

  return (
    <div className="news-detail">
      <h2>{selectedNews.title}</h2>
      <img src={selectedNews.urlToImage} alt={selectedNews.title} />
      <p>{selectedNews.description}</p>
      <p>{selectedNews.content}</p>
      <p>source: {selectedNews.url}</p>
      <p>{selectedNews.author}</p>
      <p style={{marginBottom: '30px'}}>Category: {selectedNews.category}</p>
    </div>
  );
};

export default NewsDetail;
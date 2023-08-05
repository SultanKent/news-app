import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchNews } from '../actions/newsActions';
import NewsCard from './NewsCard';
import Sidebar from './Sidebar';

const NewsFeed = () => {
  const dispatch = useDispatch();
  const [newsToShow, setNewsToShow] = React.useState(9);
  React.useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const selectedTopic = useSelector((state) => state.user.selectedTopic);
  const news = useSelector((state) => state.news.news);
  const navigate = useNavigate();

  React.useEffect(() => {
    setNewsToShow(9);
  }, [selectedTopic]);

  const handleLoadMore = () => {
    setNewsToShow((prevValue) => prevValue + 9);
  };

  const filteredNews =
    selectedTopic === 'All' ? news : news.filter((item) => item.category === selectedTopic);

  const handleNewsClick = (id) => {
    localStorage.setItem('selectedNewsId', id);
    navigate(`/news/${id.toString()}`);
  };

  return (
    <div className='app'>
      <div>
      <div className="news-feed">
        {filteredNews.slice(0, newsToShow).map((item) => (
          <div key={item.id} className="news-link" onClick={() => handleNewsClick(String(item.id))}>
            <NewsCard newsItem={item} />
          </div>
        ))}
        {newsToShow < filteredNews.length && (
          <button onClick={handleLoadMore} className="load-button">
            Load More
          </button>
        )}
      </div>
      </div>
      <Sidebar/>
    </div>
  );
};

export default NewsFeed;
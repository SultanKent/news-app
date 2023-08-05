import React from 'react';
import { HashRouter as Router, Routes, Route, } from 'react-router-dom';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import NewsFeed from './components/NewsFeed';
import Sidebar from './components/Sidebar';
import NewsDetail from './components/NewsDetail';

const App = () => {
  return (
    <Router>
      <Menu />
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<NewsFeed />} />
          <Route path="/news/:id" element={<NewsDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
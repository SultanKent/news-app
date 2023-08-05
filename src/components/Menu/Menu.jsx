import React from 'react';
import { Link } from 'react-router-dom'; // Импорт Link
import './Menu.css';

const Menu = () => {
  return (
    <div className="Menu">
      <div className="Menu_main">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1>News</h1>
        </Link>
      </div>
    </div>
  );
};

export default Menu;

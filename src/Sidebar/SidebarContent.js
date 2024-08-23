import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

const SidebarContent = ({ isActive, pages }) => {
  return (
    <div className={`nav__content ${isActive ? 'is-active' : ''}`}>
      <nav className="nav__list">
        <ul>
          {pages.map((page, index) => (
            <li key={index} className="nav__item">
              <Link to={page.route} data-menu-name={page.name} className="nav-link">
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default React.memo(SidebarContent);

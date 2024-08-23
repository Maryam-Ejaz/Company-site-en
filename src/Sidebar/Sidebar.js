import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import SidebarContent from './SidebarContent'; // Assuming SidebarContent component exists
import './Sidebar.scss';

const Sidebar = ({ pages }) => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const toggleSidebar = useCallback(() => {
    setIsActive((prevState) => !prevState);
  }, []);

  // Close sidebar when route changes
  useEffect(() => {
    setIsActive(false);
  }, [location.pathname]);

  return (
    <div className={`nav ${isActive ? 'is-active' : ''}`}>
      <a className={`nav__trigger ${isActive ? 'is-active' : ''}`} onClick={toggleSidebar}>
        <div className={`bars ${isActive ? 'is-active' : ''}`}></div>
      </a>
      <SidebarContent isActive={isActive} pages={pages} />
    </div>
  );
};

export default React.memo(Sidebar);

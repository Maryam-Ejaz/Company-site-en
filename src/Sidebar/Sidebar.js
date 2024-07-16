import React, { useState, useEffect } from 'react';
import SidebarContent from './SidebarContent'; // Assuming SidebarContent component exists
import './Sidebar.scss';
import { useLocation } from 'react-router-dom';

const Sidebar = ({ pages }) => {
  const [isActive, setIsActive] = useState(false); // Initially set to false for inactive state
  const location = useLocation();

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

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
}

export default Sidebar;

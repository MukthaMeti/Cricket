import React, { useState } from 'react';
import { FaBars, FaClone, FaFileAlt, FaSitemap, FaTable, FaTh } from 'react-icons/fa';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import './Sidebar.css';
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: '/AboutICC',
      name: 'About Us',
      icon: <FaClone />,
    },
    {
      path: '/AboutCricket',
      name: 'About Cricket',
      icon: <FaTh />,
    },
  ,
    {
      path: '/AboutPlayers',
      name: 'Our Stars',
      icon: <FaSitemap />,
    },
    {
      path: '/AboutWinners',
      name: 'Hall of Fame',
      icon: <FaTable />,
    },
    {
      path: '/Audienceform',
      name: 'Fan Zone',
      icon: <FaFileAlt />,
    },
  ];

  return (
	<Router>
    <div className="container">
      <div style={{ width: isOpen ? '200px' : '50px' }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo">
            Logo-XYZ Organisation
          </h1>
          <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link" activeClassName="active">
            <div className="icon">{item.icon}</div>
            <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
	</Router>
  );
};

export default Sidebar;

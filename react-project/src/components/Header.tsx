import React from 'react';
import logo from '../assets/logo.png';
import plusIcon from '../assets/plus1.png'; 
import arrowIcon from '../assets/ic_go.png'; 

const Header: React.FC = () => {
  const menuItems = [
    { text: 'Services', hasPlusIcon: true },
    { text: 'Industries', hasPlusIcon: true },
    { text: 'Work', hasPlusIcon: true },
    { text: 'Company', hasPlusIcon: true },
    { text: 'Blog', hasPlusIcon: true },
    { text: 'Contact', hasArrowIcon: true }
  ];

  return (
    <div className="header-container">
      <nav className="header-navigation">
        <a className="logo" href="./index.html">
          <img src={logo} className="logo" width="152" height="37" alt="Company logo" />
        </a>
        <ul className="header-menu-list text">
          {menuItems.map((item, index) => (
            <li className="header-menu-item" key={index}>
              <a className="header-menu-link" href="">
                <span className="menu-text">{item.text}</span>
                {item.hasPlusIcon && <img src={plusIcon} className="icon-plus" width="20" height="20" alt="Plus icon" />}
                {item.hasArrowIcon && <img src={arrowIcon} className="icon-arrow" width="14" height="14" alt="Arrow icon" />}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;

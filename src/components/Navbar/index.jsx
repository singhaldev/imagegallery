/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef } from 'react';
import './Navbar.css';
import { Switch } from '@chakra-ui/react';

const Navbar = ({
  setIsSearchOpen,
  setEnterValue,
  setCount,
  toggleColorMode,
  bgSearchInputMob,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const searchInput = useRef(null);
  return (
    <div>
      <div className="nav">
        <div
          className="logo"
          onClick={() => {
            setIsSearchOpen(true);
            searchInput.current.value = '';
            setEnterValue('');
            setCount((prevCount) => prevCount + 1);
          }}
        >
          Image Gallery
        </div>
        <div className="search-input">
          <input
            type="text"
            placeholder="Search Images here"
            id="searchbar"
            ref={searchInput}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                setEnterValue(searchInput.current.value);
              }
            }}
          />
          <img src="images/search-logo.svg" alt="logo" />
        </div>
        <div className="nav-links">
          <a href="#">Explore</a>
          <a href="#">Collection</a>
          <a href="#">Community</a>
        </div>
        <div
          className="nav-links-mob"
          id="menuList"
          style={{ height: isMenuOpen ? '90px' : '0px' }}
        >
          <a href="#">Explore</a>
          <a href="#">Collection</a>
          <a href="#">Community</a>
        </div>
        <div className="theme-toggle">
          <p>Dark Mode</p>
          <Switch size="md" onChange={(e) => toggleColorMode()} />
        </div>
        <div className="black-search-logo">
          <img
            src="images/black-search-logo.svg"
            alt="search-logo"
            style={{
              cursor: 'pointer',
            }}
            onClick={() => {
              setIsSearchOpen(true);
              setTimeout(() => {
                bgSearchInputMob?.current?.focus();
              }, 500);
            }}
          />
        </div>
        <div className="menu-logo">
          <img
            src="images/menu-logo.svg"
            alt="menu-logo"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

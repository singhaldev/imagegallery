/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './App.css';
import ImageBox from './components/ImageBox';
import { useColorMode } from '@chakra-ui/react';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';

function App() {
  const [unsplashPhotos, setUnsplashPhotos] = useState('');
  const [enterValue, setEnterValue] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(true);
  const [count, setCount] = useState(1);
  const bgSearchInput = useRef(null);
  const bgSearchInputMob = useRef(null);
  useEffect(() => {
    const Url = `${process.env.REACT_APP_APP_URL}/photos/?client_id=${process.env.REACT_APP_API_KEY}&&per_page=30`;
    async function apiHit() {
      const { data } = await axios.get(Url);
      setUnsplashPhotos(data);
    }
    apiHit();
  }, [count]);

  useEffect(() => {
    const SearchUrl = `${process.env.REACT_APP_APP_URL}/search/photos/?client_id=${process.env.REACT_APP_API_KEY}&&query=${enterValue}`;
    if (enterValue) {
      async function apiHit() {
        const { data } = await axios.get(SearchUrl);
        if (data.total === 0) {
          toast.error('No Images found.');
        } else {
          setUnsplashPhotos(data.results);
          setIsSearchOpen(false);
        }
      }
      apiHit();
    }
  }, [enterValue]);
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode);
  return (
    <>
      <Toaster position="top-right" />
      <Navbar
        setIsSearchOpen={setIsSearchOpen}
        setEnterValue={setEnterValue}
        setCount={setCount}
        toggleColorMode={toggleColorMode}
        bgSearchInputMob={bgSearchInputMob}
      />

      {isSearchOpen ? (
        <div
          className="bg-container"
          style={{
            backgroundImage: `url('images/bg.png')`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'relative',
            height: '400px',
          }}
        >
          <div className="bg-main">
            <div className="bg-heading">
              Download High Quality Images by creators
            </div>
            <div className="bg-details">
              Over 2.4 million+ stock Images by our talented community
            </div>
            <div className="bg-input">
              <img src="images/search-logo.svg" alt="search-logo" />
              <input
                type="text"
                placeholder="Search high resolution Images, categories, wallpapers"
                id="bg-searchbar"
                ref={bgSearchInput}
                onKeyDown={(e) => {
                  if (e.keyCode === 13) {
                    setEnterValue(bgSearchInput.current.value);
                  }
                }}
              />
            </div>
            <div className="bg-input-mob">
              <img src="images/search-logo.svg" alt="search-logo" />
              <input
                type="text"
                placeholder="Search high resolution Images"
                id="bg-searchbar"
                ref={bgSearchInputMob}
                onKeyDown={(e) => {
                  if (e.keyCode === 13) {
                    setEnterValue(bgSearchInputMob.current.value);
                  }
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="searchTopic">{enterValue}</div>
      )}

      {unsplashPhotos && <ImageBox unsplashPhotos={unsplashPhotos} />}
    </>
  );
}

export default App;

import React from 'react';
import './App.scss';
import SearchIcon from './icons/SearchIcon';
import BarIcon from './icons/BarIcon';
import FaceIcon from './icons/FaceIcon';
import InstaIcon from './icons/InstaIcon';
import YoutubeIcon from './icons/YoutubeIcon';




function App() {
  return (
    <div className='Head'>
      <div className="App">
        <header>
          <div className='sub-header-content'>
            <div className='links'>
              <div className='sns'>
                <ul>
                  <FaceIcon className='sns-icon' />
                  <InstaIcon className='sns-icon' />
                  <YoutubeIcon className='sns-icon' />

                </ul>
              </div>
            </div>
            <div className='short-cut'>
              <ul>
                <a href='#'><li>HOME</li></a>
                <a href='#'><li>SITE MAP</li></a>
                <a href='#'><li>CONTACT US</li></a>
              </ul>
            </div>
          </div>
        </header>
      </div >
      <div className='nav-wrapper'>
        <div className='sub-header-content'>
          <img src='http://www.monami.com/images/common/logo.jpg'
            height={88}
          />
          <div className='nav'>
            <ul>
              <a href='#'><li>모나미소개</li></a>
              <a href='#'><li>모나미 제품</li></a>
              <a href='#'><li>NEWS & VIDEO</li></a>
              <a href='#'><li>모나미 미술대회</li></a>
              <a href='#'><li>고객지원</li></a>
              <a href='#'><li>기업 구매 / 개발</li></a>
            </ul>
          </div>
          <div className='sub-nav'>
            <div className='nav_search'>
              <SearchIcon className='icon' />
            </div>
            <div className='btn_all'>
              <BarIcon className='icon' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

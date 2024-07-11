import React from 'react';
import './App.scss';
import SearchIcon from './icons/SearchIcon';

function App() {
  return (
    <div className='Head'>
      <div className="App">
        <header>
          <div className='sub-header-content'>
            <div>@TODO Icons</div>
            <div className='short-cut'>
              <ul>
                <li>HOME</li>
                <li>SITE MAP</li>
                <li>CONTACT US</li>
              </ul>
            </div>
          </div>
        </header>
      </div>
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

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

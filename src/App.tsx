import React from 'react';
import './App.scss';

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
      <div className='gnb'>
        <header>
          <div className='sub-header-content'>
            <div className='monami-gnb'>
              <img src='http://www.monami.com/images/common/logo.jpg'></img>
            </div>
            <div className='nav'>
              <ul>
                <li>모나미소개</li>
                <li>모나미 제품</li>
                <li>NEWS & VIDEO</li>
                <li>모나미 미술대회</li>
                <li>고객지원</li>
                <li>기업 구매 / 개발</li>
              </ul>
            </div>
            <div className='search'>
              <div className='nav_search'>
              
              </div>
              <div className='btn_all'>

              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.scss';
import SearchIcon from './icons/SearchIcon';
import BarIcon from './icons/BarIcon';
import FaceIcon from './icons/FaceIcon';
import InstaIcon from './icons/InstaIcon';
import YoutubeIcon from './icons/YoutubeIcon';
import Nav from './Nav';
import Head from './Head';




function App() {
  return (
    <>
      <header>
        <Head />
        <Nav />
      </header>
      <div className='visual'>
        <div className='visual-text'>
          <hr className='text-upper-line' />
          <p className='display-1 mt-3'>
            어쩌면 삶은 <br />
            인생이라는 종이 위에 <br />
            써 내려가는 <br />
            펜의 기록 같습니다. <br />
          </p>
          <p className='display-2 mt-2'>
            그중에서도 지우고 싶지 않은 기록이 있습니다. <br />
            모나미는 언제나 당신의 행복한 기록과 함께 합니다. <br />
          </p>
        </div>
      </div>
    </>
  );
}

export default App;

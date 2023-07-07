import './App.css';
import Grid from './components/grid'
import Dashboard from './components/dashboard'
import TeamSelect from './components/teamSelect'
import rotate from './images/rotate.svg';
import windowWidth from './images/windowWidth.svg';
import noMobile from './images/noMobile.svg';
import $ from 'jquery';
import { useState } from 'react';

function App() {

  const handleScreenClick = () => {
    $('.dashboard').removeClass("open");
    $('.dashOpen').removeClass("hidden");
    $('.tacPloysArea').addClass('hidden');
    $('.stratPloysArea').addClass('hidden');
    $('.turningPointArea').removeClass('hidden');
    $('.stratPloys').removeClass('headerSelected');
    $('.tacPloys').removeClass('headerSelected');
    $('.turningPointHeader').addClass('headerSelected');
    $('.dashboard').removeClass("shadow");
    $('.screen').addClass("hidden");
  };

  const [seed, setSeed] = useState(1);
  const reset = () => {
    setSeed(Math.random());
  }

  return (
    <div>
      <TeamSelect onClick={reset}/>
      <div className="content">
        <div className="mainContent hidden">
          <Grid key={seed}/>
          <Dashboard />
          <div className="screen hidden" onClick={handleScreenClick}></div>
        </div>
        <img className="rotate" src={rotate} alt="" />
        <img className="windowWidth" src={windowWidth} alt="" />
        <img className="noMobile" src={noMobile} alt="" />
      </div>
    </div>
  );
}

export default App;
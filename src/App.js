import './App.css';
import Grid from './components/grid'
import Dashboard from './components/dashboard'
import rotate from './images/rotate.svg';
import windowWidth from './images/windowWidth.svg';
import noMobile from './images/noMobile.svg';
import $ from 'jquery';

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

  return (
    <div className="content">
      <div className="mainContent">
        <Grid />
        <Dashboard />
        <div className="screen hidden" onClick={handleScreenClick}></div>
      </div>
      <img className="rotate" src={rotate} alt="" />
      <img className="windowWidth" src={windowWidth} alt="" />
      <img className="noMobile" src={noMobile} alt="" />
    </div>
  );
}

export default App;
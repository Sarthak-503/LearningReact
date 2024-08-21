import Player from './components/Player.jsx';
import Game from './components/challenge-1/Game.jsx'
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
      <TimerChallenge title="Pros only" targetTime={1}/>
      <TimerChallenge title="Getting Tough" targetTime={5}/>
      <TimerChallenge title="Not Easy" targetTime={10}/>
      <TimerChallenge title="Easy" targetTime={15}/>
      </div>

    </>
  );
}

export default App;

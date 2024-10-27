import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';
// import 
function App() {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount){
    // state update is scheduled and execute by react not done instantly and used in next line.
    // setChosenCount(newCount);// this will triger a comp fn execution 
    setChosenCount((prevChosenCount)=>prevChosenCount+1);
    // React performs state batching,which simply means that multiple state updates that are triggered from the same function, for example,
    // are batched together and will only lead to one component function execution.
  }
  return (
    <>
      <Header />
      <main>
       <ConfigureCounter onSet={handleSetCount} />
       {/* when chosenCount changes, react through away old component instance and recreate it newly   */}
        <Counter key={chosenCount} initialCount={chosenCount} />
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;

import { Fragment, useState } from 'react';
import Header from './components/Header/Header.jsx';
import { EXAMPLES } from './data.js';
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
import Example from './components/Examples/Example.jsx';

function App() {

  return (
    // Acts an (wrapper) obj or array that wraps the values inside it -> removes unnecesary div. 
    // <Fragment>
<>
      <Header />
      <main>
      <CoreConcepts/>
      <Example/>
      </main>
</>
    );
    {/* </Fragment> */}
}

export default App;

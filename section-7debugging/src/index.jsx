import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
    // <StrictMode> 
    {/* executes the component 2 times in development but not in deployment.
  if we move results array in Results.jsx out of the Results fn and change some input valuethen it will give an
   error but if we use strict mode, itwill show us twice */}
    // </StrictMode>
// );

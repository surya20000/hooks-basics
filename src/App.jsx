import { useState } from 'react';
import './App.css';
import UseContext from './components/UseContext';
import React from 'react';
// import UseState from './components/UseState';
// import UseEffect from './components/UseEffect';

export const ToggleTheme = React.createContext()

function App() {

  const [state, setState] = useState(true)

  const handleToggle = () => {
    setState(state => !state)
  }

  return (
    <>
      <ToggleTheme.Provider value={state}>
        <button onClick={handleToggle} className='toggle'>Toggle</button>
        <UseContext />
      </ToggleTheme.Provider>
      {/* <UseEffect />
      <UseState /> */}
    </>
  );
}

export default App;
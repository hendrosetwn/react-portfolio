/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */

import { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './scenes/Navbar';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [programmer, setProgrammer] = useState('nama saya hendro');
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  const clickMe = () => {
    setProgrammer('nama saya berubah jadi apa aja');
  };

  return (
    <div className="app bg-deep-blue flex flex-col align-center text-center">
      {/* <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      /> */}
      <h1>{programmer}</h1>
      <button
        className="bg-red text-yellow"
        onClick={clickMe}
      >
        Click me!
      </button>
    </div>
  );
}

export default App;

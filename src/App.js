import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProjectList from './components/ProjectList/ProjectList';
import { SpeedInsights } from "@vercel/speed-insights/react"
import AboutMe from './components/AboutMe/AboutMe';
import Contacts from './components/Contacts/Contacts';

function App() {
  const [selectedBox, setSelectedBox] = useState('work');

  return (
    <>
      <SpeedInsights />
      <div className="App">
        <Header
          selectedBox={selectedBox}
          setSelectedBox={setSelectedBox}
        />
        {selectedBox === 'work' ? <ProjectList /> : null}
        {selectedBox === 'aboutMe' ? <AboutMe /> : null}
        {selectedBox === 'contacts' ? <Contacts /> : null}
      </div>
    </>
  );
}

export default App;
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProjectList from './components/ProjectList/ProjectList';
import { SpeedInsights } from "@vercel/speed-insights/react"

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
      </div>
    </>
  );
}

export default App;
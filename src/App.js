import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProjectList from './components/ProjectList/ProjectList';

function App() {
  const [selectedBox, setSelectedBox] = useState('work');

  return (
    <>
      <div className="App">
        <Header
          selectedBox={selectedBox}
          setSelectedBox={setSelectedBox}
        />
        <ProjectList />
      </div>
    </>
  );
}

export default App;
import './App.css';
import Header from './components/Header/Header';
// import { ReactLenis, useLenis } from 'lenis/react'
import ProjectList from './components/ProjectList/ProjectList';

function App() {
  // const lenis = useLenis((lenis) => { })

  return (
    <>
      {/* <ReactLenis root /> */}
      <div className="App">
        <Header />
        <ProjectList />
      </div>
    </>
  );
}

export default App;

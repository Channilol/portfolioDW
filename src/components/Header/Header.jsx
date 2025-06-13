import React, { useState, useRef, useEffect } from 'react'
import './Header.css'

export default function Header() {
  const [boxLightOn, setBoxLightOn] = useState(false);
  const [boxLightPos, setBoxLightPos] = useState({ x: '50%', y: '50%' });
  const [btnLightOn, setBtnLightOn] = useState(false);
  const [btnLightPos, setBtnLightPos] = useState({ x: '50%', y: '50%' });
  const [selectedBox, setSelectedBox] = useState('work');
  const boxRef = useRef(null);
  const btnRef = useRef(null);

  // Ogni volta che selectedBox cambia, triggero l'animazione
  useEffect(() => {
    const node = boxRef.current;
    if (!node) return;

    // Rimuovo e riaggiungo la classe per riavviare l'animazione
    node.classList.remove('bubble');
    // forzo reflow per essere sicuro che la rimozione venga presa
    void node.offsetWidth;
    node.classList.add('bubble');
  }, [selectedBox]);

  const _margin = 50;

  const handleBoxMouseMove = e => {
    const rect = e.currentTarget.getBoundingClientRect();
    const withinX = e.clientX >= rect.left - _margin && e.clientX <= rect.right + _margin;
    const withinY = e.clientY >= rect.top - _margin && e.clientY <= rect.bottom + _margin;
    if (withinX && withinY) {
      setBoxLightOn(true);
      const rawX = ((e.clientX - rect.left) / rect.width) * 100;
      const rawY = ((e.clientY - rect.top) / rect.height) * 100;
      setBoxLightPos({
        x: `${Math.min(100, Math.max(0, rawX))}%`,
        y: `${Math.min(100, Math.max(0, rawY))}%`
      });
    } else {
      setBoxLightOn(false);
    }
  };
  const handleBoxMouseLeave = () => setBoxLightOn(false);

  const handleBtnMouseMove = e => {
    const rect = e.currentTarget.getBoundingClientRect();
    const withinX = e.clientX >= rect.left - _margin && e.clientX <= rect.right + _margin;
    const withinY = e.clientY >= rect.top - _margin && e.clientY <= rect.bottom + _margin;
    if (withinX && withinY) {
      setBtnLightOn(true);
      const rawX = ((e.clientX - rect.left) / rect.width) * 100;
      const rawY = ((e.clientY - rect.top) / rect.height) * 100;
      setBtnLightPos({
        x: `${Math.min(100, Math.max(0, rawX))}%`,
        y: `${Math.min(100, Math.max(0, rawY))}%`
      });
    } else {
      setBtnLightOn(false);
    }
  };
  const handleBtnMouseLeave = () => setBtnLightOn(false);

  // Handler che innesca l'animazione sul pulsante
  const handleBtnPress = () => {
    const node = btnRef.current;
    if (!node) return;
    // Rimuovo e riaggiungo per “riavviare” l’animazione
    node.classList.remove('bubble');
    void node.offsetWidth;       // forzo reflow
    node.classList.add('bubble');
    // → qui dentro puoi anche mettere la logica di download/apertura CV
  };

  return (
    <header>
      <div className='headLeft'>
        <p className='pName'>Francesco cannizzo</p>
        <p>Software developer</p>
        <p>Graphic designer</p>
      </div>
      <div className='headCenter'>
        <div
          className={`acrylicBox${boxLightOn ? ' light-on' : ''}`}
          onMouseMove={handleBoxMouseMove}
          onMouseLeave={handleBoxMouseLeave}
          style={{
            '--light-x': boxLightPos.x,
            '--light-y': boxLightPos.y
          }}
        >
          <p className={`work ${selectedBox === 'work' ? 'darkShadowText' : ''}`} onClick={() => setSelectedBox('work')}>Work</p>
          <p className={`work ${selectedBox === 'aboutMe' ? 'darkShadowText' : ''}`} onClick={() => setSelectedBox('aboutMe')}>About me</p>
          <p className={`work ${selectedBox === 'Contacts' ? 'darkShadowText' : ''}`} onClick={() => setSelectedBox('Contacts')}>Contacts</p>
          <div ref={boxRef} className={`selectedBox ${selectedBox}`}></div>
        </div>
      </div>
      <div className='headRight'>
        <button
          ref={btnRef}
          className={`cvBtn${btnLightOn ? ' light-on' : ''}`}
          onMouseMove={handleBtnMouseMove}
          onMouseLeave={handleBtnMouseLeave}
          style={{
            '--light-x': btnLightPos.x,
            '--light-y': btnLightPos.y
          }}
          onClick={handleBtnPress}
        >
          Curriculum
        </button>
      </div>
    </header>
  )
}

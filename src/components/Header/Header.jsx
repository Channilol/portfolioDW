import React, { useState } from 'react'
import './Header.css'

export default function Header() {
  const [lightOn, setLightOn] = useState(false)
  const [lightPos, setLightPos] = useState({ x: '50%', y: '50%' })
  const [selectedBox, setSelectedBox] = useState('work');

  const MARGIN = 50; // distanza extra in px

  const handleMouseMove = e => {
    const rect = e.currentTarget.getBoundingClientRect();

    // Verifico se il cursore è entro rect esteso di MARGIN px su ogni lato
    const withinX = e.clientX >= rect.left - MARGIN && e.clientX <= rect.right + MARGIN;
    const withinY = e.clientY >= rect.top - MARGIN && e.clientY <= rect.bottom + MARGIN;

    if (withinX && withinY) {
      setLightOn(true);

      // Per posizionare il bagliore correttamente dentro la box,
      // clampo le coordinate all’interno dei bordi (0–100%)
      const rawX = ((e.clientX - rect.left) / rect.width) * 100;
      const rawY = ((e.clientY - rect.top) / rect.height) * 100;
      const x = Math.min(100, Math.max(0, rawX)) + '%';
      const y = Math.min(100, Math.max(0, rawY)) + '%';
      setLightPos({ x, y });
    }
    else {
      setLightOn(false);
    }
  };

  const handleMouseLeave = () => setLightOn(false);

  return (
    <header>
      <div className='headLeft'>
        <p className='pName'>Francesco cannizzo</p>
        <p>Software developer</p>
        <p>Graphic designer</p>
      </div>
      <div className='headCenter'>
        <div
          className={`acrylicBox${lightOn ? ' light-on' : ''}`}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            // React: per usare CSS variable devi fare un cast
            '--light-x': lightPos.x,
            '--light-y': lightPos.y
          }}
        >
          <p className="work" onClick={() => setSelectedBox('work')}>Work</p>
          <p className="aboutMe" onClick={() => setSelectedBox('aboutMe')}>About me</p>
          <div className={`selectedBox ${selectedBox}`}></div>
        </div>
      </div>
      <div className='headRight'>a</div>
    </header>
  )
}

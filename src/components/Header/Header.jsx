import React, { useState, useRef, useEffect } from 'react'
import './Header.css'
import Download from '../../assets/download_icon.svg'

export default function Header({ selectedBox, setSelectedBox }) {
  const [boxLightOn, setBoxLightOn] = useState(false);
  const [boxLightPos, setBoxLightPos] = useState({ x: '50%', y: '50%' });
  const [btnLightOn, setBtnLightOn] = useState(false);
  const [btnLightPos, setBtnLightPos] = useState({ x: '50%', y: '50%' });

  const boxRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const node = boxRef.current;
    if (!node) return;
    node.classList.remove('bubble');
    void node.offsetWidth;
    node.classList.add('bubble');
  }, [selectedBox]);

  const _margin = 50;

  const scrollToTop = () => {
    console.log('Scrolling to top, current position:', window.scrollY);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
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

  const handleBtnPress = () => {
    const node = btnRef.current;
    if (!node) return;
    node.classList.remove('bubble');
    void node.offsetWidth;
    node.classList.add('bubble');
    const link = document.createElement('a');
    link.href = '/Francesco_Cannizzo_CV.pdf';
    link.download = 'Francesco_Cannizzo_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
          <p className={`work ${selectedBox === 'work' ? 'darkShadowText' : ''}`} onClick={() => { scrollToTop(); setSelectedBox('work')}}>Work</p>
          <p className={`work ${selectedBox === 'aboutMe' ? 'darkShadowText' : ''}`} onClick={() => {scrollToTop(); setSelectedBox('aboutMe')}}>About me</p>
          <p className={`work ${selectedBox === 'contacts' ? 'darkShadowText' : ''}`} onClick={() => { scrollToTop(); setSelectedBox('contacts')}}>Contacts</p>
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
          <img src={Download} alt="Logo" width={24} height={24} />
          Curriculum
        </button>
      </div>
    </header>
  )
}

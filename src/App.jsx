import { useEffect, useState } from 'react';
import './App.css';
import EffectElement from './EffectElement';

function App() {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setLeft(e.pageX);
      setTop(e.pageY);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div
        id="mouse-pointer"
        style={{ left, top }}
        className={isHovered ? 'hovered' : ''}
      />
      <EffectElement setIsHovered={setIsHovered}>
        <div id="title">
          <p>Cream Cream</p>
          <strong>Studio</strong>
        </div>
      </EffectElement>
    </>
  );
}

export default App;

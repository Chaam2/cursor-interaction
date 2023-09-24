import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import EffectElement from './EffectElement';

function App() {
  const [count, setCount] = useState(0);

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
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </EffectElement>
      <h1>Vite + React</h1>
      <div className="card">
        <EffectElement setIsHovered={setIsHovered}>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </EffectElement>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

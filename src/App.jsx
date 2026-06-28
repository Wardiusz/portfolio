import { useState, useCallback, useEffect } from 'react';
import { useSeasonalTheme } from './hooks/useSeasonalTheme';
import MatrixBackground from './components/MatrixBackground';
import NavDots from './components/NavDots';
import SnowEffect from './components/SnowEffect';
import FireworksEffect from './components/FireworksEffect';
import HomeSlide from './slides/HomeSlide';
import AboutSlide from './slides/AboutSlide';
import TechSlide from './slides/TechSlide';
import ProjectsSlide from './slides/ProjectsSlide';
import ContactSlide from './slides/ContactSlide';
import './styles/main.css';
import './styles/snow.css';

const SLIDE_LABELS = ['Home', 'About', 'Technologies', 'Projects', 'Contact'];

export default function App() {
  const { words, showSnow, showFireworks, showEaster, showMatrix } = useSeasonalTheme();
  const [activeSlide, setActiveSlide] = useState(0);
  const [uiVisible, setUiVisible] = useState(!showMatrix);
  const [backgroundVisible, setBackgroundVisible] = useState(false);

  const handleMatrixReady = useCallback(() => {
    setUiVisible(true);
    setTimeout(() => setBackgroundVisible(true), 1000);
  }, []);

  useEffect(() => {
    if (!showMatrix) {
      setTimeout(() => setBackgroundVisible(true), 1000);
    }
  }, [showMatrix]);

// Changing slides on key press [Up, Down, Left, Right]
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        setActiveSlide((s) => Math.min(s + 1, SLIDE_LABELS.length - 1));
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        setActiveSlide((s) => Math.max(s - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

// Changing slides on scroll
  useEffect(() => {
    let locked = false;
    let timeout;

    const handleWheel = (e) => {
      e.preventDefault();

      clearTimeout(timeout);

      if (!locked) {
        locked = true;
        if (e.deltaY > 0) {
          setActiveSlide((s) => Math.min(s + 1, SLIDE_LABELS.length - 1));
        } else if (e.deltaY < 0) {
          setActiveSlide((s) => Math.max(s - 1, 0));
        }
      }


      timeout = setTimeout(() => {
        locked = false;
      }, 150);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {showMatrix && <MatrixBackground onFirstColumnDone={handleMatrixReady} />}
      {showEaster && <div className="easter-bg" />}
      {showFireworks && <FireworksEffect />}
      {showSnow && <SnowEffect />}

      <div className={`background${backgroundVisible ? ' visible' : ''}`} />

      <NavDots
        slides={SLIDE_LABELS}
        activeIndex={activeSlide}
        onSelect={setActiveSlide}
        visible={uiVisible}
      />

      <div className="contenedor">
        <div
          className="slides-wrapper"
          style={{ transform: `translateY(-${activeSlide * 100}vh)` }}
        >
          <HomeSlide
            words={words}
            typingDelay={showMatrix ? 1750 : 0}
            blinkVisible={uiVisible}
          />
          <AboutSlide />
          <TechSlide />
          <ProjectsSlide />
          <ContactSlide />
        </div>
      </div>
    </>
  );
}

import React, { useEffect, useRef } from 'react';
import Parallax from 'parallax-js';

export const ParallaxBG = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    if (!sceneRef.current) return;
    console.log(sceneRef.current)
    const parallaxInstance = new Parallax(sceneRef.current);
  }, [sceneRef.current]);

  return (
    <div ref={sceneRef}>
      <div data-depth="0.2">My first Layer!</div>
      <div data-depth="0.6">My second Layer!</div>
    </div>
  );
};

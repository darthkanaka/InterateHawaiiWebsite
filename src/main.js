/**
 * Iterate Hawaii - Anime.js 4.0
 * SVG morph with scroll sync
 */

import { animate, onScroll } from 'animejs';

document.addEventListener('DOMContentLoaded', () => {
  initHeroMorph();
});

function initHeroMorph() {
  const hero = document.getElementById('hero');
  const morphShape = document.getElementById('morphShape');
  const heroShape = document.querySelector('.hero-shape');

  if (!hero || !morphShape) {
    console.error('Elements not found:', { hero, morphShape });
    return;
  }

  console.log('Initializing morph animation');

  // Define the path strings directly
  const jaggedPath = "M 200,40 L 240,80 L 220,85 L 280,120 L 250,130 L 320,160 L 290,175 L 350,220 L 310,230 L 360,280 L 320,285 L 340,340 L 300,330 L 280,370 L 250,350 L 200,380 L 150,350 L 120,370 L 100,330 L 60,340 L 80,285 L 40,280 L 90,230 L 50,220 L 110,175 L 80,160 L 150,130 L 120,120 L 180,85 L 160,80 Z";

  const smoothPath = "M 200,50 Q 260,80 300,130 Q 340,180 350,240 Q 355,300 320,340 Q 280,375 220,380 Q 160,375 120,340 Q 85,300 90,240 Q 100,180 140,130 Q 180,80 200,50 Z";

  // Morph from jagged to smooth shape using explicit from/to values
  animate(morphShape, {
    d: [jaggedPath, smoothPath],
    ease: 'linear',
    autoplay: onScroll({
      target: hero,
      enter: 'top top',
      leave: 'bottom top',
      sync: true,
      debug: true,
    }),
  });

  // Also animate opacity for additional visual effect
  animate(heroShape, {
    opacity: [0.15, 0.4],
    ease: 'linear',
    autoplay: onScroll({
      target: hero,
      enter: 'top top',
      leave: 'bottom top',
      sync: true,
    }),
  });

  console.log('Animations initialized');
}

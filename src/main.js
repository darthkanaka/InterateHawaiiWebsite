/**
 * Iterate Hawaii - Anime.js 4.0
 * Using morphTo with scroll sync
 */

import {
  animate,
  onScroll,
  morphTo,
} from 'animejs';

document.addEventListener('DOMContentLoaded', () => {
  initHeroMorph();
});

function initHeroMorph() {
  const hero = document.getElementById('hero');
  const morphShape = document.getElementById('morphShape');
  const smoothShape = document.getElementById('smoothShape');
  const heroShape = document.querySelector('.hero-shape');

  if (!hero || !morphShape || !smoothShape) {
    console.error('Elements not found:', { hero, morphShape, smoothShape });
    return;
  }

  console.log('Initializing morph animation');
  console.log('Hero element:', hero);
  console.log('Hero height:', hero.offsetHeight);
  console.log('Document height:', document.documentElement.scrollHeight);

  // Morph from jagged to smooth shape, synced to scroll
  animate(morphShape, {
    d: morphTo('#smoothShape'),
    ease: 'linear',
    autoplay: onScroll({
      target: hero,
      enter: 'top top',
      leave: 'bottom top',
      sync: true,
      debug: true,
      onEnter: (self) => console.log('Entered scroll zone', self.progress),
      onLeave: (self) => console.log('Left scroll zone', self.progress),
      onUpdate: (self) => console.log('Scroll progress:', self.progress),
    }),
  });

  // Also animate opacity and scale for additional visual effect
  animate(heroShape, {
    opacity: [0.15, 0.4],
    scale: [1, 1.1],
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

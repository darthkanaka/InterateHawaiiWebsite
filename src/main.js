/**
 * Iterate Hawaii - Anime.js 4.0
 * Using svg.morphTo with scroll sync
 */

import { animate, svg, onScroll } from 'animejs';

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

  // Morph from jagged to smooth shape, synced to scroll
  // Use svg.morphTo() with the actual element, not a selector string
  animate(morphShape, {
    d: svg.morphTo(smoothShape),
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

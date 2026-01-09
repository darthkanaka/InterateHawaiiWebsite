/**
 * Iterate Hawaii - Anime.js 4.0
 * Using morphTo with scroll sync
 */

import {
  createTimeline,
  onScroll,
  morphTo,
} from 'animejs';

document.addEventListener('DOMContentLoaded', () => {
  initHeroMorph();
});

function initHeroMorph() {
  const hero = document.getElementById('hero');
  const morphShape = document.getElementById('morphShape');

  if (!hero || !morphShape) return;

  // The smooth, pleasant shape (end state)
  // Same general structure but with curves instead of jagged edges
  const smoothPath = `
    M 200,50
    Q 230,90 260,120
    Q 300,150 330,190
    Q 355,240 350,290
    Q 340,340 310,360
    Q 270,380 230,375
    Q 200,370 170,375
    Q 130,380 90,360
    Q 60,340 50,290
    Q 45,240 70,190
    Q 100,150 140,120
    Q 170,90 200,50
    Z
  `;

  // Create timeline with scroll sync
  const morphTimeline = createTimeline({
    defaults: {
      ease: 'linear',
    },
    autoplay: onScroll({
      target: hero,
      enter: 'top top',
      leave: 'bottom top',
      sync: true,
    }),
  });

  // Add the morphTo animation
  morphTimeline.add(morphShape, {
    d: morphTo(smoothPath),
    duration: 1000,
  });
}

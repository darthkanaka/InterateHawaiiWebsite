/**
 * Iterate Hawaii - Anime.js 4.0 Complete Demo
 * All features and modules demonstrated
 */

// ============================================
// COMPLETE ANIME.JS 4.0 IMPORTS
// ============================================

// You can import everything from the main module:
import {
  // Core Animation
  animate,
  
  // Timer - custom timing loops
  createTimer,
  
  // Timeline - sequenced animations
  createTimeline,
  
  // Animatable - reactive animated properties
  createAnimatable,
  
  // Draggable - drag with physics
  createDraggable,
  
  // Scope - responsive animations with media queries
  createScope,
  
  // Engine - global animation control
  engine,
  
  // Events - scroll-based animations
  onScroll,
  
  // SVG utilities
  morphTo,
  createDrawable,
  createMotionPath,
  
  // Text utilities
  splitText,
  
  // Easings
  createSpring,
  
  // Utilities
  stagger,
  random,
  randomPick,
  shuffle,
  clamp,
  snap,
  mapRange,
  lerp,
  $,
  get,
  set,
  remove,
  cleanInlineStyles,
} from 'animejs';

// ============================================
// ALTERNATIVELY: Import from subpaths for smaller bundles
// ============================================
// import { animate } from 'animejs/animation';
// import { createTimer } from 'animejs/timer';
// import { createTimeline } from 'animejs/timeline';
// import { createAnimatable } from 'animejs/animatable';
// import { createDraggable } from 'animejs/draggable';
// import { createScope } from 'animejs/scope';
// import { engine } from 'animejs/engine';
// import { onScroll } from 'animejs/events';
// import { morphTo, createDrawable, createMotionPath } from 'animejs/svg';
// import { splitText } from 'animejs/text';
// import { createSpring } from 'animejs/easings';
// import { stagger, random, $, get, set } from 'animejs/utils';

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initLoader();
});

// ============================================
// LOADER with createTimeline
// ============================================

function initLoader() {
  const tl = createTimeline({
    defaults: {
      ease: 'outExpo',
    },
    onComplete: () => {
      document.getElementById('loader').style.display = 'none';
      initAllAnimations();
    }
  });

  tl.add('.loader-logo', {
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 800,
  })
  .add('.loader-progress', {
    width: '100%',
    duration: 1500,
    ease: 'inOutQuart',
  }, '-=400')
  .add('.loader-text', {
    opacity: [0, 1],
    duration: 500,
  }, '-=1200')
  .add('#loader', {
    opacity: 0,
    duration: 600,
  }, '+=300');
}

// ============================================
// MAIN INITIALIZATION
// ============================================

function initAllAnimations() {
  initCarvingAnimation();
  initHeroWithSplitText();
  initScrollAnimations();
  initDraggableCards();
  initSpringCards();
  initSVGDrawable();
  initMorphAnimation();
  initMotionPath();
  initResponsiveScope();
  initScrollProgress();
  initCTAButton();
  initOrbitAnimation();
  initFlowAnimation();
  initDashboardBars();
}

// ============================================
// CARVING ANIMATION - Scroll-synced blade carving
// ============================================

function initCarvingAnimation() {
  const heroSection = document.getElementById('heroSection');
  const bladePath = document.getElementById('bladePath');
  const blade = document.getElementById('blade');
  const networkShape = document.getElementById('networkShapeRough');
  const bladeTrail = document.getElementById('bladeTrail');
  const fragmentsContainer = document.getElementById('fragmentsContainer');
  const scrollHint = document.getElementById('carvingScrollHint');

  if (!bladePath || !blade || !networkShape) return;

  // The smooth version of the shape (morphTo target)
  const smoothPath = `
    M 150,300
    Q 175,250 200,200
    Q 240,140 320,100
    Q 400,70 480,95
    Q 560,120 620,170
    Q 665,230 670,300
    Q 665,380 620,440
    Q 560,490 480,495
    Q 400,500 320,480
    Q 240,455 200,400
    Q 165,350 150,300
    Z
  `;

  // Create motion path for the blade
  const motionPath = createMotionPath(bladePath);

  // Track scroll progress for fragment spawning
  let lastProgress = 0;
  let fragmentSpawnPoints = [];

  // Pre-calculate fragment spawn points along the path
  for (let i = 0; i < 30; i++) {
    fragmentSpawnPoints.push({
      progress: i / 30,
      spawned: false
    });
  }

  // Create the main scroll-synced timeline
  const carvingTimeline = createTimeline({
    defaults: {
      ease: 'linear',
    },
    autoplay: onScroll({
      target: heroSection,
      enter: 'top top',
      leave: 'bottom bottom',
      sync: true,
      onUpdate: (scroll) => {
        const progress = scroll.progress;

        // Spawn fragments at intervals
        fragmentSpawnPoints.forEach(point => {
          if (progress > point.progress && !point.spawned && progress > lastProgress) {
            spawnFragment(blade, fragmentsContainer);
            point.spawned = true;
          } else if (progress < point.progress && point.spawned && progress < lastProgress) {
            point.spawned = false;
          }
        });

        // Hide scroll hint after starting to scroll
        if (scrollHint && progress > 0.05) {
          scrollHint.style.opacity = '0';
        } else if (scrollHint && progress <= 0.05) {
          scrollHint.style.opacity = '0.7';
        }

        lastProgress = progress;
      }
    }),
  });

  // Add blade motion along the path
  carvingTimeline.add(blade, {
    ...motionPath,
    duration: 3000,
  }, 0);

  // Add shape morphing from jagged to smooth
  carvingTimeline.add(networkShape, {
    d: morphTo(smoothPath),
    duration: 3000,
  }, 0);

  // Copy the blade path to the trail element and create drawable
  bladeTrail.setAttribute('d', bladePath.getAttribute('d'));
  const trailDrawable = createDrawable(bladeTrail);

  // Animate the trail to draw along with blade progress
  carvingTimeline.add(trailDrawable, {
    draw: '0 1',
    duration: 3000,
  }, 0);

  // Fade in network connections as carving progresses
  carvingTimeline.add('.network-connections line', {
    opacity: [0.2, 0.6],
    strokeDasharray: ['4 4', '0 0'],
    duration: 3000,
    delay: stagger(80),
  }, 0);

  // Pulse nodes as blade passes
  carvingTimeline.add('.network-nodes .node', {
    scale: [1, 1.3, 1],
    opacity: [0.8, 1, 0.9],
    duration: 500,
    delay: stagger(200),
  }, 0);
}

// Fragment spawning function
function spawnFragment(blade, container) {
  if (!blade || !container) return;

  // Get blade's current position
  const bladeTransform = blade.getAttribute('transform') || '';
  const translateMatch = bladeTransform.match(/translate\(([^,]+),([^)]+)\)/);

  let x = 400, y = 300;
  if (translateMatch) {
    x = parseFloat(translateMatch[1]) || 400;
    y = parseFloat(translateMatch[2]) || 300;
  }

  // Create multiple fragments per spawn
  const fragmentCount = random(2, 5);
  const spring = createSpring({ stiffness: 300, damping: 15 });

  for (let i = 0; i < fragmentCount; i++) {
    const isChip = random(0, 1) > 0.6;
    const fragment = document.createElementNS('http://www.w3.org/2000/svg', isChip ? 'circle' : 'polygon');

    if (isChip) {
      // Small circular chip
      fragment.setAttribute('cx', x);
      fragment.setAttribute('cy', y);
      fragment.setAttribute('r', random(2, 5));
      fragment.classList.add('fragment', 'fragment-chip');
    } else {
      // Angular shard
      const size = random(4, 10);
      const points = `${x},${y - size} ${x + size * 0.6},${y + size * 0.5} ${x - size * 0.6},${y + size * 0.5}`;
      fragment.setAttribute('points', points);
      fragment.classList.add('fragment', 'fragment-shard');
    }

    // Start with gold flash
    fragment.style.fill = '#FFD700';
    fragment.style.filter = 'drop-shadow(0 0 8px #FFD700)';

    container.appendChild(fragment);

    // Animate the fragment bursting outward
    const angle = random(0, Math.PI * 2);
    const distance = random(30, 100);
    const targetX = Math.cos(angle) * distance;
    const targetY = Math.sin(angle) * distance;

    // Create animation timeline for this fragment
    const fragmentTL = createTimeline({
      defaults: { ease: spring },
      onComplete: () => {
        fragment.remove();
      }
    });

    // Flash gold then fade to cyan
    fragmentTL.add(fragment, {
      fill: ['#FFD700', '#00f0ff'],
      filter: ['drop-shadow(0 0 8px #FFD700)', 'drop-shadow(0 0 4px #00f0ff)'],
      duration: 150,
    });

    // Burst outward and fade
    fragmentTL.add(fragment, {
      translateX: targetX,
      translateY: targetY,
      rotate: random(-180, 180),
      scale: [1, 0],
      opacity: [1, 0],
      duration: random(400, 800),
    }, 50);
  }
}

// ============================================
// HERO with splitText()
// ============================================

function initHeroWithSplitText() {
  const heroTitle = document.getElementById('heroTitle');
  if (!heroTitle) return;

  // Use Anime.js splitText utility
  const split = splitText(heroTitle, {
    chars: true,
    words: true,
  });

  // Animate characters from center
  const heroTL = createTimeline({
    defaults: { ease: 'outExpo' }
  });

  heroTL
    .add(split.chars, {
      opacity: [0, 1],
      translateY: [50, 0],
      rotateX: [-90, 0],
      duration: 1000,
      delay: stagger(30, { from: 'center' }),
    })
    .add('.hero-sub', {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
    }, '-=600')
    .add('.hero-ctas', {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
    }, '-=500');
}

// Neural canvas removed - replaced with carving animation

// ============================================
// SCROLL ANIMATIONS with onScroll()
// ============================================

function initScrollAnimations() {
  // AI Features - staggered reveal
  animate('.ai-feature', {
    opacity: [0, 1],
    translateY: [40, 0],
    delay: stagger(150),
    duration: 800,
    ease: 'outExpo',
    autoplay: onScroll({
      target: '.ai-viz',
      enter: 'top 80%',
    }),
  });

  // Process steps with scroll progress
  document.querySelectorAll('.process-step').forEach((step, index) => {
    animate(step, {
      opacity: [0, 1],
      translateX: [-30, 0],
      duration: 800,
      ease: 'outExpo',
      autoplay: onScroll({
        target: step,
        enter: 'top 80%',
        onEnter: () => {
          step.classList.add('active');
          // Animate progress line
          animate('#processLineFill', {
            width: `${((index + 1) / 3) * 100}%`,
            duration: 600,
            ease: 'outExpo',
          });
        },
      }),
    });
  });

  // Service cards
  animate('.service-card', {
    opacity: [0, 1],
    translateY: [50, 0],
    scale: [0.95, 1],
    delay: stagger(100),
    duration: 1000,
    ease: 'outExpo',
    autoplay: onScroll({
      target: '.services',
      enter: 'top 70%',
    }),
  });

  // Why cards with spring
  const spring = createSpring({ stiffness: 200, damping: 20 });
  
  animate('.why-card', {
    opacity: [0, 1],
    scale: [0.8, 1],
    delay: stagger(100, { from: 'center' }),
    duration: 800,
    ease: spring,
    autoplay: onScroll({
      target: '.why-us',
      enter: 'top 70%',
    }),
  });

  // CTA section
  animate('.cta-content > *', {
    opacity: [0, 1],
    translateY: [30, 0],
    delay: stagger(100),
    duration: 800,
    ease: 'outExpo',
    autoplay: onScroll({
      target: '.cta',
      enter: 'top 70%',
    }),
  });
}

// ============================================
// DRAGGABLE CARDS with createDraggable()
// ============================================

function initDraggableCards() {
  document.querySelectorAll('.draggable-card').forEach(card => {
    createDraggable(card, {
      // Spring physics
      releaseStiffness: 400,
      releaseDamping: 25,
      releaseMass: 1,
      
      // Snap back to origin
      x: { snap: 0 },
      y: { snap: 0 },
      
      // Visual feedback
      cursor: { grab: 'grab', grabbing: 'grabbing' },
      
      // Callbacks
      onGrab: () => {
        animate(card, {
          scale: 1.05,
          boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
          duration: 200,
          ease: 'outQuad',
        });
      },
      onRelease: () => {
        animate(card, {
          scale: 1,
          rotateZ: 0,
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
          duration: 600,
          ease: 'outExpo',
        });
      },
    });
  });
}

// ============================================
// SPRING CARDS with createSpring()
// ============================================

function initSpringCards() {
  // Create different spring configs
  const bouncySpring = createSpring({
    stiffness: 400,
    damping: 10,
    mass: 1,
  });

  const smoothSpring = createSpring({
    stiffness: 200,
    damping: 20,
    mass: 1,
  });

  document.querySelectorAll('.spring-card').forEach(card => {
    // Click animation with bouncy spring
    card.addEventListener('click', () => {
      animate(card, {
        scale: [1, 0.85, 1.15, 0.95, 1.05, 1],
        rotate: [0, -5, 5, -2, 2, 0],
        duration: 800,
        ease: bouncySpring,
      });
    });

    // Hover with smooth spring
    card.addEventListener('mouseenter', () => {
      animate(card, {
        scale: 1.05,
        translateY: -8,
        duration: 400,
        ease: smoothSpring,
      });
    });

    card.addEventListener('mouseleave', () => {
      animate(card, {
        scale: 1,
        translateY: 0,
        duration: 400,
        ease: smoothSpring,
      });
    });
  });
}

// ============================================
// SVG DRAWABLE with createDrawable()
// ============================================

function initSVGDrawable() {
  const evolutionPath = document.getElementById('evolutionPath');
  if (!evolutionPath) return;

  // Create drawable from SVG path
  const drawable = createDrawable(evolutionPath);

  // Draw on scroll
  animate(drawable, {
    draw: '0 1',
    duration: 2000,
    ease: 'inOutQuad',
    autoplay: onScroll({
      target: '#motionSection',
      enter: 'top 70%',
    }),
  });
}

// ============================================
// SVG MORPHING with morphTo()
// ============================================

function initMorphAnimation() {
  const morphPath = document.getElementById('morphPath');
  if (!morphPath) return;

  // Define the organized shape
  const clarityPath = "M50,100 L100,100 L150,60 L200,100 L250,80 L300,100 L350,100";

  // Morph synced to scroll
  animate(morphPath, {
    d: morphTo(clarityPath),
    duration: 1000,
    ease: 'inOutExpo',
    autoplay: onScroll({
      target: '#morphSection',
      enter: 'top 60%',
      leave: 'bottom 40%',
      sync: true,
    }),
  });
}

// ============================================
// MOTION PATH with createMotionPath()
// ============================================

function initMotionPath() {
  const path = document.getElementById('evolutionPath');
  const follower = document.getElementById('pathFollower');
  
  if (!path || !follower) return;

  // Create motion path - returns x, y, angle properties
  const motionPath = createMotionPath(path);

  // Animate element along path
  animate(follower, {
    ...motionPath,
    duration: 8000,
    loop: true,
    ease: 'linear',
    autoplay: onScroll({
      target: '#motionSection',
      enter: 'top 60%',
    }),
  });
}

// ============================================
// RESPONSIVE SCOPE with createScope()
// ============================================

function initResponsiveScope() {
  createScope({
    mediaQueries: {
      mobile: '(max-width: 599px)',
      tablet: '(min-width: 600px) and (max-width: 899px)',
      desktop: '(min-width: 900px)',
    },
  }).add(({ matches }) => {
    // Adjust animations based on viewport
    if (matches.mobile) {
      // Simpler animations for mobile
      engine.speed = 1.2; // Slightly faster on mobile
    } else {
      engine.speed = 1;
    }
  });
}

// ============================================
// SCROLL PROGRESS BAR
// ============================================

function initScrollProgress() {
  const progressBar = document.getElementById('scrollProgress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = clamp(scrollTop / docHeight, 0, 1) * 100;
    progressBar.style.width = `${progress}%`;
  }, { passive: true });
}

// ============================================
// CTA BUTTON with particle explosion
// ============================================

function initCTAButton() {
  const btn = document.getElementById('ctaBtn');
  if (!btn) return;

  const spring = createSpring({ stiffness: 500, damping: 15 });

  btn.addEventListener('click', () => {
    // Button animation
    animate(btn, {
      scale: [1, 0.92, 1.08, 1],
      duration: 500,
      ease: spring,
    });

    // Create particles
    createParticleExplosion(btn);
  });
}

function createParticleExplosion(element) {
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const colors = ['#00f0ff', '#7b61ff', '#00e096', '#ffffff'];
  const particleCount = 25;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: fixed;
      left: ${centerX}px;
      top: ${centerY}px;
      width: ${random(4, 10)}px;
      height: ${random(4, 10)}px;
      border-radius: 50%;
      background: ${randomPick(colors)};
      pointer-events: none;
      z-index: 10000;
    `;
    document.body.appendChild(particle);

    // Animate with random values
    animate(particle, {
      translateX: random(-200, 200),
      translateY: random(-200, 200),
      scale: [1, 0],
      opacity: [1, 0],
      rotate: random(-360, 360),
      duration: random(600, 1200),
      ease: 'outExpo',
      onComplete: () => particle.remove(),
    });
  }
}

// ============================================
// ORBIT ANIMATION (AI Agents visual)
// ============================================

function initOrbitAnimation() {
  // Rotating orbit dots
  ['#orbitDot1', '#orbitDot2', '#orbitDot3'].forEach((selector, i) => {
    const el = document.querySelector(selector);
    if (!el) return;
    
    animate(el, {
      rotate: i % 2 === 0 ? 360 : -360,
      duration: 4000 + (i * 1000),
      loop: true,
      ease: 'linear',
      transformOrigin: '100px 100px',
    });
  });

  // Pulse the core
  animate('.agent-core', {
    scale: [1, 1.15, 1],
    opacity: [1, 0.7, 1],
    duration: 2000,
    loop: true,
    ease: 'inOutSine',
  });
}

// ============================================
// FLOW ANIMATION (Automations visual)
// ============================================

function initFlowAnimation() {
  const particle = document.getElementById('flowParticle');
  if (particle) {
    animate(particle, {
      translateX: [0, 160],
      duration: 1500,
      loop: true,
      ease: 'inOutQuad',
    });
  }

  animate('.flow-node', {
    scale: [1, 1.1, 1],
    duration: 1200,
    delay: stagger(300),
    loop: true,
    ease: 'inOutSine',
  });
}

// ============================================
// DASHBOARD BARS
// ============================================

function initDashboardBars() {
  const container = document.getElementById('dashBars');
  if (!container) return;

  // Create bars with random heights
  const barCount = 7;
  for (let i = 0; i < barCount; i++) {
    const bar = document.createElement('div');
    bar.className = 'dash-bar';
    bar.style.height = `${random(30, 100)}%`;
    container.appendChild(bar);
  }

  // Animate with stagger from center
  animate('.dash-bar', {
    scaleY: [0.2, 1],
    duration: 800,
    delay: stagger(100, { from: 'center' }),
    loop: true,
    alternate: true,
    ease: 'inOutQuad',
  });
}

// ============================================
// ENGINE CONTROL - pause when tab hidden
// ============================================

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    engine.pause();
  } else {
    engine.resume();
  }
});

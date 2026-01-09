# Anime.js v4 Complete Documentation

> **Version:** 4.x (V4)  
> **Type:** JavaScript Animation Library  
> **Bundle Size:** ~10KB (JS) / ~3KB (WAAPI)  
> **License:** MIT

A comprehensive reference guide for Anime.js - the lightweight JavaScript animation library.

---

## Document Structure Guide

This document is organized for easy navigation:

1. **Quick Start** — Essential patterns and imports (this section)
2. **Getting Started** — Installation and setup (sections 1)
3. **Core APIs** — Timer, Animation, Timeline (sections 2-4)
4. **Advanced Features** — Animatable, Draggable, Scope, Events (sections 5-8)
5. **Utilities** — SVG, Text, Utils, Easings (sections 9-12)
6. **Alternatives** — WAAPI lightweight option (section 13)
7. **Global Control** — Engine settings (section 14)
8. **Reference** — Patterns and cheatsheets (section 15)

**Notation:**
- `(V4)` — New in version 4
- `(JS)` — JavaScript animate() only (not WAAPI)
- `(WAAPI)` — WAAPI animate() only

---

## Quick Start for AI Assistants

### Primary Import Pattern
```js
import { animate, createTimeline, createTimer, stagger, utils } from 'animejs';
```

### Most Common Usage Patterns

**1. Basic Animation:**
```js
animate('.element', {
  x: 100,
  opacity: [0, 1],
  duration: 1000,
  ease: 'outQuad'
});
```

**2. Timeline with Staggered Elements:**
```js
createTimeline()
  .add('.items', {
    y: [50, 0],
    opacity: [0, 1],
    delay: stagger(100)
  });
```

**3. Scroll-Triggered Animation:**
```js
import { animate, onScroll } from 'animejs';

animate('.element', {
  x: 100,
  autoplay: onScroll({ sync: true })
});
```

**4. Spring Physics:**
```js
import { animate, spring } from 'animejs';

animate('.element', {
  scale: 1.2,
  ease: spring({ stiffness: 100, damping: 10 })
});
```

### Key Concepts
- **Targets:** CSS selectors, DOM elements, JS objects, or arrays
- **Properties:** CSS properties, transforms, attributes, or object properties
- **Values:** Numbers, strings with units, arrays (from/to), or functions
- **Easing:** Built-in (`'outQuad'`), spring physics, or custom functions
- **Stagger:** Sequential delays/values across multiple targets

---

## Table of Contents

1. **Getting started**
   - [Installation](#installation)
   - [Module Imports (V4)](#module-imports-v4)
   - [Using with Vanilla JS](#using-with-vanilla-js)
   - [Using with React](#using-with-react)

2. **[Timer](#timer-v4)**
   - [Playback Settings](#timer-playback-settings)
     - delay, duration, loop, loopDelay, alternate, reversed, autoplay, frameRate, playbackRate
   - [Callbacks](#timer-callbacks)
     - onBegin, onComplete, onUpdate, onLoop, onPause, then()
   - [Methods](#timer-methods)
     - play(), reverse(), pause(), restart(), alternate(), resume(), complete(), reset(), cancel(), revert(), seek(), stretch()
   - [Properties](#timer-properties)

3. **[Animation](#animation)**
   - [Targets](#targets)
     - CSS Selector, DOM Elements, JavaScript Objects (JS), Array of targets
   - [Animatable Properties](#animatable-properties)
     - CSS Properties, CSS Transforms, CSS Variables (JS), JS Object Properties (JS), HTML Attributes (JS), SVG Attributes (JS)
   - [Tween Value Types](#tween-value-types)
     - Numerical, Unit Conversion, Relative (JS), Color, Color Function (WAAPI), CSS Variable, Function Based
   - [Tween Parameters](#tween-parameters)
     - to, from, delay, duration, ease, composition (JS), modifier (JS)
   - [Keyframes](#keyframes)
     - Tween values, Tween parameters, Duration based, Percentage based
   - [Playback Settings](#animation-playback-settings)
     - delay, duration, loop, loopDelay, alternate, reversed, autoplay, frameRate, playbackRate, playbackEase, persist
   - [Callbacks](#animation-callbacks)
     - onBegin, onComplete, onBeforeUpdate, onUpdate, onRender, onLoop, onPause, then()
   - [Methods](#animation-methods)
     - play(), reverse(), pause(), restart(), alternate(), resume(), complete(), cancel(), revert(), reset(), seek(), stretch(), refresh()
   - [Properties](#animation-properties)

4. **[Timeline](#timeline)**
   - [Add Timers](#add-timers-v4)
   - [Add Animations](#add-animations)
   - [Sync WAAPI Animations](#sync-waapi-animations-v4)
   - [Sync Timelines](#sync-timelines-v4)
   - [Call Functions](#call-functions-v4)
   - [Time Position](#time-position)
   - [Playback Settings](#timeline-playback-settings)
     - defaults, delay, loop, loopDelay, alternate, reversed, autoplay, frameRate, playbackRate, playbackEase
   - [Callbacks](#timeline-callbacks)
     - onBegin, onComplete, onBeforeUpdate, onUpdate, onRender, onLoop, onPause, then()
   - [Methods](#timeline-methods)
     - add(), set(), sync(), label(), remove(), call(), init(), play(), reset(), reverse(), pause(), restart(), alternate(), resume(), complete(), cancel(), revert(), seek(), stretch(), refresh()
   - [Properties](#timeline-properties)

5. **[Animatable](#animatable-v4)**
   - [Settings](#animatable-settings)
     - unit, duration, ease, modifier
   - [Methods](#animatable-methods)
     - Getters, Setters, revert()
   - [Properties](#animatable-properties)

6. **[Draggable](#draggable-v4)**
   - [Axes Parameters](#draggable-axes-parameters)
     - x, y, snap, modifier, mapTo
   - [Settings](#draggable-settings)
     - trigger, container, containerPadding, containerFriction, releaseContainerFriction, releaseMass, releaseStiffness, releaseDamping, velocityMultiplier, minVelocity, maxVelocity, releaseEase, dragSpeed, dragThreshold, scrollThreshold, scrollSpeed, cursor
   - [Callbacks](#draggable-callbacks)
     - onGrab, onDrag, onUpdate, onRelease, onSnap, onSettle, onResize, onAfterResize
   - [Methods](#draggable-methods)
     - disable(), enable(), setX(), setY(), animateInView(), scrollInView(), stop(), reset(), revert(), refresh()
   - [Properties](#draggable-properties)

7. **[Scope](#scope-v4)**
   - [Add Constructor Function](#add-constructor-function)
   - [Register Method Function](#register-method-function)
   - [Parameters](#scope-parameters)
     - root, defaults, mediaQueries
   - [Methods](#scope-methods)
     - add(), addOnce(), keepTime(), revert(), refresh()
   - [Properties](#scope-properties)

8. **[Events](#events-v4)**
   - [onScroll](#onscroll-v4)
     - [Settings](#scrollobserver-settings): container, target, debug, axis, repeat
     - [Thresholds](#scrollobserver-thresholds): Numeric values, Positions shorthands, Relative position values, Min max
     - [Synchronisation modes](#scrollobserver-synchronisation-modes): Method names, Playback progress, Smooth scroll, Eased scroll
     - [Callbacks](#scrollobserver-callbacks): onEnter, onEnterForward, onEnterBackward, onLeave, onLeaveForward, onLeaveBackward, onUpdate, onSyncComplete
     - [Methods](#scrollobserver-methods): link(), refresh(), revert()
     - [Properties](#scrollobserver-properties)

9. **[SVG](#svg)**
   - [morphTo()](#morphto)
   - [createDrawable()](#createdrawable)
   - [createMotionPath()](#createmotionpath)

10. **[Text](#text-v4)**
    - [splitText()](#splittext)
    - [TextSplitter Settings](#textsplitter-settings): lines, words, chars, debug, includeSpaces, accessible
    - [Split Parameters](#split-parameters): class, wrap, clone
    - [HTML Template](#html-template)
    - [Methods](#textsplitter-methods): addEffect(), revert(), refresh()
    - [Properties](#textsplitter-properties)

11. **[Utilities](#utilities)**
    - [stagger()](#stagger): Time, Values, Timeline positions staggering; Value types; Parameters (start, from, reversed, ease, grid, axis, modifier, use, total)
    - [$()](#-v4), [get()](#get), [set()](#set), [cleanInlineStyles()](#cleaninlinestyles-v4), [remove()](#remove), [sync()](#sync-v4), [keepTime()](#keeptime-v4)
    - [random()](#random), [createSeededRandom()](#createseededrandom), [randomPick()](#randompick-v4), [shuffle()](#shuffle-v4)
    - [round()](#round), [clamp()](#clamp-v4), [snap()](#snap-v4), [wrap()](#wrap-v4), [mapRange()](#maprange-v4), [lerp()](#lerp-v4), [damp()](#damp-v4)
    - [roundPad()](#roundpad-v4), [padStart()](#padstart-v4), [padEnd()](#padend-v4), [degToRad()](#degtorad-v4), [radToDeg()](#radtodeg-v4)
    - [Chain-able utilities](#chain-able-utility-functions-v4)

12. **[Easings](#easings)**
    - [Built-in Eases](#built-in-eases)
    - [Cubic Bézier](#cubic-bézier-easing)
    - [Linear](#linear-easing-v4)
    - [Steps](#steps-easing)
    - [Irregular](#irregular-easing-v4)
    - [Spring](#spring)

13. **[Web Animation API](#web-animation-api-v4)**
    - [When to Use WAAPI](#when-to-use-waapi)
    - [Hardware-Accelerated Animations](#hardware-accelerated-animations)
    - [Improvements to WAAPI](#improvements-to-the-web-animation-api): Sensible defaults, Multi-targets, Default units, Function based values, Individual CSS transforms, Individual property params, Spring and custom easings
    - [API Differences](#api-differences-with-native-waapi): iterations, direction, easing, finished
    - [convertEase()](#waapiconvertease)

14. **[Engine](#engine-v4)**
    - [Parameters](#engine-parameters): timeUnit, speed, fps, precision, pauseOnDocumentHidden
    - [Methods](#engine-methods): update(), pause(), resume()
    - [Properties](#engine-properties)
    - [Defaults](#engine-defaults)

15. **[Appendix](#appendix)**
    - [Common Animation Patterns](#common-animation-patterns)
    - [Import Cheatsheet](#import-cheatsheet)
    - [Quick Reference](#quick-reference)

---

## Installation

### From NPM

Anime.js can be installed via the `animejs` package.

```bash
npm install animejs
```

Then you can import the Anime.js methods directly into your JavaScript with a bundler like **Vite** or **esbuild**.

#### ES Modules

```js
import { animate } from 'animejs';
```

#### CommonJS

```js
const { animate } = require('animejs');
```

---

### From a CDN

#### ES Modules

| CDN Name  | URL                                    |
|-----------|----------------------------------------|
| esm.sh    | `esm.sh/animejs`                       |
| JsDelivr  | `cdn.jsdelivr.net/npm/animejs/+esm`    |

```js
import { animate } from 'https://esm.sh/animejs';
```

#### UMD Global Object

| CDN Name  | URL                                                              |
|-----------|------------------------------------------------------------------|
| JsDelivr  | `cdn.jsdelivr.net/npm/animejs/dist/bundles/anime.umd.min.js`     |

```html
<script src="https://cdn.jsdelivr.net/npm/animejs/dist/bundles/anime.umd.min.js"></script>
<script>
  const { animate } = anime;
</script>
```

---

### Direct Download

Download the library directly from the [GitHub repository](https://github.com/juliangarnier/anime).

#### Available Files

| File Name                           | Type                                    |
|-------------------------------------|-----------------------------------------|
| `dist/modules/index.js`             | ES modules entry point                  |
| `dist/modules/index.cjs`            | CommonJS modules entry point            |
| `dist/bundles/anime.esm.js`         | Bundled ES modules                      |
| `dist/bundles/anime.esm.min.js`     | Bundled and minified ES modules         |
| `dist/bundles/anime.umd.js`         | Bundled UMD (universal modules definition) |
| `dist/bundles/anime.umd.min.js`     | Bundled and minified UMD                |

#### ES Modules

```js
import { animate } from './animejs/dist/bundles/anime.esm.min.js';
```

#### UMD Global Object

```html
<script src="animejs/dist/bundles/anime.umd.min.js"></script>
<script>
  const { animate } = anime;
</script>
```

---

## Module Imports (V4)

Anime.js has a very flexible modules-first API and excellent tree shaking support, making it one of the most lightweight JavaScript animation libraries.

Anime.js modules can be imported straight from the main `'animejs'` module, or more granularly from specific **subpaths**, either by using a bundler like **Vite** or **esbuild**, or natively without a build step using **importmap**.

---

### Importing from the Main Module

Every Anime.js module can be directly imported from the main module `'animejs'`:

```js
import { animate, splitText, stagger, random } from 'animejs';

const split = splitText('p');

animate(split.words, {
  opacity: () => random(0, 1, 2),
  delay: stagger(50),
});
```

---

### Importing from Subpaths

When not using a bundler, or when tree shaking cannot be activated in a project, the entire library needs to be imported even when only using one module. To solve this, Anime.js allows importing specific functionality from a subpath, without having to load the entire library at any point during development. Each function can be imported directly from its subpath:

```js
import { animate } from 'animejs/animation';
import { splitText } from 'animejs/text';
import { stagger, random } from 'animejs/utils';

const split = splitText('p');

animate(split.words, {
  opacity: () => random(0, 1, 2),
  delay: stagger(50),
});
```

This approach ensures that only the code required for the specified functionality is loaded.

---

### List of Available Subpaths

```js
import { animate } from 'animejs/animation';
import { createTimer } from 'animejs/timer';
import { createTimeline } from 'animejs/timeline';
import { createAnimatable } from 'animejs/animatable';
import { createDraggable } from 'animejs/draggable';
import { createScope } from 'animejs/scope';
import { engine } from 'animejs/engine';
import * as events from 'animejs/events';
import * as easings from 'animejs/easings';
import * as utils from 'animejs/utils';
import * as svg from 'animejs/svg';
import * as text from 'animejs/text';
import * as waapi from 'animejs/waapi';
```

| Subpath               | Primary Export(s)        |
|-----------------------|--------------------------|
| `animejs/animation`   | `animate`                |
| `animejs/timer`       | `createTimer`            |
| `animejs/timeline`    | `createTimeline`         |
| `animejs/animatable`  | `createAnimatable`       |
| `animejs/draggable`   | `createDraggable`        |
| `animejs/scope`       | `createScope`            |
| `animejs/engine`      | `engine`                 |
| `animejs/events`      | *(multiple exports)*     |
| `animejs/easings`     | *(multiple exports)*     |
| `animejs/utils`       | *(multiple exports)*     |
| `animejs/svg`         | *(multiple exports)*     |
| `animejs/text`        | *(multiple exports)*     |
| `animejs/waapi`       | *(multiple exports)*     |

---

### Importing ES Modules Without a Bundler

With `importmap`, the main module and any of the subpath modules can be imported just like with a bundler, but without a build step:

```html
<script type="importmap">
{
  "imports": {
    "animejs": "/node_modules/animejs/dist/modules/index.js",
    "animejs/animation": "/node_modules/animejs/dist/modules/animation/index.js",
    "animejs/timer": "/node_modules/animejs/dist/modules/timer/index.js",
    "animejs/timeline": "/node_modules/animejs/dist/modules/timeline/index.js",
    "animejs/animatable": "/node_modules/animejs/dist/modules/animatable/index.js",
    "animejs/draggable": "/node_modules/animejs/dist/modules/draggable/index.js",
    "animejs/scope": "/node_modules/animejs/dist/modules/scope/index.js",
    "animejs/engine": "/node_modules/animejs/dist/modules/engine/index.js",
    "animejs/events": "/node_modules/animejs/dist/modules/events/index.js",
    "animejs/easings": "/node_modules/animejs/dist/modules/easings/index.js",
    "animejs/utils": "/node_modules/animejs/dist/modules/utils/index.js",
    "animejs/svg": "/node_modules/animejs/dist/modules/svg/index.js",
    "animejs/text": "/node_modules/animejs/dist/modules/text/index.js",
    "animejs/waapi": "/node_modules/animejs/dist/modules/waapi/index.js"
  }
}
</script>

<script type="module">
  import { animate } from 'animejs/animation';
  import { splitText } from 'animejs/text';
  import { stagger, random } from 'animejs/utils';

  const split = splitText('p');

  animate(split.words, {
    opacity: () => random(0, 1, 2),
    delay: stagger(50),
  });
</script>
```

---

## Using with Vanilla JS

Using Anime.js in vanilla JavaScript is pretty straightforward—simply import the modules you need and start animating.

### Example: Vanilla JS Integration

```js
import { animate, utils, createDraggable, spring } from 'animejs';

const [ $logo ] = utils.$('.logo.js');
const [ $button ] = utils.$('button');
let rotations = 0;

// Create a bounce animation loop
animate('.logo.js', {
  scale: [
    { to: 1.25, ease: 'inOut(3)', duration: 200 },
    { to: 1, ease: spring({ bounce: .7 }) }
  ],
  loop: true,
  loopDelay: 250,
});

// Make the logo draggable around its center
createDraggable('.logo.js', {
  container: [0, 0, 0, 0],
  releaseEase: spring({ bounce: .7 })
});

// Animate logo rotation on click
const rotateLogo = () => {
  rotations++;
  $button.innerText = `rotations: ${rotations}`;
  animate($logo, {
    rotate: rotations * 360,
    ease: 'out(4)',
    duration: 1500,
  });
}

$button.addEventListener('click', rotateLogo);
```

**Key concepts demonstrated:**

- **`utils.$`** — A utility selector that returns an array of matched elements
- **`animate`** — Core animation function with keyframe-style `scale` property
- **`createDraggable`** — Makes elements draggable with physics-based release
- **`spring`** — Spring-based easing for natural bounce effects
- **`loop` / `loopDelay`** — Animation looping with delay between iterations

---

## Using with React

Anime.js can be used with React by combining React's `useEffect()` and Anime.js `createScope()` methods.

### Example: React Integration

```jsx
import { animate, createScope, spring, createDraggable } from 'animejs';
import { useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const root = useRef(null);
  const scope = useRef(null);
  const [ rotations, setRotations ] = useState(0);

  useEffect(() => {
  
    scope.current = createScope({ root }).add( self => {
    
      // Every anime.js instance declared here is now scoped to <div ref={root}>

      // Create a bounce animation loop
      animate('.logo', {
        scale: [
          { to: 1.25, ease: 'inOut(3)', duration: 200 },
          { to: 1, ease: spring({ bounce: .7 }) }
        ],
        loop: true,
        loopDelay: 250,
      });
      
      // Make the logo draggable around its center
      createDraggable('.logo', {
        container: [0, 0, 0, 0],
        releaseEase: spring({ bounce: .7 })
      });

      // Register function methods to be used outside the useEffect
      self.add('rotateLogo', (i) => {
        animate('.logo', {
          rotate: i * 360,
          ease: 'out(4)',
          duration: 1500,
        });
      });

    });

    // Properly cleanup all anime.js instances declared inside the scope
    return () => scope.current.revert();

  }, []);

  const handleClick = () => {
    setRotations(prev => {
      const newRotations = prev + 1;
      // Animate logo rotation on click using the method declared inside the scope
      scope.current.methods.rotateLogo(newRotations);
      return newRotations;
    });
  };

  return (
    <div ref={root}>
      <div className="large centered row">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <div className="medium row">
        <fieldset className="controls">
          <button onClick={handleClick}>rotations: {rotations}</button>
        </fieldset>
      </div>
    </div>
  );
}

export default App;
```

**Key concepts demonstrated:**

- **`createScope({ root })`** — Creates an animation scope bound to a React ref, ensuring all animations are scoped to that DOM subtree
- **`scope.add(self => { ... })`** — Registers animations and methods within the scope
- **`self.add('methodName', fn)`** — Registers reusable methods accessible via `scope.current.methods.methodName()`
- **`scope.revert()`** — Cleanup function to properly dispose of all animations when the component unmounts (critical for React's Strict Mode)
- **Ref-based targeting** — Use `useRef` for the root container, then target elements with CSS selectors within the scope

**React-specific considerations:**

1. Always call `scope.current.revert()` in the `useEffect` cleanup to prevent memory leaks
2. Use `scope.current.methods` to trigger animations from event handlers outside `useEffect`
3. The scope ensures animations only target elements within the ref's DOM subtree

---

## Timer (V4)

Schedules and controls timed callbacks that can be used as an alternative to `setTimeout()` or `setInterval()`, keeping animations and callbacks synchronized.

### Creating a Timer

Timers are created using the `createTimer()` method imported from the main `'animejs'` module:

```js
import { createTimer } from 'animejs';

const timer = createTimer(parameters);
```

Or imported as a standalone module from the `'animejs/timer'` subpath:

```js
import { createTimer } from 'animejs/timer';
```

### Parameters

| Name         | Accepts                                              |
|--------------|------------------------------------------------------|
| `parameters` | *(optional)* An `Object` of Timer playback settings and Timer callbacks |

### Returns

`Timer`

### Example: Basic Timer

```js
import { createTimer } from 'animejs';

const [ $time, $count ] = utils.$('.value');

createTimer({
  duration: 1000,
  loop: true,
  frameRate: 30,
  onUpdate: self => $time.innerHTML = self.currentTime,
  onLoop: self => $count.innerHTML = self._currentIteration
});
```

**Key properties demonstrated:**

- **`duration`** — Length of timer in milliseconds
- **`loop`** — Whether the timer repeats (`true` for infinite, or a number for specific count)
- **`frameRate`** — Limits callback frequency (useful for performance)
- **`onUpdate`** — Callback fired on each frame, receives timer instance as `self`
- **`onLoop`** — Callback fired when timer completes a loop iteration
- **`self.currentTime`** — Current elapsed time in milliseconds
- **`self._currentIteration`** — Current loop iteration count

---

### Timer Playback Settings

Specify the timings and behaviours of a timer. Playback settings properties are defined directly in the `createTimer()` parameters `Object`.

```
createTimer({
┌───────────────────┐
│ duration: 1000,   │
│ frameRate: true,  ├─ Playback Settings
│ loop: true,       │
└───────────────────┘
  onBegin: () => {},
  onLoop: () => {},
  onUpdate: () => {},
});
```

---

#### delay

Defines the time in milliseconds before the timer starts.

| Property  | Value                                  |
|-----------|----------------------------------------|
| Accepts   | A `Number` equal to or greater than `0` |
| Default   | `0`                                    |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.delay = 500;
```

**Example:**

```js
import { createTimer, utils } from 'animejs';

const [ $time ] = utils.$('.time');

createTimer({
  delay: 2000,
  onUpdate: self => $time.innerHTML = self.currentTime
});
```

---

#### duration

Defines the duration in milliseconds of the timer. Setting `0` to a duration completes the timer instantly upon play.

| Property  | Value                                  |
|-----------|----------------------------------------|
| Accepts   | A `Number` equal to or greater than `0` |
| Default   | `Infinity`                             |

> **Note:** Duration values higher than `1e12` are clamped internally to `1e12` (approximately 32 years).

**Example:**

```js
import { createTimer, utils } from 'animejs';

const [ $time ] = utils.$('.time');

createTimer({
  duration: 2000,
  onUpdate: self => $time.innerHTML = self.currentTime
});
```

---

#### loop

Defines how many times a timer repeats.

| Property  | Value                                  |
|-----------|----------------------------------------|
| Accepts   | `Number`, `Infinity`, `true`, `-1`     |
| Default   | `0`                                    |

| Value      | Effect                                 |
|------------|----------------------------------------|
| `Number`   | The number of loops in the range `[0, Infinity]` |
| `Infinity` | Loop indefinitely                      |
| `true`     | Equivalent to `Infinity`               |
| `-1`       | Equivalent to `Infinity`               |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.loop = true;
```

**Example:**

```js
import { createTimer, utils } from 'animejs';

const [ $loops ] = utils.$('.loops');
const [ $time ] = utils.$('.time');

let loops = 0;

createTimer({
  loop: true,
  duration: 1000,
  onLoop: () => $loops.innerHTML = ++loops,
  onUpdate: self => $time.innerHTML = self.iterationCurrentTime
});
```

---

#### loopDelay

Defines the delay in milliseconds between loops.

| Property  | Value                                  |
|-----------|----------------------------------------|
| Accepts   | A `Number` equal to or greater than `0` |
| Default   | `0`                                    |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.loopDelay = 500;
```

**Example:**

```js
import { createTimer, utils } from 'animejs';

const [ $loops ] = utils.$('.loops');
const [ $time ] = utils.$('.time');

let loops = 0;

createTimer({
  loop: true,
  loopDelay: 750,
  duration: 250,
  onLoop: () => $loops.innerHTML = ++loops,
  onUpdate: self => $time.innerHTML = utils.clamp(self.iterationCurrentTime, 0, 250)
});
```

---

#### alternate

Defines if the direction of the timer alternates on each iteration when `loop` is set to `true` or greater than `1`.

| Property  | Value      |
|-----------|------------|
| Accepts   | `Boolean`  |
| Default   | `false`    |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.alternate = true;
```

**Example:**

```js
import { createTimer, utils } from 'animejs';

const [ $loops ] = utils.$('.loops');
const [ $time ] = utils.$('.time');

let loops = 0;

createTimer({
  loop: true,
  duration: 1000,
  alternate: true,
  onLoop: () => $loops.innerHTML = ++loops,
  onUpdate: self => $time.innerHTML = self.iterationCurrentTime
});
```

---

#### reversed

Sets the initial direction of the timer.

> **Note:** The timer's `currentTime` always progresses from `0` to `duration`. Only the `iterationTime` property is actually reversed.

| Property  | Value      |
|-----------|------------|
| Accepts   | `Boolean`  |
| Default   | `false`    |

| Value   | Effect                                      |
|---------|---------------------------------------------|
| `true`  | The timer's first iteration runs in reverse |
| `false` | The timer's first iteration runs normally   |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.reversed = true;
```

**Example:**

```js
import { createTimer, utils } from 'animejs';

const [ $iterationTime ] = utils.$('.iteration-time');
const [ $currentTime ] = utils.$('.current-time');

createTimer({
  duration: 10000,
  reversed: true,
  onUpdate: self => {
    $iterationTime.innerHTML = self.iterationCurrentTime;
    $currentTime.innerHTML = self.currentTime;
  }
});
```

---

#### autoplay

Defines the play mode of a timer.

> **Note:** The `autoplay` parameter has no effect when the timer is added to a timeline, and will be overridden to `false`.

| Property  | Value                            |
|-----------|----------------------------------|
| Accepts   | `Boolean` \| `onScroll()`        |
| Default   | `true`                           |

| Value         | Effect                                                      |
|---------------|-------------------------------------------------------------|
| `true`        | The timer plays automatically                               |
| `false`       | The timer has to be manually played                         |
| `onScroll()`  | The timer starts when scroll threshold conditions are met   |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.autoplay = false;
```

**Example:**

```js
import { createTimer, utils } from 'animejs';

const [ $time ] = utils.$('.time');
const [ $playButton ] = utils.$('.play');

const timer = createTimer({
  autoplay: false,
  onUpdate: self => $time.innerHTML = self.currentTime
});

const playTimer = () => timer.play();

$playButton.addEventListener('click', playTimer);
```

---

#### frameRate

Determines the frames per second (fps) at which a timer runs. This value can be modified later with `timer.fps = 30`.

| Property  | Value                        |
|-----------|------------------------------|
| Accepts   | A `Number` greater than `0`  |
| Default   | `120`                        |

> **Note:** The frame rate is capped to the monitor refresh rate or in some cases by the browser itself.

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.frameRate = 30;
```

**Example:**

```js
import { createTimer, utils } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $fps ] = utils.$('.fps');
const [ $time ] = utils.$('.time');

const timer = createTimer({
  frameRate: 60,
  onUpdate: self => $time.innerHTML = self.currentTime,
});

const updateFps = () => {
  const { value } = $range;
  $fps.innerHTML = value;
  timer.fps = value;
}

$range.addEventListener('input', updateFps);
```

---

#### playbackRate

Defines a speed multiplier to speed up or slow down timer playback (`1.0` is normal speed). This value can be modified later with `timer.speed = .5`.

| Property  | Value                                    |
|-----------|------------------------------------------|
| Accepts   | A `Number` greater than or equal to `0`  |
| Default   | `1`                                      |

> **Note:** If set to `0` the timer won't play.

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.playbackRate = .75;
```

**Example:**

```js
import { createTimer, utils } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $speed ] = utils.$('.speed');
const [ $time ] = utils.$('.time');

const timer = createTimer({
  playbackRate: 2,
  onUpdate: self => $time.innerHTML = utils.round(self.currentTime, 0),
});

const updateSpeed = () => {
  const speed = utils.roundPad(+$range.value, 1);
  $speed.innerHTML = speed;
  utils.sync(() => timer.speed = speed);
}

$range.addEventListener('input', updateSpeed);
```

---

### Timer Callbacks

Execute functions at specific points during a timer playback. Callback `Function`s are specified directly in the `createTimer()` parameters `Object`.

```
createTimer({
  duration: 1000,
  frameRate: true,
  loop: true,
┌─────────────────────┐
│ onBegin: () => {},  │
│ onLoop: () => {},   ├─ Callbacks
│ onUpdate: () => {}, │
└─────────────────────┘
});
```

**Available callbacks:**
- `onBegin`
- `onComplete`
- `onUpdate`
- `onLoop`
- `onPause`
- `then()`

---

#### onBegin

Executes a function when a timer starts.

| Property  | Value                                              |
|-----------|----------------------------------------------------|
| Accepts   | A `Function` whose first argument is the timer itself |
| Default   | `noop`                                             |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.onBegin = self => console.log(self.id);
```

**Example:**

```js
import { createTimer, utils } from 'animejs';

const [ $status ] = utils.$('.status');
const [ $time ] = utils.$('.time');

const timer = createTimer({
  delay: 2000,
  duration: 2000,
  onBegin: self => $status.innerHTML = 'true'
});

const logTimer = createTimer({
  duration: 4000,
  onUpdate: self => $time.innerHTML = timer.currentTime
});
```

---

#### onComplete

Executes a function when all the iterations (`loop`) of a timer have finished playing.

| Property  | Value                                              |
|-----------|----------------------------------------------------|
| Accepts   | A `Function` whose first argument is the timer itself |
| Default   | `noop`                                             |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.onComplete = self => console.log(self.id);
```

**Example:**

```js
import { createTimer, utils } from 'animejs';

const [ $status ] = utils.$('.status');
const [ $time ] = utils.$('.time');

createTimer({
  duration: 2000,
  onComplete: self => $status.innerHTML = 'true',
  onUpdate: self => $time.innerHTML = self.currentTime
});
```

---

#### onUpdate

Executes a function on every frame of a running timer at the specified `frameRate`.

| Property  | Value                                              |
|-----------|----------------------------------------------------|
| Accepts   | A `Function` whose first argument is the timer itself |
| Default   | `noop`                                             |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.onUpdate = self => console.log(self.id);
```

**Example:**

```js
import { createTimer, utils } from 'animejs';

const [ $updates ] = utils.$('.updates');
const [ $time ] = utils.$('.time');

let updates = 0;

createTimer({
  onUpdate: self => {
    $updates.innerHTML = ++updates;
    $time.innerHTML = self.currentTime;
  }
});
```

---

#### onLoop

Executes a function every time a timer iteration completes.

| Property  | Value                                              |
|-----------|----------------------------------------------------|
| Accepts   | A `Function` whose first argument is the timer itself |
| Default   | `noop`                                             |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.onLoop = self => console.log(self.id);
```

**Example:**

```js
import { createTimer, utils } from 'animejs';

const [ $loops ] = utils.$('.loops');
const [ $time ] = utils.$('.time');

let loops = 0;

createTimer({
  loop: true,
  duration: 1000,
  onLoop: self => $loops.innerHTML = ++loops,
  onUpdate: self => $time.innerHTML = self.iterationCurrentTime,
});
```

---

#### onPause

Executes a function when a running timer is paused.

| Property  | Value                                              |
|-----------|----------------------------------------------------|
| Accepts   | A `Function` whose first argument is the timer itself |
| Default   | `noop`                                             |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.onPause = self => console.log(self.id);
```

**Example:**

```js
import { createTimer, utils } from 'animejs';

const [ $resumeButton, $pauseButton ] = utils.$('.button');
const [ $paused ] = utils.$('.paused');
const [ $time ] = utils.$('.time');

let paused = 0;

const timer = createTimer({
  onPause: () => $paused.innerHTML = ++paused,
  onUpdate: self => $time.innerHTML = self.currentTime
});

const pauseTimer = () => timer.pause();
const resumeTimer = () => timer.resume();

$resumeButton.addEventListener('click', resumeTimer);
$pauseButton.addEventListener('click', pauseTimer);
```

---

#### then()

Returns a `Promise` that resolves and executes a callback when the timer completes.

The `then()` method can be directly inlined:

```js
createTimer({ duration: 500 }).then(callback);
```

Or used in an `async`/`await` context:

```js
async function waitForTimerToComplete() {
  return createTimer({ duration: 250 });
}

const asyncTimer = await waitForTimerToComplete();
```

**Parameters:**

| Name       | Type                                               |
|------------|----------------------------------------------------|
| `callback` | A `Function` whose first argument is the timer itself |

**Returns:** `Promise`

**Example:**

```js
import { createTimer, utils } from 'animejs';

const [ $status ] = utils.$('.status');
const [ $time ] = utils.$('.time');

createTimer({
  duration: 2000,
  onUpdate: self => $time.innerHTML = self.currentTime,
})
.then(() => $status.innerHTML = 'fulfilled');
```

---

### Timer Methods

Methods available on the `Timer` instance returned by a `createTimer()` function, providing control over the timing, behaviour, and progression of a timer.

```
const timer = createTimer(parameters);
      ┌──────────┐
timer.│pause()   │
timer.│play()    ├─ Methods
timer.│restart() │
      └──────────┘
```

**Available methods:**
- `play()`
- `reverse()`
- `pause()`
- `restart()`
- `alternate()`
- `resume()`
- `complete()`
- `reset()`
- `cancel()`
- `revert()`
- `seek()`
- `stretch()`

---

#### play()

Forces the timer to play forward.

**Returns:** The timer itself (can be chained with other timer methods)

**Example:**

```js
import { createTimer, utils } from 'animejs';

const [ $playButton ] = utils.$('.play');
const [ $time ] = utils.$('.time');

const timer = createTimer({
  duration: 2000,
  autoplay: false,
  onUpdate: self => $time.innerHTML = self.iterationCurrentTime,
});

const playTimer = () => timer.play();

$playButton.addEventListener('click', playTimer);
```

---

#### reverse() (V4)

Forces the timer to play backward.

**Returns:** The timer itself (can be chained with other timer methods)

**Example:**

```js
import { createTimer, utils } from 'animejs';

const [ $reverseButton ] = utils.$('.reverse');
const [ $time ] = utils.$('.time');

const timer = createTimer({
  duration: 2000,
  onUpdate: self => $time.innerHTML = self.iterationCurrentTime,
});

const reverseTimer = () => timer.reverse();

$reverseButton.addEventListener('click', reverseTimer);
```

---

#### pause()

Pauses a running timer.

**Returns:** The timer itself (can be chained with other timer methods)

**Example:**

```js
import { createTimer, utils } from 'animejs';

const [ $pauseButton ] = utils.$('.pause');
const [ $time ] = utils.$('.time');

const timer = createTimer({
  onUpdate: self => $time.innerHTML = self.currentTime
});

const pauseTimer = () => timer.pause();

$pauseButton.addEventListener('click', pauseTimer);
```

---

#### restart()

Resets all properties and sets the `currentTime` of a timer to `0`. If `autoplay` is set to `true`, the timer plays automatically.

**Returns:** The timer itself (can be chained with other timer methods)

**Example:**

```js
import { createTimer, utils } from 'animejs';

const [ $restartButton ] = utils.$('.restart');
const [ $time ] = utils.$('.time');

const timer = createTimer({
  onUpdate: self => $time.innerHTML = self.currentTime
});

const restartTimer = () => timer.restart();

$restartButton.addEventListener('click', restartTimer);
```

---

#### alternate()

Toggles the playback direction while adjusting the `currentTime` position to reflect the new time progress.

> **Note:** Only the `iterationTime` is actually played in reverse since `currentTime` always starts at `0` and ends at `duration`.

**Returns:** The timer itself (can be chained with other timer methods)

**Example:**

```js
import { createTimer, utils } from 'animejs';

const [ $alternateButton ] = utils.$('.button');
const [ $iterationTime ] = utils.$('.iteration-time');

const timer = createTimer({
  duration: 10000,
  loop: true,
  onUpdate: self => {
    $iterationTime.innerHTML = self.iterationCurrentTime;
  }
});

const alternateTimer = () => timer.alternate();

$alternateButton.addEventListener('click', alternateTimer);
```

---

#### resume()

Resumes the playback of a paused timer in its current direction.

**Returns:** The timer itself (can be chained with other timer methods)

**Example:**

```js
import { createTimer, utils } from 'animejs';

const [ $resumeButton, $pauseButton, $alternateButton ] = utils.$('.button');
const [ $time ] = utils.$('.time');

const timer = createTimer({
  duration: 2000,
  onUpdate: self => $time.innerHTML = self.iterationCurrentTime,
  loop: true,
});

const resumeTimer = () => timer.resume();
const pauseTimer = () => timer.pause();
const alternateTimer = () => timer.alternate();

$resumeButton.addEventListener('click', resumeTimer);
$pauseButton.addEventListener('click', pauseTimer);
$alternateButton.addEventListener('click', alternateTimer);
```

---

#### complete()

Completes a timer instantly.

**Returns:** The timer itself (can be chained with other timer methods)

**Example:**

```js
import { createTimer, utils } from 'animejs';

const [ $completeButton ] = utils.$('.complete');
const [ $time ] = utils.$('.time');

const timer = createTimer({
  duration: 100000,
  onUpdate: self => $time.innerHTML = self.currentTime
});

const completeTimer = () => timer.complete();

$completeButton.addEventListener('click', completeTimer);
```

---

#### reset()

Pauses and resets `currentTime`, `progress`, `reversed`, `began`, `completed` properties to their default values.

```js
timer.reset(softReset);
```

**Parameters:**

| Name                    | Type      | Description                                              |
|-------------------------|-----------|----------------------------------------------------------|
| `softReset` *(optional)* | `Boolean` | If `true`, only reset internal values without visual render |

**Returns:** The timer itself (can be chained with other timer methods)

**Example:**

```js
import { createTimer, utils } from 'animejs';

const [ $time ] = utils.$('.time');
const [ $reset ] = utils.$('.button');

const timer = createTimer({
  onUpdate: self => $time.innerHTML = self.currentTime,
});

const resetTimer = () => {
  timer.reset();
  $time.innerHTML = timer.currentTime;
}

$reset.addEventListener('click', resetTimer);
```

---

#### cancel()

Pauses the timer, removes it from the engine's main loop, and frees up memory.

**Returns:** The timer itself (can be chained with other timer methods)

**Example:**

```js
import { createTimer, utils } from 'animejs';

const [ $playButton ] = utils.$('.play');
const [ $cancelButton ] = utils.$('.cancel');
const [ $time ] = utils.$('.time');

const timer = createTimer({
  onUpdate: self => $time.innerHTML = self.currentTime
});

const playTimer = () => timer.play();
const cancelTimer = () => timer.cancel();

$playButton.addEventListener('click', playTimer);
$cancelButton.addEventListener('click', cancelTimer);
```

---

#### revert()

Cancels the timer, and reverts the linked `onScroll()` instance if necessary. Use `.revert()` when you want to completely stop, destroy, and detach a timer from its attached ScrollObserver.

**Returns:** The timer itself (can be chained with other timer methods)

**Example:**

```js
import { createTimer, utils } from 'animejs';

const [ $revertButton ] = utils.$('.revert');
const [ $time ] = utils.$('.time');

const timer = createTimer({
  onUpdate: self => $time.innerHTML = self.currentTime
});

const revertTimer = () => {
  timer.revert();
  $time.innerHTML = timer.currentTime;
}

$revertButton.addEventListener('click', revertTimer);
```

---

#### seek()

Updates the `currentTime` of the timer and advances it to a specific time.

```js
timer.seek(time, muteCallbacks);
```

**Parameters:**

| Name                       | Type      | Description                                    |
|----------------------------|-----------|------------------------------------------------|
| `time`                     | `Number`  | The new `currentTime` in ms of the timer       |
| `muteCallbacks` *(optional)* | `Boolean` | If `true`, prevent callbacks from being fired  |

**Returns:** The timer itself (can be chained with other timer methods)

**Example:**

```js
import { createTimer, utils } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $playPauseButton ] = utils.$('.play-pause');
const [ $time ] = utils.$('.time');

const updateButtonLabel = timer => {
  $playPauseButton.textContent = timer.paused ? 'Play' : 'Pause';
}

const timer = createTimer({
  duration: 2000,
  autoplay: false,
  onUpdate: self => {
    $range.value = self.currentTime;
    $time.innerHTML = self.currentTime;
    updateButtonLabel(self);
  },
  onComplete: updateButtonLabel,
});

const seekTimer = () => timer.seek(+$range.value);

const playPauseTimer = () => {
  if (timer.paused) {
    timer.play();
  } else {
    timer.pause();
    updateButtonLabel(timer);
  }
}

$range.addEventListener('input', seekTimer);
$playPauseButton.addEventListener('click', playPauseTimer);
```

---

#### stretch()

Changes the total duration of a timer to fit a specific time. The total duration equals the duration of an iteration multiplied by the total number of iterations. So if a timer has a duration of `1000ms` and loops twice (3 iterations in total), the total duration is `3000ms` (1000 × 3).

```js
timer.stretch(duration);
```

**Parameters:**

| Name       | Type     | Description                              |
|------------|----------|------------------------------------------|
| `duration` | `Number` | The new total duration in ms of the timer |

**Returns:** The timer itself (can be chained with other timer methods)

**Example:**

```js
import { createTimer, utils } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $duration ] = utils.$('.duration');
const [ $time ] = utils.$('.time');

const timer = createTimer({
  duration: 2000,
  onUpdate: self => $time.innerHTML = self.currentTime
});

const stretchTimer = () => {
  timer.stretch(+$range.value);
  $duration.innerHTML = timer.duration;
  timer.restart();
}

$range.addEventListener('input', stretchTimer);
```

---

### Timer Properties

Properties available on the `Timer` instance returned by a `createTimer()` function.

```
const timer = createTimer(parameters);
      ┌────────────┐
timer.│progress    │
timer.│currentTime ├─ Properties
timer.│duration    │
      └────────────┘
```

| Name                     | Description                                                        |
|--------------------------|--------------------------------------------------------------------|
| `id`                     | Gets and sets the ID of the timer (`String` \| `Number`)           |
| `deltaTime`              | Gets the time in ms elapsed between the current and previous frame (`Number`) |
| `currentTime`            | Gets and sets the global current time in ms of the timer (`Number`) |
| `iterationCurrentTime`   | Gets and sets the current iteration time in ms (`Number`)          |
| `progress`               | Gets and sets the overall progress of the timer from `0` to `1` (`Number`) |
| `iterationProgress`      | Gets and sets the progress of the current iteration from `0` to `1` (`Number`) |
| `currentIteration`       | Gets and sets the current iteration count (`Number`)               |
| `speed`                  | Gets and sets the playbackRate multiplier of the timer (`Number`)  |
| `fps`                    | Gets and sets the frameRate of the timer (`Number`)                |
| `paused`                 | Gets and sets whether the timer is paused (`Boolean`)              |
| `began`                  | Gets and sets whether the timer has started (`Boolean`)            |
| `completed`              | Gets and sets whether the timer has completed (`Boolean`)          |
| `reversed`               | Gets and sets whether the timer is reversed (`Boolean`)            |

---

## Animation

Animates the properties values of targeted elements, with a wide range of parameters, callbacks and methods.

### Creating an Animation

Animations are created using the `animate()` method imported from the main `'animejs'` module:

```js
import { animate } from 'animejs';

const animation = animate(targets, parameters);
```

Or imported as a standalone module from the `'animejs/animation'` subpath:

```js
import { animate } from 'animejs/animation';
```

### Parameters

| Name         | Accepts                                                                                      |
|--------------|----------------------------------------------------------------------------------------------|
| `targets`    | Targets (see Targets section)                                                                |
| `parameters` | An `Object` of Animatable properties, Tween parameters, Playback settings, and Animation callbacks |

### Returns

`JSAnimation`

---

### WAAPI Powered Animations

Anime.js provides a more lightweight (3KB) version of the `animate()` method (10KB) powered by the Web Animation API.

```js
import { waapi } from 'animejs';

const animation = waapi.animate(targets, parameters);
```

The WAAPI version has fewer features overall, but covers most of the basic API. To learn more about when to use the WAAPI version and its potential pitfalls, refer to the Web Animations API Guide.

**Returns:** `WAAPIAnimation`

> **Note:** Features only available in the JavaScript version are indicated with a **(JS)** badge and WAAPI specific features are indicated with a **(WAAPI)** badge.

---

### Example: Animation

```js
import { animate, stagger, splitText } from 'animejs';

const { chars } = splitText('h2', { words: false, chars: true });

animate(chars, {
  // Property keyframes
  y: [
    { to: '-2.75rem', ease: 'outExpo', duration: 600 },
    { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
  ],
  // Property specific parameters
  rotate: {
    from: '-1turn',
    delay: 0
  },
  delay: stagger(50),
  ease: 'inOutCirc',
  loopDelay: 1000,
  loop: true
});
```

**Key concepts demonstrated:**

- **Property keyframes** — Arrays of keyframe objects with `to`, `ease`, `duration`, `delay`
- **Property-specific parameters** — Objects with `from` and property-level overrides
- **`stagger()`** — Staggers delay across multiple targets
- **`splitText()`** — Splits text into animatable characters/words

---

### Animation Subsections

- Targets
- Animatable properties
- Tween value types
- Tween parameters
- Keyframes
- Playback settings
- Callbacks
- Methods
- Properties

---

### Targets

Specify the elements to which property value changes are applied. Animation targets are defined in the first argument of the `animate()` function.

```
animate(
┌────────────┐
│ '.square', ├─ Targets
└────────────┘
{
  translateX: 100,
  scale: 2,
  opacity: .5,
  duration: 400,
  delay: 250,
  ease: 'out(3)',
  loop: 3,
  alternate: true,
  autoplay: false,
  onBegin: () => {},
  onLoop: () => {},
  onUpdate: () => {},
});
```

---

#### CSS Selector

Targets one or multiple DOM Elements using a CSS selector.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | Any `String` accepted by `document.querySelectorAll()` |

**Example:**

```js
import { animate } from 'animejs';

animate('.square', { x: '17rem' });
animate('#css-selector-id', { rotate: '1turn' });
animate('.row:nth-child(3) .square', { scale: [1, .5, 1] });
```

---

#### DOM Elements

Targets one or multiple DOM Elements.

**Accepts:**
- `HTMLElement`
- `SVGElement`
- `SVGGeometryElement`
- `NodeList`

**Example:**

```js
import { animate } from 'animejs';

const $demo = document.querySelector('#selector-demo');
const $squares = $demo.querySelectorAll('.square');

animate($demo, { scale: .75 });
animate($squares, { x: '23rem' });
```

---

#### JavaScript Objects (JS)

Targets one or multiple JavaScript `Object`.

**Accepts:**
- `Object`
- Instance of `Class`

**Example:**

```js
import { animate, utils } from 'animejs';

const [ $log ] = utils.$('code');

const vector2D = { x: 0, y: 0 };

animate(vector2D, {
  x: 100,
  y: 150,
  modifier: utils.round(0),
  onUpdate: () => $log.textContent = JSON.stringify(vector2D),
});
```

---

#### Array of Targets

Targets multiple valid Targets simultaneously by grouping them inside an `Array`. Any types of targets can be grouped together.

| Property | Value                |
|----------|----------------------|
| Accepts  | An `Array` of Targets |

**Example:**

```js
import { animate, utils } from 'animejs';

const [ $log ] = utils.$('code');

const vector2D = { x: 0, y: 0 };

animate([vector2D, '.square'], {
  x: '17rem',
  modifier: utils.roundPad(2).padStart(5, '0'),
  onRender: () => $log.textContent = JSON.stringify(vector2D),
});
```

---

### Animatable Properties

Define which properties of the Targets can be animated. Animatable properties are defined in the parameters `Object` of the `animate()` function.

```
animate('.square', {
┌──────────────────┐
│ translateX: 100, │
│ scale: 2,        ├─ Animatable Properties
│ opacity: .5,     │
└──────────────────┘
  duration: 400,
  delay: 250,
  ease: 'out(3)',
  loop: 3,
  alternate: true,
  autoplay: false,
  onBegin: () => {},
  onLoop: () => {},
  onUpdate: () => {},
});
```

---

#### CSS Properties

Any CSS numerical and color properties can be animated. Properties containing a dash in their name, like `background-color`, must be converted to camel case (`backgroundColor`), or written as a `String` (`'background-color'`).

> **Performance Tip:** Most CSS properties can cause layout changes or repaint leading to choppy animations. To achieve smoother animations, always prioritize `opacity` and CSS transforms as much as possible.

**Example:**

```js
import { animate } from 'animejs';

animate('.square', {
  left: 'calc(7.75rem * 2)',
  borderRadius: 64,
  'background-color': '#F9F640',
  filter: 'blur(5px)',
});
```

---

#### CSS Transforms

The CSS `transform` property can be animated by specifying individual properties directly in the parameter object with both JS and WAAPI `animate()` versions.

This allows a greater level of control over how to animate individual transform properties, giving you more flexibility than CSS animations or native WAAPI.

> **Note:** The JS `animate()` method doesn't parse transforms declared from a CSS style declaration and transforms properties must be set directly in the inline styles of the element. You can use the built-in `utils.set()` function to independently set your transform values before animating an element and define in which order they must be set.

> **Tip:** To animate the `transform` property directly, it's recommended to use the WAAPI powered `waapi.animate()` method.

> **Browser Support:** Individual transforms with WAAPI only works for browsers that support `CSS.registerProperty(propertyDefinition)`, and fallback to no animations.

**Valid Individual CSS Transform Properties:**

| Name         | Shorthand | Default Value | Default Unit |
|--------------|-----------|---------------|--------------|
| `translateX` | `x`       | `'0px'`       | `'px'`       |
| `translateY` | `y`       | `'0px'`       | `'px'`       |
| `translateZ` | `z`       | `'0px'`       | `'px'`       |
| `rotate`     | —         | `'0deg'`      | `'deg'`      |
| `rotateX`    | —         | `'0deg'`      | `'deg'`      |
| `rotateY`    | —         | `'0deg'`      | `'deg'`      |
| `rotateZ`    | —         | `'0deg'`      | `'deg'`      |
| `scale`      | —         | `'1'`         | —            |
| `scaleX`     | —         | `'1'`         | —            |
| `scaleY`     | —         | `'1'`         | —            |
| `scaleZ`     | —         | `'1'`         | —            |
| `skew`       | —         | `'0deg'`      | `'deg'`      |
| `skewX`      | —         | `'0deg'`      | `'deg'`      |
| `skewY`      | —         | `'0deg'`      | `'deg'`      |
| `perspective`| —         | `'0px'`       | `'px'`       |

**Example:**

```js
import { animate, waapi } from 'animejs';

animate('.square', {
  x: '15rem', // TranslateX shorthand
  scale: 1.25,
  skew: -45,
  rotate: '1turn',
});

// The WAAPI version is recommended if you want to animate the transform property directly
waapi.animate('.square', {
  transform: 'translateX(15rem) scale(1.25) skew(-45deg) rotate(1turn)',
});
```

---

#### CSS Variables (V4) (JS)

CSS variables with numerical or color values can be animated by directly passing the variable name as a string to the animation parameters. This approach also enables animation of properties defined on pseudo-elements like `::after` and `::before`, which are otherwise inaccessible via JavaScript.

> **Note:** To animate CSS variable properties with the WAAPI powered `waapi.animate()` method, you need to use `CSS.registerProperty(propertyDefinition)`, otherwise it falls back to no animations.

**Example:**

```js
import { animate, utils } from 'animejs';

// Assign the CSS variables to the properties of the animated elements
utils.set('.square', {
  '--radius': '4px',
  '--x': '0rem',
  '--pseudo-el-after-scale': '1', // Applied to the pseudo element "::after"
  // Using a function prevents the variables from being converted
  borderRadius: () => 'var(--radius)',
  translateX: () => 'var(--x)',
});

// Animate the values of the CSS variables
animate('.square', {
  '--radius': '20px',
  '--x': '16.5rem',
  '--pseudo-el-after-scale': '1.55' // Animates the "::after" pseudo element
});
```

---

#### JavaScript Object Properties (JS)

Numerical and color JavaScript `Object` properties can be passed directly to the animation parameters.

**Example:**

```js
import { animate, utils } from 'animejs';

const myObject = {
  number: 1337,
  unit: '42%',
}

const [ $log ] = utils.$('code');

animate(myObject, {
  number: 50,
  unit: '100%',
  modifier: utils.round(0),
  onRender: function() {
    $log.innerHTML = JSON.stringify(myObject);
  }
});
```

---

#### HTML Attributes (JS)

Numerical and color HTML attributes can be passed directly to the animation parameters.

**Example:**

```js
import { animate, utils } from 'animejs';

animate('input', {
  value: 1000, // Animate the input "value" attribute
  alternate: true,
  loop: true,
  modifier: utils.round(0),
});
```

---

#### SVG Attributes (JS)

Numerical and color SVG attributes can be animated by passing them directly to the animation parameters.

> **Tip:** For more convenient SVG animations, check out the built-in SVG utility methods.

**Example:**

```js
import { animate } from 'animejs';

animate(['feTurbulence', 'feDisplacementMap'], {
  baseFrequency: .05,
  scale: 15,
  alternate: true,
  loop: true
});

animate('polygon', {
  points: '64 68.64 8.574 100 63.446 67.68 64 4 64.554 67.68 119.426 100',
  alternate: true,
  loop: true
});
```

---

### Tween Value Types

Specify the start and end values that define the animation of animatable properties. Animation values are assigned to Animatable properties and accept a wide range of syntaxes.

```
animate('.square', {
  x: '6rem', ─────────────────┐
  y: $el => $el.dataset.y, ───┤
  scale: '+=.25', ────────────┼─ Tween Values
  opacity: {                  │
    from: .4, ────────────────┘
  },
});
```

---

#### Numerical Value

Specifies the numerical value of the animated property by passing either a `Number` or a `String` containing at least one `Number`.

If no unit is specified for properties that expect a unit, like `width`, the resulting animation will use the default browser unit.

```js
animate(target, { width: 100 }); // Defaults to px
```

**Accepts:**
- `Number`
- `String`

If a specific unit is already specified, the JS `animate()` method can inherit previously defined units and the next value set without a unit on the same target property inherits the previously defined unit.

```js
animate(target, { width: '50%' }); // Uses '%'
animate(target, { width: 75 });    // Inherits '%' -> '75%'
```

The WAAPI `animate()` method only falls back automatically to `'px'` with the following properties:

- `x` / `translateX`
- `y` / `translateY`
- `z` / `translateZ`
- `perspective`
- `top`, `right`, `bottom`, `left`
- `width`, `height`
- `margin`, `padding`
- `borderWidth`, `borderRadius`
- `fontSize`

**Example:**

```js
import { waapi } from 'animejs';

waapi.animate('.square', {
  x: 240,      // -> 240px
  width: 75,   // -> 75px
  rotate: '.75turn',
});
```

---

#### Unit Conversion Value

Converts and animates to a value with a different unit than the default or currently used one.

> **Note:** When using the JS `animate()` method, unit conversions may sometimes produce unexpected results depending on the unit type and animated properties used. For more predictable results, it's recommended to define the unit outside of the animation using `utils.set()`, and then animate to the current unit. Or simply use the WAAPI `animate()` method.

| Property | Value    |
|----------|----------|
| Accepts  | `String` |

**Example:**

```js
import { animate, utils } from 'animejs';

animate('.square', {
  width: '25%',      // from '48px' to '25%'
  x: '15rem',        // from '0px' to '15rem'
  rotate: '.75turn', // from '0deg' to '.75turn'
});
```

---

#### Relative Value (JS)

Adds, subtracts or multiplies the current target value by a specified amount.

| Prefix | Effect    | Examples                    |
|--------|-----------|-----------------------------|
| `'+='` | Add       | `'+=45'` \| `'+=45px'`      |
| `'-='` | Subtract  | `'-=45'` \| `'-=45deg'`     |
| `'*='` | Multiply  | `'*=.5'`                    |

**Example:**

```js
import { animate, utils } from 'animejs';

const [ $clock ] = utils.$('.clock');
const [ $add ] = utils.$('.add');
const [ $sub ] = utils.$('.sub');
const [ $mul ] = utils.$('.mul');

const add = () => animate($clock, { rotate: '+=90' });
const sub = () => animate($clock, { rotate: '-=90' });
const mul = () => animate($clock, { rotate: '*=.5' });

$add.addEventListener('click', add);
$sub.addEventListener('click', sub);
$mul.addEventListener('click', mul);
```

---

#### Color Value

Color values in the following formats can be parsed and used as values for animatable color properties.

| Format       | Syntax                           |
|--------------|----------------------------------|
| HEX          | `'#F44'` \| `'#FF4444'`          |
| HEXA         | `'#F443'` \| `'#FF444433'`       |
| RGB          | `'rgb(255, 168, 40)'`            |
| RGBA         | `'rgba(255, 168, 40, .2)'`       |
| HSL          | `'hsl(255, 168, 40)'`            |
| HSLA         | `'hsla(255, 168, 40, .2)'`       |
| String name (WAAPI) | `'red'` \| `'aqua'`        |

**Example:**

```js
import { animate } from 'animejs';

animate('.hex',  { background: '#FF4B4B' });
animate('.rgb',  { background: 'rgb(255, 168, 40)' });
animate('.hsl',  { background: 'hsl(44, 100%, 59%)' });
animate('.hexa', { background: '#FF4B4B33' });
animate('.rgba', { background: 'rgba(255, 168, 40, .2)' });
animate('.hsla', { background: 'hsla(44, 100%, 59%, .2)' });
```

---

#### Color Function Value (WAAPI)

The CSS `color()` function can be animated with the WAAPI `animate()` method.

| Property | Value                              |
|----------|------------------------------------|
| Accepts  | Any valid CSS color space syntax   |

**Example:**

```js
import { waapi } from 'animejs';

waapi.animate('.circle', {
  backgroundColor: 'color(display-p3 1.0 0.267 0.267 / 1.0)',
});
```

---

#### CSS Variable Value

CSS variables can be used as animation values by simply passing the variable name with the `'var(--my-value)'` syntax.

> **Note:** The JS `animate()` version needs to compute the variable in order to animate its value. This means the animation won't reflect the new value if the variable is updated separately. To update a CSS variable in a JS Animation, you can call `.refresh()`.

```js
target.style.setProperty('--x', '100px');
// Animate x to 100px
const anim = animate(target, { x: 'var(--x)' });
target.style.setProperty('--x', '200px');
// Restart, and refresh the value to animate x to 200px
anim.restart().refresh();
```

| Property | Value                    |
|----------|--------------------------|
| Accepts  | CSS variable `String`    |

**Example:**

```js
import { waapi, animate, stagger } from 'animejs';

waapi.animate('.square', {
  rotate: 'var(--rotation)',
  borderColor: ['var(--hex-orange-1)', 'var(--hex-red-1)'],
  duration: 500,
  delay: stagger(100),
  loop: true,
});

animate('.square', {
  scale: 'var(--scale)',
  background: ['var(--hex-red-1)', 'var(--hex-orange-1)'],
  duration: 500,
  delay: stagger(100),
  loop: true,
  alternate: true,
});
```

---

#### Function Based Value

Sets different values for each target of a multi-target animation by using a `Function` as the value.

Function-based values can be re-calculated without creating a new animation using the `animation.refresh()` method.

**Accepts:** A `Function` with the following parameters:

```js
animate(targets, {
  x: (target, index, length) => target.dataset.value * (length - index),
});
```

**Parameters:**

| Name     | Description                                    |
|----------|------------------------------------------------|
| `target` | The current animated target element            |
| `index`  | The index of current targeted element          |
| `length` | The total number of animated targets           |

**Must return:**
- Tween value
- Tween parameters

**Example:**

```js
import { animate, utils } from 'animejs';

animate('.square', {
  x: $el => /** @type {HTMLElement} */($el).getAttribute('data-x'),
  y: (_, i) => 50 + (-50 * i),
  scale: (_, i, l) => (l - i) * .75,
  rotate: () => utils.random(-360, 360),
  borderRadius: () => `+=${utils.random(0, 8)}`,
  duration: () => utils.random(1200, 1800),
  delay: () => utils.random(0, 400),
  ease: 'outElastic(1, .5)',
});
```

---

### Tween Parameters

Configure values, timings, and behaviors of animated properties. Tween parameters can be specified globally for all properties directly with the other animation parameters, or locally for a specific property using an `Object`. All animatable properties inherit the global parameters, which can be overridden locally for a specific tween.

```
animate('.square', {
  x: {
┌───────────────────┐
│   to: 100,        │
│   delay: 0,       ├─ Local Tween Parameters
│   ease: 'inOut(4)'│
└───────────────────┘
  },
  scale: 1,
  opacity: .5,
┌───────────────────┐
│ duration: 400,    │
│ delay: 250,       ├─ Global Tween Parameters
│ ease: 'out(3)',   │
└───────────────────┘
  loop: 3,
  alternate: true,
});
```

**Available tween parameters:**
- `to`
- `from`
- `delay`
- `duration`
- `ease`
- `composition` (JS)
- `modifier` (JS)

---

#### to (V4)

Animates to a specified value from the current target value. Must be defined inside a local tween parameter `Object`.

| Property  | Value                                              |
|-----------|----------------------------------------------------|
| Required  | Only if no `from` property is defined              |
| Accepts   | Any valid Tween value type, or an `Array` of two Tween value keyframes (`[fromValue, toValue]`) |
| Default   | The current target value is used if only a `from` property is defined |

**Example:**

```js
import { animate } from 'animejs';

animate('.square', {
  x: {
    to: '16rem', // From 0px to 16rem
    ease: 'outCubic',
  },
  rotate: {
    to: '.75turn', // From 0turn to .75turn
    ease: 'inOutQuad'
  },
});
```

---

#### from (V4)

Animates from a specified value to the current target value. Must be defined inside a local tween parameter `Object`.

| Property  | Value                                              |
|-----------|----------------------------------------------------|
| Required  | Only if no `to` property is defined                |
| Accepts   | Any valid Tween value type                         |
| Default   | The current target value is used if only a `to` property is defined |

**Example:**

```js
import { animate } from 'animejs';

animate('.square', {
  opacity: { from: .5 }, // Animate from .5 opacity to 1 opacity
  translateX: { from: '16rem' }, // From 16rem to 0rem
  rotate: {
    from: '-.75turn', // From -.75turn to 0turn
    ease: 'inOutQuad',
  },
});
```

---

#### delay (Tween)

Defines the delay in milliseconds at the beginning of all animated properties, or locally to a specific property.

| Property  | Value                                              |
|-----------|----------------------------------------------------|
| Accepts   | `Number` ≥ `0`, or Function based value returning `Number` ≥ `0` |
| Default   | The animation delay value (default `0`)            |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.delay = 500;
```

**Example:**

```js
import { animate } from 'animejs';

const animation = animate('.square', {
  x: '17rem',
  rotate: {
    to: 360,
    delay: 1000, // Local delay applied only to rotate property
  },
  delay: 500,  // Global delay applied to all properties
  loop: true,
  alternate: true
});
```

---

#### duration (Tween)

Defines the duration in milliseconds of all animated properties, or of a specific property.

| Property  | Value                                              |
|-----------|----------------------------------------------------|
| Accepts   | `Number` ≥ `0`, or Function based value returning `Number` ≥ `0` |
| Default   | The animation duration value (default `1000`)      |

> **Note:** Duration values higher than `1e12` or equal to `Infinity` are clamped internally to `1e12` (approximately 32 years).

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.duration = 500;
```

**Example:**

```js
import { animate } from 'animejs';

const animation = animate('.square', {
  x: '17rem',
  rotate: {
    to: 360,
    duration: 1500, // Local duration only applied to rotate property
  },
  duration: 3000,  // Global duration applied to all properties
  loop: true,
  alternate: true
});
```

---

#### ease

Defines the easing function for all animated properties or a specific property. Easing functions control the rate of change of a property value over time, determining the animation's speed at different points during playback.

All Anime.js built-in easing functions can either be used by passing the easing name `String` or the function accessible on the `eases` object.

| Property  | Value                                              |
|-----------|----------------------------------------------------|
| Accepts   | An easing `Function`, or a built-in ease `String`  |
| Default   | `'out(2)'`                                         |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.ease = 'outElastic(1, .5)'; // v3 throwback :)
```

**Example:**

```js
import { animate, waapi, eases, spring } from 'animejs';

animate('.row:nth-child(1) .square', {
  x: '17rem',
  rotate: 360,
  ease: 'inQuad',
});

animate('.row:nth-child(2) .square', {
  x: '17rem',
  rotate: 360,
  ease: eases.outQuad,
});

waapi.animate('.row:nth-child(3) .square', {
  x: '17rem',
  rotate: {
    to: 360,
    ease: 'out(6)',
  },
  ease: spring({ stiffness: 70 }),
});
```

---

#### composition (V4) (JS)

Defines how animations behave when another animation on the same target with the same property is playing simultaneously. The composition mode can be defined globally for all animation properties or locally for a specific property.

| Mode        | Description                                                              |
|-------------|--------------------------------------------------------------------------|
| `'replace'` | Replace and cancel the running animation                                 |
| `'none'` (JS) | Do not replace the running animation. Previous animation continues if its duration is longer. Can offer better performance. |
| `'blend'` (JS) | Creates an additive animation and blends its values with the running animation |
| `0` (JS)    | Shorthand for `'replace'`                                                |
| `1` (JS)    | Shorthand for `'none'`                                                   |
| `2` (JS)    | Shorthand for `'blend'`                                                  |

| Property  | Value                                              |
|-----------|----------------------------------------------------|
| Default   | `'replace'` if target count < 1000; otherwise `'none'` on JS version |

**Additive Animations**

The `'blend'` mode lets you create additive animations. This type of animation allows you to smoothly blend two animations of the same property on the same target together. This mode works best on properties that visually move on the screen, like `'translate'`, `'scale'`, and `'rotation'`.

**`'blend'` mode limitations:**

Blending only works by playing forward two or more animations with composition `'blend'` simultaneously. It is not currently possible to use composition `'blend'` with:
- Multiple keyframes
- Color values
- The `reverse()` method
- The `loop` parameter
- The `reversed` parameter
- The `alternate` parameter

Blended animations should be treated differently and should only be used when you actually need to mix multiple animations together.

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.composition = 'blend';
```

**Example:**

```js
import { animate, utils } from 'animejs';

const squares = utils.$('.square');
const [ $none, $replace, $blend ] = squares;

// Animate each square with a different composition mode
squares.forEach($square => {
  // 'none', 'replace', 'blend'
  const mode = $square.classList[1];
  animate($square, {
    scale: [.5, 1],
    alternate: true,
    loop: true,
    duration: 750,
    composition: mode,
  });
});

// Common animation parameters
const enter = { scale: 1.5, duration: 350 };
const leave = { scale: 1.0, duration: 250 };

// Composition none animations
const enterNone = () => animate($none, { composition: 'none', ...enter });
const leaveNone = () => animate($none, { composition: 'none', ...leave });

$none.addEventListener('mouseenter', enterNone);
$none.addEventListener('mouseleave', leaveNone);

// Composition replace animations
const enterReplace = () => animate($replace, { composition: 'replace', ...enter });
const leaveReplace = () => animate($replace, { composition: 'replace', ...leave });

$replace.addEventListener('mouseenter', enterReplace);
$replace.addEventListener('mouseleave', leaveReplace);

// Composition blend animations
const enterBlend = () => animate($blend, { composition: 'blend', ...enter });
const leaveBlend = () => animate($blend, { composition: 'blend', ...leave });

$blend.addEventListener('mouseenter', enterBlend);
$blend.addEventListener('mouseleave', leaveBlend);
```

---

#### modifier (V4) (JS)

A `Function` that modifies or alters the behavior of the animated numerical value. Modifiers can be set globally for all animation properties or locally for a specific property. If the final animated value contains strings, like units (`'100px'`), the string part is automatically added to the final value before being applied to the element.

> **Tip:** Most Utilities functions can be used as modifiers.

| Property  | Value                                              |
|-----------|----------------------------------------------------|
| Accepts   | A `Function` that receives the current animated numerical value |
| Returns   | `Number`                                           |
| Default   | `null`                                             |

**Parameters:**

| Name    | Description                          |
|---------|--------------------------------------|
| `value` | The current animated numerical value |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.modifier = v => -v; // Don't do this :D
```

**Example:**

```js
import { animate, utils } from 'animejs';

animate('.row:nth-child(1) .square', {
  x: '17rem',
  modifier: utils.round(0), // Round to 0 decimals
  duration: 4000,
});

animate('.row:nth-child(2) .square', {
  x: '85rem',
  modifier: v => v % 17,
  duration: 4000,
});

animate('.row:nth-child(3) .square', {
  x: '17rem',
  y: {
    to: '70rem',
    modifier: v => Math.cos(v) / 2, // Specific modifier to y property
  },
  duration: 4000,
});
```

---

### Keyframes

Create a sequence of animations on the same animatable property.

**Property value keyframes** — Specific to an animated property, these keyframes are passed to the property value directly:

```
animate('.square', {
┌───────────────────┐
│ x: [0, 100, 200], ├─ Tween Values Array
│ y: [0, 100, 200], │
└───────────────────┘
  duration: 3000,
}

animate('.square', {
┌────────────────────────────┐
│ x: [{to: 100}, {to: 200}], ├─ Tween Parameters Array
│ y: [{to: 100}, {to: 200}], │
└────────────────────────────┘
  duration: 3000,
}
```

**Animation keyframes** — Defined at the animation level, these keyframes can animate multiple properties per keyframe:

```
animate('.square', {
┌───────────────────────┐
│ keyframes: [          │
│   { x: 100, y: 100 }, ├─ Duration Based
│   { x: 200, y: 200 }, │
│ ],                    │
└───────────────────────┘
  duration: 3000,
}

animate('.square', {
┌───────────────────────────────┐
│ keyframes: {                  │
│   '0%'  : { x: 0,   y: 0   }, │
│   '50%' : { x: 100, y: 100 }, ├─ Percentage Based
│   '100%': { x: 200, y: 200 }, │
│ },                            │
└───────────────────────────────┘
  duration: 3000,
}
```

**Available keyframe types:**
- Tween values keyframes
- Tween parameters keyframes
- Duration based keyframes
- Percentage based keyframes

---

#### Tween Values Keyframes (V4)

Sequences multiple Tween values specific to an Animatable property using an `Array`. The duration between each keyframe equals the total animation duration divided by the number of transitions between each keyframe. The first keyframe defines the from value of the tween.

You can use this syntax to quickly set the initial from value of an animation:

```js
animate(target, { x: [-100, 100] }); // Animate x from -100 to 100
```

| Property | Value                           |
|----------|---------------------------------|
| Accepts  | An `Array` of valid Tween values |

**Example:**

```js
import { animate } from 'animejs';

animate('.square', {
  translateX: ['0rem', 0, 17, 17, 0, 0],
  translateY: ['0rem', -2.5, -2.5, 2.5, 2.5, 0],
  scale: [1, 1, .5, .5, 1, 1],
  rotate: { to: 360, ease: 'linear' },
  duration: 3000,
  ease: 'inOut', // ease applied between each keyframes if no ease defined
  playbackEase: 'outIn(5)', // ease applied across all keyframes
  loop: true,
});
```

---

#### Tween Parameters Keyframes (JS)

Sequences multiple Tween parameters specific to an Animatable property.

This syntax allows very fine control over an animation by giving access to `ease`, `delay`, `duration` and `modifier` parameters for each individual keyframe.

The default `duration` of a keyframe equals the total animation duration divided by the total number of keyframes.

| Property | Value                              |
|----------|------------------------------------|
| Accepts  | An `Array` of Tween parameters     |

**Example:**

```js
import { animate } from 'animejs';

animate('.square', {
  x: [
    { to: '17rem', duration: 700, delay: 400 },
    { to: 0, duration: 700, delay: 800 },
  ],
  y: [
    { to: '-2.5rem', ease: 'out', duration: 400 },
    { to: '2.5rem', duration: 800, delay: 700 },
    { to: 0, ease: 'in', duration: 400, delay: 700 },
  ],
  scale: [
    { to: .5, duration: 700, delay: 400 },
    { to: 1, duration: 700, delay: 800 },
  ],
  rotate: { to: 360, ease: 'linear' },
  duration: 3000,
  ease: 'inOut', // ease applied between each keyframes if no ease defined
  playbackEase: 'outIn(5)', // ease applied across all keyframes
  loop: true,
});
```

---

#### Duration Based Keyframes (JS)

Sequences multiple Animatable properties one after another.

This syntax allows very fine control over an animation by giving access to `ease`, `delay`, `duration` and `modifier` parameters for each individual keyframe.

The default duration of a keyframe equals the total animation duration divided by the total number of keyframes.

```js
keyframes: [
  { y: 50, ease: 'out', duration: 400 },
  { x: 75, scale: .5, duration: 800 },
]
```

| Property | Value                                                              |
|----------|--------------------------------------------------------------------|
| Accepts  | An `Array` of `Object` containing Animatable properties and Tween parameters |

**Example:**

```js
import { animate } from 'animejs';

animate('.square', {
  keyframes: [
    { y: '-2.5rem', ease: 'out', duration: 400 },
    { x: '17rem', scale: .5, duration: 800 },
    { y: '2.5rem' }, // The duration here is 3000 / 5 = 600ms
    { x: 0, scale: 1, duration: 800 },
    { y: 0, ease: 'in', duration: 400 }
  ],
  rotate: { to: 360, ease: 'linear' },
  duration: 3000,
  ease: 'inOut', // ease applied between each keyframes if no ease defined
  playbackEase: 'outIn(5)', // ease applied across all keyframes
  loop: true,
});
```

---

#### Percentage Based Keyframes (V4) (JS)

Sequences multiple Animatable properties with positions defined from a percentage of the animation total duration.

This syntax is very similar to the CSS `@keyframes` syntax and only exposes control over the `ease` parameter for each individual keyframe.

The first keyframe defines the from value of the tween.

```js
keyframes: {
  '25%' : { x: 100, y: 50, ease: 'out' },
  '50%' : { x: 200, y: 75 },
}
```

| Property | Value                                                              |
|----------|--------------------------------------------------------------------|
| Accepts  | An `Object` where keys are `String` percentages and values are `Object` containing Animatable properties and optional `ease` |

**Example:**

```js
import { animate } from 'animejs';

animate('.square', {
  keyframes: {
    '0%'  : { x: '0rem', y: '0rem', ease: 'out' },
    '13%' : { x: '0rem', y: '-2.5rem' },
    '37%' : { x: '17rem', y: '-2.5rem', scale: .5 },
    '63%' : { x: '17rem', y: '2.5rem', scale: .5 },
    '87%' : { x: '0rem', y: '2.5rem', scale: 1 },
    '100%': { y: '0rem', ease: 'in' }
  },
  rotate: { to: 360, ease: 'linear' },
  duration: 3000,
  ease: 'inOut', // ease applied between each keyframes if no ease defined
  playbackEase: 'outIn(5)', // ease applied across all keyframes
  loop: true,
});
```

---

### Animation Playback Settings

Specify the timings and behaviours of an animation. Playback settings properties are defined directly in the `animate()` parameters `Object`.

```
animate('.square', {
  translateX: 100,
  scale: 2,
  opacity: .5,
  duration: 400,
  delay: 250,
  ease: 'out(3)',
┌───────────────────┐
│ loop: 3,          │
│ alternate: true,  ├─ Playback Settings
│ autoplay: false,  │
└───────────────────┘
  onBegin: () => {},
  onLoop: () => {},
  onUpdate: () => {},
});
```

**Available playback settings:**
- delay
- duration
- loop
- loopDelay
- alternate
- reversed
- autoplay
- frameRate
- playbackRate
- playbackEase
- persist

---

#### delay (Animation)

Defines the default delay in milliseconds of the animation tweens.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | `Number` ≥ `0`, or Function based value returning `Number` ≥ `0` |
| Default  | `0`                                                |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.delay = 500;
```

**Example:**

```js
import { animate } from 'animejs';

const playbackDelay = animate('.delay', {
  x: '16rem',
  scale: 1.8,
  delay: 500, // Global delay applied to all properties
  loop: true,
  alternate: true
});
```

---

#### duration (Animation)

Defines the default duration in milliseconds of all animation tweens. Setting `0` to a duration completes the animation instantly upon play.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | `Number` ≥ `0`, or Function based value returning `Number` ≥ `0` |
| Default  | `1000`                                             |

> **Note:** Duration values higher than `1e12` are clamped internally to `1e12` (approximately 32 years).

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.duration = 500;
```

**Example:**

```js
import { animate } from 'animejs';

animate('.dur-0', {
  x: '17rem',
  duration: 0,
});

animate('.dur-500', {
  x: '17rem',
  duration: 500,
});

animate('.dur-2000', {
  x: '17rem',
  duration: 2000
});
```

---

#### loop (Animation) (V4)

Defines how many times an animation repeats.

| Value      | Effect                                 |
|------------|----------------------------------------|
| `Number`   | The number of loops in the range `[0, Infinity]` |
| `Infinity` | Loop indefinitely                      |
| `true`     | Equivalent to `Infinity`               |
| `-1`       | Equivalent to `Infinity`               |

| Property | Value |
|----------|-------|
| Default  | `0`   |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.loop = true;
```

**Example:**

```js
import { animate } from 'animejs';

animate('.loop', {
  x: '17.5rem',
  loop: 3,
});

animate('.loop-alternate', {
  x: '17.5rem',
  loop: 3,
  alternate: true,
});

animate('.loop-reverse', {
  x: '17.5rem',
  loop: 3,
  reversed: true,
});

animate('.loop-infinity', {
  x: '17.5rem',
  loop: true, // Or Infinity
});
```

---

#### loopDelay (Animation) (V4) (JS)

Defines the delay in milliseconds between loops.

| Property | Value                  |
|----------|------------------------|
| Accepts  | `Number` ≥ `0`         |
| Default  | `0`                    |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.loopDelay = 500;
```

**Example:**

```js
import { animate } from 'animejs';

const loopDelayAnimation = animate('.circle', {
  x: '16rem',
  scale: {
    to: 1.8,
    delay: 500,
    duration: 500,
  },
  loopDelay: 1000,
  loop: true,
  alternate: true,
});
```

---

#### alternate (Animation) (V4)

Defines if the direction of the animation alternates on each iteration when the `loop` parameter is set to `true` or greater than `1`.

| Property | Value     |
|----------|-----------|
| Accepts  | `Boolean` |
| Default  | `false`   |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.alternate = true;
```

**Example:**

```js
import { animate } from 'animejs';

animate('.dir-normal', {
  x: '17rem',
  alternate: false, // Default
  loop: 1,
});

animate('.dir-alternate', {
  x: '17rem',
  alternate: true,
  loop: 1, // Required to see the second iteration
});

animate('.dir-alternate-reverse', {
  x: '17rem',
  alternate: true,
  reversed: true,
  loop: 1,
});
```

---

#### reversed (Animation) (V4)

Defines the initial direction of the animation.

| Property | Value     |
|----------|-----------|
| Accepts  | `Boolean` |
| Default  | `false`   |

| Value   | Effect                        |
|---------|-------------------------------|
| `true`  | The animation plays backwards |
| `false` | The animation plays forwards  |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.reversed = true;
```

**Example:**

```js
import { animate } from 'animejs';

animate('.dir-normal', {
  x: '17rem',
  reversed: false, // Default behaviour
  loop: true
});

animate('.dir-reverse', {
  x: '17rem',
  reversed: true,
  loop: true
});
```

---

#### autoplay (Animation)

Defines the play mode of an animation.

> **Note:** The `autoplay` parameter has no effect when the animation is added to a timeline, and will be overridden to `false`.

| Property | Value                         |
|----------|-------------------------------|
| Accepts  | `Boolean` \| `onScroll()`     |
| Default  | `true`                        |

| Value        | Effect                                                    |
|--------------|-----------------------------------------------------------|
| `true`       | The animation plays automatically                         |
| `false`      | The animation has to be manually played                   |
| `onScroll()` | The animation starts when scroll threshold conditions are met |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.autoplay = false;
```

**Example:**

```js
animate('.autoplay-true', {
  x: '17rem',
  autoplay: true, // Default
});

animate('.autoplay-false', {
  x: '17rem',
  autoplay: false,
});
```

---

#### frameRate (Animation) (V4) (JS)

Determines the number of frames per second (fps) an animation is played at. This value can be modified later with `animation.fps = 30`.

| Property | Value                       |
|----------|-----------------------------|
| Accepts  | `Number` > `0`              |
| Default  | `120`                       |

> **Note:** The frame rate is capped to the monitor refresh rate or in some cases by the browser itself.

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.frameRate = 30;
```

**Example:**

```js
import { animate, utils } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $fps ] = utils.$('.fps');

const animation = animate('.circle', {
  x: '16rem',
  loop: true,
  alternate: true,
  frameRate: 60,
});

const updateFps = () => {
  const { value } = $range;
  $fps.innerHTML = value;
  animation.fps = value;
}

$range.addEventListener('input', updateFps);
```

---

#### playbackRate (Animation) (V4)

Defines a speed multiplier to speed up or slow down an animation. This value can be modified later with `animation.speed = .5`.

| Property | Value                       |
|----------|-----------------------------|
| Accepts  | `Number` ≥ `0`              |
| Default  | `1`                         |

> **Note:** If set to `0` the animation won't play.

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.playbackRate = .75;
```

**Example:**

```js
import { animate, utils } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $speed ] = utils.$('.speed');

const animation = animate('.circle', {
  x: '16rem',
  loop: true,
  alternate: true,
  playbackRate: 1,
});

const updateSpeed = () => {
  const { value } = $range;
  $speed.innerHTML = utils.roundPad(+value, 2);
  utils.sync(() => animation.speed = value);
}

$range.addEventListener('input', updateSpeed);
```

---

#### playbackEase (V4) (JS)

Applies an easing function to the entire playback of the animation.

Unlike the tween `ease` parameter that is applied in between every property keyframes like this:

```
0 ────────────────────────────────› 1
A ──ease──› B ──ease──› C ──ease──› D
```

The `playbackEase` parameter is applied globally like this:

```
0 ──────────────ease──────────────› 1
A ────────› B ────────› C ────────› D
```

| Property | Value  |
|----------|--------|
| Accepts  | ease   |
| Default  | `null` |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.playbackEase = 'inOut';
```

**Example:**

```js
import { animate } from 'animejs';

animate('.square', {
  keyframes: [
    { y: '-2.5rem', duration: 400 },
    { x: '17rem', rotate: 180, scale: .5 },
    { y: '2.5rem' },
    { x: 0, rotate: 360, scale: 1 },
    { y: 0, duration: 400 }
  ],
  duration: 4000,
  playbackEase: 'inOut(3)', // this ease is applied across all keyframes
  loop: true,
});
```

---

#### persist (V4) (WAAPI)

By default, WAAPI animations are automatically canceled and released from memory when they complete. This is necessary to prevent animations from running forever and causing potential memory leaks.

This behavior can cause issues when using methods on a completed WAAPI animation, since the animation won't be active anymore.

The `persist` parameter solves that, and keeps the animation active when it completes.

| Property | Value     |
|----------|-----------|
| Accepts  | `Boolean` |
| Default  | `false`   |

> **Note:** For scroll-controlled WAAPI animations, the `persist` parameter is automatically set to `true`.

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.persist = true;
```

**Example:**

```js
import { waapi, utils } from 'animejs';

const [ $button ] = utils.$('.button');

const animationA = waapi.animate('.square-a', {
  x: '17rem',
  persist: false, // default
});

const animationB = waapi.animate('.square-b', {
  x: '17rem',
  persist: true,
});

const alternateAnimations = () => {
  animationA.alternate().resume();
  animationB.alternate().resume();
};

$button.addEventListener('click', alternateAnimations);
```

---

### Animation Callbacks

Execute functions at specific points during an animation playback. Callback `Function`s are specified directly in the `animate()` parameters `Object`.

```
animate('.square', {
  translateX: 100,
  scale: 2,
  opacity: .5,
  duration: 400,
  delay: 250,
  ease: 'out(3)',
  loop: 3,
  alternate: true,
  autoplay: false,
┌─────────────────────┐
│ onBegin: () => {},  │
│ onLoop: () => {},   ├─ Callbacks
│ onUpdate: () => {}, │
└─────────────────────┘
});
```

**Available callbacks:**
- onBegin
- onComplete
- onBeforeUpdate
- onUpdate
- onRender
- onLoop
- onPause
- then()

---

#### onBegin (Animation) (JS)

Executes a function when an animation begins to play.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the animation itself |
| Default  | `noop`                                             |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.onBegin = self => console.log(self.id);
```

**Example:**

```js
import { animate, utils } from 'animejs';

const [ $value ] = utils.$('.value');

const animation = animate('.circle', {
  x: '16rem',
  delay: 1000, // Delays the onBegin() callback by 1000ms
  onBegin: self => $value.textContent = self.began
});
```

---

#### onComplete (Animation)

Executes a function when all the iterations (loops) of an animation have finished playing.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the animation itself |
| Default  | `noop`                                             |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.onComplete = self => console.log(self.id);
```

**Example:**

```js
import { animate, utils } from 'animejs';

const [ $value ] = utils.$('.value');

const animation = animate('.circle', {
  x: '16rem',
  delay: 500,
  loop: 2,
  alternate: true,
  onComplete: self => $value.textContent = self.completed
});
```

---

#### onBeforeUpdate (V4) (JS)

Executes a function before updating the tween values, on every frame of a running animation at the specified `frameRate`.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the animation itself |
| Default  | `noop`                                             |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.onBeforeUpdate = self => console.log(self.id);
```

**Example:**

```js
import { animate, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let mult = 1;
let updates = 0;

const animation = animate('.circle', {
  x: '16rem',
  loopDelay: 1500,
  modifier: v => mult * v,
  loop: true,
  alternate: true,
  onBeforeUpdate: self => {
    $value.textContent = ++updates;
    // Update the mult value just before updating the tweens
    mult = 1 - self.iterationProgress;
  }
});
```

---

#### onUpdate (Animation) (JS)

Executes a function on every frame of a running animation at the specified `frameRate`.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the animation itself |
| Default  | `noop`                                             |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.onUpdate = self => console.log(self.id);
```

**Example:**

```js
import { animate, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let updates = 0;

const animation = animate('.circle', {
  x: '16rem',
  loopDelay: 1500,
  loop: true,
  alternate: true,
  onUpdate: self => $value.textContent = ++updates
});
```

---

#### onRender (V4) (JS)

Executes a function every time an animation renders something on the screen. This means that no rendering is happening when the `currentTime` is inside the `delay` or `loopDelay` time frames.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the animation itself |
| Default  | `noop`                                             |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.onRender = self => console.log(self.id);
```

**Example:**

```js
import { animate, utils } from 'animejs';

const [ $rendersLog ] = utils.$('.value');

let renders = 0;

const animation = animate('.circle', {
  x: '16rem',
  loopDelay: 1500,
  loop: true,
  alternate: true,
  onRender: self => $rendersLog.textContent = ++renders
});
```

---

#### onLoop (Animation) (V4) (JS)

Executes a function every time an animation iteration (loop) completes.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the animation itself |
| Default  | `noop`                                             |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.onLoop = self => console.log(self.id);
```

**Example:**

```js
import { animate, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let loops = 0;

const animation = animate('.circle', {
  x: '16rem',
  loopDelay: 1500,
  loop: true,
  alternate: true,
  onLoop: self => $value.textContent = ++loops
});
```

---

#### onPause (Animation) (V4) (JS)

Executes a function when a running animation is paused, either manually or automatically.

An animation pauses when any of the following occurs during playback:
- The `.pause()` method is called
- The `.cancel()` method is called
- The `.revert()` method is called
- All animation tweens are overlapped by another animation with `composition: 'replace'`
- All animation targets have been removed

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the animation itself |
| Default  | `noop`                                             |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.onPause = self => console.log(self.id);
```

**Example:**

```js
import { animate, utils } from 'animejs';

const [ $animateButton, $pauseButton, $removeButton ] = utils.$('.button');
const [ $value ] = utils.$('.value');
const [ $circle ] = utils.$('.circle');

let paused = 0;
let alternate = 0;
let animation;

const animateX = () => {
  alternate = !alternate;
  animation = animate($circle, {
    x: () => (alternate ? 16 : 0) + 'rem',
    duration: 2000,
    onPause: () => $value.innerHTML = ++paused,
  });
}

const pauseAnimation = () => {
  if (animation) animation.pause();
}

const removeTarget = () => {
  utils.remove($circle);
}

animateX();

$animateButton.addEventListener('click', animateX);
$pauseButton.addEventListener('click', pauseAnimation);
$removeButton.addEventListener('click', removeTarget);
```

---

#### then() (Animation) (V4)

Returns a `Promise` that resolves and executes a callback when the animation completes.

The `then()` method can be directly inlined:

```js
animate(target, { x: 100, duration: 500 }).then(callback);
```

Or used in an `async`/`await` context:

```js
async function waitForAnimationToComplete() {
  return animate(target, {
    x: 100,
    duration: 500,
  });
}

const asyncAnimation = await waitForAnimationToComplete();
```

**Parameters:**

| Name       | Type                                               |
|------------|----------------------------------------------------|
| `callback` | A `Function` whose first argument is the animation itself |

**Returns:** `Promise`

**Example:**

```js
import { animate, utils } from 'animejs';

const [ $value ] = utils.$('.value');

const animation = animate('.circle', {
  x: '16rem',
  delay: 500,
});

animation.then(() => $value.textContent = 'fulfilled');
```

---

### Animation Methods

Methods available on the `Animation` instance returned by an `animate()` function, providing control over the timing, behaviour, and progression of an animation.

```
const animation = animate(target, parameters);
          ┌──────────┐
animation.│pause()   │
animation.│play()    ├─ Methods
animation.│restart() │
          └──────────┘
```

**Available methods:**
- play()
- reverse()
- pause()
- restart()
- alternate()
- resume()
- complete()
- cancel()
- revert()
- reset()
- seek()
- stretch()
- refresh()

---

#### play() (Animation)

Forces the animation to play forward.

**Returns:** The animation itself (can be chained with other animation methods)

**Example:**

```js
import { animate, utils, stagger } from 'animejs';

const [ $playButton ] = utils.$('.play');

const animation = animate('.square', {
  x: '17rem',
  ease: 'inOutSine',
  delay: stagger(100),
  autoplay: false, // The animation is paused by default
});

const playAnimation = () => animation.play();

$playButton.addEventListener('click', playAnimation);
```

---

#### reverse() (Animation) (V4)

Forces the animation to play backward.

**Returns:** The animation itself (can be chained with other animation methods)

**Example:**

```js
import { animate, utils, stagger } from 'animejs';

const [ $reverseButton ] = utils.$('.reverse');

const animation = animate('.square', {
  x: '17rem',
  ease: 'inOutSine',
  delay: stagger(100),
});

const reverseAnimation = () => animation.reverse();

$reverseButton.addEventListener('click', reverseAnimation);
```

---

#### pause() (Animation)

Pauses a running animation.

**Returns:** The animation itself (can be chained with other animation methods)

**Example:**

```js
import { animate, utils, stagger } from 'animejs';

const [ $pauseButton ] = utils.$('.pause');

const animation = animate('.square', {
  x: '17rem',
  alternate: true,
  ease: 'inOutSine',
  loop: true,
  delay: stagger(100),
});

const pauseAnimation = () => animation.pause();

$pauseButton.addEventListener('click', pauseAnimation);
```

---

#### restart() (Animation)

Resets all properties and sets the `currentTime` of an animation to `0`. If `autoplay` is set to `true`, the animation plays automatically.

**Returns:** The animation itself (can be chained with other animation methods)

**Example:**

```js
import { animate, utils, stagger } from 'animejs';

const [ $restartButton ] = utils.$('.restart');

const animation = animate('.square', {
  x: '17rem',
  direction: 'alternate',
  ease: 'inOutSine',
  loop: true,
  delay: stagger(100)
});

const restartAnimation = () => animation.restart();

$restartButton.addEventListener('click', restartAnimation);
```

---

#### alternate() (Animation) (V4)

Toggles the playback direction while adjusting the `currentTime` position to reflect the new time progress.

**Returns:** The animation itself (can be chained with other animation methods)

**Example:**

```js
import { animate, utils, stagger } from 'animejs';

const [ $alternateButton ] = utils.$('.button');

const animation = animate('.square', {
  x: '17rem',
  ease: 'inOutSine',
  loop: true,
  delay: stagger(100),
});

const alternateAnimation = () => animation.alternate();

$alternateButton.addEventListener('click', alternateAnimation);
```

---

#### resume() (Animation) (V4)

Resumes the playback of a paused animation in its current direction.

**Returns:** The animation itself (can be chained with other animation methods)

**Example:**

```js
import { animate, utils, stagger } from 'animejs';

const [ $pauseButton, $alternateButton, $resumeButton ] = utils.$('.button');

const animation = animate('.square', {
  x: '17rem',
  ease: 'inOutSine',
  loop: true,
  delay: stagger(100),
});

const pauseAnimation = () => animation.pause();
const alternateAnimation = () => animation.alternate();
const resumeAnimation = () => animation.resume();

$pauseButton.addEventListener('click', pauseAnimation);
$alternateButton.addEventListener('click', alternateAnimation);
$resumeButton.addEventListener('click', resumeAnimation);
```

---

#### complete() (Animation) (V4)

Completes the animation instantly.

**Returns:** The animation itself (can be chained with other animation methods)

**Example:**

```js
import { animate, utils, stagger } from 'animejs';

const [ $completeButton ] = utils.$('.complete');

const animation = animate('.square', {
  x: '17rem',
  alternate: true,
  ease: 'inOutSine',
  loop: true,
  delay: stagger(100),
});

const completeAnimation = () => animation.complete();

$completeButton.addEventListener('click', completeAnimation);
```

---

#### cancel() (Animation) (V4)

Pauses the animation, removes it from the engine's main loop, and frees up memory.

**Returns:** The animation itself (can be chained with other animation methods)

**Example:**

```js
import { animate, utils, stagger } from 'animejs';

const [ $cancelButton ] = utils.$('.cancel');
const [ $playButton ] = utils.$('.play');

const animation = animate('.square', {
  x: '17rem',
  alternate: true,
  ease: 'inOutSine',
  loop: true,
  delay: stagger(100),
});

const cancelAnimation = () => animation.cancel();
const playAnimation = () => animation.play();

$cancelButton.addEventListener('click', cancelAnimation);
$playButton.addEventListener('click', playAnimation);
```

---

#### revert() (Animation) (V4)

Cancels the animation, reverts all its animated values to their original state, cleans up the CSS inline styles, and reverts the linked `onScroll()` instance if necessary.

Use `revert()` when you want to completely stop and destroy an animation.

**Returns:** The animation itself (can be chained with other animation methods)

**Example:**

```js
import { animate, utils, stagger } from 'animejs';

const [ $revertButton ] = utils.$('.revert');
const [ $restartButton ] = utils.$('.restart');

// Set an initial translateX value
utils.set('.square', { x: '17rem' });

const animation = animate('.square', {
  x: 0,
  alternate: true,
  ease: 'inOutSine',
  loop: true,
  delay: stagger(100),
});

const revertAnimation = () => animation.revert();
const restartAnimation = () => animation.restart();

$revertButton.addEventListener('click', revertAnimation);
$restartButton.addEventListener('click', restartAnimation);
```

---

#### reset() (Animation) (JS)

Pauses and resets `currentTime`, `progress`, `reversed`, `began`, `completed` properties to their default values.

```js
animation.reset(softReset);
```

**Parameters:**

| Name                    | Type      | Description                                              |
|-------------------------|-----------|----------------------------------------------------------|
| `softReset` *(optional)* | `Boolean` | If `true`, only reset internal values without visual render |

**Returns:** The animation itself (can be chained with other animation methods)

**Example:**

```js
import { animate, utils, stagger } from 'animejs';

const [ $hardReset, $softReset ] = utils.$('.button');

const animation = animate('.square', {
  x: '17rem',
  alternate: true,
  ease: 'inOutSine',
  loop: true,
  delay: stagger(100),
});

const hardReset = () => animation.reset();
const softReset = () => animation.reset(true);

$hardReset.addEventListener('click', hardReset);
$softReset.addEventListener('click', softReset);
```

---

#### seek() (Animation)

Updates the `currentTime` of the animation and advances it to a specific time.

```js
animation.seek(time, muteCallbacks);
```

**Parameters:**

| Name                       | Type      | Description                                    |
|----------------------------|-----------|------------------------------------------------|
| `time`                     | `Number`  | The new `currentTime` in ms of the animation   |
| `muteCallbacks` *(optional)* | `Boolean` | If `true`, prevent callbacks from being fired  |

**Returns:** The animation itself (can be chained with other animation methods)

**Example:**

```js
import { animate, utils, stagger } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $playPauseButton ] = utils.$('.play-pause');

const updateButtonLabel = animation => {
  $playPauseButton.textContent = animation.paused ? 'Play' : 'Pause';
}

const animation = animate('.square', {
  x: '17rem',
  ease: 'inOutSine',
  duration: 1750,
  delay: stagger(250),
  autoplay: false,
  onUpdate: self => {
    $range.value = self.currentTime;
    updateButtonLabel(self);
  },
  onComplete: updateButtonLabel,
});

const seekAnimation = () => animation.seek(+$range.value);

const playPauseAnimation = () => {
  if (animation.paused) {
    animation.play();
  } else {
    animation.pause();
    updateButtonLabel(animation);
  }
}

$range.addEventListener('input', seekAnimation);
$playPauseButton.addEventListener('click', playPauseAnimation);
```

---

#### stretch() (Animation) (V4) (JS)

Changes the total duration of an animation and its tweens duration to fit a specific time. The total duration equals the duration of an iteration multiplied by the total number of iterations. So if an animation is `1000ms` and loops twice (3 iterations total), the total duration will be `3000ms` (1000 × 3).

```js
animation.stretch(duration);
```

**Parameters:**

| Name       | Type     | Description                                  |
|------------|----------|----------------------------------------------|
| `duration` | `Number` | The new total duration in ms of the animation |

> **Note:** Stretching an animation to `0` will also set all its tweens' durations to `0`, which will make them all the same length on subsequent calls to `stretch()`.

**Returns:** The animation itself (can be chained with other animation methods)

**Example:**

```js
import { animate, utils, stagger } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $totalDuration ] = utils.$('.value');

const animation = animate('.square', {
  x: '17rem',
  ease: 'inOutSine',
  delay: stagger(200),
});

const stretchAnimation = () => {
  const newDuration = +$range.value;
  $totalDuration.textContent = newDuration;
  animation.stretch(newDuration).restart();
}

stretchAnimation();

$range.addEventListener('input', stretchAnimation);
```

---

#### refresh() (Animation) (V4) (JS)

Re-computes animated properties values defined with a Function based value by updating the `from` values to the current target values, and the `to` values to the newly computed values.

> **Note:** Only the animatable properties values are re-calculated. `duration` and `delay` cannot be refreshed.

**Returns:** The animation itself (can be chained with other animation methods)

**Example:**

```js
import { animate, utils } from 'animejs';

const [ $refreshButton ] = utils.$('.refresh');

const animation = animate('.square', {
  x: () => utils.random(0, 17) + 'rem',
  y: () => utils.random(-1, 1) + 'rem',
  rotate: () => utils.random(-360, 360, 1),
  scale: () => utils.random(.1, 1.5, 2),
  duration: 750,
  loop: true,
  onLoop: self => self.refresh()
});

const refreshAnimation = () => animation.refresh().restart();

$refreshButton.addEventListener('click', refreshAnimation);
```

---

### Animation Properties

Properties available on the `Animation` instance returned by the `animate()` and `waapi.animate()` functions.

```
const animation = animate(targets, parameters);
          ┌────────────┐
animation.│targets     │
animation.│currentTime ├─ Properties
animation.│duration    │
          └────────────┘
```

> **Note:** Properties exclusive to the JS version of `animate()` are marked with a **(JS)** badge.

| Name                   | Description                                                        |
|------------------------|--------------------------------------------------------------------|
| `id` (JS)              | Gets and sets the ID of the animation (`String` \| `Number`)       |
| `targets`              | Gets the current animation targets (`Array`)                       |
| `currentTime`          | Gets and sets the global current time in ms of the animation (`Number`) |
| `iterationCurrentTime` (JS) | Gets and sets the current iteration time in ms (`Number`)     |
| `deltaTime` (JS)       | Gets the time in ms elapsed between the current and previous frame (`Number`) |
| `progress`             | Gets and sets the overall progress of the animation from `0` to `1` (`Number`) |
| `iterationProgress` (JS) | Gets and sets the progress of the current iteration from `0` to `1` (`Number`) |
| `currentIteration` (JS) | Gets and sets the current iteration count (`Number`)              |
| `duration`             | Gets the total duration in ms of the animation (`Number`)          |
| `speed`                | Gets and sets the speed multiplier of the animation (`Number`)     |
| `fps` (JS)             | Gets and sets the fps of the animation (`Number`)                  |
| `paused`               | Gets and sets whether the animation is paused (`Boolean`)          |
| `began` (JS)           | Gets and sets whether the animation has started (`Boolean`)        |
| `completed`            | Gets and sets whether the animation has completed (`Boolean`)      |
| `reversed` (JS)        | Gets and sets whether the animation is reversed (`Boolean`)        |

---

## Timeline

Synchronises animations, timers, and callbacks together.

### Creating a Timeline

Timelines are created using the `createTimeline()` method imported from the main `'animejs'` module:

```js
import { createTimeline } from 'animejs';

const timeline = createTimeline(parameters);
```

Or imported as a standalone module from the `'animejs/timeline'` subpath:

```js
import { createTimeline } from 'animejs/timeline';
```

### Parameters

| Name         | Accepts                                              |
|--------------|------------------------------------------------------|
| `parameters` | *(optional)* An `Object` of Timeline playback settings and Timeline callbacks |

### Returns

`Timeline`

A `Timeline` instance exposes methods used to add animations, timers, callbacks and labels to it:

```js
timeline.add(target, animationParameters, position);
timeline.add(timerParameters, position);
timeline.sync(timelineB, position);
timeline.call(callbackFunction, position);
timeline.label(labelName, position);
```

### Example: Timeline

```js
import { createTimeline } from 'animejs';

const tl = createTimeline({ defaults: { duration: 750 } });

tl.label('start')
  .add('.square', { x: '15rem' }, 500)
  .add('.circle', { x: '15rem' }, 'start')
  .add('.triangle', { x: '15rem', rotate: '1turn' }, '<-=500');
```

---

### Timeline Subsections

- Add timers
- Add animations
- Sync WAAPI animations
- Sync timelines
- Call functions
- Time position
- Playback settings
- Callbacks
- Methods
- Properties

---

### Add Timers (V4)

Timers can be added to a timeline using the `add()` method or the `sync()` method.

**Timer Creation** — Creates and adds a timer directly to the timeline using the `add()` method:

```js
timeline.add(parameters, position);
```

| Name         | Accepts                                              |
|--------------|------------------------------------------------------|
| `parameters` | An `Object` of Timer playback settings and Timer callbacks |
| `position` *(optional)* | Time position                           |

**Timer Synchronisation** — Synchronises an existing timer with the `sync()` method:

```js
timeline.sync(timer, position);
```

| Name       | Accepts                    |
|------------|----------------------------|
| `timer`    | Timer                      |
| `position` *(optional)* | Time position |

**Returns:** The timeline itself (can be chained with other timeline methods)

**Example:**

```js
import { createTimeline, createTimer, utils } from 'animejs';

const [ $timer01, $timer02, $timer03 ] = utils.$('.timer');

const timer1 = createTimer({
  duration: 1500,
  onUpdate: self => $timer01.innerHTML = self.currentTime,
});

const tl = createTimeline()
.sync(timer1)
.add({
  duration: 500,
  onUpdate: self => $timer02.innerHTML = self.currentTime,
})
.add({
  onUpdate: self => $timer03.innerHTML = self.currentTime,
  duration: 1000
});
```

---

### Add Animations

Animations can be added to a timeline using the `add()` method or the `sync()` method.

**Animation Creation** — Creates and adds an animation directly to the timeline with the `add()` method. This allows tween value composition with the timeline's existing children:

```js
timeline.add(targets, parameters, position);
```

| Name         | Accepts                                              |
|--------------|------------------------------------------------------|
| `targets`    | Targets                                              |
| `parameters` | An `Object` of Animatable properties, Tween parameters, Playback settings and Animation callbacks |
| `position` *(optional)* | Time position                           |

**Animation Synchronisation** — Synchronises an existing animation with the `sync()` method. Tween value composition is handled when the animation is created, and won't affect the timeline's existing children when added:

```js
const animation = animate(target, { x: 100 });

timeline.sync(animation, position);
```

| Name        | Accepts                    |
|-------------|----------------------------|
| `animation` | Animation                  |
| `position` *(optional)* | Time position |

**Returns:** The timeline itself (can be chained with other timeline methods)

**Example:**

```js
import { createTimeline, animate } from 'animejs';

const circleAnimation = animate('.circle', {
  x: '15rem'
});

const tl = createTimeline()
.sync(circleAnimation)
.add('.triangle', {
  x: '15rem',
  rotate: '1turn',
  duration: 500,
  alternate: true,
  loop: 2,
})
.add('.square', {
  x: '15rem',
});
```

---

### Sync WAAPI Animations (V4)

WAAPI animations can be synchronised to a timeline using the `sync()` method.

```js
timeline.sync(animation, position);
```

**Parameters:**

| Name       | Accepts                              |
|------------|--------------------------------------|
| `synced`   | Animation \| Timer \| Timeline       |
| `position` *(optional)* | Time position       |

**Returns:** The timeline itself (can be chained with other timeline methods)

**Example:**

```js
import { createTimeline, waapi } from 'animejs';

const circle = waapi.animate('.circle', {
  x: '15rem',
});

const triangle = waapi.animate('.triangle', {
  x: '15rem',
  y: [0, '-1.5rem', 0],
  ease: 'out(4)',
  duration: 750,
});

const square = waapi.animate('.square', {
  x: '15rem',
  rotateZ: 360,
});

const tl = createTimeline()
.sync(circle, 0)
.sync(triangle, 350)
.sync(square, 250);
```

---

### Sync Timelines (V4)

Timelines can be synchronised to another timeline using the `sync()` method.

```js
timelineA.sync(timelineB, position);
```

**Parameters:**

| Name       | Accepts                              |
|------------|--------------------------------------|
| `synced`   | Animation \| Timer \| Timeline       |
| `position` *(optional)* | Time position       |

**Returns:** The timeline itself (can be chained with other timeline methods)

**Example:**

```js
import { createTimeline, animate } from 'animejs';

const circleAnimation = animate('.circle', {
  x: '15rem'
});

const tlA = createTimeline()
.sync(circleAnimation)
.add('.triangle', {
  x: '15rem',
  duration: 2000,
})
.add('.square', {
  x: '15rem',
});

const tlB = createTimeline({ defaults: { duration: 2000 } })
.add(['.triangle', '.square'], {
  rotate: 360,
}, 0)
.add('.circle', {
  scale: [1, 1.5, 1],
}, 0);

const tlMain = createTimeline()
.sync(tlA)
.sync(tlB, '-=2000');
```

---

### Call Functions (V4)

Functions are added to a timeline with the `call()` method.

```js
timeline.call(callback, position);
```

**Parameters:**

| Name       | Accepts                    |
|------------|----------------------------|
| `callback` | `Function`                 |
| `position` *(optional)* | Time position |

**Returns:** The timeline itself (can be chained with other timeline methods)

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $functionA ] = utils.$('.function-A');
const [ $functionB ] = utils.$('.function-B');
const [ $functionC ] = utils.$('.function-C');

const tl = createTimeline()
.call(() => $functionA.innerHTML = 'A', 0)
.call(() => $functionB.innerHTML = 'B', 800)
.call(() => $functionC.innerHTML = 'C', 1200);
```

---

### Time Position

Specifies the time at which a timeline child is inserted into a timeline. If no position is defined, the child will be positioned at the end of the timeline.

The time position is defined as the last parameter of the following methods:

```js
timeline.add(target, animationParameters, position);
timeline.add(timerParameters, position);
timeline.call(callbackFunction, position);
timeline.sync(labelName, position);
timeline.label(labelName, position);
```

**Time Position Types:**

| Type                    | Example       | Description                                              |
|-------------------------|---------------|----------------------------------------------------------|
| Absolute                | `500`         | Position the element at exactly 500ms in the timeline    |
| Addition                | `'+=100'`     | Position the element 100ms after the last element        |
| Subtraction             | `'-=100'`     | Position the element 100ms before the last element end   |
| Multiplier              | `'*=.5'`      | Position the element at half of the total element duration |
| Previous end position   | `'<'`         | Position the element at the end position of the previous element |
| Previous start position | `'<<'`        | Position the element at the start position of the previous element |
| Combined                | `'<<+=250'`   | Position the element 250ms after the beginning position of the previous element |
| Label                   | `'My Label'`  | Position the element at the `'My Label'` label           |
| Stagger                 | `stagger(10)` | Stagger the elements position by `10`                    |

**Example:**

```js
import { createTimeline } from 'animejs';

const tl = createTimeline()
.label('start', 0)
.add('.square', {
  x: '15rem',
  duration: 500,
}, 500)
.add('.circle', {
  x: '15rem',
  duration: 500,
}, 'start')
.add('.triangle', {
  x: '15rem',
  rotate: '1turn',
  duration: 500,
}, '<-=250');
```

---

### Timeline Playback Settings

Specify the timings and behaviours of a timeline. Timeline playback settings are defined directly in the `createTimeline()` parameters `Object`.

```
createTimeline({
┌───────────────────┐
│ defaults: {       │
│   ease: 'out(3)', │
│   duration: 500,  │
│ },                ├─ Playback Settings
│ loop: 3,          │
│ alternate: true,  │
│ autoplay: false,  │
└───────────────────┘
  onBegin: () => {},
  onLoop: () => {},
  onUpdate: () => {},
});
```

**Available playback settings:**
- defaults
- delay
- loop
- loopDelay
- alternate
- reversed
- autoplay
- frameRate
- playbackRate
- playbackEase

---

#### defaults (V4)

Defines default parameters for the timeline children.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | An `Object` of Tween parameters (except `from` and `to`), Playback settings, and Callbacks |

**Example:**

```js
import { createTimeline } from 'animejs';

const tl = createTimeline({
  defaults: {
    ease: 'inOutExpo',
    duration: 500,
    loop: 2,
    reversed: true,
    alternate: true,
  }
})
.add('.square', { x: '15rem' })
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' });
```

---

#### delay (Timeline)

Defines the delay, in milliseconds, before the timeline starts.

| Property | Value                  |
|----------|------------------------|
| Accepts  | `Number` ≥ `0`         |
| Default  | `0`                    |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.delay = 500;
```

**Example:**

```js
import { createTimeline, createTimer, utils } from 'animejs';

const tl = createTimeline({
  delay: 2000,
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' }, '-=500')
.add('.square', { x: '15rem' }, '-=500');

// For logging delayed time only
const [ $time ] = utils.$('.time');

createTimer({
  duration: 2000 + tl.duration,
  onUpdate: self => $time.innerHTML = (2000 - self.currentTime) * -1,
});
```

---

#### loop (Timeline)

Defines how many times a timeline repeats.

| Value      | Effect                                 |
|------------|----------------------------------------|
| `Number`   | The number of loops in the range `[0, Infinity]` |
| `Infinity` | Loop indefinitely                      |
| `true`     | Equivalent to `Infinity`               |
| `-1`       | Equivalent to `Infinity`               |

| Property | Value |
|----------|-------|
| Default  | `0`   |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.loop = true;
```

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $loops ] = utils.$('.loops');

let loops = 0;

const tl = createTimeline({
  loop: true,
  onLoop: self => $loops.innerHTML = ++loops,
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' }, '-=500')
.add('.square', { x: '15rem' }, '-=500');
```

---

#### loopDelay (Timeline) (V4)

Defines the delay in milliseconds between each loop.

| Property | Value                  |
|----------|------------------------|
| Accepts  | `Number` ≥ `0`         |
| Default  | `0`                    |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.loopDelay = 500;
```

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $loops ] = utils.$('.loops');

const tl = createTimeline({
  loopDelay: 500,
  loop: true,
  onLoop: self => $loops.innerHTML = self._currentIteration,
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' }, '-=500')
.add('.square', { x: '15rem' }, '-=500');
```

---

#### alternate (Timeline)

Defines if the direction of the timeline alternates on each iteration when the `loop` parameter is set to `true` or greater than `1`.

| Property | Value     |
|----------|-----------|
| Accepts  | `Boolean` |
| Default  | `false`   |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.alternate = true;
```

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $loops ] = utils.$('.loops');

let loops = 0;

const tl = createTimeline({
  loop: true,
  alternate: true,
  onLoop: self => $loops.innerHTML = ++loops,
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' }, '-=500')
.add('.square', { x: '15rem' }, '-=500');
```

---

#### reversed (Timeline)

Defines the initial direction of the timeline.

| Property | Value     |
|----------|-----------|
| Accepts  | `Boolean` |
| Default  | `false`   |

| Value   | Effect                         |
|---------|--------------------------------|
| `true`  | The timeline plays backwards   |
| `false` | The timeline plays forwards    |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.reversed = true;
```

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $time ] = utils.$('.time');

const tl = createTimeline({
  reversed: true,
  onUpdate: self => $time.innerHTML = self.currentTime
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' }, '-=500')
.add('.square', { x: '15rem' }, '-=500');
```

---

#### autoplay (Timeline)

Defines the play mode of a timeline.

| Property | Value                         |
|----------|-------------------------------|
| Accepts  | `Boolean` \| `onScroll()`     |
| Default  | `true`                        |

| Value        | Effect                                                    |
|--------------|-----------------------------------------------------------|
| `true`       | The timeline plays automatically                          |
| `false`      | The timeline has to be manually played                    |
| `onScroll()` | The timeline starts when scroll threshold conditions are met |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.autoplay = false;
```

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $paused ] = utils.$('.paused');
const [ $play ] = utils.$('.play');

const tl = createTimeline({
  autoplay: false,
  onUpdate: self => $paused.innerHTML = !!self.paused,
  onComplete: self => $paused.innerHTML = !!self.paused
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' }, '-=500')
.add('.square', { x: '15rem' }, '-=500');

const playTl = () => tl.paused ? tl.restart() : tl.play();

$play.addEventListener('click', playTl);
```

---

#### frameRate (Timeline) (V4)

Determines the number of frames per second (fps) a timeline is played at. This value can be modified later with `timeline.fps = 30`.

| Property | Value                       |
|----------|-----------------------------|
| Accepts  | `Number` > `0`              |
| Default  | `120`                       |

> **Note:** The frame rate is capped to the monitor refresh rate or in some cases by the browser itself.

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.frameRate = 30;
```

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $fps ] = utils.$('.fps');

const tl = createTimeline({
  frameRate: 60,
  loop: true,
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' }, '-=500')
.add('.square', { x: '15rem' }, '-=500');

const updateFps = () => {
  const { value } = $range;
  $fps.innerHTML = value;
  tl.fps = value;
}

$range.addEventListener('input', updateFps);
```

---

#### playbackRate (Timeline) (V4)

Defines a speed multiplier to speed up or slow down a timeline. This value can be modified later with `timeline.speed = .5`.

| Property | Value                       |
|----------|-----------------------------|
| Accepts  | `Number` ≥ `0`              |
| Default  | `1`                         |

> **Note:** If set to `0` the timeline won't play.

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.playbackRate = .75;
```

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $speed ] = utils.$('.speed');

const tl = createTimeline({
  playbackRate: 2,
  loop: true,
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' }, '-=500')
.add('.square', { x: '15rem' }, '-=500');

const updateSpeed = () => {
  const speed = utils.roundPad(+$range.value, 1);
  $speed.innerHTML = speed;
  utils.sync(() => tl.speed = speed);
}

$range.addEventListener('input', updateSpeed);
```

---

#### playbackEase (Timeline) (V4)

Applies an easing function to the entire playback of the timeline.

```
0 ──────────playbackEase──────────› 1
A ──ease──› B ──ease──› C ──ease──› D
```

| Property | Value  |
|----------|--------|
| Accepts  | ease   |
| Default  | `null` |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.playbackEase = 'inOut';
```

**Example:**

```js
import { createTimeline } from 'animejs';

const tl = createTimeline({
  playbackEase: 'inOut(3)', // this ease is applied across all children
})
.add('.circle', { x: '15rem', ease: 'out(1)' })
.add('.triangle', { x: '15rem', ease: 'out(2)' })
.add('.square', { x: '15rem', ease: 'out(3)' });
```

---

### Timeline Callbacks

Execute functions at specific points during a timeline playback. Timeline callback functions are defined directly in the `createTimeline()` parameters `Object`.

```
createTimeline({
  defaults: {
    ease: 'out(3)',
    duration: 500,
  },
  loop: 3,
  alternate: true,
  autoplay: false,
┌─────────────────────┐
│ onBegin: () => {},  │
│ onLoop: () => {},   ├─ Callbacks
│ onUpdate: () => {}, │
└─────────────────────┘
});
```

**Available callbacks:**
- onBegin
- onComplete
- onBeforeUpdate
- onUpdate
- onRender
- onLoop
- onPause
- then()

---

#### onBegin (Timeline)

Executes a function when a timeline begins to play.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the timeline itself |
| Default  | `noop`                                             |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.onBegin = self => console.log(self.id);
```

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $value ] = utils.$('.value');

const tl = createTimeline({
  delay: 1000, // Delays the onBegin() callback by 1000ms
  onBegin: self => $value.textContent = self.began
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' })
.add('.square', { x: '15rem' });
```

---

#### onComplete (Timeline)

Executes a function when all the iterations (loops) of a timeline have finished playing.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the timeline itself |
| Default  | `noop`                                             |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.onComplete = self => console.log(self.id);
```

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $value ] = utils.$('.value');

const tl = createTimeline({
  defaults: { duration: 500 },
  loop: 1,
  onComplete: self => $value.textContent = self.completed
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' })
.add('.square', { x: '15rem' });
```

---

#### onBeforeUpdate (Timeline)

Executes a function before updating the child animations values, on every frame of a running timeline at the specified `frameRate`.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the timeline itself |
| Default  | `noop`                                             |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.onBeforeUpdate = self => console.log(self.id);
```

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let updates = 0;

const tl = createTimeline({
  defaults: { duration: 500 },
  loopDelay: 250,
  loop: true,
  onBeforeUpdate: self => $value.textContent = ++updates
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' }, '+=250')
.add('.square', { x: '15rem' }, '+=250');
```

---

#### onUpdate (Timeline)

Executes a function on every frame of a running timeline at the specified `frameRate`.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the timeline itself |
| Default  | `noop`                                             |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.onUpdate = self => console.log(self.id);
```

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let updates = 0;

const tl = createTimeline({
  defaults: { duration: 500 },
  loopDelay: 250,
  loop: true,
  onUpdate: self => $value.textContent = ++updates
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' }, '+=250')
.add('.square', { x: '15rem' }, '+=250');
```

---

#### onRender (Timeline) (V4)

Executes a function every time a timeline renders something on the screen. This means that no rendering is happening when the `currentTime` is inside the `delay` or `loopDelay` time frames, or if none of its children are rendering.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the timeline itself |
| Default  | `noop`                                             |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.onRender = self => console.log(self.id);
```

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let renders = 0;

const tl = createTimeline({
  defaults: { duration: 500 },
  loopDelay: 250,
  loop: true,
  onRender: self => $value.textContent = ++renders
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' }, '+=250')
.add('.square', { x: '15rem' }, '+=250');
```

---

#### onLoop (Timeline) (V4)

Executes a function every time a timeline iteration completes.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the timeline itself |
| Default  | `noop`                                             |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.onLoop = self => console.log(self.id);
```

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let loops = 0;

const tl = createTimeline({
  defaults: { duration: 500 },
  loopDelay: 500,
  loop: true,
  onLoop: self => $value.textContent = ++loops
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' })
.add('.square', { x: '15rem' });
```

---

#### onPause (Timeline) (V4)

Executes a function when a running timeline is paused, either manually or automatically.

A timeline pauses when any of the following occurs during playback:
- The `.pause()` method is called
- The `.cancel()` method is called
- The `.revert()` method is called
- All child animation tweens are overlapped by another timeline or animation with `composition: 'replace'`
- All child animation targets have been removed and no other timers are active

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the timeline itself |
| Default  | `noop`                                             |

To change the default value globally, update the `engine.defaults` object:

```js
import { engine } from 'animejs';
engine.defaults.onPause = self => console.log(self.id);
```

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $animateButton, $pauseButton, $removeButton ] = utils.$('.button');
const [ $value ] = utils.$('.value');
const shapes = utils.$('.shape');
const [ $triangle, $square, $circle ] = shapes;

let paused = 0;
let alternate = 0;
let tl;

const animateShapes = () => {
  alternate = !alternate;
  const x = (alternate ? 15 : 0) + 'rem';
  const rotate = (alternate ? 360 : -360);
  tl = createTimeline({
    defaults: { duration: 2000 },
    onPause: () => $value.textContent = ++paused
  })
  .add($circle, { x }, 0)
  .add($triangle, { x }, 0)
  .add($square, { x }, 0)
  .add(shapes, { rotate }, 0);
}

const pauseTL = () => {
  if (tl) tl.pause();
}

const removeTargets = () => {
  utils.remove(shapes);
}

animateShapes();

$animateButton.addEventListener('click', animateShapes);
$pauseButton.addEventListener('click', pauseTL);
$removeButton.addEventListener('click', removeTargets);
```

---

#### then() (Timeline) (V4)

Returns a `Promise` that resolves and executes a callback when the timeline completes.

The `then()` method can be directly inlined:

```js
createTimeline(parameters).add(targets, parameters).then(callback);
```

Or used in an `async`/`await` context:

```js
async function waitForTimelineToComplete() {
  return createTimeline()
  .add('.square', { x: 100 })
  .add('.square', { y: 100 });
}

const asyncTimeline = await waitForTimelineToComplete();
```

**Parameters:**

| Name       | Type                                               |
|------------|----------------------------------------------------|
| `callback` | A `Function` whose first argument is the timeline itself |

**Returns:** `Promise`

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $value ] = utils.$('.value');

const tl = createTimeline({
  defaults: { duration: 500 },
  loop: 1,
})
.add('.circle', { x: '15rem' })
.add('.triangle', { x: '15rem' })
.add('.square', { x: '15rem' });

tl.then(() => $value.textContent = 'fulfilled');
```

---

### Timeline Methods

Methods available on the `Timeline` instance returned by a `createTimeline()` function, providing control over the timing, behaviour, and progression of a timeline.

```
const timeline = createTimeline(parameters);
         ┌──────────┐
timeline.│pause()   │
timeline.│play()    ├─ Methods
timeline.│restart() │
         └──────────┘
```

**Available methods:**
- add()
- set()
- sync()
- label()
- remove()
- call()
- init()
- play()
- reset()
- reverse()
- pause()
- restart()
- alternate()
- resume()
- complete()
- cancel()
- revert()
- seek()
- stretch()
- refresh()

---

#### add() (Timeline) (V4)

Creates and adds animations and timers to a timeline. The type of element added to the timeline depends on the parameters passed to `add()`.

**Add animation:**

```js
timeline.add(targets, parameters, position);
```

| Parameter    | Accepts                                              |
|--------------|------------------------------------------------------|
| `targets`    | Targets                                              |
| `parameters` | Animatable properties & Tween parameters & Animation playback settings & Animation callbacks |
| `position` *(optional)* | Time position                           |

**Add timer:**

```js
timeline.add(timerParameters, position);
```

| Parameter          | Accepts                                   |
|--------------------|-------------------------------------------|
| `timerParameters`  | Timer playback settings & Timer callbacks |
| `position` *(optional)* | Time position                        |

**Returns:** The timeline itself (can be chained with other timeline methods)

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $value ] = utils.$('.value');

const tl = createTimeline()
// Add labels
.label('start timer 1', 0)
.label('animate circle', 1000)
.label('start timer 2', 2000)
// Add Timer
.add({
  duration: 1000,
  onUpdate: self => $value.innerHTML = self.currentTime,
}, 'start timer 1')
// Add Animation
.add('.circle', {
  duration: 2000,
  x: '16rem',
}, 'animate circle')
// Add Timer
.add({
  duration: 1000,
  onUpdate: self => $value.innerHTML = self.currentTime,
}, 'start timer 2');
```

---

#### set() (Timeline) (V4)

Instantly sets target property values at a specific time of the timeline.

```js
timeline.set(targets, parameters, position);
```

**Parameters:**

| Name         | Accepts                    |
|--------------|----------------------------|
| `targets`    | Targets                    |
| `parameters` | Animatable properties      |
| `position` *(optional)* | Time position |

**Returns:** The timeline itself (can be chained with other timeline methods)

**Example:**

```js
import { createTimeline } from 'animejs';

const tl = createTimeline()
.set('.circle', { x: '15rem' })
.set('.triangle', { x: '15rem' }, 500)
.set('.square', { x: '15rem' }, 1000);
```

---

#### sync() (Timeline) (V4)

Synchronises a JS animation, WAAPI Animation, timer, timeline or even a native WAAPI Animation to a timeline.

```js
const tlChild = createTimeline().add(target, { x: 100 }).add(target, { y: 100 });

createTimeline().sync(tlChild);
```

> **Note:** Tween value composition is handled when the timeline is created, and won't affect the timeline's existing children when added.

**Parameters:**

| Name       | Accepts                                                              |
|------------|----------------------------------------------------------------------|
| `synced`   | JSAnimation \| Timer \| Timeline \| Anime.js WAAPIAnimation \| WAAPIAnimation |
| `position` *(optional)* | Time position                                           |

**Returns:** The timeline itself (can be chained with other timeline methods)

**Example:**

```js
import { createTimeline, animate, waapi } from 'animejs';

const circleAnimation = waapi.animate('.circle', {
  x: '15rem'
});

const tlA = createTimeline()
.sync(circleAnimation)
.add('.triangle', {
  x: '15rem',
  duration: 2000,
})
.add('.square', {
  x: '15rem',
});

const tlB = createTimeline({ defaults: { duration: 2000 } })
.add(['.triangle', '.square'], {
  rotate: 360,
}, 0)
.add('.circle', {
  scale: [1, 1.5, 1],
}, 0);

const tlMain = createTimeline()
.sync(tlA)
.sync(tlB, '-=2000');
```

---

#### label() (Timeline) (V4)

Associates specific time positions with label names for easy reference within the timeline. Once added to a timeline, a label can be used as a Time position.

```js
timeline.label(labelName, position);
```

**Parameters:**

| Name        | Accepts                    |
|-------------|----------------------------|
| `labelName` | `String`                   |
| `position` *(optional)* | Time position |

**Returns:** The timeline itself (can be chained with other timeline methods)

**Example:**

```js
import { createTimeline } from 'animejs';

const tl = createTimeline()
.label('circle', 0)
.label('square', 500)
.label('triangle', 1000)
.add('.square', {
  x: '17rem',
  duration: 500,
}, 'square')
.add('.circle', {
  x: '13rem',
  duration: 1000,
}, 'circle')
.add('.triangle', {
  x: '15rem',
  rotate: '1turn',
  duration: 500,
}, 'triangle');
```

---

#### remove() (Timeline) (V4)

Removes animations, timers, timelines, targets or specific tween properties from the timeline.

The timeline will pause automatically if all targets, animations, timers and timelines are removed.

> **Note:** Removing items from a timeline doesn't affect its duration. If you need to change the shape and duration of the timeline, you should create a new timeline instead.

**Removing animations, timers or timelines:**

```js
timeline.remove([animation, timer, timeline]);
```

| Parameter  | Accepts                              |
|------------|--------------------------------------|
| `object`   | Animation \| Timer \| Timeline       |

**Removing targets:**

```js
timeline.remove(targets);
```

| Parameter | Accepts |
|-----------|---------|
| `targets` | Targets |

**Removing target properties:**

```js
timeline.remove(targets, propertyName);
```

| Parameter      | Accepts                           |
|----------------|-----------------------------------|
| `targets`      | Targets                           |
| `propertyName` | A valid Animatable properties `String` |

**Returns:** The timeline itself (can be chained with other timeline methods)

**Example:**

```js
import { animate, createTimeline, utils } from 'animejs';

const [ $removeA, $removeB, $removeC ] = utils.$('.button');

const animation = animate('.circle', { x: '15rem', scale: [1, .5, 1] });

const tl = createTimeline({ loop: true, alternate: true })
.sync(animation)
.add('.triangle', { x: '15rem', rotate: 360 }, 100)
.add('.square',   { x: '15rem' }, 200);

const removeAnimation = () => tl.remove(animation);
const removeTarget = () => tl.remove('.square');
const removeRotate = () => tl.remove('.triangle', 'rotate');

$removeA.addEventListener('click', removeAnimation);
$removeB.addEventListener('click', removeTarget);
$removeC.addEventListener('click', removeRotate);
```

---

#### call() (Timeline) (V4)

Calls the passed function callback at the specified time position.

```js
timeline.call(callback, position);
```

**Parameters:**

| Name       | Accepts                    |
|------------|----------------------------|
| `callback` | `Function`                 |
| `position` *(optional)* | Time position |

**Returns:** The timeline itself (can be chained with other timeline methods)

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $functionA ] = utils.$('.function-A');
const [ $functionB ] = utils.$('.function-B');
const [ $functionC ] = utils.$('.function-C');

const tl = createTimeline()
.call(() => $functionA.innerHTML = 'A', 0)
.call(() => $functionB.innerHTML = 'B', 800)
.call(() => $functionC.innerHTML = 'C', 1200);
```

---

#### init() (Timeline) (V4)

Initialises the initial values of all the elements of a timeline.

Animations with specific initial values added to a timeline are not automatically set to their `from` state like a normal call to `animate()` would. Instead, they are initialised when the timeline playhead reaches the element in the timeline.

This is where `.init()` comes in handy — it forces a render of all the children's initial state and updates their values.

**Returns:** The timeline itself (can be chained with other timeline methods)

**Example:**

```js
import { createTimeline } from 'animejs';

const tl = createTimeline()
.add('.square',   { x: { from: '15rem' } })
.add('.triangle', { x: { from: '15rem' } }, 500)
.add('.circle',   { x: { from: '15rem' } }, 1000)
.init();
```

---

#### play() (Timeline)

Forces the timeline to play forward.

**Returns:** The timeline itself (can be chained with other timeline methods)

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $playButton ] = utils.$('.play');

const tl = createTimeline({
  autoplay: false
})
.add('.circle',   { x: '15rem' })
.add('.triangle', { x: '15rem' }, 500)
.add('.square',   { x: '15rem' }, 1000);

const playTimeline = () => tl.play();

$playButton.addEventListener('click', playTimeline);
```

---

#### reset() (Timeline)

Pauses and resets `currentTime`, `progress`, `reversed`, `began`, `completed` properties to their default values.

```js
timeline.reset(softReset);
```

**Parameters:**

| Name                    | Type      | Description                                              |
|-------------------------|-----------|----------------------------------------------------------|
| `softReset` *(optional)* | `Boolean` | If `true`, only reset internal values without visual render |

**Returns:** The timeline itself (can be chained with other timeline methods)

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $reset ] = utils.$('.button');

const tl = createTimeline({
  loop: true,
  alternate: true
})
.add('.circle',   { x: '15rem' })
.add('.triangle', { x: '15rem' }, 500)
.add('.square',   { x: '15rem' }, 1000);

const resetTimeline = () => tl.reset();

$reset.addEventListener('click', resetTimeline);
```

---

#### reverse() (Timeline) (V4)

Forces the timeline to play backward.

**Returns:** The timeline itself (can be chained with other timeline methods)

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $reverseButton ] = utils.$('.reverse');

const tl = createTimeline()
.add('.circle',   { x: '15rem' })
.add('.triangle', { x: '15rem' }, 500)
.add('.square',   { x: '15rem' }, 1000);

const reverseTimeline = () => tl.reverse();

$reverseButton.addEventListener('click', reverseTimeline);
```

---

#### pause() (Timeline)

Pauses a running timeline.

**Returns:** The timeline itself (can be chained with other timeline methods)

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $pauseButton ] = utils.$('.pause');

const tl = createTimeline({
  loop: true,
  alternate: true,
})
.add('.circle',   { x: '15rem' })
.add('.triangle', { x: '15rem' }, 500)
.add('.square',   { x: '15rem' }, 1000);

const pauseTimeline = () => tl.pause();

$pauseButton.addEventListener('click', pauseTimeline);
```

---

#### restart() (Timeline)

Sets the `currentTime` of a timeline to `0` and resets all properties of the elements to their initial state. If the `autoplay` parameter is set to `true`, the timeline plays automatically.

**Returns:** The timeline itself (can be chained with other timeline methods)

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $restartButton ] = utils.$('.restart');

const tl = createTimeline({
  loop: true,
  alternate: true,
})
.add('.circle',   { x: '15rem' })
.add('.triangle', { x: '15rem' }, 500)
.add('.square',   { x: '15rem' }, 1000);

const restartTimeline = () => tl.restart();

$restartButton.addEventListener('click', restartTimeline);
```

---

#### alternate() (Timeline) (V4)

Toggles the playback direction while adjusting the `currentTime` position to reflect the new time progress.

**Returns:** The timeline itself (can be chained with other timeline methods)

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $alternateButton ] = utils.$('.button');

const tl = createTimeline({ loop: true })
.add('.circle',   { x: '15rem' })
.add('.triangle', { x: '15rem' }, 500)
.add('.square',   { x: '15rem' }, 1000);

const alternateTimeline = () => tl.alternate();

$alternateButton.addEventListener('click', alternateTimeline);
```

---

#### resume() (Timeline) (V4)

Resumes the playback of a paused timeline in its current direction.

**Returns:** The timeline itself (can be chained with other timeline methods)

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $pauseButton, $alternateButton, $resumeButton ] = utils.$('.button');

const tl = createTimeline({ loop: true })
.add('.circle',   { x: '15rem' })
.add('.triangle', { x: '15rem' }, 500)
.add('.square',   { x: '15rem' }, 1000);

const pauseTimeline = () => tl.pause();
const alternateTimeline = () => tl.alternate();
const resumeTimeline = () => tl.resume();

$pauseButton.addEventListener('click', pauseTimeline);
$alternateButton.addEventListener('click', alternateTimeline);
$resumeButton.addEventListener('click', resumeTimeline);
```

---

#### complete() (Timeline) (V4)

Completes the timeline instantly.

**Returns:** The timeline itself (can be chained with other timeline methods)

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $completeButton ] = utils.$('.complete');

const tl = createTimeline({
  loop: true,
})
.add('.circle',   { x: '15rem' })
.add('.triangle', { x: '15rem' }, 500)
.add('.square',   { x: '15rem' }, 1000);

const completeTimeline = () => tl.complete();

$completeButton.addEventListener('click', completeTimeline);
```

---

#### cancel() (Timeline) (V4)

Pauses the timeline, removes it from the engine's main loop, and frees up memory.

**Returns:** The timeline itself (can be chained with other timeline methods)

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $cancelButton ] = utils.$('.cancel');
const [ $playButton ] = utils.$('.play');

const tl = createTimeline({
  loop: true,
  alternate: true,
})
.add('.circle',   { x: '15rem' })
.add('.triangle', { x: '15rem' }, 500)
.add('.square',   { x: '15rem' }, 1000);

const cancelTimeline = () => tl.cancel();
const playTimeline = () => tl.play();

$cancelButton.addEventListener('click', cancelTimeline);
$playButton.addEventListener('click', playTimeline);
```

---

#### revert() (Timeline) (V4)

Cancels the timeline, reverts all its children's animated values to their original state, cleans up the CSS inline styles, and reverts the linked `onScroll()` instance if necessary.

Use `.revert()` when you want to completely stop and destroy a timeline.

**Returns:** The timeline itself (can be chained with other timeline methods)

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $revertButton ] = utils.$('.revert');
const [ $restartButton ] = utils.$('.restart');

// Set an initial x value
utils.set(['.circle', '.triangle', '.square'], { x: '15rem' });

const tl = createTimeline({
  loop: true,
  alternate: true,
})
.add('.circle',   { x: 0 })
.add('.triangle', { x: 0 }, 500)
.add('.square',   { x: 0 }, 1000);

const revertTimeline = () => tl.revert();
const restartTimeline = () => tl.restart();

$revertButton.addEventListener('click', revertTimeline);
$restartButton.addEventListener('click', restartTimeline);
```

---

#### seek() (Timeline)

Updates the `currentTime` of the timeline to a specific time.

```js
timeline.seek(time, muteCallbacks);
```

**Parameters:**

| Name                       | Type      | Description                                    |
|----------------------------|-----------|------------------------------------------------|
| `time`                     | `Number`  | The new `currentTime` in ms of the timeline    |
| `muteCallbacks` *(optional)* | `Boolean` | If `true`, prevent callbacks from being fired  |

**Returns:** The timeline itself (can be chained with other timeline methods)

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $playPauseButton ] = utils.$('.play-pause');

const updateButtonLabel = tl => {
  $playPauseButton.textContent = tl.paused ? 'Play' : 'Pause';
}

const tl = createTimeline({
  autoplay: false,
  onUpdate: self => {
    $range.value = self.currentTime;
    updateButtonLabel(self);
  },
  onComplete: updateButtonLabel,
})
.add('.circle',   { x: '15rem' })
.add('.triangle', { x: '15rem' }, 500)
.add('.square',   { x: '15rem' }, 1000);

const seekTimeline = () => tl.seek(+$range.value);

const playPauseTimeline = () => {
  if (tl.paused) {
    tl.play();
  } else {
    tl.pause();
    updateButtonLabel(tl);
  }
}

$range.addEventListener('input', seekTimeline);
$playPauseButton.addEventListener('click', playPauseTimeline);
```

---

#### stretch() (Timeline) (V4)

Changes the total duration of a timeline and its children to fit a specific time. The total duration equals the duration of an iteration multiplied by the total number of iterations. So if the timeline is `1000ms` and loops twice (3 iterations total), the total duration will be `3000ms` (1000 × 3).

```js
timeline.stretch(duration);
```

**Parameters:**

| Name       | Type     | Description                                   |
|------------|----------|-----------------------------------------------|
| `duration` | `Number` | The new total duration in ms of the timeline  |

**Returns:** The timeline itself (can be chained with other timeline methods)

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $totalDuration ] = utils.$('.value');

const tl = createTimeline({
  loop: 1,
  alternate: true,
})
.add('.circle',   { x: '15rem' })
.add('.triangle', { x: '15rem' }, 500)
.add('.square',   { x: '15rem' }, 1000);

const stretchTimeline = () => {
  const newDuration = +$range.value;
  $totalDuration.textContent = newDuration;
  tl.stretch(newDuration).restart();
}

stretchTimeline();

$range.addEventListener('input', stretchTimeline);
```

---

#### refresh() (Timeline) (V4)

Re-computes the timeline children's animated values defined with a Function based value by updating their `from` values to their current target values, and their `to` values to their newly computed values.

> **Note:** Only the animatable properties values are re-calculated. `duration` and `delay` cannot be refreshed.

**Returns:** The timeline itself (can be chained with other timeline methods)

**Example:**

```js
import { createTimeline, utils } from 'animejs';

const [ $refreshButton ] = utils.$('.refresh');

const tl = createTimeline({
  loop: true,
  onLoop: self => self.refresh()
})
.add('.circle',   { x: () => utils.random(0, 15) + 'rem' }, 0)
.add('.triangle', { x: () => utils.random(0, 15) + 'rem' }, 0)
.add('.square',   { x: () => utils.random(0, 15) + 'rem' }, 0);

const refreshTimeline = () => tl.refresh().restart();

$refreshButton.addEventListener('click', refreshTimeline);
```

---

### Timeline Properties

Properties available on the `Timeline` instance returned by a `createTimeline()` function.

```
const timeline = createTimeline(parameters);
         ┌────────────┐
timeline.│labels      │
timeline.│currentTime ├─ Properties
timeline.│duration    │
         └────────────┘
```

| Name                   | Description                                                        |
|------------------------|--------------------------------------------------------------------|
| `id`                   | Gets and sets the ID of the timeline (`String` \| `Number`)        |
| `labels`               | Gets and sets the map of time position labels of the timeline (`Object`) |
| `currentTime`          | Gets and sets the global current time in ms of the timeline (`Number`) |
| `iterationCurrentTime` | Gets and sets the current iteration time in ms (`Number`)          |
| `deltaTime`            | Gets the time in ms elapsed between the current and previous frame (`Number`) |
| `progress`             | Gets and sets the overall progress of the timeline from `0` to `1` (`Number`) |
| `iterationProgress`    | Gets and sets the progress of the current iteration from `0` to `1` (`Number`) |
| `currentIteration`     | Gets and sets the current iteration count (`Number`)               |
| `duration`             | Gets the total duration in ms of the timeline (`Number`)           |
| `speed`                | Gets and sets the speed multiplier of the timeline (`Number`)      |
| `fps`                  | Gets and sets the fps of the timeline (`Number`)                   |
| `paused`               | Gets and sets whether the timeline is paused (`Boolean`)           |
| `began`                | Gets and sets whether the timeline has started (`Boolean`)         |
| `completed`            | Gets and sets whether the timeline has completed (`Boolean`)       |
| `reversed`             | Gets and sets whether the timeline is reversed (`Boolean`)         |

---

## Animatable (V4)

Efficiently animates target properties, making it an ideal replacement for `animate()` and `utils.set()` in situations where values change frequently, such as cursor events or animation loops.

### Creating an Animatable

Animatables are created using the `createAnimatable()` method imported from the main `'animejs'` module:

```js
import { createAnimatable } from 'animejs';

const animatable = createAnimatable(targets, parameters);
```

Or imported as a standalone module from the `'animejs/animatable'` subpath:

```js
import { createAnimatable } from 'animejs/animatable';
```

### Parameters

| Name         | Accepts                           |
|--------------|-----------------------------------|
| `targets`    | Targets                           |
| `parameters` | An `Object` of Animatable settings |

### Returns

`Animatable`

An `Animatable` instance exposes animatable property functions to get and set values:

```js
animatable.propertyName(value, duration, ease); // Triggers an animation
animatable.propertyName(); // Returns the current value
```

> **Note:** For performance reasons, only `Number` or `Array<Number>` can be passed to an animatable property function.

### Example: Animatable

```js
import { createAnimatable, utils } from 'animejs';

const $demos = document.querySelector('#docs-demos');
const $demo = document.querySelector('.docs-demo.is-active');

let bounds = $demo.getBoundingClientRect();
const refreshBounds = () => bounds = $demo.getBoundingClientRect();

const animatableSquare = createAnimatable('.square', {
  x: 500, // Define the x duration to be 500ms
  y: 500, // Define the y duration to be 500ms
  ease: 'out(3)',
});

const onMouseMove = e => {
  const { width, height, left, top } = bounds;
  const hw = width / 2;
  const hh = height / 2;
  const x = utils.clamp(e.clientX - left - hw, -hw, hw);
  const y = utils.clamp(e.clientY - top - hh, -hh, hh);
  animatableSquare.x(x); // Animate the x value in 500ms
  animatableSquare.y(y); // Animate the y value in 500ms
}

window.addEventListener('mousemove', onMouseMove);
$demos.addEventListener('scroll', refreshBounds);
```

---

### Animatable Subsections

- Settings
- Methods
- Properties

---

### Animatable Settings

Animatable properties settings are specified globally to all properties on the parameters object, or specifically to a property by passing an object.

```
createAnimatable(targets, {
  x: {
┌──────────────────┐
│   unit: 'rem',   │
│   duration: 400, ├─ Specific Property Settings
│   ease: 'out(4)' │
└──────────────────┘
  },
  y: 200,
  rotate: 1000,
┌──────────────────┐
│ ease: 'out(2)',  ├─ Global Properties Settings
└──────────────────┘
});
```

**Available settings:**
- unit
- duration
- ease
- modifier

---

#### unit (Animatable)

Defines the unit for the animated value of the property.

| Property | Value                               |
|----------|-------------------------------------|
| Accepts  | A `String` containing a valid CSS unit |

**Example:**

```js
import { createAnimatable, utils } from 'animejs';

const $demos = document.querySelector('#docs-demos');
const [ $clock ] = utils.$('.clock');
let bounds = $clock.getBoundingClientRect();
const refreshBounds = () => bounds = $clock.getBoundingClientRect();

const clock = createAnimatable($clock, {
  rotate: { unit: 'rad' }, // Set the unit to 'rad'
  duration: 400,
});

const { PI } = Math;
let lastAngle = 0
let angle = PI / 2;

const onMouseMove = e => {
  const { width, height, left, top } = bounds;
  const x = e.clientX - left - width / 2;
  const y = e.clientY - top - height / 2;
  const currentAngle = Math.atan2(y, x);
  const diff = currentAngle - lastAngle;
  angle += diff > PI ? diff - 2 * PI : diff < -PI ? diff + 2 * PI : diff;
  lastAngle = currentAngle;
  clock.rotate(angle); // Pass the new angle value in rad
}

window.addEventListener('mousemove', onMouseMove);
$demos.addEventListener('scroll', refreshBounds);
```

---

#### duration (Animatable)

Specifies the duration in milliseconds for the transition to the animated value of the property.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | `Number` ≥ `0`, or Function based value returning `Number` ≥ `0` |
| Default  | `1000`                                             |

**Example:**

```js
import { createAnimatable, utils, stagger } from 'animejs';

const $demos = document.querySelector('#docs-demos');
const $demo = document.querySelector('.docs-demo.is-active');
let bounds = $demo.getBoundingClientRect();
const refreshBounds = () => bounds = $demo.getBoundingClientRect();

const circles = createAnimatable('.circle', {
  x: 0, // Immediately set the value without animation
  y: stagger(200, { from: 'center', start: 200 }),
  ease: 'out(4)',
});

const onMouseMove = e => {
  const { width, height, left, top } = bounds;
  const hw = width / 2;
  const hh = height / 2;
  const x = utils.clamp(e.clientX - left - hw, -hw, hw);
  const y = utils.clamp(e.clientY - top - hh, -hh, hh);
  circles.x(x).y(y);
}

window.addEventListener('mousemove', onMouseMove);
$demos.addEventListener('scroll', refreshBounds);
```

---

#### ease (Animatable)

Determines the easing function for the transition to the animated value of the property.

| Property | Value       |
|----------|-------------|
| Accepts  | ease        |
| Default  | `'outQuad'` |

> **Tip:** It is recommended to use an `out` type easing function to achieve interesting results. `in` type easing functions start with changes that are too subtle to be noticeable.

**Example:**

```js
import { createAnimatable, utils, stagger } from 'animejs';

const clock1 = createAnimatable('.clock-1', {
  rotate: { unit: 'rad' },
  ease: 'linear',
});

const clock2 = createAnimatable('.clock-2', {
  rotate: { unit: 'rad' },
  ease: 'outElastic',
});

const rotateClock = (animatable) => {
  const PI = Math.PI;
  let angle = PI / 2;
  let lastAngle = 0;
  return e => {
    const [ $clock ] = animatable.targets;
    const { width, height, left, top } = $clock.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    const currentAngle = Math.atan2(y, x);
    const diff = currentAngle - lastAngle;
    angle += diff > PI ? diff - 2 * PI : diff < -PI ? diff + 2 * PI : diff;
    lastAngle = currentAngle;
    animatable.rotate(angle);
  }
}

const rotateClock1 = rotateClock(clock1);
const rotateClock2 = rotateClock(clock2);

const onMouseMove = e => {
  rotateClock1(e);
  rotateClock2(e);
}

window.addEventListener('mousemove', onMouseMove);
```

---

#### modifier (Animatable)

Defines a Modifier function to modify or alter the behaviour of the animated numerical value.

| Property | Value             |
|----------|-------------------|
| Accepts  | Modifier function |
| Default  | `noop`            |

**Example:**

```js
import { createAnimatable, utils, stagger } from 'animejs';

const PI = Math.PI;

const clock1 = createAnimatable('.clock-1', {
  rotate: { unit: 'rad' },
  modifier: utils.snap(PI / 10),
  duration: 0,
});

const clock2 = createAnimatable('.clock-2', {
  rotate: { unit: 'rad' },
  modifier: v => -v,
  duration: 0,
});

const rotateClock = (animatable) => {
  return e => {
    const [ $clock ] = animatable.targets;
    const { width, height, left, top } = $clock.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    animatable.rotate(Math.atan2(y, x) + PI / 2);
  }
}

const rotateClock1 = rotateClock(clock1);
const rotateClock2 = rotateClock(clock2);

const onMouseMove = e => {
  rotateClock1(e);
  rotateClock2(e);
}

window.addEventListener('mousemove', onMouseMove);
```

---

### Animatable Methods

Methods available on the `Animatable` instance returned by a `createAnimatable()` function.

```
const animatable = createAnimatable(target, parameters);
           ┌─────────────────────┐
animatable.│x(100)               │
animatable.│y(50, 500, 'out(2)') ├─ Methods
animatable.│revert()             │
           └─────────────────────┘
```

**Available methods:**
- Getters
- Setters
- revert()

---

#### Getters (Animatable)

Every animatable property defined in the animatable parameters is transformed into a method and accessible on the animatable object.

When calling a method without any argument, the method acts as a getter and returns the current value of the animatable property.

**Returns:**
- A `Number` if the current animatable property has a single value
- An `Array` of `Number` if the current animatable property has multiple values (like an RGB color value)

**Example:**

```js
import { createAnimatable, utils } from 'animejs';

const $demos = document.querySelector('#docs-demos');
const $demo = document.querySelector('.docs-demo.is-active');
const [ $x, $y ] = utils.$('.coords');
let bounds = $demo.getBoundingClientRect();
const refreshBounds = () => bounds = $demo.getBoundingClientRect();

const circle = createAnimatable('.circle', {
  x: 500,
  y: 500,
  ease: 'out(2)',
});

// Gets and log the current x and y values
circle.animations.x.onRender = () => {
  $x.innerHTML = utils.roundPad(circle.x(), 2);
  $y.innerHTML = utils.roundPad(circle.y(), 2);
}

const onMouseMove = e => {
  const { width, height, left, top } = bounds;
  const hw = width / 2;
  const hh = height / 2;
  const x = utils.clamp(e.clientX - left - hw, -hw, hw);
  const y = utils.clamp(e.clientY - top - hh, -hh, hh);
  // Sets x and y values
  circle.x(x);
  circle.y(y);
}

window.addEventListener('mousemove', onMouseMove);
$demos.addEventListener('scroll', refreshBounds);
```

---

#### Setters (Animatable)

Every animatable property defined in the animatable parameters is transformed into a method and accessible on the animatable object.

When calling a method with at least one argument, the method acts as a setter and returns the animatable instance, allowing chaining method calls.

```js
animatable.property(value, duration, easing);
```

**Parameters:**

| Name                  | Type                      | Description                                |
|-----------------------|---------------------------|--------------------------------------------|
| `value`               | `Number` \| `Array<Number>` | Defines the new value to animate to      |
| `duration` *(optional)* | `Number`                | Optional new transition duration in ms     |
| `easing` *(optional)* | ease                      | Optional new easing function               |

**Returns:** The animatable object itself, allowing for chaining:

```js
animatable.x(100).y(200); // Animate x to 100 and y to 200
```

**Example:**

```js
import { createAnimatable, utils } from 'animejs';

const $demos = document.querySelector('#docs-demos');
const $demo = document.querySelector('.docs-demo.is-active');
let bounds = $demo.getBoundingClientRect();
const refreshBounds = () => bounds = $demo.getBoundingClientRect();

const circle = createAnimatable('.circle', {
  x: 0,
  y: 0,
  backgroundColor: 0,
  ease: 'outExpo',
});

const rgb = [164, 255, 79];

// Sets new durations and easings
circle.x(0, 500, 'out(2)');
circle.y(0, 500, 'out(3)');
circle.backgroundColor(rgb, 250);

const onMouseMove = e => {
  const { width, height, left, top } = bounds;
  const hw = width / 2;
  const hh = height / 2;
  const x = utils.clamp(e.clientX - left - hw, -hw, hw);
  const y = utils.clamp(e.clientY - top - hh, -hh, hh);
  rgb[0] = utils.mapRange(x, -hw, hw, 0, 164);
  rgb[2] = utils.mapRange(x, -hw, hw, 79, 255);
  circle.x(x).y(y).backgroundColor(rgb); // Update values
}

window.addEventListener('mousemove', onMouseMove);
$demos.addEventListener('scroll', refreshBounds);
```

---

#### revert() (Animatable)

Reverts all the animatable properties to their original values and cleans up the CSS inline styles.

Use `revert()` when you want to completely stop and destroy an animatable.

**Returns:** The animatable itself (can be chained with other animatable methods)

**Example:**

```js
import { createAnimatable, utils, stagger } from 'animejs';

const $demos = document.querySelector('#docs-demos');
const $demo = $demos.querySelector('.docs-demo.is-active');
const [ $revertButton ] = utils.$('.revert');
let bounds = $demo.getBoundingClientRect();
const refreshBounds = () => bounds = $demo.getBoundingClientRect();

const circles = createAnimatable('.circle', {
  x: stagger(50, { from: 'center', start: 100 }),
  y: stagger(200, { from: 'center', start: 200 }),
  ease: 'out(4)',
});

const onMouseMove = e => {
  const { width, height, left, top } = bounds;
  const hw = width / 2;
  const hh = height / 2;
  const x = utils.clamp(e.clientX - left - hw, -hw, hw);
  const y = utils.clamp(e.clientY - top - hh, -hh, hh);
  circles.x(x).y(y);
}

const revertAnimatable = () => {
  window.removeEventListener('mousemove', onMouseMove);
  circles.revert();
}

$revertButton.addEventListener('click', revertAnimatable);
window.addEventListener('mousemove', onMouseMove);
$demos.addEventListener('scroll', refreshBounds);
```

---

### Animatable Properties

Properties available on the `Animatable` instance returned by a `createAnimatable()` function.

```
const animatable = createAnimatable(targets, parameters);
           ┌───────────┐
animatable.│targets    ├─ Properties
animatable.│animations │
           └───────────┘
```

| Name         | Description                              |
|--------------|------------------------------------------|
| `targets`    | Gets the animatable Targets (`Array`)    |
| `animations` | Gets all animatable Animations (`Object`) |

---

## Draggable (V4)

Adds draggable capabilities to DOM Elements.

### Creating a Draggable

Draggables are created using the `createDraggable()` method imported from the main `'animejs'` module:

```js
import { createDraggable } from 'animejs';

const draggable = createDraggable(target, parameters);
```

Or imported as a standalone module from the `'animejs/draggable'` subpath:

```js
import { createDraggable } from 'animejs/draggable';
```

### Parameters

| Name         | Accepts                                              |
|--------------|------------------------------------------------------|
| `target`     | CSS Selector \| DOM Element                          |
| `parameters` | *(optional)* An `Object` of Draggable axes parameters, Draggable settings and Draggable callbacks |

### Returns

`Draggable`

### Example: Draggable

```js
import { createDraggable } from 'animejs';

createDraggable('.square');
```

---

### Draggable Subsections

- Axes parameters
- Settings
- Callbacks
- Methods
- Properties

---

### Draggable Axes Parameters

Axes parameters are specified globally to all axes on the parameters object, or specifically to an axis by passing it an object.

```
createDraggable('.square', {
┌───────────────────────────────┐
│ x: { snap: 100 },             │
│ y: { snap: 50 },              ├─ Axes Parameters
│ modifier: utils.wrap(-200, 0),│
└───────────────────────────────┘
  containerPadding: 10,
  releaseStiffness: 40,
  releaseEase: 'out(3)',
  onGrab: () => {},
  onDrag: () => {},
  onRelease: () => {},
});
```

**Available axes parameters:**
- x
- y
- snap
- modifier
- mapTo

---

#### x (Draggable)

Defines the behaviour of the x-axis by either passing an object of parameters or disabling it by setting the value to `false`.

| Property | Value                                     |
|----------|-------------------------------------------|
| Accepts  | `Boolean` or Draggable axes parameters `Object` |
| Default  | `true`                                    |

**Example:**

```js
import { createDraggable } from 'animejs';

createDraggable('.square.enabled', {
  x: true
});

createDraggable('.square.disabled', {
  x: false
});
```

---

#### y (Draggable)

Defines the behaviour of the y-axis by either passing an object of parameters or disabling it by setting the value to `false`.

| Property | Value                                     |
|----------|-------------------------------------------|
| Accepts  | `Boolean` or Draggable axes parameters `Object` |
| Default  | `true`                                    |

**Example:**

```js
import { createDraggable } from 'animejs';

createDraggable('.square.enabled', {
  y: true
});

createDraggable('.square.disabled', {
  y: false
});
```

---

#### snap (Draggable)

Rounds the final value of either both axes or one specific axis to the nearest specified increment. If an `Array` is provided as the increment, it selects the closest value from the array.

| Property | Value                                     |
|----------|-------------------------------------------|
| Accepts  | `Number`, `Array<Number>`, or a `Function` returning either |
| Default  | `0`                                       |

> **Note:** When defined using a `Function`, the value will be automatically refreshed every time the container or target element is resized. It can also be refreshed manually using the `refresh()` method.

**Example:**

```js
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  snap: 56, // Global to both x and y
  x: { snap: [0, 200] }, // Specific to x 
});
```

---

#### modifier (Draggable Axis)

Defines a Modifier function that alters or modifies the value of either both axes or one specific axis.

| Property | Value             |
|----------|-------------------|
| Accepts  | Modifier function |
| Default  | `noop`            |

**Example:**

```js
import { createDraggable, utils } from 'animejs';

createDraggable('.square', {
  modifier: utils.wrap(-32, 32), // Global to both x and y
  x: { modifier: utils.wrap(-128, 128) }, // Specific to x 
});
```

---

#### mapTo (Draggable)

Maps the axis value to a different property of the element.

| Property | Value    |
|----------|----------|
| Accepts  | `String` |
| Default  | `null`   |

**Example:**

```js
import { createDraggable, utils } from 'animejs';

utils.set('.square', { z: 100 });

createDraggable('.square', {
  x: { mapTo: 'rotateY' },
  y: { mapTo: 'z' },
});
```

---

### Draggable Settings

Draggable settings are defined directly in the `createDraggable()` parameters `Object`.

```
createDraggable('.square', {
  x: { snap: 100 },
  y: { snap: 50 },
  modifier: utils.wrap(-200, 0),
┌───────────────────────┐
│ containerPadding: 10, │
│ releaseStiffness: 40, ├─ Settings
│ releaseEase: 'out(3)',│
└───────────────────────┘
  onGrab: () => {},
  onDrag: () => {},
  onRelease: () => {},
});
```

**Available settings:**
- trigger
- container
- containerPadding
- containerFriction
- releaseContainerFriction
- releaseMass
- releaseStiffness
- releaseDamping
- velocityMultiplier
- minVelocity
- maxVelocity
- releaseEase
- dragSpeed
- dragThreshold
- scrollThreshold
- scrollSpeed
- cursor

---

#### trigger (Draggable)

Specifies a different element than the defined target to trigger the drag animation.

| Property | Value                      |
|----------|----------------------------|
| Accepts  | CSS Selector \| DOM Element |

**Example:**

```js
import { createDraggable } from 'animejs';

createDraggable('.row', {
  trigger: '.circle',
});
```

---

#### container (Draggable)

Specifies the container of the draggable element, preventing it from being dragged outside of the defined boundaries.

| Property | Value                                     |
|----------|-------------------------------------------|
| Accepts  | CSS Selector `String`, `HTMLElement`, `Array<Number>` (`[top, right, bottom, left]`), or a `Function` returning `Array<Number>` |
| Default  | `null`                                    |

> **Note:** When defined using a `Function`, the value will be automatically refreshed every time the window or target element is resized. It can also be refreshed manually using the `refresh()` method.

**Example:**

```js
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
});

createDraggable('.circle', {
  container: [-16, 80, 16, 0],
});
```

---

#### containerPadding (Draggable)

Specifies the container's padding in pixels.

| Property | Value                                     |
|----------|-------------------------------------------|
| Accepts  | `Number`, `Array<Number>` (`[top, right, bottom, left]`), or a `Function` returning `Array<Number>` |
| Default  | `0`                                       |

> **Note:** When defined using a `Function`, the value will be automatically refreshed every time the container or target element is resized. It can also be refreshed manually using the `refresh()` method.

**Example:**

```js
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  containerPadding: [16, 32, -16, 64], // top, right, bottom, left
  scrollThreshold: 0,
});
```

---

#### containerFriction (Draggable)

Specifies the friction applied to the dragged element when going out of bounds, where `0` means no friction at all and `1` prevents the element from going past the container bounds.

| Property | Value                                     |
|----------|-------------------------------------------|
| Accepts  | `Number` between `0` and `1`, or a `Function` returning such |
| Default  | `0.8`                                     |

> **Note:** When defined using a `Function`, the value will be automatically refreshed every time the container or target element is resized. It can also be refreshed manually using the `refresh()` method.

**Example:**

```js
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  containerFriction: 0,
});

createDraggable('.circle', {
  container: '.grid',
  containerFriction: 1,
});
```

---

#### releaseContainerFriction (Draggable)

Overrides the `containerFriction` applied to the dragged element when thrown out of bounds on release, where `0` means no friction at all and `1` prevents the element from going past the container bounds.

| Property | Value                                     |
|----------|-------------------------------------------|
| Accepts  | `Number` between `0` and `1`, or a `Function` returning such |
| Default  | The `containerFriction` value             |

> **Note:** When defined using a `Function`, the value will be automatically refreshed every time the container or target element is resized. It can also be refreshed manually using the `refresh()` method.

**Example:**

```js
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  releaseContainerFriction: 0,
});

createDraggable('.circle', {
  container: '.grid',
  releaseContainerFriction: 1,
});
```

---

#### releaseMass (Draggable)

Specifies the mass applied to the dragged element after release. Affects the speed, movement distance and bounciness of the dragged element. Lower values result in faster movement.

> **Note:** `releaseMass` has no effect if a spring is passed to the `releaseEase` parameter and is overridden by the spring `mass` value.

| Property | Value                        |
|----------|------------------------------|
| Accepts  | `Number` between `0` and `10000` |
| Default  | `1`                          |

**Example:**

```js
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  releaseMass: .1,
});

createDraggable('.circle', {
  container: '.grid',
  releaseMass: 10,
});
```

---

#### releaseStiffness (Draggable)

Specifies the stiffness applied to the dragged element after release. Affects the speed, movement distance and bounciness of the dragged element. Lower values result in slower movement.

> **Note:** `releaseStiffness` has no effect if a spring is passed to the `releaseEase` parameter and is overridden by the spring `stiffness` value.

| Property | Value                        |
|----------|------------------------------|
| Accepts  | `Number` between `0` and `10000` |
| Default  | `80`                         |

**Example:**

```js
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  releaseStiffness: 20,
});

createDraggable('.circle', {
  container: '.grid',
  releaseStiffness: 300,
});
```

---

#### releaseDamping (Draggable)

Specifies the damping applied to the dragged element after release. Affects the speed, movement distance and bounciness of the dragged element. Lower values increase the bounciness when reaching the bounds of the container.

> **Note:** `releaseDamping` has no effect if a spring is passed to the `releaseEase` parameter and is overridden by the spring `damping` value.

| Property | Value                        |
|----------|------------------------------|
| Accepts  | `Number` between `0` and `10000` |
| Default  | `10`                         |

**Example:**

```js
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  releaseDamping: 5,
});

createDraggable('.circle', {
  container: '.grid',
  releaseDamping: 30,
});
```

---

#### velocityMultiplier (Draggable)

Specifies a multiplier to modify the velocity applied to the dragged element after release, where `0` means no velocity at all, `1` is normal velocity and `2` doubles the velocity.

| Property | Value                                     |
|----------|-------------------------------------------|
| Accepts  | `Number` ≥ `0`, or a `Function` returning such |
| Default  | `1`                                       |

> **Note:** When defined using a `Function`, the value will be automatically refreshed every time the container or target element is resized. It can also be refreshed manually using the `refresh()` method.

**Example:**

```js
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  velocityMultiplier: 0,
});

createDraggable('.circle', {
  container: '.grid',
  velocityMultiplier: 5,
});
```

---

#### minVelocity (Draggable)

Specifies the minimum velocity to apply to the dragged element after release.

| Property | Value                                     |
|----------|-------------------------------------------|
| Accepts  | `Number` ≥ `0`, or a `Function` returning such |
| Default  | `0`                                       |

> **Note:** When defined using a `Function`, the value will be automatically refreshed every time the container or target element is resized. It can also be refreshed manually using the `refresh()` method.

**Example:**

```js
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  minVelocity: 0,
});

createDraggable('.circle', {
  container: '.grid',
  minVelocity: 10,
});
```

---

#### maxVelocity (Draggable)

Specifies the maximum velocity to apply to the dragged element after release.

| Property | Value                                     |
|----------|-------------------------------------------|
| Accepts  | `Number` ≥ `0`, or a `Function` returning such |
| Default  | `50`                                      |

> **Note:** When defined using a `Function`, the value will be automatically refreshed every time the container or target element is resized. It can also be refreshed manually using the `refresh()` method.

**Example:**

```js
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  maxVelocity: 0,
});

createDraggable('.circle', {
  container: '.grid',
  maxVelocity: 100,
});
```

---

#### releaseEase (Draggable)

Specifies a custom easing applied to the dragged element after release, a snap event, or repositioning when dragged out of bounds.

| Property | Value           |
|----------|-----------------|
| Accepts  | ease            |
| Default  | `eases.outQuint` |

> **Note:** Passing `spring()` overrides the draggable `releaseMass`, `releaseStiffness` and `releaseDamping` parameters. The `velocity` parameter of `spring()` has no effect and is replaced with the actual velocity of the dragged element.

**Example:**

```js
import { createDraggable, spring } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  releaseEase: 'outElastic',
});

createDraggable('.circle', {
  container: '.grid',
  releaseEase: spring({
    stiffness: 150,
    damping: 15,
  })
});
```

---

#### dragSpeed (Draggable)

Specifies a value that affects the dragging speed of the element. The higher the value, the faster the element moves. `0` prevents the element from being dragged, and values less than `0` invert the drag movement.

| Property | Value                                     |
|----------|-------------------------------------------|
| Accepts  | `Number`, or a `Function` returning such  |
| Default  | `1`                                       |

> **Note:** When defined using a `Function`, the value will be automatically refreshed every time the container or target element is resized. It can also be refreshed manually using the `refresh()` method.

**Example:**

```js
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  dragSpeed: 2,
});

createDraggable('.circle', {
  container: '.grid',
  dragSpeed: .5,
});
```

---

#### dragThreshold (Draggable)

Specifies the distance in pixels needed to trigger a drag. The threshold can be specified differently for mouse or touch devices by using an object.

```js
dragThreshold: 3,

// Or

dragThreshold: { mouse: 3, touch: 7 },
```

| Property | Value                                     |
|----------|-------------------------------------------|
| Accepts  | `Number`, `{ mouse: Number, touch: Number }`, or a `Function` returning either |
| Default  | `{ mouse: 3, touch: 7 }`                  |

> **Note:** When defined using a `Function`, the value will be automatically refreshed every time the container or target element is resized. It can also be refreshed manually using the `refresh()` method.

**Example:**

```js
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.grid',
  dragThreshold: 20,
});

createDraggable('.circle', {
  container: '.grid',
  dragThreshold: { mouse: 10, touch: 15 },
});
```

---

#### scrollThreshold (Draggable)

Specifies the number of pixels the draggable element must cross beyond the area bounds before the container starts scrolling automatically.

| Property | Value                                     |
|----------|-------------------------------------------|
| Accepts  | `Number`, or a `Function` returning such  |
| Default  | `20`                                      |

> **Note:** When defined using a `Function`, the value will be automatically refreshed every time the container or target element is resized. It can also be refreshed manually using the `refresh()` method.

**Example:**

```js
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.scroll-container',
  scrollThreshold: 12,
});
```

---

#### scrollSpeed (Draggable)

Specifies a value that affects the automatic scrolling speed of the container. The higher the value, the faster the scroll goes and `0` prevents the container from scrolling.

| Property | Value                                     |
|----------|-------------------------------------------|
| Accepts  | `Number`, or a `Function` returning such  |
| Default  | `1.5`                                     |

> **Note:** When defined using a `Function`, the value will be automatically refreshed every time the container or target element is resized. It can also be refreshed manually using the `refresh()` method.

**Example:**

```js
import { createDraggable } from 'animejs';

createDraggable('.square', {
  container: '.scroll-container',
  scrollSpeed: 2,
});
```

---

#### cursor (Draggable)

Specifies custom CSS cursor style properties for the hovered and grabbed states on devices that match the media query `'(pointer:fine)'`.

| Property | Value                                     |
|----------|-------------------------------------------|
| Accepts  | `Boolean` (`false` disables custom styling), `{ onHover: 'grab', onGrab: 'grabbing' }`, or a `Function` returning either |
| Default  | `{ onHover: 'grab', onGrab: 'grabbing' }` |

> **Note:** When defined using a `Function`, the value will be automatically refreshed every time the container or target element is resized. It can also be refreshed manually using the `refresh()` method.

**Example:**

```js
import { createDraggable } from 'animejs';

createDraggable('.square', {
  cursor: false
});

createDraggable('.circle', {
  cursor: {
    onHover: 'move',
    onGrab: 'wait'
  }
});
```

---

### Draggable Callbacks

Execute functions at specific points while dragging an element. Draggable callback functions are specified directly in the `createDraggable()` parameters `Object`.

```
createDraggable('.square', {
  x: { snap: 100 },
  y: { snap: 50 },
  modifier: utils.wrap(-200, 0),
  containerPadding: 10,
  containerStiffness: 40,
  containerEase: 'out(3)',
┌────────────────────────┐
│ onGrab: () => {},      │
│ onDrag: () => {},      ├─ Callbacks
│ onRelease: () => {},   │
└────────────────────────┘
});
```

**Available callbacks:**
- onGrab
- onDrag
- onUpdate
- onRelease
- onSnap
- onSettle
- onResize
- onAfterResize

---

#### onGrab (Draggable)

Executes a function when the element is grabbed.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the draggable itself |
| Default  | `noop`                                             |

**Example:**

```js
import { createDraggable, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let grabs = 0;

createDraggable('.square', {
  container: '.grid',
  onGrab: () => $value.textContent = ++grabs
});
```

---

#### onDrag (Draggable)

Executes a function when the element is being dragged.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the draggable itself |
| Default  | `noop`                                             |

**Example:**

```js
import { createDraggable, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let drags = 0;

createDraggable('.square', {
  container: '.grid',
  onDrag: () => $value.textContent = ++drags
});
```

---

#### onUpdate (Draggable)

Executes a function every time the position of the dragged element changes.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the draggable itself |
| Default  | `noop`                                             |

**Example:**

```js
import { createDraggable, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let updates = 0;

createDraggable('.square', {
  container: '.grid',
  onUpdate: () => $value.textContent = ++updates
});
```

---

#### onRelease (Draggable)

Executes a function when the element is released after a grab.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the draggable itself |
| Default  | `noop`                                             |

**Example:**

```js
import { createDraggable, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let releases = 0;

createDraggable('.square', {
  container: '.grid',
  onRelease: () => $value.textContent = ++releases
});
```

---

#### onSnap (Draggable)

Executes a function every time a snap occurs when the element is being dragged.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the draggable itself |
| Default  | `noop`                                             |

**Example:**

```js
import { createDraggable, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let snaps = 0;

createDraggable('.square', {
  container: '.grid',
  snap: 16,
  modifier: utils.snap(16), // also snap the element while dragging
  onSnap: () => $value.textContent = ++snaps
});
```

---

#### onSettle (Draggable)

Executes a function when the dragged target has completely stopped moving when released after a grab.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the draggable itself |
| Default  | `noop`                                             |

**Example:**

```js
import { createDraggable, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let stops = 0;

createDraggable('.square', {
  container: '.grid',
  onSettle: () => $value.textContent = ++stops
});
```

---

#### onResize (Draggable)

Executes a function when either the container or the dragged target sizes change.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the draggable itself |
| Default  | `noop`                                             |

**Example:**

```js
import { createDraggable, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let resizes = 0;

createDraggable('.square', {
  container: '.grid',
  onResize: self => {
    $value.textContent = ++resizes;
  }
});
```

---

#### onAfterResize (Draggable)

Executes a function after either the container or the dragged target sizes change and the draggable values have been updated. This can be used to update the position of the dragged element if the container size has changed.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the draggable itself |
| Default  | `noop`                                             |

**Example:**

```js
import { createDraggable, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let resizes = 0;

const draggable = createDraggable('.square', {
  container: '.grid',
  onAfterResize: self => {
    $value.textContent = ++resizes;
    self.animateInView(1000, 30);
  }
});
```

---

### Draggable Methods

Methods available on the `Draggable` instance returned by a `createDraggable()` function.

```
const draggable = createDraggable(target, parameters);
          ┌──────────┐
draggable.│disable() │
draggable.│enable()  ├─ Methods
draggable.│revert()  │
          └──────────┘
```

**Available methods:**
- disable()
- enable()
- setX()
- setY()
- animateInView()
- scrollInView()
- stop()
- reset()
- revert()
- refresh()

---

#### disable() (Draggable)

Deactivates the draggable, rendering it inert.

**Returns:** The draggable itself

**Example:**

```js
import { createDraggable, utils } from 'animejs';

const [ $disableButton ] = utils.$('.disable');

const draggable = createDraggable('.square');

const disableDraggable = () => draggable.disable();

$disableButton.addEventListener('click', disableDraggable);
```

---

#### enable() (Draggable)

Reactivates a previously disabled draggable, making it interactive again.

**Returns:** The draggable itself

**Example:**

```js
import { createDraggable, utils } from 'animejs';

const [ $enableButton ] = utils.$('.enable');

const draggable = createDraggable('.square');

draggable.disable();

const enableDraggable = () => draggable.enable();

$enableButton.addEventListener('click', enableDraggable);
```

---

#### setX() (Draggable)

Manually set the `x` position of the draggable target. Is equivalent to updating `draggable.x` directly when no `muteCallback` parameter is defined.

**Parameters:**

| Name                     | Type      | Description                                    |
|--------------------------|-----------|------------------------------------------------|
| `x`                      | `Number`  | The new x value                                |
| `muteCallback` *(optional)* | `Boolean` | If `true`, prevents the `onUpdate` callback from firing (default `false`) |

**Returns:** The draggable itself

**Example:**

```js
import { createDraggable, utils } from 'animejs';

const [ $setButton ] = utils.$('.set');

const draggable = createDraggable('.square');

const setRandomX = () => draggable.setX(utils.random(-100, 100));

$setButton.addEventListener('click', setRandomX);
```

---

#### setY() (Draggable)

Manually set the `y` position of the draggable target. Is equivalent to updating `draggable.y` directly when no `muteCallback` parameter is defined.

**Parameters:**

| Name                     | Type      | Description                                    |
|--------------------------|-----------|------------------------------------------------|
| `y`                      | `Number`  | The new y value                                |
| `muteCallback` *(optional)* | `Boolean` | If `true`, prevents the `onUpdate` callback from firing (default `false`) |

**Returns:** The draggable itself

**Example:**

```js
import { createDraggable, utils } from 'animejs';

const [ $setButton ] = utils.$('.set');

const draggable = createDraggable('.square');

const setRandomY = () => draggable.setY(utils.random(-40, 40));

$setButton.addEventListener('click', setRandomY);
```

---

#### animateInView() (Draggable)

Animate the draggable inside the viewport if positioned outside of the container.

**Parameters:**

| Name                | Type     | Description                                    |
|---------------------|----------|------------------------------------------------|
| `duration` *(optional)* | `Number` | The duration of the animation (default `350`)  |
| `gap` *(optional)*  | `Number` | Extra distance from container edges to animate to |
| `ease` *(optional)* | ease     | The easing function (default `inOutQuad`)      |

**Returns:** The draggable itself

**Example:**

```js
import { createDraggable, utils } from 'animejs';

const [ $animateInView ] = utils.$('.animate-button');

const draggable = createDraggable('.square', {
  container: '.grid',
});

const animateInView = () => {
  draggable.animateInView(400, 16);
}

// Set the draggable position outside the container
draggable.x = -24;
draggable.y = 72;

$animateInView.addEventListener('click', animateInView);
```

---

#### scrollInView() (Draggable)

Animate the scroll position of the container if the draggable position is outside of the scroll threshold.

**Parameters:**

| Name                | Type     | Description                                    |
|---------------------|----------|------------------------------------------------|
| `duration` *(optional)* | `Number` | The duration of the animation (default `350`)  |
| `gap` *(optional)*  | `Number` | Extra distance from container edges to animate to |
| `ease` *(optional)* | ease     | The easing function (default `inOutQuad`)      |

**Returns:** The draggable itself

**Example:**

```js
import { createDraggable, utils } from 'animejs';

const [ $scrollInView ] = utils.$('.button');

const draggable = createDraggable('.square', {
  container: '.scroll-container',
});

const scrollInView = () => {
  draggable.scrollInView(400, 100);
}

// Set the draggable position outside the scroll viewport
draggable.x = 120;
draggable.y = 200;

$scrollInView.addEventListener('click', scrollInView);
```

---

#### stop() (Draggable)

Stop all currently running animations targeting the draggable, the container scroll animation and the draggable release animation.

**Returns:** The draggable itself

**Example:**

```js
import { createDraggable, animate, utils } from 'animejs';

const [ $stopButton ] = utils.$('.stop');

const draggable = createDraggable('.square');

animate(draggable, {
  x: [-100, 100],
  alternate: true,
  loop: true
});

const stopDraggable = () => draggable.stop();

$stopButton.addEventListener('click', stopDraggable);
```

---

#### reset() (Draggable)

Restores the draggable element to its initial position.

**Returns:** The draggable itself

**Example:**

```js
import { createDraggable, utils } from 'animejs';

const [ $resetButton ] = utils.$('.reset');

const draggable = createDraggable('.square');

const resetDraggable = () => draggable.reset();

$resetButton.addEventListener('click', resetDraggable);
```

---

#### revert() (Draggable)

Restores the draggable element to its initial state and deactivates it.

**Returns:** The draggable itself

**Example:**

```js
import { createDraggable, utils } from 'animejs';

const [ $revertButton ] = utils.$('.revert');

const draggable = createDraggable('.square');

function revertDraggable() {
  draggable.revert();
  $revertButton.disabled = true;
}

$revertButton.addEventListener('click', revertDraggable);
```

---

#### refresh() (Draggable)

Re-compute every parameter defined using a function and re-calculate all internal values.

**Refreshable parameters:**
- `snap`
- `container`
- `containerPadding`
- `containerFriction`
- `dragSpeed`
- `scrollSpeed`
- `scrollThreshold`
- `minVelocity`
- `maxVelocity`
- `velocityMultiplier`

**Returns:** The draggable itself

**Example:**

```js
import { createDraggable, utils } from 'animejs';

const [ $refreshButton ] = utils.$('.refresh');

const draggable = createDraggable('.square', {
  snap: () => utils.random(0, 32, 0),
  dragSpeed: () => utils.random(.5, 1.5, 1),
});

const refreshDraggable = () => draggable.refresh();

$refreshButton.addEventListener('click', refreshDraggable);
```

---

### Draggable Properties

Properties available on the `Draggable` instance returned by a `createDraggable()` function.

```
const draggable = createDraggable(target, parameters);
          ┌──────────┐
draggable.│progressX │
draggable.│progressY ├─ Properties
draggable.│velocity  │
          └──────────┘
```

| Name | Description |
|------|-------------|
| `snapX` | Gets and sets the snap value of the x axis (`Number` \| `Array<Number>`) |
| `snapY` | Gets and sets the snap value of the y axis (`Number` \| `Array<Number>`) |
| `scrollSpeed` | Gets and sets the speed value at which the draggable container auto scrolls (`Number`) |
| `scrollThreshold` | Gets and sets the threshold distance from container edges before auto-scrolling begins (`Number`) |
| `dragSpeed` | Gets and sets the speed value at which the draggable element gets dragged (`Number`) |
| `maxVelocity` | Gets and sets the maximum velocity limit for the draggable element (`Number`) |
| `minVelocity` | Gets and sets the minimum velocity limit for the draggable element (`Number`) |
| `velocityMultiplier` | Gets and sets the multiplier applied to velocity calculations (`Number`) |
| `releaseEase` | Gets and sets the easing function applied to the draggable element animations (`Function`) |
| `releaseSpring` | Gets the internal spring used to move the draggable element after release (`Spring`) |
| `containerPadding` | Gets and sets padding values for the container `[top, right, bottom, left]` (`Array<Number>`) |
| `containerFriction` | Gets and sets the friction value applied within the container (`Number`) |
| `containerBounds` | Gets the bounds of the container `[top, right, bottom, left]` (`Array<Number>`) |
| `containerArray` | Gets array of container elements if multiple containers were provided (`Array<HTMLElement>` \| `null`) |
| `$container` | Gets and sets the container element (`HTMLElement`) |
| `$target` | Gets and sets the target element (`HTMLElement`) |
| `$trigger` | Gets the trigger element (`HTMLElement`) |
| `$scrollContainer` | Gets the scroll container (`Window` \| `HTMLElement`) |
| `x` | Gets and sets the x position (`Number`) |
| `y` | Gets and sets the y position of the dragged element (`Number`) |
| `progressX` | Gets and sets the progress (0-1) of the x position relative to the container (`Number`) |
| `progressY` | Gets and sets the progress (0-1) of the y position relative to the container (`Number`) |
| `velocity` | Gets the current velocity of the draggable element (`Number`) |
| `angle` | Gets the current angle in radians of the draggable element (`Number`) |
| `xProp` | Gets the mapped x property name (`String`) |
| `yProp` | Gets the mapped y property name (`String`) |
| `destX` | Gets the currently defined destination of the x axis (`Number`) |
| `destY` | Gets the currently defined destination of the y axis (`Number`) |
| `deltaX` | Gets the current delta of the x axis (`Number`) |
| `deltaY` | Gets the current delta of the y axis (`Number`) |
| `enabled` | Returns `true` if the draggable is enabled (`Boolean`) |
| `grabbed` | Returns `true` if the element is currently being grabbed (`Boolean`) |
| `dragged` | Returns `true` if the element is currently being dragged (`Boolean`) |
| `cursor` | Gets and sets cursor behavior (`Boolean` \| `DraggableCursorParams`) |
| `disabled` | Gets the disabled state for `[x, y]` axes (`Array<Number>`) |
| `fixed` | Returns `true` if the target element has `position:fixed` (`Boolean`) |
| `useWin` | Returns `true` if using window as container (`Boolean`) |
| `isFinePointer` | Gets and sets whether fine pointer (e.g. mouse) is being used (`Boolean`) |
| `initialized` | Returns `true` if the draggable has been initialized (`Boolean`) |
| `canScroll` | Returns `true` if auto-scrolling is possible (`Boolean`) |
| `contained` | Returns `true` if draggable is contained within bounds (`Boolean`) |
| `manual` | Returns `true` if in manual control mode (`Boolean`) |
| `released` | Returns `true` if element was just released (`Boolean`) |
| `updated` | Returns `true` if position was just updated (`Boolean`) |
| `scroll` | Gets the current scroll position `{x, y}` (`Object`) |
| `coords` | Gets the current and previous coordinates `[x, y, prevX, prevY]` (`Array<Number>`) |
| `snapped` | Gets the snap state for `[x, y]` axes (`Array<Number>`) |
| `pointer` | Gets current and previous pointer positions `[x, y, prevX, prevY]` (`Array<Number>`) |
| `scrollView` | Gets the scroll view dimensions `[width, height]` (`Array<Number>`) |
| `dragArea` | Gets the drag area bounds `[x, y, width, height]` (`Array<Number>`) |
| `scrollBounds` | Gets the scroll container bounds `[top, right, bottom, left]` (`Array<Number>`) |
| `targetBounds` | Gets the target element bounds `[top, right, bottom, left]` (`Array<Number>`) |
| `window` | Gets the window dimensions `[width, height]` (`Array<Number>`) |
| `pointerVelocity` | Gets the current pointer velocity (`Number`) |
| `pointerAngle` | Gets the current pointer angle in radians (`Number`) |
| `activeProp` | Gets the active property being animated (`String`) |
| `onGrab` | Gets and sets the callback fired when element is grabbed (`Function`) |
| `onDrag` | Gets and sets the callback fired while dragging (`Function`) |
| `onRelease` | Gets and sets the callback fired on release (`Function`) |
| `onUpdate` | Gets and sets the callback fired on any position update (`Function`) |
| `onSettle` | Gets and sets the callback fired when movement settles (`Function`) |
| `onSnap` | Gets and sets the callback fired when element snaps (`Function`) |
| `onResize` | Gets and sets the callback fired when container/element resizes (`Function`) |
| `onAfterResize` | Gets and sets the callback fired after resize handling completes (`Function`) |

---

## Scope (V4)

Anime.js instances declared inside a Scope can react to media queries, use custom root elements, share default parameters, and be reverted in batch, streamlining work in responsive and component-based environments.

### Creating a Scope

Scopes are created using the `createScope()` method imported from the main `'animejs'` module:

```js
import { createScope } from 'animejs';

const scope = createScope(parameters);
```

Or imported as a standalone module from the `'animejs/scope'` subpath:

```js
import { createScope } from 'animejs/scope';
```

### Parameters

| Name         | Accepts           |
|--------------|-------------------|
| `parameters` | *(optional)* Scope parameters |

### Returns

`Scope`

### Example: Scope

```js
import { animate, utils, createScope } from 'animejs';

createScope({
  mediaQueries: {
    isSmall: '(max-width: 200px)',
    reduceMotion: '(prefers-reduced-motion)',
  }
})
.add(self => {

  const { isSmall, reduceMotion } = self.matches;
  
  if (isSmall) {
    utils.set('.square', { scale: .5 });
  }
    
  animate('.square', {
    x: isSmall ? 0 : ['-35vw', '35vw'],
    y: isSmall ? ['-40vh', '40vh'] : 0,
    loop: true,
    alternate: true,
    duration: reduceMotion ? 0 : isSmall ? 750 : 1250
  });

});
```

---

### Scope Subsections

- Add constructor function
- Register method function
- Parameters
- Methods
- Properties

---

### Add Constructor Function

A constructor function is called inside the Scope's context immediately after being passed as a callback of the Scope's `add()` or `addOnce()` method. The Scope registers and keeps track of all animations, timers, timelines, animatables, draggables, onScrolls, and even other scopes declared inside the constructor function.

```js
// Execute a constructor every time a media query changes
scope.add(constructor);

// Execute a constructor once
scope.addOnce(constructorFunction);
```

**Constructor function argument:**

| Name   | Type                          |
|--------|-------------------------------|
| `self` | The current Scope instance    |

**Returns (optional):** A cleanup `Function` called when the Scope is reverted or when a media query changes.

**Example:**

```js
import { utils, animate, createScope, createDraggable } from 'animejs';

createScope({
  mediaQueries: { isSmall: '(max-width: 200px)' },
  defaults: { ease: 'linear' },
})
.add(self => {

  /* Media queries state are accessible on the matches property */
  const { isSmall } = self.matches;
  /* The $() utility method is also scoped */
  const [ $square ] = utils.$('.square');

  if (self.matches.isSmall) {
    /* Only animate the square when the iframe is small */
    animate($square, {
      rotate: 360,
      loop: true,
    });
  } else {
    /* Only create the draggable when the iframe is large enough */
    $square.classList.add('draggable');
    createDraggable($square, {
      container: document.body,
    });
  }
  
  return () => {
    /* Removes the class 'draggable' when the scope reverts itself */
    $square.classList.remove('draggable');
  }

});
```

---

### Register Method Function

A method can be registered within a Scope by passing a `String` name and a `Function` to the Scope's `add()` method. Once registered, the method becomes available on the Scope instance's `methods` object. This allows the method to be called from outside the Scope while maintaining its execution context within the Scope.

```js
scope.add('methodName', methodFunction); // Register the method

scope.methods.methodName(); // Execute the method
```

**Method arguments:**

| Name      | Type  |
|-----------|-------|
| `...args` | Any   |

**Example:**

```js
import { utils, animate, createScope } from 'animejs';

const scope = createScope({
  mediaQueries: { isSmall: '(max-width: 200px)' },
})
.add(self => {

  /* Registering the method inside the scope allows access to the scope itself */
  self.add('onClick', (e) => {

    const { clientX, clientY } = e;
    const { isSmall } = self.matches;

    animate('.square', {
      rotate: isSmall ? '+=360' : 0,
      x: isSmall ? 0 : clientX - (window.innerWidth / 2),
      y: isSmall ? 0 : clientY - (window.innerHeight / 2),
      duration: isSmall ? 750 : 400,
    });
    
  });
  
  utils.set(document.body, {
    cursor: self.matches.isSmall ? 'alias' : 'crosshair'
  });
  
});

/* Methods can be called outside the scope */
document.addEventListener('click', scope.methods.onClick);
```

---

### Scope Parameters

```
import { createScope, animate } from 'animejs';

createScope({
┌─────────────────────────────────────────────────┐
│ root: '.section',                               │
│ defaults: {                                     │
│   duration: 250,                                │
│   ease: 'out(4)',                               │
│ },                                              ├─ Parameters
│ mediaQueries: {                                 │
│   mobile: '(max-width: 640px)',                 │
│   reducedMotion: '(prefers-reduced-motion)',    │
│ }                                               │
└─────────────────────────────────────────────────┘
})
.add( ctx => {
  const isMobile = ctx.matches.mobile;
  const reduceMotion = ctx.matches.reducedMotion;
  animate(targets, {
    x: isMobile ? 0 : '100vw',
    y: isMobile ? '100vh' : 0,
    duration: reduceMotion ? 0 : 750
  });
});
```

**Available parameters:**
- root
- defaults
- mediaQueries

---

#### root (Scope)

Defines a root element limiting all DOM queries within that Scope to descendants of the specified `HTMLElement`. This is particularly useful for creating self-contained animation environments in component-based architectures like React applications.

| Property | Value                      |
|----------|----------------------------|
| Accepts  | CSS Selector \| DOM Element |

**Example:**

```js
import { createScope, animate } from 'animejs';

createScope({ root: '.row:nth-child(2)' })
.add(() => {
  animate('.square', {
    x: '17rem',
    loop: true,
    alternate: true
  });
});
```

---

#### defaults (Scope)

Defines the Scope defaults properties which are then used for all Timer, Animation and Timeline created within that scope.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | An `Object` with optional properties (see below)   |

**Available default properties:**

| Name           | Accepts                                    |
|----------------|--------------------------------------------|
| `playbackEase` | Easing name `String` \| Easing `Function`  |
| `playbackRate` | `Number`                                   |
| `frameRate`    | `Number`                                   |
| `loop`         | `Number` \| `Boolean`                      |
| `reversed`     | `Boolean`                                  |
| `alternate`    | `Boolean`                                  |
| `autoplay`     | `Boolean`                                  |
| `duration`     | `Number` \| `Function`                     |
| `delay`        | `Number` \| `Function`                     |
| `composition`  | Composition types `String` \| `Function`   |
| `ease`         | Easing name `String` \| Easing `Function`  |
| `loopDelay`    | `Number`                                   |
| `modifier`     | Modifier `Function`                        |
| `onBegin`      | Callback `Function`                        |
| `onUpdate`     | Callback `Function`                        |
| `onRender`     | Callback `Function`                        |
| `onLoop`       | Callback `Function`                        |
| `onComplete`   | Callback `Function`                        |

**Example:**

```js
import { createScope, animate } from 'animejs';

const rows = utils.$('.row');

rows.forEach(($row, i) => {
  createScope({
    root: $row,
    defaults: { ease: `out(${1 + i})` }
  })
  .add(() => {
    animate('.square', {
      x: '17rem',
      loop: true,
      alternate: true
    });
  });
});
```

---

#### mediaQueries (Scope)

Defines the media queries to match for conditionally refreshing the Scope when one of their match states changes. Media query matching states are accessible via the scope `matches` property.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | An `Object` where `key` is an arbitrary name `String` for the media query and `value` is the media query definition `String` |

**Example:**

```js
import { createScope, animate } from 'animejs';

createScope({
  mediaQueries: {
    isSmall: '(max-width: 100px)',
    isMedium: '(min-width: 101px) and (max-width: 200px)',
    isLarge: '(min-width: 201px)',
    reduceMotion: '(prefers-reduced-motion)',
  }
})
.add(self => {

  const { isSmall, isMedium, isLarge, reduceMotion } = self.matches;
    
  utils.set('.square', { scale: isMedium ? .75 : isLarge ? 1 : .5 });
    
  animate('.square', {
    x: isSmall ? 0 : ['-35vw', '35vw'],
    y: isSmall ? ['-40vh', '40vh'] : 0,
    rotate: 360,
    loop: true,
    alternate: true,
    duration: reduceMotion ? 0 : isSmall ? 750 : 1250
  });

});
```

---

### Scope Methods

Methods available on the `Scope` instance returned by a `createScope()` function.

```
const scope = createScope(parameters);
      ┌──────────┐
scope.│add()     │
scope.│refresh() ├─ Methods
scope.│revert()  │
      └──────────┘
```

**Available methods:**
- add()
- addOnce()
- keepTime()
- revert()
- refresh()

---

#### add() (Scope)

Adds constructor or registers method functions to a Scope.

**Parameters for adding a constructor:**

```js
scope.add(constructor);
```

| Name          | Accepts                     |
|---------------|-----------------------------|
| `constructor` | A constructor `Function`    |

**Parameters for registering a method:**

```js
scope.add(name, method);
```

| Name     | Accepts                                       |
|----------|-----------------------------------------------|
| `name`   | A `String` used to store and access the method |
| `method` | A method `Function`                           |

**Returns:** The Scope itself

**Example:**

```js
import { createScope, createAnimatable, createDraggable } from 'animejs';

const scope = createScope({
  mediaQueries: {
    isSmall: '(max-width: 200px)',
  }
})
.add(self => {

  const [ $circle ] = utils.$('.circle');
    
  if (self.matches.isSmall) {
    $circle.classList.add('draggable');
    self.circle = createDraggable($circle, {
      container: document.body,
    });
  } else {
    $circle.classList.remove('draggable');
    self.circle = createAnimatable($circle, {
      x: 500,
      y: 500,
      ease: 'out(3)'
    });
  }
  
  let win = { w: window.innerWidth, h: window.innerHeight };
  
  self.add('refreshBounds', () => {
    win.w = window.innerWidth;
    win.h = window.innerHeight;
  });
      
  self.add('onMouseMove', e => {
    if (self.matches.isSmall) return;
    const { w, h } = win;
    const hw = w / 2;
    const hh = h / 2;
    const x = utils.clamp(e.clientX - hw, -hw, hw);
    const y = utils.clamp(e.clientY - hh, -hh, hh);
    if (self.circle.x) {
      self.circle.x(x);
      self.circle.y(y);
    }
  });
  
  self.add('onPointerDown', e => {
    const { isSmall } = self.matches;
    animate($circle, {
      scale: [
        { to: isSmall ? 1.25 : .25, duration: isSmall ? 50 : 150 },
        { to: 1, duration: isSmall ? 250 : 500 },
      ]
    });
  });
  
});

window.addEventListener('resize', scope.methods.refreshBounds);
window.addEventListener('mousemove', scope.methods.onMouseMove);
document.addEventListener('pointerdown', scope.methods.onPointerDown);
```

---

#### addOnce() (Scope)

Adds a constructor to a Scope that is only called once, allowing you to execute code once and add scoped animations that won't be reverted between media query changes.

```js
scope.addOnce(constructor);
```

| Name          | Accepts                  |
|---------------|--------------------------|
| `constructor` | A constructor `Function` |

**Returns:** The Scope itself

> **Warning:** `scope.addOnce()` calls cannot be conditional, as it defeats the purpose and will mess with keeping track of which callbacks have already been executed or not.

```js
// Don't do this
if (scope.matches.small) {
  scope.addOnce(() => { animate(target, params) });
}
// Do this
scope.addOnce(() => { animate(target, params) });
```

**Example:**

```js
import { createScope, createTimeline, utils, stagger } from 'animejs';

const scope = createScope({
  mediaQueries: {
    isSmall: '(max-width: 200px)',
  }
})
.add(self => {
 
  self.addOnce(() => {
    /* Animations declared here won't be reverted between mediaqueries changes */
    createTimeline().add('.circle', {
      backgroundColor: [
        $el => utils.get($el, `--hex-red-1`),
        $el => utils.get($el, `--hex-citrus-1`),
      ],
      loop: true,
      alternate: true,
      duration: 2000,
    }, stagger(100));
  });
 
  self.add(() => {
    createTimeline().add('.circle', {
      x: self.matches.isSmall ? [-30, 30] : [-70, 70],
      scale: [.5, 1.1],
      loop: true,
      alternate: true,
    }, stagger(100)).init();
  });
      
});
```

---

#### keepTime() (Scope)

Adds a constructor `Function` that recreates a Timer, Animation, or Timeline between media query changes while keeping track of its current time, allowing you to seamlessly update an animation's parameters without breaking the playback state.

```js
scope.keepTime(() => animate(target, parameters));
```

**Parameters:**

| Name          | Accepts                                                 |
|---------------|---------------------------------------------------------|
| `constructor` | A `Function` that returns a Timer, Animation, or Timeline |

**Returns:** The Timer, Animation, or Timeline returned by the constructor

> **Warning:** `scope.keepTime()` calls cannot be conditional, as it defeats the purpose and will mess with keeping track of which callbacks have already been executed or not.

```js
// Don't do this
if (scope.matches.small) {
  scope.keepTime(() => animate(target, params));
}
// Do this
scope.keepTime(() => animate(target, params));
```

**Example:**

```js
import { createScope, createTimeline, utils, stagger } from 'animejs';

const scope = createScope({
  mediaQueries: {
    isSmall: '(max-width: 200px)',
  }
})
.add(self => {
 
  self.addOnce(() => {
    /* Animations declared here won't be reverted between mediaqueries changes */
    createTimeline().add('.circle', {
      backgroundColor: [
        $el => utils.get($el, `--hex-red-1`),
        $el => utils.get($el, `--hex-citrus-1`),
      ],
      loop: true,
      alternate: true,
      duration: 2000,
    }, stagger(100));
  });
 
  self.keepTime(() => createTimeline().add('.circle', {
    x: self.matches.isSmall ? [-30, 30] : [-70, 70],
    scale: [.5, 1.1],
    loop: true,
    alternate: true,
  }, stagger(100)).init());
      
});
```

---

#### revert() (Scope)

Reverts all Anime.js objects that have been declared inside a Scope and calls the constructors cleanup functions if needed.

**Returns:** The Scope itself

**Example:**

```js
import { utils, stagger, createScope, createTimeline } from 'animejs';

const [ $button1, $button2 ] = utils.$('.revert');

function onMouseEnter() { animate(this, { scale: 2, duration: 250 }) }
function onMouseLeave() { animate(this, { scale: 1, duration: 750 }) }

const scopeConstructor = scope => {
  const circles = utils.$('.circle');
    
  circles.forEach(($circle, i) => {
    animate($circle, {
      opacity: .25,
      loop: true,
      alternate: true,
      duration: 500,
      delay: i * 100,
      ease: 'inOut(3)',
    });
    $circle.addEventListener('mouseenter', onMouseEnter);
    $circle.addEventListener('mouseleave', onMouseLeave);
  });
  
  // Cleanup function to take care of removing event listeners on revert
  return () => {
    circles.forEach($circle => {
      // Anime.js instances are automatically reverted by the Scope
      $circle.removeEventListener('mouseenter', onMouseEnter);
      $circle.removeEventListener('mouseleave', onMouseLeave);
    });
  }
}

const scope1 = createScope({ root: '.row-1' }).add(scopeConstructor);
const scope2 = createScope({ root: '.row-2' }).add(scopeConstructor);

const revertScope1 = () => scope1.revert();
const revertScope2 = () => scope2.revert();

$button1.addEventListener('click', revertScope1);
$button2.addEventListener('click', revertScope2);
```

---

#### refresh() (Scope)

Reverts the Scope and rebuilds it by calling every constructor function. Internally, `refresh()` is called every time a media query state changes.

**Returns:** The Scope itself

**Example:**

```js
import { utils, stagger, createScope, createTimeline } from 'animejs';

const [ $button1, $button2 ] = utils.$('.refresh');

const scopeConstructor = scope => {
  const circles = utils.$('.circle');
  if (scope.i === undefined || scope.i > circles.length - 1) scope.i = 0;
  const i = scope.i++;
  
  utils.set(circles, {
    opacity: stagger([1, .25], { from: i, ease: 'out(3)' }),
  });
  
  createTimeline()
  .add(circles, {
    scale: [{ to: [.5, 1], duration: 250 }, { to: .5, duration: 750 }],
    duration: 750,
    loop: true,
  }, stagger(50, { from: i }))
  .seek(750)
}

const scope1 = createScope({ root: '.row-1' }).add(scopeConstructor);
const scope2 = createScope({ root: '.row-2' }).add(scopeConstructor);

const refreshScope1 = () => scope1.refresh();
const refreshScope2 = () => scope2.refresh();

$button1.addEventListener('click', refreshScope1);
$button2.addEventListener('click', refreshScope2);
```

---

### Scope Properties

Properties available on the `Scope` instance returned by a `createScope()` function.

```
const scope = createScope();
      ┌────────┐
scope.│methods │
scope.│root    ├─ Properties
scope.│matches │
      └────────┘
```

| Name                 | Description                                                                  |
|----------------------|------------------------------------------------------------------------------|
| `data`               | An object used to store variables associated with the scope. Every property added to it is cleared when the scope is reverted (`Object`) |
| `defaults`           | Gets the default parameters for this scope (`Object`)                        |
| `root`               | Gets the root element for DOM operations in this scope (`Document` \| `HTMLElement`) |
| `constructors`       | Gets the array of constructor functions added to this scope (`Array<Function>`) |
| `revertConstructors` | Gets the array of revert constructor functions (`Array<Function>`)           |
| `revertibles`        | Gets the array of revertible objects created within this scope (`Array<Tickable|Animatable|Draggable|ScrollObserver|Scope>`) |
| `methods`            | Gets the object containing methods added to this scope (`Object`)            |
| `matches`            | Gets the object containing current media query match results (`Object`)      |
| `mediaQueryLists`    | Gets the object containing MediaQueryList objects for this scope (`Object`)  |

---

## Events (V4)

A collection of event listener utility methods to trigger and control animations.

All events functions are available on the `events` object imported from the main `'animejs'` module:

```js
import { events } from 'animejs';

events.onScroll();
```

Or imported directly from the main `'animejs'` module:

```js
import { onScroll } from 'animejs';
```

Or imported as a standalone module from the `'animejs/events'` subpath:

```js
import { onScroll } from 'animejs/events';
```

---

### onScroll (V4)

Triggers and synchronises Timer, Animation and Timeline instances on scroll.

ScrollObservers are created with the `onScroll()` function and can be directly declared in the `autoplay` parameter.

```js
import { onScroll, animate } from 'animejs';

animate(targets, { x: 100, autoplay: onScroll(parameters) });
```

The `onScroll()` method can be imported directly from the main `'animejs'` module:

```js
import { onScroll } from 'animejs';

onScroll();
```

Or imported as a standalone module from the `'animejs/events'` subpath:

```js
import { onScroll } from 'animejs/events';
```

### onScroll Parameters

| Name         | Accepts                                              |
|--------------|------------------------------------------------------|
| `parameters` | An `Object` of ScrollObserver settings, ScrollObserver thresholds, ScrollObserver sync modes and ScrollObserver callbacks |

### Returns

`ScrollObserver`

### Example: onScroll

```js
import { animate, createTimer, createTimeline , utils, onScroll } from 'animejs';

const [ container ] = utils.$('.scroll-container');
const debug = true;

// Animation

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  duration: 2000,
  alternate: true,
  loop: true,
  autoplay: onScroll({ container, debug })
});

// Timer

const [ $timer ] = utils.$('.timer');

createTimer({
  duration: 2000,
  alternate: true,
  loop: true,
  onUpdate: self => {
    $timer.innerHTML = self.iterationCurrentTime
  },
  autoplay: onScroll({
    target: $timer.parentNode,
    container,
    debug
  })
});

// Timeline

const circles = utils.$('.circle');

createTimeline({
  alternate: true,
  loop: true,
  autoplay: onScroll({
    target: circles[0],
    container,
    debug
  })
})
.add(circles[2], { x: '9rem' })
.add(circles[1], { x: '9rem' })
.add(circles[0], { x: '9rem' });
```

---

### onScroll Subsections

- Settings
- Thresholds
- Synchronisation modes
- Callbacks
- Methods
- Properties

---

### ScrollObserver Settings

ScrollObserver settings properties are defined directly in the `onScroll()` parameters `Object`.

```
animate('.square', {
  x: 100,
  autoplay: onScroll({
  ┌──────────────────────────┐
  │ container: '.container', │
  │ target: '.section',      ├─ Settings
  │ axis: 'y',               │
  └──────────────────────────┘
    enter: 'bottom top',
    leave: 'top bottom',
    sync: true,
    onEnter: () => {},
    onLeave: () => {},
    onUpdate: () => {},
  })
});
```

**Available settings:**
- container
- target
- debug
- axis
- repeat

---

#### container (ScrollObserver)

Specifies the container `HTMLElement` to which the scroll event is applied.

| Property | Value                      |
|----------|----------------------------|
| Accepts  | CSS Selector \| DOM Element |
| Default  | `null`                     |

**Example:**

```js
import { animate, onScroll } from 'animejs';

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  duration: 2000,
  alternate: true,
  loop: true,
  ease: 'inOutQuad',
  autoplay: onScroll({
    container: '.scroll-container'
  })
});
```

---

#### target (ScrollObserver)

Specifies which `HTMLElement` triggers the scroll event.

| Property | Value                      |
|----------|----------------------------|
| Accepts  | CSS Selector \| DOM Element |
| Default  | If defined on an animation, the first targeted `HTMLElement` of the animation. `null` if defined outside of an animation |

**Example:**

```js
import { createTimer, utils, onScroll } from 'animejs';

const [ $timer ] = utils.$('.timer');

createTimer({
  duration: 2000,
  alternate: true,
  loop: true,
  onUpdate: self => {
    $timer.innerHTML = self.iterationCurrentTime
  },
  autoplay: onScroll({
    target: $timer,
    container: '.scroll-container',
  })
});
```

---

#### debug (ScrollObserver)

Displays markers to better visualise the `enter` and `leave` threshold values. Each ScrollObserver instance has a dedicated color. The left side of the ruler represents the container threshold, and the right side the target threshold values.

| Property | Value     |
|----------|-----------|
| Accepts  | `Boolean` |
| Default  | `false`   |

**Example:**

```js
import { animate, onScroll } from 'animejs';

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  duration: 2000,
  alternate: true,
  loop: true,
  ease: 'inOutQuad',
  autoplay: onScroll({
    container: '.scroll-container',
    debug: true,
  })
});
```

---

#### axis (ScrollObserver)

Specifies the scroll direction of the ScrollObserver container `HTMLElement`.

| Property | Value          |
|----------|----------------|
| Accepts  | `'x'` \| `'y'` |
| Default  | `'y'`          |

**Example:**

```js
import { animate, utils, onScroll } from 'animejs';

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  duration: 2000,
  alternate: true,
  loop: true,
  ease: 'inOutQuad',
  autoplay: onScroll({
    container: '.scroll-container',
    axis: 'x',
  })
});
```

---

#### repeat (ScrollObserver)

Specifies if the scroll synchronisation should repeat after the linked object completes. If the repeat property is set to `false`, the ScrollObserver instance will be reverted.

| Property | Value     |
|----------|-----------|
| Accepts  | `Boolean` |
| Default  | `true`    |

**Example:**

```js
import { createTimer, onScroll, utils } from 'animejs';

const [ $repeat ] = utils.$('.repeat .value');
const [ $noRepeat ] = utils.$('.no-repeat .value');

let repeatUpdates = 0;
let noRepeatUpdates = 0;

createTimer({
  duration: 1000,
  autoplay: onScroll({
    container: '.scroll-container',
    target: '.repeat',
    enter: 'bottom-=40 top',
    leave: 'top+=60 bottom',
    onUpdate: () => $repeat.innerHTML = repeatUpdates++,
    repeat: true,
    debug: true,
  })
});

createTimer({
  duration: 1000,
  autoplay: onScroll({
    container: '.scroll-container',
    target: '.no-repeat',
    enter: 'bottom-=40 top',
    leave: 'top+=60 bottom',
    onUpdate: () => $noRepeat.innerHTML = noRepeatUpdates++,
    repeat: false,
    debug: true,
  })
});
```

---

### ScrollObserver Thresholds

Determines the points at which actions are triggered based on the scrolling position of a target element within a container. Thresholds are defined with the `enter` and `leave` properties of the `onScroll()` parameters `Object`.

```
animate('.square', {
  x: 100,
  autoplay: onScroll({
    container: '.container',
    target: '.section',
    axis: 'y',
  ┌──────────────────────────┐
  │ enter: 'bottom top',     ├─ Thresholds
  │ leave: 'top bottom',     │
  └──────────────────────────┘
    sync: true,
    onEnter: () => {},
    onLeave: () => {},
    onUpdate: () => {},
  })
});
```

The conditions that determine when an element enters or leaves the viewport are specified by comparing two pairs of values: the target and container `start` and `end` values.

```
┌────────────────────────────────┐- Container Start
│                                │
│   Container                    │
│                                │
│          ┌──────────┐----------│- Target Start
│          │          │          │
│          │  Target  │          │
└────────────────────────────────┘- Container End
           │          │
           └──────────┘------------ Target End
```

**Different syntaxes:**

**Object:**

```js
onScroll({
  // Enters when the top of the target meets the bottom of the container
  enter: { target: 'top', container: 'bottom' },
  // Leaves when the bottom of the target meets the top of the container
  leave: { target: 'bottom', container: 'top' }
});
```

**Container value String:** The container value can be passed directly and the target value defaults to `'start'` for enter and `'end'` for leave.

```js
onScroll({
  // Enters when the top of the target meets the bottom of the container
  enter: 'bottom',
  // Leaves when the bottom of the target meets the top of the container
  leave: 'top'
});
```

**Container and target value shorthand String:**

```js
onScroll({
  // Enters when the bottom of the container meets the top of the target
  enter: 'bottom top',
  // Leaves when the top of the container meets the bottom of the target
  leave: 'top bottom',
});
```

| Property       | Value           |
|----------------|-----------------|
| Default enter  | `'end start'`   |
| Default leave  | `'start end'`   |

**Threshold types:**
- Numeric values
- Positions shorthands
- Relative position values
- Min max

---

#### Numeric Values (Thresholds)

Defines an offset from the top of the target and container by passing numeric values. If no unit is defined, the value is interpreted as pixels.

| Type       | Example | Description                                              |
|------------|---------|----------------------------------------------------------|
| Number     | `100`   | 100px from the top of the target or container            |
| Unit       | `'1rem'` | 1rem from the top of the target or container            |
| Percentage | `'10%'` | 10% of the target or container height, from the top      |

| Property     | Value |
|--------------|-------|
| Default unit | `px`  |

**Example:**

```js
import { animate, onScroll } from 'animejs';

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  duration: 2000,
  alternate: true,
  loop: true,
  ease: 'inOutQuad',
  autoplay: onScroll({
    container: '.scroll-container',
    // 80% from the top of the container, 20% from the top of the target 
    enter: '80% 20%',
    // 50px from the top of the container, -25px from the top of the target
    leave: '50 -25',
    debug: true
  })
});
```

---

#### Positions Shorthands (Thresholds)

Defines the position of the target and container by passing the position name.

| Value      | Returns                                              |
|------------|------------------------------------------------------|
| `'top'`    | The top y value                                      |
| `'bottom'` | The bottom y value                                   |
| `'left'`   | The left x value                                     |
| `'right'`  | The right x value                                    |
| `'center'` | The center x or y value                              |
| `'start'`  | Equivalent to `'top'` and `'left'` depending on axis |
| `'end'`    | Equivalent to `'bottom'` and `'right'` depending on axis |

**Example:**

```js
import { animate, onScroll } from 'animejs';

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  duration: 2000,
  alternate: true,
  loop: true,
  ease: 'inOutQuad',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'center top',
    leave: 'center bottom',
    debug: true
  })
});
```

---

#### Relative Position Values (Thresholds)

Defines position values relative to the target and container top coordinate using a Relative value syntax.

| Prefix | Effect    | Example    |
|--------|-----------|------------|
| `'+='` | Add       | `'+=45'`   |
| `'-='` | Subtract  | `'-=50%'`  |
| `'*='` | Multiply  | `'*=.5'`   |

**Example:**

```js
import { animate, onScroll } from 'animejs';

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  duration: 2000,
  alternate: true,
  loop: true,
  ease: 'inOutQuad',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'center+=1em top-=100%',
    leave: 'center-=1em bottom+=100%',
    debug: true
  })
});
```

---

#### Min Max (Thresholds)

Defines a threshold in the minimum or maximum scrollable space available. This is particularly useful in cases where some of the targeted elements' initial positions are either too small or too big to trigger `enter` and `leave` conditions.

| Value   | Description                                           |
|---------|-------------------------------------------------------|
| `'min'` | The minimum value possible to meet the enter or leave condition |
| `'max'` | The maximum value possible to meet the enter or leave condition |

**Example:**

```js
import { animate, onScroll, utils } from 'animejs';

utils.$('.square').forEach($square => {
  animate($square, {
    x: '15rem',
    rotate: '1turn',
    duration: 2000,
    alternate: true,
    ease: 'inOutQuad',
    autoplay: onScroll({
      container: '.scroll-container',
      sync: 1,
      enter: 'max bottom',
      leave: 'min top',
      debug: true
    })
  });
});
```

---

### ScrollObserver Synchronisation Modes

Determines the behaviour of the animation and how it is synchronised relative to the scroll progress or by meeting certain thresholds. The different synchronisation modes are defined on the `sync` property of the `onScroll()` parameters `Object`.

```
animate('.square', {
  x: 100,
  autoplay: onScroll({
    container: '.container',
    target: '.section',
    axis: 'y',
    enter: 'bottom top',
    leave: 'top bottom',
┌──────────────────────────┐
│   sync: true,            ├─ Synchronisation Mode
└──────────────────────────┘
    onEnter: () => {},
    onLeave: () => {},
    onUpdate: () => {},
  })
});
```

**Synchronisation mode types:**
- Method names
- Playback progress
- Smooth scroll
- Eased scroll

---

#### Method Names (Sync Mode)

Defines a list of method names of the linked `Object` to be called when specific callbacks are triggered.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `String` containing Animation/Timer/Timeline method names separated by a space |
| Default  | `'play pause'`                                     |

**Callbacks definition order:**

**`'enter'`** — Defines a method to be triggered when the enter threshold is crossed or when the element re-enters the viewport.

```js
{
  sync: 'play',
}
```

**`'enter leave'`** — Defines methods to be triggered when the enter and leave thresholds are crossed.

```js
{
  sync: 'play pause',
}
```

**`'enterForward leaveForward enterBackward leaveBackward'`** — Defines methods to be triggered when the enter and leave thresholds are crossed when scrolling forward and backward.

```js
{
  sync: 'play pause reverse reset',
}
```

**Example:**

```js
import { animate, onScroll } from 'animejs';

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  duration: 2000,
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'bottom-=50 top',
    leave: 'top+=60 bottom',
    sync: 'resume pause reverse reset',
    debug: true
  })
});
```

---

#### Playback Progress (Sync Mode)

Perfectly synchronises the playback progress of the linked object to the scroll position by passing a value of either `true` or `1`.

| Property | Value           |
|----------|-----------------|
| Accepts  | `1` \| `true`   |

**Example:**

```js
import { animate, onScroll } from 'animejs';

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  ease: 'linear',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'bottom-=50 top',
    leave: 'top+=60 bottom',
    sync: true,
    debug: true,
  })
});
```

---

#### Smooth Scroll (Sync Mode)

Smoothly animates the playback progress of the linked object to the scroll position by passing a value between `0` and `1`. The closer the value gets to `0`, the longer the animation takes to catch up with the current scroll position.

| Property | Value                               |
|----------|-------------------------------------|
| Accepts  | `Number` between `0` and `1`        |

**Example:**

```js
import { animate, onScroll } from 'animejs';

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  ease: 'linear',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'bottom-=50 top',
    leave: 'top+=60 bottom',
    sync: .25,
    debug: true,
  })
});
```

---

#### Eased Scroll (Sync Mode)

Applies an easing function to the synchronised playback progress of the linked object relative to the scroll position.

| Property | Value |
|----------|-------|
| Accepts  | ease  |

**Example:**

```js
import { animate, stagger, onScroll } from 'animejs';

animate('.square', {
  x: '12rem',
  rotate: '1turn',
  ease: 'linear',
  delay: stagger(100, { from: 'last' }),
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'bottom-=50 top',
    leave: 'top+=60 bottom',
    sync: 'inOutCirc',
    debug: true,
  })
});
```

---

### ScrollObserver Callbacks

Triggers functions at specific points during scroll. ScrollObserver callback functions are defined directly in the `onScroll()` parameters object.

```
animate('.square', {
  x: 100,
  autoplay: onScroll({
    container: '.container',
    target: '.section',
    axis: 'y',
    enter: 'bottom top',
    leave: 'top bottom',
    sync: true,
┌──────────────────────────┐
│   onEnter: () => {},     │
│   onLeave: () => {},     ├─ Callbacks
│   onUpdate: () => {},    │
└──────────────────────────┘
  })
});
```

**Available callbacks:**
- onEnter
- onEnterForward
- onEnterBackward
- onLeave
- onLeaveForward
- onLeaveBackward
- onUpdate
- onSyncComplete

---

#### onEnter (ScrollObserver)

Triggers a function every time the `enter` threshold is met.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the ScrollObserver instance |
| Default  | `noop`                                             |

**Example:**

```js
import { animate, onScroll, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let entered = 0;

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  ease: 'linear',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'bottom-=50 top',
    leave: 'top+=60 bottom',
    sync: true,
    debug: true,
    onEnter: () => $value.textContent = ++entered,
  })
});
```

---

#### onEnterForward (ScrollObserver)

Triggers a function every time the `enter` threshold is met by scrolling forward.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the ScrollObserver instance |
| Default  | `noop`                                             |

**Example:**

```js
import { animate, onScroll, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let entered = 0;

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  ease: 'linear',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'bottom-=50 top',
    leave: 'top+=60 bottom',
    sync: true,
    debug: true,
    onEnterForward: () => $value.textContent = ++entered,
  })
});
```

---

#### onEnterBackward (ScrollObserver)

Triggers a function every time the `enter` threshold is met by scrolling backward.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the ScrollObserver instance |
| Default  | `noop`                                             |

**Example:**

```js
import { animate, onScroll, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let entered = 0;

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  ease: 'linear',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'bottom-=50 top',
    leave: 'top+=60 bottom',
    sync: true,
    debug: true,
    onEnterBackward: () => $value.textContent = ++entered,
  })
});
```

---

#### onLeave (ScrollObserver)

Triggers a function every time the `leave` threshold is met.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the ScrollObserver instance |
| Default  | `noop`                                             |

**Example:**

```js
import { animate, onScroll, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let exits = 0;

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  ease: 'linear',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'bottom-=50 top',
    leave: 'top+=60 bottom',
    sync: true,
    debug: true,
    onLeave: () => $value.textContent = ++exits,
  })
});
```

---

#### onLeaveForward (ScrollObserver)

Triggers a function every time the `leave` threshold is met by scrolling forward.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the ScrollObserver instance |
| Default  | `noop`                                             |

**Example:**

```js
import { animate, onScroll, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let exits = 0;

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  ease: 'linear',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'bottom-=50 top',
    leave: 'top+=60 bottom',
    sync: true,
    debug: true,
    onLeaveForward: () => $value.textContent = ++exits,
  })
});
```

---

#### onLeaveBackward (ScrollObserver)

Triggers a function every time the `leave` threshold is met by scrolling backward.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the ScrollObserver instance |
| Default  | `noop`                                             |

**Example:**

```js
import { animate, onScroll, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let exits = 0;

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  ease: 'linear',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'bottom-=50 top',
    leave: 'top+=60 bottom',
    sync: true,
    debug: true,
    onLeaveBackward: () => $value.textContent = ++exits,
  })
});
```

---

#### onUpdate (ScrollObserver)

Triggers a function every time the linked object progress updates during scroll synchronisation.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the ScrollObserver instance |
| Default  | `noop`                                             |

**Example:**

```js
import { animate, onScroll, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let updates = 0;

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  ease: 'linear',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'bottom-=50 top',
    leave: 'top+=60 bottom',
    sync: .5,
    debug: true,
    onUpdate: () => $value.textContent = ++updates,
  })
});
```

---

#### onSyncComplete (ScrollObserver)

Triggers a function when the linked object synchronisation completes.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the ScrollObserver instance |
| Default  | `noop`                                             |

**Example:**

```js
import { animate, onScroll, utils } from 'animejs';

const [ $value ] = utils.$('.value');

let completions = 0;

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  ease: 'linear',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'bottom top',
    leave: 'center bottom',
    sync: .5,
    debug: true,
    onSyncComplete: () => $value.textContent = ++completions,
  })
});
```

---

### ScrollObserver Methods

Methods available on the `ScrollObserver` instance returned by an `onScroll()` function.

```
const scrollObserver = onScroll(parameters);
               ┌──────────┐
scrollObserver.│link()    │
scrollObserver.│refresh() ├─ Methods
scrollObserver.│revert()  │
               └──────────┘
```

**Available methods:**
- link()
- refresh()
- revert()

---

#### link() (ScrollObserver)

Connects an Animation, Timer or Timeline to a ScrollObserver instance. This is equivalent to defining an `onScroll()` instance on the `autoplay` parameter.

> **Note:** Only one object can be linked at a time. Every call to `link()` overrides the previously linked object.

| Property | Value                               |
|----------|-------------------------------------|
| Accepts  | Animation \| Timer \| Timeline      |

**Returns:** The ScrollObserver itself

**Example:**

```js
import { animate, onScroll } from 'animejs';

const animation = animate('.square', {
  x: '15rem',
  rotate: '1turn',
  ease: 'linear',
});

const scrollObserver = onScroll({
  container: '.scroll-container',
  enter: 'bottom-=50 top',
  leave: 'top+=60 bottom',
  sync: true,
  debug: true,
});

scrollObserver.link(animation);
```

---

#### refresh() (ScrollObserver)

Updates the bounding values and re-computes the Function based values of a ScrollObserver instance.

**Refreshable parameters:**
- `repeat`
- `axis`
- `enter`
- `leave`

> **Note:** No need to call `.refresh()` when the container size changes — this is already handled internally.

**Returns:** The ScrollObserver itself

**Example:**

```js
import { animate, onScroll, utils } from 'animejs';

const scrollSettings = {
  enter: 20,
  leave: 60,
}

const animation = animate('.square', {
  x: '15rem',
  rotate: '1turn',
  ease: 'linear',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: () => `bottom-=${scrollSettings.enter} top`,
    leave: () => `top+=${scrollSettings.leave} bottom`,
    sync: .5,
    debug: true,
  })
});

animate(scrollSettings, {
  enter: 90,
  leave: 100,
  loop: true,
  alternate: true,
  modifier: utils.round(0),
  onUpdate: () => animation._autoplay.refresh()
});
```

---

#### revert() (ScrollObserver)

Disables the ScrollObserver, removes all `EventListener` and removes the debug `HTMLElement` if necessary.

**Returns:** The ScrollObserver itself

**Example:**

```js
import { animate, onScroll } from 'animejs';

animate('.square', {
  x: '15rem',
  rotate: '1turn',
  ease: 'linear',
  autoplay: onScroll({
    container: '.scroll-container',
    enter: 'bottom-=50 top',
    leave: 'top+=60 bottom',
    sync: 1,
    debug: true,
    onSyncComplete: self => self.revert()
  })
});
```

---

### ScrollObserver Properties

Properties available on the `ScrollObserver` instance returned by an `onScroll()` function.

```
const scrollObserver = onScroll(parameters);
               ┌───────┐
scrollObserver.│target │
scrollObserver.│linked ├─ Properties
scrollObserver.│repeat │
               └───────┘
```

| Name          | Description                                                        |
|---------------|--------------------------------------------------------------------|
| `id`          | Gets the unique identifier for the ScrollObserver instance (`Number`) |
| `container`   | Gets the scroll container associated with this observer (`ScrollContainer`) |
| `target`      | Gets the target element being observed (`HTMLElement`)             |
| `linked`      | Gets the linked object (`Animation` \| `Timer` \| `Timeline`)      |
| `repeat`      | Gets whether the observer should repeat (`Boolean`)                |
| `horizontal`  | Gets whether the scroll direction is horizontal (`Boolean`)        |
| `enter`       | Gets the enter threshold (`String` \| `Number`)                    |
| `leave`       | Gets and sets the leave threshold (`String` \| `Number`)           |
| `sync`        | Gets whether synchronisation is enabled (`Boolean`)                |
| `velocity`    | Gets the current scroll velocity (`Number`)                        |
| `backward`    | Gets whether the scroll direction is backward (`Boolean`)          |
| `scroll`      | Gets the current scroll position (`Number`)                        |
| `progress`    | Gets the current progress of the observed element (0 to 1) (`Number`) |
| `completed`   | Gets whether the observation has completed (`Boolean`)             |
| `began`       | Gets whether the observation has begun (`Boolean`)                 |
| `isInView`    | Gets whether the observed element is currently in view (`Boolean`) |
| `offset`      | Gets the offset of the observed element (`Number`)                 |
| `offsetStart` | Gets the start offset of the observed element (`Number`)           |
| `offsetEnd`   | Gets the end offset of the observed element (`Number`)             |
| `distance`    | Gets the scroll distance for the observed element (`Number`)       |

---

## SVG

A collection of utility functions to help with SVG morphing, line drawing and motion path animations.

All SVG functions are available on the `svg` object imported from the main `'animejs'` module:

```js
import { svg } from 'animejs';

svg.morphTo();
svg.createMotionPath();
svg.createDrawable();
```

Or imported directly from the main `'animejs'` module:

```js
import { morphTo, createMotionPath, createDrawable } from 'animejs';
```

Or imported as a standalone module from the `'animejs/svg'` subpath:

```js
import { morphTo, createMotionPath, createDrawable } from 'animejs/svg';
```

---

### morphTo()

Creates a morphing animation from one SVG shape to another by passing the `d` property of a `SVGPathElement` or the `points` property of a `SVGPolylineElement` or `SVGPolygonElement` to `svg.morphTo()`.

An optional `precision` parameter can be set to configure the amount of points generated to morph between the two shapes. If the precision parameter is set to `0`, no point extrapolation takes place.

```js
svg.morphTo(shapeTarget, precision);
```

**Parameters:**

| Name                   | Accepts                                              |
|------------------------|------------------------------------------------------|
| `shapeTarget`          | CSS selector \| `SVGPathElement` \| `SVGPolylineElement` \| `SVGPolygonElement` |
| `precision` *(optional)* | A `Number` between `0` and `1` (default: `0.33`)   |

**Returns:** An `Array` containing the shape's starting and final `String` values

**Example:**

```js
import { animate, svg, utils } from 'animejs';

const [ $path1, $path2 ] = utils.$('polygon');

function animateRandomPoints() {
  // Update the points attribute on #path-2
  utils.set($path2, { points: generatePoints() });
  // Morph the points of #path-1 into #path-2
  animate($path1, {
    points: svg.morphTo($path2),
    ease: 'inOutCirc',
    duration: 500,
    onComplete: animateRandomPoints
  });
}

// Start the animation
animateRandomPoints();

// A function to generate random points on #path-2 on each iteration
function generatePoints() {
  const total = utils.random(4, 64);
  const r1 = utils.random(4, 56);
  const r2 = 56;
  const isOdd = n => n % 2;
  let points = '';
  for (let i = 0, l = isOdd(total) ? total + 1 : total; i < l; i++) {
    const r = isOdd(i) ? r1 : r2;
    const a = (2 * Math.PI * i / l) - Math.PI / 2;
    const x = 152 + utils.round(r * Math.cos(a), 0);
    const y = 56 + utils.round(r * Math.sin(a), 0);
    points += `${x},${y} `;
  }
  return points;
}
```

---

### createDrawable()

Creates a `Proxy` of an `SVGElement` exposing an extra `draw` property that defines how much of the line is visible/drawn.

```js
const [ drawable ] = svg.createDrawable(target);
```

**Parameters:**

| Name     | Accepts                                              |
|----------|------------------------------------------------------|
| `target` | CSS selector \| `SVGLineElement` \| `SVGPathElement` \| `SVGPolylineElement` \| `SVGPolygonElement` \| `SVGRectElement` |

**Returns:** An `Array` of `Proxy` `SVGElement`

The added `draw` property accepts a `String` containing `start` and `end` values separated by a space to define how much of the line is drawn:

```
                            0                     1
drawable.draw = '0 1';      |[———————————————————]|

                            0         .5
drawable.draw = '0 .5';     |[—————————]          |

                                 .25       .75
drawable.draw = '.25 .75';  |     [—————————]     |

                                      .5          1
drawable.draw = '.5 1';     |          [—————————]|

                                                1 1
drawable.draw = '1 1';      |                   []|
```

> **Note:** Animating an element with the `vector-effect` attribute/styles set to `non-scaling-stroke` can be slow since the scale factor value for the path must be recalculated on every tick to handle changes in the size of the SVG.

**Example:**

```js
import { animate, svg, stagger } from 'animejs';

animate(svg.createDrawable('.line'), {
  draw: ['0 0', '0 1', '1 1'],
  ease: 'inOutQuad',
  duration: 2000,
  delay: stagger(100),
  loop: true
});
```

---

### createMotionPath()

Creates pre-defined Tween parameter objects that animate along an SVGPathElement's coordinates and inclination.

```js
const { translateX, translateY, rotate } = svg.createMotionPath(path, offset);
```

**Parameters:**

| Name                 | Type                              |
|----------------------|-----------------------------------|
| `path`               | CSS selector \| `SVGPathElement`  |
| `offset` *(optional)* | A `Number` between `0` and `1` (default: `0`) |

**Returns:** An `Object` with the following properties:

| Name         | Type            | Description                           |
|--------------|-----------------|---------------------------------------|
| `translateX` | Tween parameter | Maps to the x coordinate of the path  |
| `translateY` | Tween parameter | Maps to the y coordinate of the path  |
| `rotate`     | Tween parameter | Maps to the angle of the path element |

**Example:**

```js
import { animate, svg } from 'animejs';

// Animate the transforms properties of .car to the motion path values
const carAnimation = animate('.car', {
  ease: 'linear',
  duration: 5000,
  loop: true,
  ...svg.createMotionPath('path')
});

// Line drawing animation following the motion path values
animate(svg.createDrawable('path'), {
  draw: '0 1',
  ease: 'linear',
  duration: 5000,
  loop: true,
});
```

---

## Text (V4)

A collection of utility functions to help with text animations.

All text functions are available on the `text` object imported from the main `'animejs'` module:

```js
import { text } from 'animejs';

text.splitText();
```

Or imported directly from the main `'animejs'` module:

```js
import { splitText } from 'animejs';
```

Or imported as a standalone module from the `'animejs/text'` subpath:

```js
import { splitText } from 'animejs/text';
```

---

### splitText()

A lightweight, responsive and accessible text utility function to split, clone and wrap lines, words and characters of an HTML Element.

Text splits are created using the `splitText()` function:

```js
import { splitText } from 'animejs';

const split = splitText(target, parameters);
```

Since v4.2.0, the `splitText()` method can also be imported independently:

```js
import { splitText } from 'animejs/text';
```

**Parameters:**

| Name                   | Accepts                              |
|------------------------|--------------------------------------|
| `target`               | CSS selector `String` \| `HTMLElement` |
| `parameters` *(optional)* | An `Object` of TextSplitter settings |

**Returns:** `TextSplitter`

**Example:**

```js
import { createTimeline, stagger, utils, splitText } from 'animejs';

const { words, chars } = splitText('p', {
  words: { wrap: 'clip' },
  chars: true,
});

createTimeline({
  loop: true,
  defaults: { ease: 'inOut(3)', duration: 650 }
})
.add(words, {
  y: [$el => +$el.dataset.line % 2 ? '100%' : '-100%', '0%'],
}, stagger(125))
.add(chars, {
  y: $el => +$el.dataset.line % 2 ? '100%' : '-100%',
}, stagger(10, { from: 'random' }))
.init();
```

---

### TextSplitter Settings

Configures how text within the target HTML element should be split.

```
splitText(target, {
┌────────────────────────┐
│ lines: true,           ├─ Settings
│ words: {               │
│   wrap: 'clip',        │
│   class: 'split-word', │
│   clone: true          │
│ },                     │
│ includeSpaces: true,   │
│ debug: true,           │
└────────────────────────┘
});
```

**Available settings:**
- lines
- words
- chars
- debug
- includeSpaces
- accessible

---

#### lines (TextSplitter)

Defines if and how the lines should be split. Split line elements are accessed via an array returned by the `lines` property of a `TextSplit` instance.

```js
const { lines } = splitText(target, { lines: true });
```

**Default split wrappers:** Each line is wrapped in a span element with styles and data attributes:

```html
<span style="display: block;" data-line="0">This is the first line</span>
<span style="display: block;" data-line="1">This is the second line</span>
```

**Custom split wrappers:** Split wrappers can be configured by passing an `Object` of Split parameters or a custom HTML template `String`.

**Splitting nested elements:** Nested elements are duplicated across lines when necessary.

**Font loading and line resize handling:** Lines are split after all font loading and layout operations complete. If the target element resizes, lines are automatically re-split.

**Animating with line splits:** Declare animations within `split.addEffect()` to ensure continuous playback between resizes:

```js
const split = splitText(target, params);

split.addEffect(({ lines, words, chars }) => animate([lines, words, chars], {
  opacity: { from: 0 },
}));

split.revert(); // Also reverts the animation declared with addEffect
```

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | `Boolean`, `Object` of Split parameters, or HTML template `String` |
| Default  | `false`                                            |

**Example:**

```js
import { animate, splitText, stagger } from 'animejs';

splitText('p', {
  lines: { wrap: 'clip' },
})
.addEffect(({ lines }) => animate(lines, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 750, ease: 'in(3)' }
  ],
  duration: 750,
  ease: 'out(3)',
  delay: stagger(200),
  loop: true,
  loopDelay: 500,
}));
```

---

#### words (TextSplitter)

Defines if and how the words should be split. Split word elements are accessed via the `words` property.

```js
const { words } = splitText(target, { words: true });
```

Internally, word splitting uses the native `Intl.Segmenter` object when available, allowing splitting for languages without spaces (Japanese, Chinese, Thai, etc.), with fallback to `String.prototype.split()`.

**Default split wrappers:**

```html
<span style="display: inline-block;" data-line="0" data-word="0">Split</span>
<span style="display: inline-block;" data-line="0" data-word="1">by</span>
<span style="display: inline-block;" data-line="0" data-word="2">words</span>
```

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | `Boolean`, `Object` of Split parameters, or HTML template `String` |
| Default  | `true`                                             |

**Example:**

```js
import { animate, splitText, stagger } from 'animejs';

const { words } = splitText('p', {
  words: { wrap: 'clip' },
});

animate(words, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 750, ease: 'in(3)' }
  ],
  duration: 750,
  ease: 'out(3)',
  delay: stagger(100),
  loop: true,
});
```

---

#### chars (TextSplitter)

Defines if and how the characters should be split. Split character elements are accessed via the `chars` property.

```js
const { chars } = splitText(target, { chars: true });
```

**Default split wrappers:**

```html
<span style="display: inline-block;" data-line="0" data-word="0" data-char="0">H</span>
<span style="display: inline-block;" data-line="0" data-word="0" data-char="1">E</span>
<span style="display: inline-block;" data-line="0" data-word="0" data-char="2">Y</span>
```

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | `Boolean`, `Object` of Split parameters, or HTML template `String` |
| Default  | `false`                                            |

**Example:**

```js
import { animate, splitText, stagger } from 'animejs';

const { chars } = splitText('p', {
  chars: { wrap: 'clip' },
});

animate(chars, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 750, ease: 'in(3)' }
  ],
  duration: 750,
  ease: 'out(3)',
  delay: stagger(50),
  loop: true,
});
```

---

#### debug (TextSplitter)

Toggles debug CSS styles on the split elements to better visualize the wrapper elements. Lines are outlined in green, words in red, characters in blue.

| Property | Value     |
|----------|-----------|
| Accepts  | `Boolean` |
| Default  | `false`   |

**Example:**

```js
import { splitText, utils } from 'animejs';

const [ $button ] = utils.$('button');
const [ $p ] = utils.$('p');

let debug = false;
let split;

const toggleDebug = () => {
  if (split) split.revert();
  debug = !debug;
  split = splitText($p, {
    lines: true,
    chars: true,
    words: true,
    debug: debug,
  });
}

toggleDebug();

$button.addEventListener('click', toggleDebug);
```

---

#### includeSpaces (TextSplitter)

Defines whether whitespace should be included in the split elements.

| Property | Value     |
|----------|-----------|
| Accepts  | `Boolean` |
| Default  | `false`   |

**Example:**

```js
import { splitText, utils } from 'animejs';

const [ $button ] = utils.$('button');
const [ $p ] = utils.$('p');

let includeSpaces = true;
let split;

const toggleSpaces = () => {
  if (split) split.revert();
  includeSpaces = !includeSpaces;
  split = splitText($p, {
    debug: true,
    includeSpaces: includeSpaces,
  });
}

toggleSpaces();

$button.addEventListener('click', toggleSpaces);
```

---

#### accessible (TextSplitter)

Creates an accessible cloned element that preserves the structure of the original split element.

| Property | Value     |
|----------|-----------|
| Accepts  | `Boolean` |
| Default  | `true`    |

---

### Split Parameters

Defines the CSS class, wrap behavior, or clone type of a split. Parameters are configured by passing an object to the `lines`, `words`, and `chars` properties.

```
splitText(target, {
  lines: true,
  words: {
  ┌──────────────────────┐
  │ wrap: 'clip',        │
  │ class: 'split-word', ├─ Split Parameters
  │ clone: true          │
  └──────────────────────┘
  },
  includeSpaces: true,
  debug: true,
});
```

**Available split parameters:**
- class
- wrap
- clone

---

#### class (Split Parameter)

Specifies a custom CSS class applied to all split elements.

**Output:**

```html
<span class="my-custom-class" style="display: inline-block;">
  <span style="display: inline-block;">word</span>
</span>
```

| Property | Value            |
|----------|------------------|
| Accepts  | `String` \| `null` |
| Default  | `null`           |

**Example:**

```js
import { animate, stagger, splitText } from 'animejs';

splitText('p', {
  chars: { class: 'split-char' },
});

animate('.split-char', {
  y: ['0rem', '-1rem', '0rem'],
  loop: true,
  delay: stagger(100)
});
```

---

#### wrap (Split Parameter)

Adds an extra wrapper element with the specified CSS `overflow` property to all split elements.

**Output:**

```html
<span style="overflow: clip; display: inline-block;">
  <span style="display: inline-block;">word</span>
</span>
```

| Property | Value                                                    |
|----------|----------------------------------------------------------|
| Accepts  | `'hidden'` \| `'clip'` \| `'visible'` \| `'scroll'` \| `'auto'` \| `Boolean` (`true` = `'clip'`) \| `null` |
| Default  | `null`                                                   |

**Example:**

```js
import { animate, stagger, splitText } from 'animejs';

const { chars } = splitText('p', {
  chars: { wrap: true },
});

animate(chars, {
  y: ['75%', '0%'],
  duration: 750,
  ease: 'out(3)',
  delay: stagger(50),
  loop: true,
  alternate: true,
});
```

---

#### clone (Split Parameter)

Clones the split elements in the specified direction by wrapping the lines, words, or characters within an HTML structure and setting the `top` and `left` CSS properties accordingly.

**Output:**

```html
<span style="position: relative; display: inline-block;">
  <span style="display: inline-block;">word</span>
  <span style="position: absolute; top: 100%; left: 0px; white-space: nowrap; display: inline-block;">word</span>
</span>
```

| Property | Value                                                    |
|----------|----------------------------------------------------------|
| Accepts  | `'left'` \| `'top'` \| `'right'` \| `'bottom'` \| `'center'` \| `Boolean` (`true` = `'center'`) \| `null` |
| Default  | `null`                                                   |

**Example:**

```js
import { createTimeline, stagger, splitText } from 'animejs';

const { chars } = splitText('p', {
  chars: {
    wrap: 'clip',
    clone: 'bottom'
  },
});

createTimeline()
.add(chars, {
  y: '-100%',
  loop: true,
  loopDelay: 350,
  duration: 750,
  ease: 'inOut(2)',
}, stagger(150, { from: 'center' }));
```

---

### HTML Template

Custom HTML templates can be used on the `lines`, `words`, and `chars` properties, which then serve as wrappers for all split elements.

The HTML template must contain at least one `'{value}'` variable that will be replaced by the split value. Similarly, the `'{i}'` variable can be used and will be replaced by the current split index.

All the necessary styles, like `'display: inline-block;'`, will be applied automatically and don't need to be defined in the template.

**Example template:**

```js
splitText('p', { chars: '<em class="char-{i}">{value}</em>' });
```

**Output:**

```html
<p>
  <em class="char-0" style="display: inline-block;">H</em>
  <em class="char-1" style="display: inline-block;">E</em>
  <em class="char-2" style="display: inline-block;">L</em>
  <em class="char-3" style="display: inline-block;">L</em>
  <em class="char-4" style="display: inline-block;">O</em>
</p>
```

| Property | Value                                           |
|----------|-------------------------------------------------|
| Accepts  | A `String` containing at least one `'{value}'`  |

**Example:**

```js
import { createTimeline, stagger, splitText } from 'animejs';

splitText('p', {
  chars: `<span class="char-3d word-{i}">
    <em class="face face-top">{value}</em>
    <em class="face-front">{value}</em>
    <em class="face face-bottom">{value}</em>
  </span>`,
});

const charsStagger = stagger(100, { start: 0 });

createTimeline({ defaults: { ease: 'linear', loop: true, duration: 750 }})
.add('.char-3d', { rotateX: -90 }, charsStagger)
.add('.char-3d .face-top', { opacity: [.5, 0] }, charsStagger)
.add('.char-3d .face-front', { opacity: [1, .5] }, charsStagger)
.add('.char-3d .face-bottom', { opacity: [.5, 1] }, charsStagger);
```

---

### TextSplitter Methods

Methods available on the `TextSplitter` instance returned by a `splitText()` function.

```
const split = splitText(target, parameters);
      ┌────────────┐
split.│revert()    │
split.│addEffect() ├─ Methods
split.│refresh()   │
      └────────────┘
```

**Available methods:**
- addEffect()
- revert()
- refresh()

---

#### addEffect() (TextSplitter)

Preserves animations and callbacks state between splits when splitting by `lines`, and allows reverting all split animations at once using `split.revert()`.

```js
const split = splitText({
  lines: true,
  chars: true,
});

// Doesn't work when splitting by lines because the split can be delayed by fonts loading
animate([split.lines, split.words, split.chars], {
  opacity: { from: 0 },
});

// Works! addEffect() will be safely executed after each split
split.addEffect(({ lines, words, chars }) => animate([lines, words, chars], {
  opacity: { from: 0 },
}));

// Reverts both the text split and the effect animation
split.revert();
```

An effect's animation or callback is automatically refreshed when:
- `splitText()` is called and the `document.fonts.ready` Promise resolves
- Splitting by `lines` and the target element's width has changed

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | A `Function` whose first argument is the `SplitText` itself. Can return an Animation, Timeline, Timer, or cleanup function |

**Example:**

```js
import { animate, utils, stagger, splitText } from 'animejs';

const colors = [];

splitText('p', {
  lines: true,
})
/* Registering an animation to the split */
.addEffect(({ lines }) => animate(lines, {
  y: ['50%', '-50%'],
  loop: true,
  alternate: true,
  delay: stagger(400),
  ease: 'inOutQuad',
}))
/* Registering a callback to the split */
.addEffect(split => {
  split.words.forEach(($el, i) => {
    const color = colors[i];
    if (color) utils.set($el, { color });
    $el.addEventListener('pointerenter', () => {
      animate($el, {
        color: utils.randomPick(['#FF4B4B', '#FFCC2A', '#B7FF54', '#57F695']),
        duration: 250,
      })
    });
  });
  return () => {
    /* Called between each split */
    split.words.forEach((w, i) => colors[i] = utils.get(w, 'color'));
  }
});
```

---

#### revert() (TextSplitter)

Reverts the split target HTML back to its original state, removing debug styles and reverting all animations added with `split.addEffect()` in the process.

**Returns:** `TextSplitter`

**Example:**

```js
import { animate, stagger, splitText, utils } from 'animejs';

const [ $button ] = utils.$('button');
const [ $p ] = utils.$('p');

const split = splitText('p', {
  words: { wrap: 'clip' },
  debug: true,
});

split.addEffect((self) => animate(self.words, {
  y: ['100%', '0%'],
  duration: 1250,
  ease: 'out(3)',
  delay: stagger(100),
  loop: true,
  alternate: true,
}));

const revertSplit = () => {
  split.revert();
  $button.setAttribute('disabled', 'true');
}

$button.addEventListener('click', revertSplit);
```

---

#### refresh() (TextSplitter)

Manually splits the text again, taking into account any parameter changes.

```js
const split = splitText(target);

split.html = 'Some new text to split';

split.refresh();
```

**Safely updatable properties:**

| Name           | Description                                        |
|----------------|----------------------------------------------------|
| `$target`      | The split element (`HTMLElement`)                  |
| `html`         | The HTML to split (`String`)                       |
| `debug`        | Defines if debug styles are visible (`Boolean`)    |
| `includeSpaces` | Defines if spaces should be wrapped (`Boolean`)   |
| `accessible`   | Defines if accessible clone is created (`Boolean`) |
| `lineTemplate` | The line HTML template (`String`)                  |
| `wordTemplate` | The word HTML template (`String`)                  |
| `charTemplate` | The char HTML template (`String`)                  |

**Returns:** `TextSplitter`

**Example:**

```js
import { animate, stagger, splitText, utils } from 'animejs';

const [ $add, $remove ] = utils.$('button');
const [ $p ] = utils.$('p');

const split = splitText('p', {
  lines: { wrap: 'clip' },
  debug: true,
});

split.addEffect((self) => animate(self.words, {
  y: ['0%', '75%'],
  loop: true,
  alternate: true,
  ease: 'inOutQuad',
  delay: stagger(150)
}));

const words = ['sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'tortor', 'lectus', 'aliquet'];

const addRandomWord = () => {
  split.html += ' ' + utils.randomPick(words);
  split.refresh();
}

const removeRandomWord = () => {
  const words = split.words.map(w => w.innerHTML);
  split.html = (words.splice(utils.random(0, words.length - 1), 1), words).join(' ');
  split.refresh();
}

$add.addEventListener('click', addRandomWord);
$remove.addEventListener('click', removeRandomWord);
```

---

### TextSplitter Properties

Properties available on the `TextSplitter` instance returned by a `splitText()` function.

```
const split = splitText(target, parameters);
      ┌──────┐
split.│lines │
split.│words ├─ Properties
split.│chars │
      └──────┘
```

| Name            | Description                                        |
|-----------------|----------------------------------------------------|
| `$target`       | Gets the split root element (`HTMLElement`)        |
| `html`          | Gets the HTML to split (`String`)                  |
| `debug`         | Gets if debug styles are visible (`Boolean`)       |
| `includeSpaces` | Gets if spaces are wrapped within the text (`Boolean`) |
| `accessible`    | Gets if accessible clone element is created (`Boolean`) |
| `lines`         | Gets the line elements (`Array<HTMLElement>`)      |
| `words`         | Gets the word elements (`Array<HTMLElement>`)      |
| `chars`         | Gets the character elements (`Array<HTMLElement>`) |
| `lineTemplate`  | The line HTML template (`String`)                  |
| `wordTemplate`  | The word HTML template (`String`)                  |
| `charTemplate`  | The char HTML template (`String`)                  |

---

## Utilities

A collection of utility functions for common animation tasks that can also serve as modifier functions.

All utility functions are available on the `utils` object imported from the main `'animejs'` module:

```js
import { utils } from 'animejs';

utils.stagger();
utils.$();
utils.get();
utils.set();
// Other functions
```

Or imported directly from the main `'animejs'` module:

```js
import {
  stagger,
  $,
  get,
  set,
  // Other functions
} from 'animejs';
```

Or imported as a standalone module from the `'animejs/utils'` subpath:

```js
import {
  stagger,
  $,
  get,
  set,
  // Other functions
} from 'animejs/utils';
```

**Available utilities:**
- stagger()
- $()
- get()
- set()
- cleanInlineStyles()
- remove()
- sync()
- keepTime()
- random()
- createSeededRandom()
- randomPick()
- shuffle()
- round()
- clamp()
- snap()
- wrap()
- mapRange()
- lerp()
- damp()
- roundPad()
- padStart()
- padEnd()
- degToRad()
- radToDeg()
- Chain-able utilities

---

### stagger()

Creates sequential effects by distributing values progressively across multiple targets.

Stagger Function based values are created using the `stagger()` function:

```js
import { stagger } from 'animejs';

const functionValue = stagger(value, parameters);
```

**Parameters:**

| Name                   | Accepts            |
|------------------------|--------------------|
| `value`                | Stagger value      |
| `parameters` *(optional)* | Stagger parameters |

**Returns:** Function based value

**Example:**

```js
import { animate, stagger } from 'animejs';

animate('.square', {
  x: '17rem',
  scale: stagger([1, .1]),
  delay: stagger(100),
});
```

---

#### Time Staggering

Tween's time-related properties like `delay` and `duration` accept Function-based values, enabling the use of stagger in multi-target animations.

Each target tween has different timings, increasing by a set number of milliseconds for each subsequent target.

**Example:**

```js
import { animate, stagger } from 'animejs';

animate('.square', {
  x: '17rem',
  delay: stagger(100),
  duration: stagger(200, { start: 500 }),
  loop: true,
  alternate: true
});
```

---

#### Values Staggering

All tween animatable properties accept function-based values, enabling staggered values in multi-target animations.

Each target has a staggered value, increasing by a set number for each subsequent target.

**Example:**

```js
import { animate, stagger } from 'animejs';

const animation = animate('.square', {
  y: stagger(['-2.75rem', '2.75rem']),
  rotate: { from: stagger('-.125turn') },
  loop: true,
  alternate: true
});
```

---

#### Timeline Positions Staggering (V4)

The timeline `add()` position argument accepts function-based values, enabling stagger when positioning multi-target animations.

Each target creates its own animation at a staggered position. Callbacks defined on the staggered animation are also staggered and called for every target.

The `start` property of the `stagger()` parameter object defines the starting value and accepts the same values as the timeline `add()` position argument.

**Example:**

```js
import { createTimeline, stagger, utils } from 'animejs';

const tl = createTimeline();

const onComplete = ({ targets }) => {
  utils.set(targets, { color: 'var(--hex-red)' });
}

tl
.add('.circle', { x: '15rem', onComplete })
.label('circle completes')
.add(['.triangle', '.square'], {
  x: '15rem',
  onComplete, // Callbacks are also staggered
}, stagger(500, { start: 'circle completes-=500' }));
```

---

#### Stagger Value Types

```
stagger(
  ┌───────────────────┐
  │ '1rem',           ├─ Stagger Value
  └───────────────────┘
  {
    start: 100,
    from: 2,
    reversed: false,
    ease: 'outQuad',
    grid: [8, 8],
  }
);
```

**Numerical value:** Represents how much each staggered value is incremented by.

| Property | Value                                    |
|----------|------------------------------------------|
| Accepts  | `Number` or `String` containing a Number |

**Example:**

```js
import { animate, stagger } from 'animejs';

animate('.square', {
  // Increase translateX by 5.75rem for each element
  x: stagger('5.75rem'),
  // Increase delay by 100ms for each element
  delay: stagger(100)
});
```

**Range value:** Distributes values evenly between two numerical values.

| Property | Value                               |
|----------|-------------------------------------|
| Accepts  | `[Number|String, Number|String]`    |

**Example:**

```js
import { animate, stagger } from 'animejs';

animate('.square', {
  y: stagger(['2.75rem', '-2.75rem']),
  delay: stagger([0, 500]),
});
```

---

#### Stagger Parameters

```
stagger(
  '1rem',
  {
  ┌───────────────────┐
  │ start: 100,       │
  │ from: 2,          │
  │ reversed: false,  ├─ Stagger Parameters
  │ ease: 'outQuad',  │
  │ grid: [8, 8],     │
  └───────────────────┘
  }
);
```

**Available parameters:**
- start
- from
- reversed
- ease
- grid
- axis
- modifier
- use
- total

---

##### start (Stagger)

Defines the starting value of the stagger.

| Property | Value                                                   |
|----------|---------------------------------------------------------|
| Accepts  | `Number` \| Timeline time position (when used as timeline position) |
| Default  | `0`                                                     |

**Example:**

```js
import { animate, stagger } from 'animejs';

animate('.square', {
  x: stagger('1rem', { start: 14 }), // adds 14 to the staggered value
  delay: stagger(100, { start: 500 }), // adds 500 to the staggered value
});
```

---

##### from (Stagger)

Defines the starting position of the stagger effect.

| Value      | Description                        |
|------------|------------------------------------|
| `Number`   | The starting index of the effect   |
| `'first'`  | Equivalent to index `0`            |
| `'center'` | Starts the effect from the center  |
| `'last'`   | Starts from the last element       |
| `'random'` | Randomises the order               |

| Property | Value    |
|----------|----------|
| Default  | `0`      |

**Example:**

```js
import { createTimeline, stagger } from 'animejs';

const tl = createTimeline({
  loop: true,
  defaults: { duration: 500 },
})
.add('.row .square', {
  scale: 0,
  delay: stagger(25, { from: 'center' }),
});
```

---

##### reversed (Stagger)

Defines if the stagger should operate in reverse.

| Property | Value     |
|----------|-----------|
| Accepts  | `Boolean` |
| Default  | `false`   |

**Example:**

```js
import { animate, stagger } from 'animejs';

animate('.square', {
  translateX: '17rem',
  delay: stagger(100, { reversed: true }),
});
```

---

##### ease (Stagger)

Defines an easing applied to the staggered values distribution.

| Property | Value      |
|----------|------------|
| Accepts  | ease       |
| Default  | `'linear'` |

**Example:**

```js
import { animate, stagger } from 'animejs';

animate('.square', {
  y: stagger(['2.75rem', '-2.75rem'], { ease: 'inOut(3)' }),
  delay: stagger(100, { ease: 'inOut(3)' }),
});
```

---

##### grid (Stagger)

Distributes values on a 2D array.

| Property | Value                    |
|----------|--------------------------|
| Accepts  | `[Number, Number]`       |
| Default  | `null`                   |

**Example:**

```js
import { animate, stagger, utils } from 'animejs';

const $squares = utils.$('.square');

function animateGrid() {
  animate($squares, {
    scale: [
      { to: [0, 1.25] },
      { to: 0 }
    ],
    delay: stagger(100, {
      grid: [11, 4],
      from: utils.random(0, 11 * 4)
    }),
    onComplete: animateGrid
  });
}

animateGrid();
```

---

##### axis (Stagger)

Defines the direction of a staggered grid effect by restricting which axis can update.

| Value  | Effect                            |
|--------|-----------------------------------|
| `'x'`  | Restrict direction to the x axis  |
| `'y'`  | Restrict direction to the y axis  |

**Example:**

```js
import { animate, stagger, utils } from 'animejs';

const grid = [11, 4];
const $squares = utils.$('.square');

function animateGrid() {
  const from = utils.random(0, 11 * 4);
  animate($squares, {
    translateX: [
      { to: stagger('-.75rem', { grid, from, axis: 'x' }) },
      { to: 0, ease: 'inOutQuad' },
    ],
    translateY: [
      { to: stagger('-.75rem', { grid, from, axis: 'y' }) },
      { to: 0, ease: 'inOutQuad' },
    ],
    delay: stagger(85, { grid, from }),
    onComplete: animateGrid
  });
}

animateGrid();
```

---

##### modifier (Stagger)

Defines a function that modifies the returned staggered value.

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | `Function` with `value` parameter                  |
| Returns  | `Number` \| `String`                               |

**Example:**

```js
import { animate, stagger } from 'animejs';

animate('.square', {
  boxShadow: [
    { to: stagger([1, .25], {
        modifier: v => `0 0 ${v * 30}px ${v * 20}px currentColor`,
        from: 'center'
      })
    },
    { to: 0 },
  ],
  delay: stagger(100, { from: 'center' }),
  loop: true
});
```

---

##### use (Stagger) (V4)

Defines a custom staggering order using an attribute or property of the targets instead of natural target order. The properties or attributes must contain a suite of numbers starting at `0`.

> **Note:** A custom `total` parameter value must be defined if the highest custom index is lower than the actual total length when also using `from`, `reversed`, or `ease` parameters.

| Property | Value                                     |
|----------|-------------------------------------------|
| Accepts  | `String` of a valid property or attribute |
| Default  | `null`                                    |

**Example:**

```js
import { animate, stagger } from 'animejs';

animate('.square', {
  x: '17rem',
  rotate: 90,
  delay: stagger(250, { use: 'data-index' }),
});
```

---

##### total (Stagger) (V4)

Defines a custom staggering length instead of using the actual total length of staggered targets.

| Property | Value    |
|----------|----------|
| Accepts  | `Number` |
| Default  | `null`   |

**Example:**

```js
import { animate, stagger } from 'animejs';

animate('.square', {
  x: '17rem',
  rotate: 90,
  delay: stagger(250, { use: 'data-index', total: 2, reversed: true }),
});
```

---

### $() (V4)

Converts the provided targets parameter into an `Array` of elements, serving as an alternative to `document.querySelectorAll()`.

When used within a Scope, it uses the Scope's `root` element instead of `document`, effectively calling `root.querySelectorAll()`.

```js
const targetsArray = utils.$(targets);
```

**Parameters:**

| Name      | Accepts                      |
|-----------|------------------------------|
| `targets` | CSS selector \| DOM Elements |

**Returns:** An `Array` of `HTMLElement` or `SVGElement` or `SVGGeometryElement`

**Example:**

```js
import { utils, createScope } from 'animejs';

// Targets all the '.square' elements
utils.$('.square').forEach($square => {
  utils.set($square, { scale: .5 });
});

createScope({ root: '.row:nth-child(2)' }).add(() => {
  // Limits the selection to '.row:nth-child(2) .square'
  utils.$('.square').forEach($square => {
    utils.set($square, { rotate: 45 });
  });
});
```

---

### get()

Returns the current value of a target's property, with optional unit conversion or removal.

```js
const value = utils.get(target, property, unit);
```

**Parameters:**

| Name                 | Accepts            | Description                           |
|----------------------|--------------------|---------------------------------------|
| `target`             | Targets            | The targeted element                  |
| `property`           | `String`           | A valid property name of the target   |
| `unit` *(optional)*  | `String` \| `Boolean` | Strip unit if `false`, convert if valid unit `String` |

**Returns:**

| Type     | Condition                                              |
|----------|--------------------------------------------------------|
| `String` | Target is HTMLElement/SVGElement and `unit` not set to `false` |
| `Number` | Target is HTMLElement/SVGElement and `unit` set to `false` |

**Example:**

```js
import { animate, utils } from 'animejs';

const [ $raw, $rem, $num ] = utils.$('.value');
const [ $sq1, $sq2, $sq3 ] = utils.$('.square');

const getValues = () => {
  // Return the raw parsed value (string with px)
  $raw.textContent = utils.get($sq1, 'x');
  // Return the converted value with unit (string with rem)
  $rem.textContent = utils.get($sq2, 'x', 'rem');
  // Return the raw value with unit removed (number)
  $num.textContent = utils.get($sq3, 'x', false);
}

animate('.square', {
  x: 270,
  loop: true,
  alternate: true,
  onUpdate: getValues
});
```

---

### set()

Immediately sets one or multiple properties values to one or multiple targets.

```js
const setter = utils.set(targets, properties);
```

**Parameters:**

| Name         | Accepts    | Description                           |
|--------------|------------|---------------------------------------|
| `targets`    | Targets    | The targeted element(s)               |
| `properties` | `Object`   | An object of valid properties and values |

**Returns:** Animation

> **Note:** `utils.set()` is useful for setting complex values, but for repeatedly updating the same properties on the same targets, using an Animatable is recommended for better performance.

> **Note:** `utils.set()` won't work if you try to set an attribute on a DOM or SVG element not already defined on the element.

**Example:**

```js
import { utils, stagger } from 'animejs';

const [ $set, $revert ] = utils.$('button');
const squares = utils.$('.square');
const colors = ['red', 'orange', 'yellow'];

let setter;

const setStyles = () => {
  setter = utils.set(squares, {
    borderRadius: '50%',
    y: () => utils.random(-1, 1) + 'rem',
    scale: stagger(.1, { start: .25, ease: 'out' }),
    color: () => `var(--hex-${utils.randomPick(colors)})`
  });
  $set.setAttribute('disabled', 'true');
  $revert.removeAttribute('disabled');
}

const revertStyles = () => {
  setter.revert();
  $set.removeAttribute('disabled');
  $revert.setAttribute('disabled', 'true');
}

$set.addEventListener('click', setStyles);
$revert.addEventListener('click', revertStyles);
```

---

### cleanInlineStyles() (V4)

Removes all CSS inline styles added by the specified instance. Can be used as an Animation or Timeline `onComplete()` callback.

```js
const cleanedInstance = utils.cleanInlineStyles(instance);
```

**Parameters:**

| Name       | Accepts                    |
|------------|----------------------------|
| `instance` | Animation \| Timeline      |

**Returns:** The passed Animation or Timeline instance

**Example:**

```js
import { animate, utils } from 'animejs';

utils.set('.square', { scale: .75 });

animate('.keep-styles', {
  x: '23rem',
  borderRadius: '50%',
});

animate('.clean-styles', {
  x: '23rem',
  borderRadius: '50%',
  // This removes the translateX and borderRadius inline styles
  // But keeps the scale previously added outside of this animation
  onComplete: utils.cleanInlineStyles
});
```

---

### remove()

Removes one or multiple targets from all active animations, a specific instance or a specific property, cancelling any Animation or Timeline referencing these targets if needed.

```js
const removed = utils.remove(targets, instance, propertyName);
```

**Parameters:**

| Name                       | Accepts                         |
|----------------------------|---------------------------------|
| `targets`                  | Targets                         |
| `instance` *(optional)*    | Animation \| Timeline           |
| `propertyName` *(optional)* | Animatable Properties name `String` |

**Returns:** An `Array` of the removed targeted elements

**Example:**

```js
import { animate, utils } from 'animejs';

let updates = 0;

const [ $removeFirstButton ] = utils.$('.remove-1');
const [ $removeSecondButton ] = utils.$('.remove-2');
const [ $updates ] = utils.$('.value');

const animation = animate('.square', {
  x: '17rem',
  rotate: 360,
  alternate: true,
  loop: true,
  onUpdate: () => {
    $updates.textContent = updates++;
  }
});

$removeFirstButton.onclick = () => {
  utils.remove('.row:nth-child(1) .square');
}

$removeSecondButton.onclick = () => {
  utils.remove('.row:nth-child(2) .square', animation, 'x');
}
```

---

### sync() (V4)

Execute a callback function in sync with the engine loop.

```js
utils.sync(callback);
```

**Parameters:**

| Name       | Accepts    |
|------------|------------|
| `callback` | `Function` |

**Returns:** `Timer`

**Example:**

```js
import { animate, utils } from 'animejs';

const [ $range ] = utils.$('.range');
const [ $speed ] = utils.$('.speed');

const animation = animate('.circle', {
  x: '16rem',
  loop: true,
  alternate: true,
  playbackRate: 1,
});

const updateSpeed = () => {
  const { value } = $range;
  $speed.innerHTML = utils.roundPad(+value, 2);
  utils.sync(() => animation.speed = value);
}

$range.addEventListener('input', updateSpeed);
```

---

### keepTime() (V4)

Returns a `Function` that recreates a Timer, Animation, or Timeline while keeping track of its current time, allowing you to seamlessly update an animation's parameters without breaking the playback state.

```js
const trackedAnimate = utils.keepTime(() => animate(target, params));

const tracked = trackedAnimate();
```

**Parameters:**

| Name          | Accepts                                                 |
|---------------|---------------------------------------------------------|
| `constructor` | A `Function` that returns a Timer, Animation, or Timeline |

**Returns:** A `Function` that returns the tracked Timer, Animation, or Timeline

**Example:**

```js
import { animate, utils } from 'animejs';

const [ $button ] = utils.$('button');
const clocks = utils.$('.clock');
let targetIndex = 0;

const animateNextTarget = utils.keepTime(() => {
  if (targetIndex > clocks.length - 1) targetIndex = 0;
  return animate(clocks[targetIndex++], {
    color: ['#B7FF54', '#FF4B4B'],
    rotate: 360,
    ease: 'linear',
    duration: 8000,
    loop: true,
  })
});

animateNextTarget();

$button.addEventListener('click', animateNextTarget);
```

---

### random()

Returns a random `Number` within a specified range, with an optional third parameter determining the number of decimal places.

```js
const randomValue = utils.random(min, max, decimalLength);
```

**Parameters:**

| Name                        | Accepts  |
|-----------------------------|----------|
| `min`                       | `Number` |
| `max`                       | `Number` |
| `decimalLength` *(optional)* | `Number` (default: `0`) |

**Returns:** `Number`

**Example:**

```js
import { utils } from 'animejs';

utils.set('.square', {
  x: () => utils.random(2, 18, 2) + 'rem',
  rotate: () => utils.random(0, 180),
  scale: () => utils.random(.25, 1.5, 3),
});
```

---

### createSeededRandom()

Returns a pre-seeded pseudo-random function that always returns the same suite of `Number` within a specified range, with an optional third parameter determining the number of decimal places.

```js
const seededRandom = utils.createSeededRandom(12345);

const randomValue = seededRandom(min, max, decimalLength);
```

**Parameters:**

| Name                              | Accepts  |
|-----------------------------------|----------|
| `seed` *(optional)*               | `Number` (default: `0`) |
| `seededMin` *(optional)*          | `Number` (default: `0`) |
| `seededMax` *(optional)*          | `Number` (default: `1`) |
| `seededDecimalLength` *(optional)* | `Number` (default: `0`) |

**Returns:** A pre-seeded `random()` function

**Example:**

```js
import { utils } from 'animejs';

const seededRandom = utils.createSeededRandom(12345);

utils.set('.square', {
  x: () => seededRandom(2, 18, 2) + 'rem',
  rotate: () => seededRandom(0, 180),
  scale: () => seededRandom(.25, 1.5, 3),
});
```

---

### randomPick() (V4)

Returns a random element from a collection.

```js
const randomElement = utils.randomPick(collection);
```

**Parameters:**

| Name         | Accepts                            |
|--------------|------------------------------------|
| `collection` | `Array` \| `NodeList` \| `String`  |

**Returns:** A random element from the collection

**Example:**

```js
import { utils } from 'animejs';

utils.set('.letter', {
  x: () => utils.randomPick([5, 9, 13, 17]) + 'rem',
  scale: () => utils.randomPick([1, 1.25, 1.5, 1.75]),
  color: () => `var(--hex-${utils.randomPick(['red', 'orange', 'yellow'])}-1)`,
  innerHTML: () => utils.randomPick('ABCD'),
});
```

---

### shuffle() (V4)

Mutates an array by randomizing the order of its elements.

```js
const shuffledArray = utils.shuffle(array);
```

**Parameters:**

| Name    | Accepts  |
|---------|----------|
| `array` | `Array`  |

**Returns:** The mutated `Array`

**Example:**

```js
import { utils, animate, stagger } from 'animejs';

const [ $shuffle ] = utils.$('button');
const squares = utils.$('.square');
const x = stagger('3.2rem');

// Initial squares x position
utils.set(squares, { x });

const shuffle = () => animate(utils.shuffle(squares), { x });

$shuffle.addEventListener('click', shuffle);
```

---

### round()

Rounds a `Number` to a specified number of decimal places or creates a rounding `Function` with a pre-defined decimalLength parameter.

```js
const roundedValue = utils.round(value, decimalLength);
const roundingFunction = utils.round(decimalLength);
```

**Parameters:**

| Name                    | Accepts  |
|-------------------------|----------|
| `value` *(optional)*    | `Number` |
| `decimalLength`         | `Number` |

**Returns:** A `Number` if a value is provided, otherwise a chain-able utility `Function`:

```js
const clampAndRound = utils.clamp(0, 100).round(2); // Clamp then round to 2 decimal places
clampAndRound(72.7523); // 72.75
clampAndRound(120.2514); // 100
```

**Example:**

```js
import { animate, utils } from 'animejs';

animate('.normal', {
  rotate: '1turn',
  duration: 3000,
  loop: true,
});

animate('.rounded', {
  rotate: '1turn',
  modifier: utils.round(1), // Used as a function
  duration: 3000,
  loop: true,
});
```

---

### clamp() (V4)

Restricts a `Number` between the specified min and max values or creates a clamping `Function` with pre-defined min and max parameters.

```js
const clampedValue = utils.clamp(value, min, max);
const clamperFunction = utils.clamp(min, max);
```

**Parameters:**

| Name                 | Accepts  |
|----------------------|----------|
| `value` *(optional)* | `Number` |
| `min`                | `Number` |
| `max`                | `Number` |

**Returns:** A `Number` if a value is provided, otherwise a chain-able utility `Function`:

```js
const clampBetween0and100 = utils.clamp(0, 100);
clampBetween0and100(90);  // 90
clampBetween0and100(120); // 100
clampBetween0and100(-15); // 0

const clampAndRound = utils.clamp(0, 100).round(2); // Clamp then round to 2 decimal places
clampAndRound(72.7523); // 72.75
clampAndRound(120.2514); // 100
```

**Example:**

```js
import { animate, utils } from 'animejs';

animate('.normal', {
  rotate: '1turn',
  duration: 3000,
  loop: true,
  ease: 'inOut',
});

animate('.clamped', {
  rotate: '1turn',
  modifier: utils.clamp(.25, .75), // Used as a function
  duration: 3000,
  loop: true,
  ease: 'inOut',
});
```

---

### snap() (V4)

Rounds a `Number` to the nearest specified increment or creates a snapping `Function` with a pre-defined increment parameter. If an `Array` is provided as the increment, it selects the closest value from the array.

```js
const snappedValue = utils.snap(value, increment);
const snapperFunction = utils.snap(increment);
```

**Parameters:**

| Name                 | Accepts                     |
|----------------------|-----------------------------|
| `value` *(optional)* | `Number`                    |
| `increment`          | `Number` \| `Array<Number>` |

**Returns:** A `Number` if a value is provided, otherwise a chain-able utility `Function`:

```js
const snapTo10 = utils.snap(10);
snapTo10(94);  // 90
snapTo10(-17); // -20

const snapToArray = utils.snap([0, 50, 100]);
snapToArray(30);  // 50
snapToArray(75);  // 100
snapToArray(-10); // 0

const clampAndSnap = utils.clamp(0, 100).snap(30);
clampAndSnap(72.7523); // 60
clampAndSnap(120.2514); // 90
```

**Example:**

```js
import { animate, utils } from 'animejs';

animate('.normal', {
  rotate: '1turn',
  duration: 3000,
  loop: true,
  ease: 'inOut',
});

animate('.snapped', {
  rotate: '1turn',
  modifier: utils.snap(.25), // Used as a modifier
  duration: 3000,
  loop: true,
  ease: 'inOut',
});
```

---

### wrap() (V4)

Wraps a `Number` between a range defined with min and max values or creates a wrapping `Function` with pre-defined min and max parameters.

```js
const wrappedValue = utils.wrap(value, min, max);
const wrapperFunction = utils.wrap(min, max);
```

**Parameters:**

| Name                 | Accepts  |
|----------------------|----------|
| `value` *(optional)* | `Number` |
| `min`                | `Number` |
| `max`                | `Number` |

**Returns:** A `Number` if a value is provided, otherwise a chain-able utility `Function`:

```js
const wrapBetween0and100 = utils.wrap(0, 100);
wrapBetween0and100(105); // 5
wrapBetween0and100(220); // 20
wrapBetween0and100(-15); // 85

const wrapAndRound = utils.wrap(0, 100).round(2); // Wrap then round to 2 decimal places
wrapAndRound(105.7523); // 5.75
wrapAndRound(220.2514); // 20.25
```

**Example:**

```js
import { animate, utils } from 'animejs';

animate('.normal', {
  rotate: '1turn',
  duration: 3000,
  loop: true,
  ease: 'inOut',
});

animate('.wrapped', {
  rotate: '1turn',
  modifier: utils.wrap(-.25, .25), // Used as a modifier
  duration: 3000,
  loop: true,
  ease: 'inOut',
});
```

---

### mapRange() (V4)

Maps a `Number` from one range to another or creates a mapping `Function` with pre-defined range parameters.

```js
const mappedValue = utils.mapRange(value, fromLow, fromHigh, toLow, toHigh);
const mapperFunction = utils.mapRange(fromLow, fromHigh, toLow, toHigh);
```

**Parameters:**

| Name                 | Accepts  |
|----------------------|----------|
| `value` *(optional)* | `Number` |
| `fromLow`            | `Number` |
| `fromHigh`           | `Number` |
| `toLow`              | `Number` |
| `toHigh`             | `Number` |

**Returns:** A `Number` if a value is provided, otherwise a chain-able utility `Function`:

```js
const mapFrom0and100to0and200 = utils.mapRange(0, 100, 0, 200);
mapFrom0and100to0and200(45);  // 90
mapFrom0and100to0and200(120); // 240
mapFrom0and100to0and200(-15); // -30

const normalizeAndClamp = utils.mapRange(-100, 100, 0, 1).clamp(0, 1); // Normalize then clamp
normalizeAndClamp(50);  // 0.75
normalizeAndClamp(120); // 1
```

**Example:**

```js
import { animate, utils } from 'animejs';

animate('.normal', {
  rotate: '12turn',
  duration: 12000,
  loop: true,
  ease: 'inOut',
});

animate('.mapped', {
  rotate: '12turn',
  modifier: utils.mapRange(0, 12, 0, 1), // Used as a modifier
  duration: 12000,
  loop: true,
  ease: 'inOut',
});
```

---

### lerp() (V4)

Interpolates a value between two numbers based on a given progress or creates an interpolation `Function` with pre-defined start and end parameters.

```js
const interpolatedValue = utils.lerp(start, end, progress);
const interpolatorFunction = utils.lerp(start, end);
```

**Parameters:**

| Name                    | Accepts              |
|-------------------------|----------------------|
| `start`                 | `Number`             |
| `end`                   | `Number`             |
| `progress` *(optional)* | `Number` (`0` to `1`) |

**Returns:** A `Number` if a progress value is provided, otherwise a chain-able utility `Function`:

```js
const interpolateBetween0and100 = utils.lerp(0, 100);
interpolateBetween0and100(0.5);  // 50
interpolateBetween0and100(0.75); // 75
interpolateBetween0and100(0.25); // 25

const interpolateAndRound = utils.lerp(0, 100).round(2); // Interpolate then round
interpolateAndRound(0.677523); // 67.75
interpolateAndRound(1.202514); // 100
```

**Example:**

```js
import { animate, utils } from 'animejs';

animate('.normal', {
  rotate: '1turn',
  duration: 3000,
  loop: true,
  ease: 'inOut',
});

animate('.interpolated', {
  rotate: '1turn',
  modifier: utils.lerp(0, 12), // Interpolates 0 to 12 using rotate progress 0 to 1
  duration: 3000,
  loop: true,
  ease: 'inOut',
});
```

---

### damp() (V4)

A frame rate independent version of `utils.lerp()` that performs linear interpolation between two values. The closer the amount is to `1`, the closer the result is to the end value.

```js
const damped = utils.damp(start, end, deltaTime, amount);
```

**Parameters:**

| Name        | Accepts              |
|-------------|----------------------|
| `start`     | `Number`             |
| `end`       | `Number`             |
| `deltaTime` | `Number` (ms)        |
| `amount`    | `Number` (`0` to `1`) |

**Returns:** `Number`

```js
utils.damp(0, 100, 8, 0);   // 0
utils.damp(0, 100, 8, 0.5); // 50
utils.damp(0, 100, 8, 1);   // 100
```

**Example:**

```js
import { animate, createTimer, utils } from 'animejs';

const [ $input ] = utils.$('.input');
const [ $lerped ] = utils.$('.lerped');
const [ $damped ] = utils.$('.damped');

animate($input, {
  rotate: '1000turn',
  modifier: utils.snap(.25),
  duration: 4000000,
  loop: true,
  ease: 'linear',
});

// Frame-rate independent damping
const dampedLoop = createTimer({
  frameRate: 15,
  onUpdate: clock => {
    const sourceRotate = utils.get($input, 'rotate', false);
    const dampedRotate = utils.get($damped, 'rotate', false);
    utils.set($damped, {
      rotate: utils.damp(dampedRotate, sourceRotate, clock.deltaTime, .075) + 'turn'
    });
  }
});

// Standard lerp (not frame-rate independent)
const lerpedLoop = createTimer({
  frameRate: 15,
  onUpdate: () => {
    const sourceRotate = utils.get($input, 'rotate', false);
    const lerpedRotate = utils.get($lerped, 'rotate', false);
    utils.set($lerped, {
      rotate: utils.lerp(lerpedRotate, sourceRotate, .075) + 'turn'
    });
  }
});
```

---

### roundPad() (V4)

Rounds a value to a specified decimal length, pads with zeros if needed, and returns the result as a string, or creates a rounding and padding `Function` with a pre-defined decimalLength parameter.

```js
const roundedPaddedValue = utils.roundPad(value, decimalLength);
const roundPadderFunction = utils.roundPad(decimalLength);
```

**Parameters:**

| Name                 | Accepts              |
|----------------------|----------------------|
| `value` *(optional)* | `Number` \| `String` |
| `decimalLength`      | `Number`             |

**Returns:** A `String` if a value is provided, otherwise a chain-able utility `Function`:

```js
const roundPadTo2Decimals = utils.roundPad(2);
roundPadTo2Decimals(90.12345);  // '90.12'
roundPadTo2Decimals(120);       // '120.00'
roundPadTo2Decimals(15.9);      // '15.90'

const snapAndRoundPad = utils.snap(50).roundPad(2); // Snap then roundPad
snapAndRoundPad(123.456); // '100.00'
snapAndRoundPad(175.789); // '200.00'
```

**Example:**

```js
import { animate, utils } from 'animejs';

animate('.value', {
  innerHTML: '8.1',
  modifier: utils.roundPad(3),
  duration: 10000,
  ease: 'linear',
});
```

---

### padStart() (V4)

Pads a `Number` from the start with a string until the result reaches a given length, or creates a padding `Function` with pre-defined totalLength and padString parameters.

```js
const paddedValue = utils.padStart(value, totalLength, padString);
const padderFunction = utils.padStart(totalLength, padString);
```

**Parameters:**

| Name                 | Accepts              |
|----------------------|----------------------|
| `value` *(optional)* | `String` \| `Number` |
| `totalLength`        | `Number`             |
| `padString`          | `String`             |

**Returns:** A `String` if a value is provided, otherwise a chain-able utility `Function`:

```js
const padTo5WithZeros = utils.padStart(5, '0');
padTo5WithZeros('123');  // '00123'
padTo5WithZeros(78);     // '00078'
padTo5WithZeros('1234'); // '01234'

const roundAndPad = utils.round(2).padStart(5, '0'); // Round then pad
roundAndPad(12.345);  // '12.35'
roundAndPad(7.8);     // '07.80'
```

**Example:**

```js
import { animate, utils } from 'animejs';

animate('.value', {
  innerHTML: 10000,
  modifier: utils.round(0).padStart(6, '-'),
  duration: 100000,
  ease: 'linear',
});
```

---

### padEnd() (V4)

Pads a `Number` from the end with a string until the result reaches a given length, or creates a padding `Function` with pre-defined totalLength and padString parameters.

```js
const paddedValue = utils.padEnd(value, totalLength, padString);
const padderFunction = utils.padEnd(totalLength, padString);
```

**Parameters:**

| Name                 | Accepts              |
|----------------------|----------------------|
| `value` *(optional)* | `String` \| `Number` |
| `totalLength`        | `Number`             |
| `padString`          | `String`             |

**Returns:** A `String` if a value is provided, otherwise a chain-able utility `Function`:

```js
const padTo5WithZeros = utils.padEnd(5, '0');
padTo5WithZeros('123');  // '12300'
padTo5WithZeros(78);     // '78000'
padTo5WithZeros('1234'); // '12340'

const roundAndPadEnd = utils.round(0).padEnd(5, '0'); // Round then pad
roundAndPadEnd(123.456); // '12300'
roundAndPadEnd(7.8);     // '80000'
```

**Example:**

```js
import { animate, utils } from 'animejs';

animate('.value', {
  innerHTML: 1,
  modifier: utils.round(3).padEnd(6, '-'),
  duration: 100000,
  ease: 'linear',
});
```

---

### degToRad() (V4)

Converts degrees into radians.

```js
const radians = utils.degToRad(degrees);
```

**Parameters:**

| Name                    | Accepts  |
|-------------------------|----------|
| `degrees` *(optional)*  | `Number` |

**Returns:** A `Number` if degrees are provided, otherwise a chain-able utility `Function`:

```js
const degToRad = utils.degToRad();
degToRad(360); // 6.283185307179586

const roundDegToRad = utils.degToRad().round(2); // Convert then round
roundDegToRad(180); // 3.14
roundDegToRad(90);  // 1.57
```

**Example:**

```js
import { animate, createAnimatable, utils } from 'animejs';

const radAnimatable = createAnimatable('.rad', {
  rotate: { unit: 'rad', duration: 0 },
});

const [ $deg ] = utils.$('.deg');

const degAnimation = animate($deg, {
  rotate: '360deg',
  ease: 'linear',
  loop: true,
  onUpdate: () => {
    const degrees = utils.get($deg, 'rotate', false);
    radAnimatable.rotate(utils.degToRad(degrees));
  }
});
```

---

### radToDeg() (V4)

Converts radians into degrees.

```js
const degrees = utils.radToDeg(radians);
```

**Parameters:**

| Name                   | Accepts  |
|------------------------|----------|
| `radians` *(optional)* | `Number` |

**Returns:** A `Number` if radians are provided, otherwise a chain-able utility `Function`:

```js
const radToDeg = utils.radToDeg();
radToDeg(1.7453292519943295); // 100
radToDeg(Math.PI);            // 180

const roundRadToDeg = utils.radToDeg().round(2); // Convert then round
roundRadToDeg(Math.PI / 7);  // 25.71
```

**Example:**

```js
import { animate, createAnimatable, utils } from 'animejs';

const degAnimatable = createAnimatable('.deg', {
  rotate: { unit: 'deg', duration: 0 }
});

const [ $rad ] = utils.$('.rad');

const degAnimation = animate($rad, {
  rotate: (Math.PI * 2) + 'rad',
  ease: 'linear',
  loop: true,
  onUpdate: () => {
    const radians = utils.get($rad, 'rotate', false);
    degAnimatable.rotate(utils.radToDeg(radians));
  }
});
```

---

### Chain-able Utility Functions (V4)

Chain-able utility functions allow for the creation of complex operations by combining multiple functions in a single expression.

```js
const clampRoundPad = utils.clamp(0, 100).round(2).padStart(6, '0');
clampRoundPad(125);   // '000100'
clampRoundPad(75.25); // '075.25'
```

**Chainable functions:**
- `round()`
- `clamp()`
- `snap()`
- `wrap()`
- `mapRange()`
- `lerp()`
- `roundPad()`
- `padStart()`
- `padEnd()`
- `degToRad()`
- `radToDeg()`

> **Note:** Chain-able functions work great in combination with the `modifier` tween parameter.

**Creating chain-able functions:** Chain-able functions are created when calling a utility function without its optional value parameter:

```js
const chainableClamp = utils.clamp(0, 100); // Returns a chain-able function
const result = chainableClamp(150); // 100
```

**Chaining:** Chain-able functions are combined like this:

```js
const normalizeAndRound = utils.mapRange(0, 255, 0, 1).round(1);
normalizeAndRound(128); // '0.5'
normalizeAndRound(64);  // '0.3'
```

**Example:**

```js
import { animate, utils } from 'animejs';

animate('.value', {
  innerHTML: 1000,
  modifier: utils.wrap(0, 10).roundPad(3).padStart(6, '0'),
  duration: 100000,
  alternate: true,
  loop: true,
  ease: 'linear',
});
```

---

## Easings

A collection of easing functions and a physics-based spring generator.

All easing functions are available on the `easings` object imported from the main `'animejs'` module:

```js
import { easings } from 'animejs';

easings.eases.inOut(3);
easings.cubicBezier(.7, .1, .5, .9);
easings.spring({ bounce: .35 });
```

Or imported directly from the main `'animejs'` module:

```js
import { eases, cubicBezier, spring } from 'animejs';

eases.inOut(3);
cubicBezier(.7, .1, .5, .9);
spring({ bounce: .35 });
```

Or imported as a standalone module from the `'animejs/easings'` subpath:

```js
import { eases, cubicBezier, spring } from 'animejs/easings';
```

Easing and spring functions can be passed to the `ease` and `playbackEase` parameters of `animate()` or the `ease` parameter of `stagger()`:

```js
import { cubicBezier, linear, spring } from 'animejs';

animate(target, { x: 100, ease: 'inOut(3)' });
animate(target, { x: 100, ease: cubicBezier(.7, .1, .5, .9) });
animate(target, { x: 100, ease: spring({ bounce: .35 }) });
```

**Example:**

```js
import { animate, waapi, cubicBezier, spring } from 'animejs';

animate('.row:nth-child(1) .square', {
  x: '17rem',
  rotate: 360,
  ease: 'out(3)', // Built-in ease
});

animate('.row:nth-child(2) .square', {
  x: '17rem',
  rotate: 360,
  ease: cubicBezier(.7, .1, .5, .9), // Custom cubic Bezier curves
});

waapi.animate('.row:nth-child(3) .square', {
  x: '17rem',
  rotate: 360,
  ease: spring({ bounce: .35 }), // Spring physics
});
```

---

### Built-in Eases

Both the JS and WAAPI `animate()` functions include built-in easing functions that can be specified by name:

```js
animate(target, { x: 100, ease: 'outQuad' });
animate(target, { x: 100, ease: 'outExpo' });
animate(target, { x: 100, ease: 'outElastic(.8, 1.2)' });
```

All built-in easing functions are also accessible through the imported `eases` object:

```js
import { eases } from 'animejs';

eases.outQuad;
eases.outExpo;
eases.outElastic(.8, 1.2);
```

**List of built-in easing functions:**

| Type        | Parameters                        | Variants                                          |
|-------------|-----------------------------------|---------------------------------------------------|
| Linear      | —                                 | `'linear'`                                        |
| Power       | power = `1.675`                   | `'in'`, `'out'`, `'inOut'`, `'outIn'`             |
| Quad        | —                                 | `'inQuad'`, `'outQuad'`, `'inOutQuad'`, `'outInQuad'` |
| Cubic       | —                                 | `'inCubic'`, `'outCubic'`, `'inOutCubic'`, `'outInCubic'` |
| Quart       | —                                 | `'inQuart'`, `'outQuart'`, `'inOutQuart'`, `'outInQuart'` |
| Quint       | —                                 | `'inQuint'`, `'outQuint'`, `'inOutQuint'`, `'outInQuint'` |
| Sine        | —                                 | `'inSine'`, `'outSine'`, `'inOutSine'`, `'outInSine'` |
| Exponential | —                                 | `'inExpo'`, `'outExpo'`, `'inOutExpo'`, `'outInExpo'` |
| Circular    | —                                 | `'inCirc'`, `'outCirc'`, `'inOutCirc'`, `'outInCirc'` |
| Bounce      | —                                 | `'inBounce'`, `'outBounce'`, `'inOutBounce'`, `'outInBounce'` |
| Back        | overshoot = `1.70158`             | `'inBack'`, `'outBack'`, `'inOutBack'`, `'outInBack'` |
| Elastic     | amplitude = `1`, period = `.3`    | `'inElastic'`, `'outElastic'`, `'inOutElastic'`, `'outInElastic'` |

**Example:**

```js
import { animate, waapi } from 'animejs';

animate('.row:nth-child(1) .square', {
  x: '17rem',
  rotate: 360,
  ease: 'inOut',
});

animate('.row:nth-child(2) .square', {
  x: '17rem',
  rotate: 360,
  ease: 'inOut(3)',
});

waapi.animate('.row:nth-child(3) .square', {
  x: '17rem',
  rotate: 360,
  ease: 'inOutExpo',
});
```

---

### Cubic Bézier Easing

A cubic bezier easing defines the pace of an animation using a Bézier curve.

**For JavaScript:**

```js
import { animate, cubicBezier } from 'animejs';

animate(target, { x: 100, ease: cubicBezier(0, 0, 0.58, 1) });
```

**For WAAPI:**

```js
import { waapi } from 'animejs';

waapi.animate(target, { x: 100, ease: 'cubic-bezier(0, 0, 0.58, 1)' });
// Or
waapi.animate(target, { x: 100, ease: 'cubicBezier(0, 0, 0.58, 1)' });
```

**Parameters:** `cubicBezier(x1, y1, x2, y2)`

| Name | Type     | Info                                              |
|------|----------|---------------------------------------------------|
| `x1` | `Number` | X coordinate of first control point (0 to 1)      |
| `y1` | `Number` | Y coordinate of first control point (any value)   |
| `x2` | `Number` | X coordinate of second control point (0 to 1)     |
| `y2` | `Number` | Y coordinate of second control point (any value)  |

**Example:**

```js
import { animate, waapi, cubicBezier } from 'animejs';

animate('.row:nth-child(1) .square', {
  x: '17rem',
  rotate: 360,
  ease: cubicBezier(0.5, 0, 0.9, 0.3)
});

animate('.row:nth-child(2) .square', {
  x: '17rem',
  rotate: 360,
  ease: cubicBezier(0.1, 0.7, 0.5, 1)
});

waapi.animate('.row:nth-child(3) .square', {
  x: '17rem',
  rotate: 360,
  ease: 'cubicBezier(0.7, 0.1, 0.5, 0.9)'
});
```

---

### Linear Easing (V4)

A linear easing defines the pace of an animation using linear interpolation between specified points.

**For JavaScript:**

```js
import { animate, linear } from 'animejs';

animate(target, { x: 100, ease: linear(0, '0.5 50%', '0.3 75%', 1) });
```

**For WAAPI:**

```js
import { waapi } from 'animejs';

waapi.animate(target, { x: 100, ease: 'linear(0, 0.5 50%, 0.3 75%, 1)' });
```

**Parameters:** `linear(stop1, stop2, ...stopN)`

| Name                     | Type     | Info                                              |
|--------------------------|----------|---------------------------------------------------|
| `number`                 | `Number` | Output value (0 = start, 1 = end). At least two required. |
| `percentage` *(optional)* | `String` | Timing position: `'value percentage'`. Cannot be used on first/last stops. |

**Example:**

```js
import { animate, waapi, linear } from 'animejs';

animate('.row:nth-child(1) .square', {
  x: '17rem',
  rotate: 360,
  duration: 2000,
  ease: linear(0, 0, 0.5, 0.5, 1, 1)
});

animate('.row:nth-child(2) .square', {
  x: '17rem',
  rotate: 360,
  duration: 2000,
  ease: linear(0, '1 25%', 0, 1)
});

waapi.animate('.row:nth-child(3) .square', {
  x: '17rem',
  rotate: 360,
  duration: 2000,
  ease: 'linear(1, 0 25%, 1, 0)'
});
```

---

### Steps Easing

A steps easing creates a stepped animation that jumps between values at discrete intervals.

**For JavaScript:**

```js
import { animate, steps } from 'animejs';

animate(target, { x: 100, ease: steps(5) });
// With fromStart
animate(target, { x: 100, ease: steps(5, true) });
```

**For WAAPI:**

```js
import { waapi } from 'animejs';

waapi.animate(target, { x: 100, ease: 'steps(5)' });
// With jump-start
waapi.animate(target, { x: 100, ease: 'steps(5, start)' });
```

**Parameters:** `steps(n, fromStart)`

| Name                      | Type      | Info                                              |
|---------------------------|-----------|---------------------------------------------------|
| `steps`                   | `Number`  | Number of equal steps (positive integer)          |
| `fromStart` *(optional)*  | `Boolean` | `true` = change at start, `false` = change at end (default: `false`) |

**Example:**

```js
import { animate, waapi, steps } from 'animejs';

animate('.row:nth-child(1) .square', {
  x: '17rem',
  rotate: 360,
  ease: steps(4)
});

animate('.row:nth-child(2) .square', {
  x: '17rem',
  rotate: 360,
  ease: steps(4, true)
});

waapi.animate('.row:nth-child(3) .square', {
  x: '17rem',
  rotate: 360,
  ease: 'steps(8, end)'
});
```

---

### Irregular Easing (V4)

An irregular easing defines the pace of an animation using linear interpolation between randomized points.

```js
import { animate, irregular } from 'animejs';

animate(target, { x: 100, ease: irregular(10, 1.5) });
```

**Parameters:** `irregular(steps, randomness)`

| Name                      | Type     | Info                                              |
|---------------------------|----------|---------------------------------------------------|
| `steps`                   | `Number` | Number of random steps (positive integer)         |
| `randomness` *(optional)* | `Number` | Amplitude of random variations (default: `1`)     |

**Example:**

```js
import { animate, waapi, irregular } from 'animejs';

animate('.row:nth-child(1) .square', {
  x: '17rem',
  rotate: 360,
  duration: 2000,
  ease: irregular(10, .5)
});

animate('.row:nth-child(2) .square', {
  x: '17rem',
  rotate: 360,
  duration: 2000,
  ease: irregular(10, 1)
});

waapi.animate('.row:nth-child(3) .square', {
  x: '17rem',
  rotate: 360,
  duration: 2000,
  ease: irregular(10, 2)
});
```

---

### Spring

A spring curve generator that returns an easing function with its corresponding duration to create physics-based animations.

The `spring()` method can be passed directly to the `ease` parameter:

```js
import { animate, spring } from 'animejs';

animate(target, { x: 100, ease: spring({ bounce: .5 }) });
```

> **Note:** The animation's duration parameter is overridden by the spring's calculated settling duration.

**Perceived parameters:** These parameters provide intuitive controls focusing on visual feel rather than underlying physics. Physics values are calculated using Apple's SwiftUI spring model.

```js
animate(target, { x: 100, ease: spring({ bounce: .5, duration: 350 }) });
```

| Name       | Type     | Info                                              |
|------------|----------|---------------------------------------------------|
| `bounce`   | `Number` | Controls "bounciness". Range: -1 to 1. Default: 0.5. Values 0-1 = bouncy, below 0 = over-damped. Recommended: -0.5 to 0.5 |
| `duration` | `Number` | Perceived duration in ms. Range: 10 to 10000. Default: 628 |

**Physics parameters:** Direct control over spring physics model.

```js
animate(target, { x: 100, ease: spring({ stiffness: 95, damping: 13 }) });
```

| Name        | Type     | Info                                              |
|-------------|----------|---------------------------------------------------|
| `mass`      | `Number` | Mass of object. Range: 1 to 10000. Default: 1. Higher = more inertia |
| `stiffness` | `Number` | Spring stiffness. Range: 0 to 10000. Default: 100. Higher = tighter spring |
| `damping`   | `Number` | Damping coefficient. Range: 0 to 10000. Default: 10. Higher = less bounce |
| `velocity`  | `Number` | Initial velocity. Range: -10000 to 10000. Default: 0 |

**Perceived onComplete callback:** (JS only) A separate `onComplete` callback on the spring parameter object is called when the perceived duration is reached:

```js
animate(target, {
  x: 100,
  onComplete: () => console.log('called when settling duration reached'),
  ease: spring({ 
    bounce: .25,
    duration: 350,
    onComplete: () => console.log('called when perceived duration reached'),
  })
});
```

**Example:**

```js
import { animate, spring, utils } from 'animejs';

const [ $square1, $square2, $square3 ] = utils.$('.square');

utils.set('.square', { color: 'var(--hex-red-1)' })

animate($square1, {
  x: '17rem',
  rotate: 360,
  onComplete: () => utils.set($square1, { color: 'var(--hex-green-1)' }),
  ease: spring({
    bounce: .15,
    duration: 500,
    onComplete: () => utils.set($square1, { color: 'var(--hex-yellow-1)' }),
  })
});

animate($square2, {
  x: '17rem',
  rotate: 360,
  ease: spring({
    bounce: .3,
    duration: 500,
  })
});

animate($square3, {
  x: '17rem',
  rotate: 360,
  ease: spring({
    stiffness: 90,
    damping: 14,
  })
});
```

---

## Web Animation API (V4)

Create WAAPI powered animations with the simplicity of Anime.js.

Anime.js offers a more lightweight alternative (3KB versus 10KB) to the `animate()` method that uses the Web Animation `Element.animate()` API under the hood.

WAAPI powered animations are created using the `waapi.animate()` method imported from the main `'animejs'` module:

```js
import { waapi } from 'animejs';

const animation = waapi.animate(targets, parameters);
```

Or imported as a standalone module from the `'animejs/waapi'` subpath:

```js
import { waapi } from 'animejs/waapi';
```

**Parameters:**

| Name         | Accepts                                              |
|--------------|------------------------------------------------------|
| `targets`    | Targets                                              |
| `parameters` | An `Object` of Animatable properties, Tween parameters, Playback settings and Animation callbacks |

**Returns:** `WAAPIAnimation`

**Example:**

```js
import { waapi, stagger, splitText } from 'animejs';

const { chars } = splitText('h2', { words: false, chars: true });

waapi.animate(chars, {
  translate: `0 -2rem`,
  delay: stagger(100),
  duration: 600,
  loop: true,
  alternate: true,
  ease: 'inOut(2)',
});
```

---

### When to Use WAAPI

The Web Animations API (WAAPI) offers advantages over JavaScript `requestAnimationFrame` (RAF) powered animations, but both have strengths and downsides.

**Prioritize `waapi.animate()` when:**
- Animating during CPU/network load (see hardware-accelerated animations)
- Initial page load time is critical and every KB counts (3KB gzip vs 10KB for JavaScript version)
- Animating complex CSS values not correctly handled by the JavaScript version, like CSS transform matrices or CSS color functions

**Use `animate()` when:**
- Animating a large amount of targets (> 500)
- Animating JS/canvas/WebGL/WebGPU
- Animating SVG, DOM attributes or CSS properties not handled by the Web Animation API
- Animating complex timelines and keyframes
- You need more control methods
- You need more advanced callback functions

**Example:**

```js
import { animate, waapi, utils } from 'animejs';

// WAAPI Animation
waapi.animate('.waapi.square', {
  x: '17rem',
  rotate: 180,
  loop: 3,
  alternate: true,
});

// JS Animation
const data = { x: '0rem', rotate: '0deg' }
const [ $log ] = utils.$('code');

animate(data, {
  x: 17,
  rotate: 180,
  modifier: utils.round(0),
  loop: 3,
  alternate: true,
  onRender: () => $log.innerHTML = JSON.stringify(data)
});
```

---

### Hardware-Accelerated Animations

One of the biggest advantages of WAAPI over `requestAnimationFrame` powered animations is the ability to run animations off the main thread, leading to smoother animations when the CPU is busy while consuming less power.

The catch is that not all properties can be hardware-accelerated.

**Hardware-accelerated properties in every major browser:**
- `opacity`
- `transform`
- `translate`
- `scale`
- `rotate`

**Hardware-accelerated properties in some browsers:**
- `clip-path`
- `filter`

> **Note:** Safari (desktop and mobile) currently won't trigger hardware acceleration if the animation uses a custom `'linear()'` easing. This means custom power eases like `'out(3)'`, `'in(3)'`, `'inOut(3)'`, and every JavaScript easing passed to `waapi.animate()` prevents hardware acceleration.

**Example:**

```js
import { animate, waapi, createTimer, utils, cubicBezier } from 'animejs';

const [ $block ] = utils.$('.button');

const waapiAnim = waapi.animate('.waapi.square', {
  translate: 270,
  rotate: 180,
  alternate: true,
  loop: true,
  ease: cubicBezier(0, 0, .58, 1),
});

const jsAnim = animate('.js.square', {
  x: 270,
  rotate: 180,
  ease: cubicBezier(0, 0, .58, 1),
  alternate: true,
  loop: true,
});

// Block CPU to demonstrate WAAPI advantage
const blockCPUTimer = createTimer({
  onUpdate: () => {
    const end = Date.now() + 100;
    while(Date.now() < end) {
      Math.random() * Math.random();
    }
  },
  autoplay: false
});
```

---

### Improvements to the Web Animation API

The `waapi.animate()` method adds quality of life improvements and greatly improves the overall WAAPI experience.

**ScrollObserver integration:**

```js
waapi.animate('.square', {
  translate: '100px',
  autoplay: onScroll()
});
```

**Scope integration for media queries and cleanup:**

```js
createScope({
  mediaQueries: { reduceMotion: '(prefers-reduced-motion)' }
})
.add(({ matches }) => {
  const { reduceMotion } = matches;
  waapi.animate('.square', {
    transform: reduceMotion ? ['100px', '100px'] : '100px',
    opacity: [0, 1],
  });
});
```

---

#### Sensible Defaults

Native WAAPI requires a duration, has no easing by default, and won't persist final values. Anime.js simplifies this.

**Anime.js:**

```js
waapi.animate('.circle', { translate: '100px' });
```

**WAAPI equivalent:**

```js
const $el = document.querySelector('.circle');

$el.animate({ translate: '100px' }, {
  duration: 1000,
  easing: 'ease-out',
}).finished.then(() => {
  $el.style.translate = '100px';
});
```

---

#### Multi-Targets Animation

Target multiple DOM Elements using a CSS selector, with `stagger()` support.

**Anime.js:**

```js
waapi.animate('.circle', {
  translate: '100px',
  delay: stagger(100),
});
```

**WAAPI equivalent:**

```js
document.querySelectorAll('.circle').forEach(($el, i) => {
  $el.animate({
    translate: '100px',
  }, {
    duration: 1000,
    delay: i * 100,
    easing: 'ease-out',
  }).finished.then(() => {
    $el.style.translate = '100px';
  })
});
```

---

#### Default Units

If no unit is specified for properties that expect one, Anime.js uses default browser units.

**Anime.js:**

```js
waapi.animate('.circle', {
  x: 100,
  y: 50,
  width: 150,
  height: 80,
});
```

**Properties with default units:**

| Name          | Default Unit | Name          | Default Unit |
|---------------|--------------|---------------|--------------|
| `x`           | `'px'`       | `y`           | `'px'`       |
| `z`           | `'px'`       | `translateX`  | `'px'`       |
| `translateY`  | `'px'`       | `translateZ`  | `'px'`       |
| `rotate`      | `'deg'`      | `rotateX`     | `'deg'`      |
| `rotateY`     | `'deg'`      | `rotateZ`     | `'deg'`      |
| `skew`        | `'deg'`      | `skewX`       | `'deg'`      |
| `skewY`       | `'deg'`      | `perspective` | `'px'`       |
| `width`       | `'px'`       | `height`      | `'px'`       |
| `margin`      | `'px'`       | `padding`     | `'px'`       |
| `top`         | `'px'`       | `right`       | `'px'`       |
| `bottom`      | `'px'`       | `left`        | `'px'`       |
| `borderWidth` | `'px'`       | `fontSize`    | `'px'`       |
| `borderRadius`| `'px'`       |               |              |

---

#### Function Based Values

Adds Function based value support to WAAPI animations.

**Anime.js:**

```js
waapi.animate('.square', {
  translate: () => `${utils.random(10, 17)}rem`,
  rotate: () => utils.random(-180, 180),
  scale: (_, i) => .25 + (i * .25),
  duration: $el => $el.dataset.duration,
  delay: stagger(100)
});
```

---

#### Individual CSS Transforms

Unlike CSS animations or native WAAPI, the CSS `transform` property can be animated by specifying individual properties.

> **Note:** Individual transforms with WAAPI only work for browsers that support `CSS.registerProperty()`, and fallback to no animations. Individual transforms cannot be hardware-accelerated.

**Valid individual CSS transform properties:**

| Name        | Shorthand | Default Value | Default Unit |
|-------------|-----------|---------------|--------------|
| `translateX`| `x`       | `'0px'`       | `'px'`       |
| `translateY`| `y`       | `'0px'`       | `'px'`       |
| `translateZ`| `z`       | `'0px'`       | `'px'`       |
| `rotate`    | —         | `'0deg'`      | `'deg'`      |
| `rotateX`   | —         | `'0deg'`      | `'deg'`      |
| `rotateY`   | —         | `'0deg'`      | `'deg'`      |
| `rotateZ`   | —         | `'0deg'`      | `'deg'`      |
| `scale`     | —         | `'1'`         | —            |
| `scaleX`    | —         | `'1'`         | —            |
| `scaleY`    | —         | `'1'`         | —            |
| `scaleZ`    | —         | `'1'`         | —            |
| `skew`      | —         | `'0deg'`      | `'deg'`      |
| `skewX`     | —         | `'0deg'`      | `'deg'`      |
| `skewY`     | —         | `'0deg'`      | `'deg'`      |

**Example:**

```js
import { waapi, utils } from 'animejs';

const $squares = utils.$('.square');

const animateSquares = () => {
  waapi.animate($squares, {
    x: () => utils.random(0, 17) + 'rem',
    y: () => utils.random(-1, 1) + 'rem',
    rotateX: () => utils.random(-90, 90),
    rotateY: () => utils.random(-90, 90),
    onComplete: () => animateSquares()
  });
}

animateSquares();
```

---

#### Individual Property Parameters

Each property can have specific `delay`, `duration` and `ease` parameters by passing an `Object` with at least one `to` or `from` property.

**Example:**

```js
import { waapi, utils, stagger } from 'animejs';

waapi.animate('.square', {
  y: {
    to: [0, -30, 0],
    ease: 'out(4)',
    duration: 1000,
  },
  rotate: { from: -180, to: 0, ease: 'out(3)' },
  scale: { to: [.65, 1, .65], ease: 'inOut(3)' },
  duration: 500,
  delay: stagger(75),
  loop: true,
});
```

---

#### Spring and Custom Easings

Use any spring and custom JavaScript easing function.

All Anime.js built-in easing functions can be used via the `eases` object:

```js
import { eases } from 'animejs';

const { linear, outExpo, cubicBezier } = eases;
```

The `spring()` function must be imported separately:

```js
import { spring } from 'animejs';
```

**Built-in eases:**

| Built-in string                    | Function         | Parameters                        |
|------------------------------------|------------------|-----------------------------------|
| `'linear'`, `'linear(0, .5 75%, 1)'` | `linear()`     | coords                            |
| `'steps'`, `'steps(10)'`           | `steps()`        | steps = `10`                      |
| `'cubicBezier'`, `'cubicBezier(.5,0,.5,1)'` | `cubicBezier()` | x1, y1, x2, y2             |
| `'in'`, `'in(1.675)'`              | `in()`           | power = `1.675`                   |
| `'out'`, `'out(1.675)'`            | `out()`          | power = `1.675`                   |
| `'inOut'`, `'inOut(1.675)'`        | `inOut()`        | power = `1.675`                   |

| Property | Value       |
|----------|-------------|
| Default  | `'out(2)'`  |

**Example:**

```js
import { waapi, utils, stagger, spring } from 'animejs';

waapi.animate('.circle', {
  y: [0, -30, 0],
  ease: spring({ stiffness: 150, damping: 5 }),
  delay: stagger(75),
  loop: true,
});
```

---

### API Differences with Native WAAPI

**Anime.js:**

```
waapi.animate(
┌────────────┐
│ '.square', ├─ Targets
└────────────┘
{
┌──────────────────┐
│ x: 100,          │
│ y: 50,           ├─ Keyframes Values
│ opacity: .5,     │
└──────────────────┘
┌──────────────────┐
│ loop: 3,         │
│ alternate: true, ├─ Playback Settings
│ ease: 'out',     │
└──────────────────┘
});
```

**WAAPI:**

```
const $square = document.querySelector('.square');

┌────────────┐
│ $square    ├─ Targets
└────────────┘
.animate({
┌──────────────────────────┐
│ translate: '100px 50px', ├─ Keyframes Values
│ opacity: .5,             │
└──────────────────────────┘
}, {
┌──────────────────────────┐
│ iterations: 4,           │
│ direction: 'alternate',  ├─ Playback Settings
│ easing: 'ease-out',      │
└──────────────────────────┘
});
```

---

#### iterations (WAAPI Difference)

The `iterations` parameter is replaced by the `loop` parameter and determines how many times the animation will repeat instead of the total number of iterations.

| `iterations` | `loop`             | Effect               |
|--------------|--------------------|-----------------------|
| `1`          | `0`                | No repeat            |
| `3`          | `2`                | Repeat twice         |
| `Infinity`   | `Infinity` \| `true` \| `-1` | Repeat indefinitely |

**Anime.js:**

```js
waapi.animate('.square', {
  x: 100,
  loop: 3
});
```

**WAAPI equivalent:**

```js
const targets = document.querySelectorAll('.square');

targets.forEach(($el, i) => {
  $el.animate({
    translate: '100px',
  }, {
    fill: 'forwards',
    duration: 1000,
    iterations: 4
  })
});
```

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | `Number` `[0, Infinity]` or `Boolean` (`true` = `Infinity`, `false` = no loop) |

---

#### direction (WAAPI Difference)

The `direction` parameter is replaced by two separate parameters: `reversed` and `alternate`.

| `direction`         | `reversed` | `alternate` | Effect                              |
|---------------------|------------|-------------|-------------------------------------|
| `'forward'`         | `false`    | `false`     | Play forward                        |
| `'reverse'`         | `true`     | `false`     | Play backward                       |
| `'alternate'`       | `false`    | `true`      | Alternate on loop                   |
| `'alternate-reverse'` | `true`   | `true`      | Start in reverse and alternate      |

**Anime.js:**

```js
waapi.animate('.square', {
  x: 100,
  reversed: true,
  alternate: true,
  loop: 3
});
```

**WAAPI equivalent:**

```js
const targets = document.querySelectorAll('.square');

targets.forEach(($el, i) => {
  $el.animate({
    translate: '100px',
  }, {
    fill: 'forwards',
    duration: 1000,
    direction: 'alternate-reverse',
    iterations: 4
  })
});
```

| Property | Value     |
|----------|-----------|
| Accepts  | `Boolean` |

---

#### easing (WAAPI Difference)

The `easing` parameter is replaced by the `ease` parameter and accepts any type of easing `Function` on top of all native WAAPI easing functions.

The default easing is `'out(2)'` instead of `'linear'`.

**Anime.js:**

```js
waapi.animate('.square', {
  x: 100,
  ease: 'outElastic(1.25, .1)'
});
```

**WAAPI equivalent:**

```js
const targets = document.querySelectorAll('.square');

targets.forEach(($el, i) => {
  $el.animate({
    translate: '100px',
  }, {
    fill: 'forwards',
    duration: 1000,
    easing: 'linear(0, 0.0874, 0.2047, 0.3429, ...)'  // Long linear() conversion
  })
});
```

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | Any valid easing `String` name or `Function`, or native WAAPI easing `String` |

---

#### finished (WAAPI Difference)

`animation.finished` is replaced by the `animation.then()` method. It returns a `Promise` that resolves and executes a callback when the animation completes.

**Anime.js (inline):**

```js
waapi.animate(target, {
  translate: '100px',
  duration: 500,
}).then(callback);
```

**Anime.js (async/await):**

```js
async function waitForAnimationToComplete() {
  return waapi.animate(target, {
    translate: '100px',
    duration: 500,
  });
}

const asyncAnimation = await waitForAnimationToComplete();
```

**WAAPI equivalent:**

```js
const targets = document.querySelectorAll('.square');
const animations = [];

targets.forEach(($el, i) => {
  animations[i] = $el.animate({
    translate: '100px',
  }, {
    fill: 'forwards',
    duration: 500,
  });
});

Promise.all(
  animations.map((animation) => animation.finished)
).then(() => console.log('completed'));
```

**Parameters:**

| Name       | Type                                              |
|------------|---------------------------------------------------|
| `callback` | A `Function` whose first argument is the animation itself |

**Returns:** `Promise`

**Example:**

```js
import { waapi, utils } from 'animejs';

const [ $value ] = utils.$('.value');

const animation = waapi.animate('.circle', {
  translate: '16rem',
  loop: 2,
  alternate: true,
});

animation.then(() => $value.textContent = 'fulfilled');
```

---

### waapi.convertEase()

Converts any JavaScript easing function into a compatible WAAPI linear easing.

```js
import { waapi, spring } from 'animejs';

const springEase = spring({ stiffness: 12 });

const linearEasing = waapi.convertEase(springEase.ease);
```

**Example:**

```js
import { waapi, spring } from 'animejs';

const springs = [
  spring({ stiffness: 100 }),
  spring({ stiffness: 150 }),
  spring({ stiffness: 200 })
]

document.querySelectorAll('.square').forEach(($el, i) => {
  $el.animate({
    translate: '17rem',
    rotate: '1turn',
  }, {
    easing: waapi.convertEase(springs[i].ease),
    delay: i * 250,
    duration: springs[i].duration,
    fill: 'forwards'
  });
});
```

---

## Engine (V4)

Drives and synchronises all Animation, Timer, and Timeline instances.

```js
import { engine } from 'animejs';
```

---

### Engine Parameters

```
import { engine } from 'animejs';
       ┌────────────┐
engine.│speed       │
engine.│fps         ├─ Parameters
engine.│precision   │
       └────────────┘
```

**Available parameters:**
- timeUnit
- speed
- fps
- precision
- pauseOnDocumentHidden

---

#### timeUnit (Engine)

Configures the unit of time to use for time-related values like `duration` and `delay`. The currently defined default duration is automatically adjusted to the newly specified time unit.

```js
engine.timeUnit = 's'; // Change the time unit globally to seconds
console.log(engine.defaults.duration); // -> Returns 1
```

| Property | Value                                 |
|----------|---------------------------------------|
| Accepts  | `'s'` (seconds) \| `'ms'` (milliseconds) |
| Default  | `'ms'`                                |

**Example:**

```js
import { engine, createTimer, utils } from 'animejs';

const [ $timeS ] = utils.$('.time-s');
const [ $timeMs ] = utils.$('.time-ms');
const [ $ms, $s ] = utils.$('.toggle');

const secondsTimer = createTimer({
  duration: 1,
  loop: true,
  onUpdate: self => $timeS.innerHTML = utils.roundPad(self.iterationCurrentTime, 2)
});

const millisecondsTimer = createTimer({
  duration: 1000,
  loop: true,
  onUpdate: self => $timeMs.innerHTML = utils.roundPad(self.iterationCurrentTime, 2)
});

const toggleSetting = () => {
  const isUsingSeconds = engine.timeUnit === 's';
  engine.timeUnit = isUsingSeconds ? 'ms' : 's';
  $ms.disabled = isUsingSeconds;
  $s.disabled = !isUsingSeconds;
}

$ms.addEventListener('click', toggleSetting);
$s.addEventListener('click', toggleSetting);
```

---

#### speed (Engine)

Controls the global playback rate of all animations managed by the engine. Values greater than `1` speed up animations, while values between `0` and `1` slow them down.

Adjusting the global playback rate is useful for creating slow-motion or fast-forward effects across all animations simultaneously.

```js
engine.speed = 0.5; // Run all animations at half speed
```

| Property | Value                        |
|----------|------------------------------|
| Accepts  | `Number` >= `0`              |
| Default  | `1`                          |

**Example:**

```js
import { engine, animate, utils } from 'animejs';

const [ $container ] = utils.$('.container');
const [ $range ] = utils.$('.range');

for (let i = 0; i < 150; i++) {
  const $particle = document.createElement('div');
  $particle.classList.add('particle');
  $container.appendChild($particle);
  animate($particle, {
    x: utils.random(-10, 10, 2) + 'rem',
    y: utils.random(-3, 3, 2) + 'rem',
    scale: [{ from: 0, to: 1 }, { to: 0 }],
    delay: utils.random(0, 1000),
    loop: true,
  });  
}

function onInput() {
  utils.sync(() => engine.speed = this.value);
}

$range.addEventListener('input', onInput);
```

---

#### fps (Engine)

Controls the global frame rate at which animations are updated and rendered.

Adjusting the frame rate can help optimize performance on lower-end devices or when running many complex animations. However, it may affect the perceived smoothness of animations.

```js
engine.fps = 30; // Set all animations to update at 30 fps
```

| Property | Value          |
|----------|----------------|
| Accepts  | `Number` > `0` |
| Default  | `120`          |

**Example:**

```js
import { engine, animate, utils } from 'animejs';

const [ $container ] = utils.$('.container');
const [ $range ] = utils.$('.range');

for (let i = 0; i < 150; i++) {
  const $particle = document.createElement('div');
  $particle.classList.add('particle');
  $container.appendChild($particle);
  animate($particle, {
    x: utils.random(-10, 10, 2) + 'rem',
    y: utils.random(-3, 3, 2) + 'rem',
    scale: [{ from: 0, to: 1 }, { to: 0 }],
    delay: utils.random(0, 1000),
    loop: true,
  });  
}

function onInput() {
  engine.fps = this.value;
}

$range.addEventListener('input', onInput);
```

---

#### precision (Engine)

Defines how many decimal places to round string values to during an animation. The more decimals you add, the more precise the animations will be. Setting `0` will essentially remove all decimals. Only string values of CSS properties, SVG and DOM Attributes are rounded (e.g., `'120.725px'`, `'1.523'`), and the rounding is only applied during the animation — the first and last frames use the full value.

In 99% of cases, you won't need to increase the precision beyond 4, as the visual difference won't be noticeable. Lowering the precision can help when animating many elements simultaneously but can reduce visual quality and smoothness.

```js
engine.precision = 1; // Values will be rounded to 1 decimal place ('120.7px')
```

| Property | Value                                              |
|----------|----------------------------------------------------|
| Accepts  | `Number` >= `0` (decimal places) or < `0` (skip rounding) |
| Default  | `4`                                                |

**Example:**

```js
import { engine, animate, utils } from 'animejs';

const [ $container ] = utils.$('.container');
const [ $range ] = utils.$('.range');

for (let i = 0; i < 150; i++) {
  const $particle = document.createElement('div');
  $particle.classList.add('particle');
  $container.appendChild($particle);
  animate($particle, {
    x: utils.random(-10, 10, 2) + 'rem',
    y: utils.random(-3, 3, 2) + 'rem',
    scale: [{ from: 0, to: 1 }, { to: 0 }],
    delay: utils.random(0, 1000),
    loop: true,
  });  
}

function onInput() {
  engine.precision = this.value;
}

$range.addEventListener('input', onInput);
```

---

#### pauseOnDocumentHidden (Engine)

Controls whether the engine pauses animations when the browser tab is hidden. When `true`, animations pause automatically when the tab loses focus. When `false`, animations will adjust their `currentTime` to catch up how long they have been idle in the background, making it look like they never paused.

```js
engine.pauseOnDocumentHidden = true;
```

| Property | Value     |
|----------|-----------|
| Accepts  | `Boolean` |
| Default  | `true`    |

**Example:**

```js
import { engine, utils, createTimer } from 'animejs';

const [ $globalTime ] = utils.$('.global-time');
const [ $engineTime ] = utils.$('.engine-time');
const [ $toggle ] = utils.$('.toggle');

const startTime = Date.now();

const globalTimer = setInterval(() => {
  $globalTime.innerHTML = Date.now() - startTime;
}, 16);

const engineTimer = createTimer({
  onUpdate: self => $engineTime.innerHTML = self.currentTime
});

const toggleSetting = () => {
  const isPauseWhenHidden = engine.pauseOnDocumentHidden;
  if (isPauseWhenHidden) {
    engine.pauseOnDocumentHidden = false;
    $toggle.innerHTML = '○ Disabled (Switch tab to see the effect)';
  } else {
    engine.pauseOnDocumentHidden = true;
    $toggle.innerHTML = '● Enabled (Switch tab to see the effect)';
  }
}

// Switch tab to see the effect
$toggle.addEventListener('click', toggleSetting);
```

---

### Engine Methods

```
import { engine } from 'animejs';
       ┌──────────┐
engine.│update()  │
engine.│pause()   ├─ Methods
engine.│resume()  │
       └──────────┘
```

**Available methods:**
- update()
- pause()
- resume()

---

#### update() (Engine)

Manually ticks the engine when `engine.useDefaultMainLoop` is set to `false`.

```js
engine.useDefaultMainLoop = false;
engine.update(); // Manual update call
```

Useful for integrating Anime.js in projects with existing animation loops, such as Three.js or game engines.

**Returns:** Engine

**Example:**

```js
import { engine, createTimeline, utils } from 'animejs';

// Prevents Anime.js from using its own loop
engine.useDefaultMainLoop = false;

const [ $container ] = utils.$('.container');
const color = utils.get($container, 'color');
const { width, height } = $container.getBoundingClientRect();

// Three.js setup
const renderer = new THREE.WebGLRenderer({ alpha: true });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 20);
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color, wireframe: true });

renderer.setSize(width, height);
renderer.setPixelRatio(window.devicePixelRatio);
$container.appendChild(renderer.domElement);
camera.position.z = 5;

function createAnimatedCube() {
  const cube = new THREE.Mesh(geometry, material);
  const x = utils.random(-10, 10, 2);
  const y = utils.random(-5, 5, 2);
  const z = [-10, 7];
  const r = () => utils.random(-Math.PI * 2, Math.PI * 2, 3);
  const duration = 4000;
  createTimeline({
    delay: utils.random(0, duration),
    defaults: { loop: true, duration, ease: 'inSine', },
  })
  .add(cube.position, { x, y, z }, 0)
  .add(cube.rotation, { x: r, y: r, z: r }, 0)
  .init();
  scene.add(cube);
}

for (let i = 0; i < 40; i++) {
  createAnimatedCube();
}

function render() {
  engine.update(); // Manually update Anime.js engine
  renderer.render(scene, camera); // Render Three.js scene
}

// Calls the built-in Three.js animation loop
renderer.setAnimationLoop(render);
```

---

#### pause() (Engine)

Pauses the engine's main loop, pausing all active Timer, Animation, and Timeline instances. Use `engine.resume()` to restart the animations from where they paused.

```js
engine.pause();  // Stops all animations
engine.resume(); // Resumes all animations
```

> **Note:** Timer, Animation, or Timeline can still be added when the engine is paused, but won't play until the engine is started again.

**Returns:** Engine

**Example:**

```js
import { engine, animate, utils } from 'animejs';

const [ $container ] = utils.$('.container');
const [ $add, $pause ] = utils.$('button');

function addAnimation() {
  const $particle = document.createElement('div');
  $particle.classList.add('particle');
  $container.appendChild($particle);
  animate($particle, {
    x: utils.random(-10, 10, 2) + 'rem',
    y: utils.random(-3, 3, 2) + 'rem',
    scale: [{ from: 0, to: 1 }, { to: 0 }],
    loop: true,
  });
}

let timeout = 3;
let interval;

function pauseEngine() {
  engine.pause();
  $pause.setAttribute('disabled', 'true');
  $pause.innerHTML = `Resume in ${timeout--} seconds`;
  interval = setInterval(() => {
    if (timeout <= 0) {
      clearInterval(interval);
      engine.resume();
      $pause.removeAttribute('disabled');
      $pause.innerHTML = 'Pause for 3 seconds';
      timeout = 3;    
    } else {
      $pause.innerHTML = `Resume in ${timeout--} seconds`;
    }
  }, 1000);
}

$add.addEventListener('click', addAnimation);
$pause.addEventListener('click', pauseEngine);
```

---

#### resume() (Engine)

Resumes the engine after being paused with a call to `engine.pause()`.

```js
engine.pause();  // Pauses the engine and all animations
engine.resume(); // Resumes the engine and all animations
```

**Returns:** Engine

**Example:**

```js
import { engine, animate, utils } from 'animejs';

const [ $container ] = utils.$('.container');
const [ $pause, $resume ] = utils.$('button');

function addAnimation() {
  const $particle = document.createElement('div');
  $particle.classList.add('particle');
  $container.appendChild($particle);
  animate($particle, {
    x: utils.random(-10, 10, 2) + 'rem',
    y: utils.random(-3, 3, 2) + 'rem',
    scale: [{ from: 0, to: 1 }, { to: 0 }],
    loop: true,
    delay: utils.random(0, 1000)
  });
}

for (let i = 0; i < 150; i++) addAnimation();

const resumeEngine = () => engine.resume();
const pauseEngine = () => engine.pause();

$pause.addEventListener('click', pauseEngine);
$resume.addEventListener('click', resumeEngine);
```

---

### Engine Properties

```
import { engine } from 'animejs';
       ┌───────────────────────┐
engine.│deltaTime              │
engine.│useDefaultMainLoop     ├─ Properties
engine.│pauseOnDocumentHidden  │
       └───────────────────────┘
```

| Name                     | Description                                              |
|--------------------------|----------------------------------------------------------|
| `timeUnit`               | Gets and sets the unit of time (`'ms'` \| `'s'`)         |
| `currentTime`            | Gets the current time of the engine (`Number`)           |
| `deltaTime`              | Gets the time elapsed since the last frame (`Number`)    |
| `precision`              | Gets and sets decimal places for string values (`Number`) |
| `speed`                  | Gets or sets the global playback rate (`Number`)         |
| `fps`                    | Gets or sets the global frame rate (`Number`)            |
| `useDefaultMainLoop`     | Gets or sets whether engine uses its default main loop (`Boolean`) |
| `pauseOnDocumentHidden`  | Gets or sets whether engine pauses when tab is hidden (`Boolean`) |

---

### Engine Defaults

Defines the global default properties used by all Timer, Animation, and Timeline instances.

All default properties are available on the `defaults` object of `engine`:

```js
import { engine } from 'animejs';

engine.defaults.duration = 500;
```

| Name            | Accepts                                      |
|-----------------|----------------------------------------------|
| `playbackEase`  | Easing name `String` \| Easing `Function`    |
| `playbackRate`  | `Number`                                     |
| `frameRate`     | `Number`                                     |
| `loop`          | `Number` \| `Boolean`                        |
| `reversed`      | `Boolean`                                    |
| `alternate`     | `Boolean`                                    |
| `autoplay`      | `Boolean`                                    |
| `duration`      | `Number` \| `Function`                       |
| `delay`         | `Number` \| `Function`                       |
| `composition`   | Composition types `String` \| `Function`     |
| `ease`          | Easing name `String` \| Easing `Function`    |
| `loopDelay`     | `Number`                                     |
| `modifier`      | Modifier `Function`                          |
| `onBegin`       | Callback `Function`                          |
| `onUpdate`      | Callback `Function`                          |
| `onRender`      | Callback `Function`                          |
| `onLoop`        | Callback `Function`                          |
| `onComplete`    | Callback `Function`                          |
| `onPause`       | Callback `Function`                          |

---

## Appendix

### Common Animation Patterns

This section provides copy-paste ready patterns for common animation scenarios.

#### Fade In on Load
```js
import { animate } from 'animejs';

animate('.fade-in', {
  opacity: [0, 1],
  translateY: [20, 0],
  duration: 800,
  ease: 'outQuad',
  delay: stagger(100)
});
```

#### Hover Scale Effect
```js
import { animate } from 'animejs';

element.addEventListener('mouseenter', () => {
  animate(element, { scale: 1.1, duration: 300, ease: 'out(3)' });
});

element.addEventListener('mouseleave', () => {
  animate(element, { scale: 1, duration: 300, ease: 'out(3)' });
});
```

#### Infinite Pulse
```js
animate('.pulse', {
  scale: [1, 1.1, 1],
  opacity: [1, 0.8, 1],
  duration: 1500,
  ease: 'inOutSine',
  loop: true
});
```

#### Staggered List Entrance
```js
import { animate, stagger } from 'animejs';

animate('.list-item', {
  opacity: [0, 1],
  translateX: [-50, 0],
  delay: stagger(50, { from: 'first' }),
  duration: 600,
  ease: 'outExpo'
});
```

#### Scroll-Synced Progress Bar
```js
import { animate, onScroll } from 'animejs';

animate('.progress-bar', {
  scaleX: [0, 1],
  transformOrigin: 'left',
  ease: 'linear',
  autoplay: onScroll({
    target: document.body,
    enter: 'top top',
    leave: 'bottom bottom',
    sync: true
  })
});
```

#### Text Reveal Animation
```js
import { animate, splitText, stagger } from 'animejs';

const { chars } = splitText('.title', { chars: true });

animate(chars, {
  opacity: [0, 1],
  translateY: ['100%', '0%'],
  duration: 800,
  ease: 'outExpo',
  delay: stagger(30)
});
```

#### Draggable Card
```js
import { createDraggable, spring } from 'animejs';

createDraggable('.card', {
  container: '.container',
  releaseEase: spring({ stiffness: 200, damping: 20 }),
  onRelease: (draggable) => {
    console.log('Released at:', draggable.x, draggable.y);
  }
});
```

#### Sequential Timeline
```js
import { createTimeline } from 'animejs';

const tl = createTimeline({
  defaults: { duration: 500, ease: 'outQuad' }
});

tl.add('.step-1', { opacity: [0, 1], x: [-20, 0] })
  .add('.step-2', { opacity: [0, 1], x: [-20, 0] }, '-=200')
  .add('.step-3', { opacity: [0, 1], x: [-20, 0] }, '-=200');
```

#### Counter Animation
```js
import { animate, utils } from 'animejs';

const counter = { value: 0 };

animate(counter, {
  value: 1000,
  duration: 2000,
  ease: 'outExpo',
  modifier: utils.round(0),
  onUpdate: () => {
    document.querySelector('.counter').textContent = counter.value;
  }
});
```

#### SVG Path Drawing
```js
import { animate, svg } from 'animejs';

animate(svg.createDrawable('.path'), {
  draw: ['0 0', '0 1'],
  duration: 2000,
  ease: 'inOutQuad'
});
```

#### React Component Pattern
```js
import { useEffect, useRef } from 'react';
import { animate, createScope } from 'animejs';

function AnimatedComponent() {
  const root = useRef(null);
  const scope = useRef(null);

  useEffect(() => {
    scope.current = createScope({ root: root.current }).add(() => {
      animate('.item', {
        opacity: [0, 1],
        translateY: [20, 0],
        delay: stagger(100)
      });
    });

    return () => scope.current.revert();
  }, []);

  return (
    <div ref={root}>
      <div className="item">Item 1</div>
      <div className="item">Item 2</div>
    </div>
  );
}
```

---

### Import Cheatsheet

| What you need | Import statement |
|---------------|------------------|
| Basic animation | `import { animate } from 'animejs'` |
| Timeline | `import { createTimeline } from 'animejs'` |
| Timer/Clock | `import { createTimer } from 'animejs'` |
| Reactive values | `import { createAnimatable } from 'animejs'` |
| Drag & drop | `import { createDraggable } from 'animejs'` |
| Scroll animations | `import { onScroll } from 'animejs'` |
| Component cleanup | `import { createScope } from 'animejs'` |
| Staggered delays | `import { stagger } from 'animejs'` |
| Spring physics | `import { spring } from 'animejs'` |
| Text splitting | `import { splitText } from 'animejs'` |
| SVG utilities | `import { svg } from 'animejs'` |
| DOM utilities | `import { utils } from 'animejs'` |
| WAAPI (lightweight) | `import { waapi } from 'animejs'` |
| Engine control | `import { engine } from 'animejs'` |
| Custom easing | `import { cubicBezier, linear, steps } from 'animejs'` |

---

### Quick Reference

**Core Functions:**
- `animate(targets, parameters)` — Create animations
- `createTimeline(parameters)` — Create timelines
- `createTimer(parameters)` — Create timers
- `createAnimatable(targets, properties)` — Create animatable objects
- `createDraggable(targets, parameters)` — Create draggable elements
- `createScope(parameters)` — Create scopes for component lifecycle
- `onScroll(parameters)` — Create scroll observers

**WAAPI:**
- `waapi.animate(targets, parameters)` — Lightweight WAAPI animations
- `waapi.convertEase(easing)` — Convert JS easing to WAAPI

**SVG:**
- `svg.morphTo(target, precision)` — SVG morphing
- `svg.createDrawable(target)` — Line drawing
- `svg.createMotionPath(path, offset)` — Motion path animation

**Text:**
- `splitText(target, parameters)` — Text splitting utility

**Utilities:**
- `stagger(value, parameters)` — Staggered values
- `utils.$()`, `utils.get()`, `utils.set()` — DOM utilities
- `utils.random()`, `utils.randomPick()`, `utils.shuffle()` — Randomization
- `utils.clamp()`, `utils.snap()`, `utils.wrap()`, `utils.mapRange()` — Math utilities
- `utils.lerp()`, `utils.damp()` — Interpolation
- `utils.round()`, `utils.roundPad()`, `utils.padStart()`, `utils.padEnd()` — Formatting

**Easings:**
- Built-in: `'linear'`, `'in'`, `'out'`, `'inOut'`, `'outIn'`, `'inQuad'`, `'outQuad'`, etc.
- Functions: `cubicBezier()`, `linear()`, `steps()`, `irregular()`, `spring()`

**Engine:**
- `engine.speed`, `engine.fps`, `engine.precision` — Global settings
- `engine.pause()`, `engine.resume()`, `engine.update()` — Control methods
- `engine.defaults` — Default parameters

---

*End of Anime.js Complete Documentation*

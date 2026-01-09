# Iterate Hawaii - Anime.js 4.0 Website

A futuristic, interactive website for Iterate Hawaii built with **Anime.js 4.0** featuring ALL available animation features.

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/iterate-hawaii.git
cd iterate-hawaii

# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:3000

---

## 📦 Complete Anime.js 4.0 API

This project imports and demonstrates **every major feature** of Anime.js 4.0:

### Core Modules

| Import | Description | Docs |
|--------|-------------|------|
| `animate` | Core animation function | [Animation](https://animejs.com/documentation/animation) |
| `createTimer` | Custom timing loops | [Timer](https://animejs.com/documentation/timer) |
| `createTimeline` | Sequenced animations | [Timeline](https://animejs.com/documentation/timeline) |
| `createAnimatable` | Reactive animated values | [Animatable](https://animejs.com/documentation/animatable) |
| `createDraggable` | Drag with spring physics | [Draggable](https://animejs.com/documentation/draggable) |
| `createScope` | Responsive/media query animations | [Scope](https://animejs.com/documentation/scope) |
| `engine` | Global animation control | [Engine](https://animejs.com/documentation/engine) |

### Events

| Import | Description | Docs |
|--------|-------------|------|
| `onScroll` | Scroll-triggered & scroll-synced animations | [onScroll](https://animejs.com/documentation/events/onscroll) |

### SVG Utilities

| Import | Description | Docs |
|--------|-------------|------|
| `morphTo` | SVG path morphing | [morphTo](https://animejs.com/documentation/svg/morphto) |
| `createDrawable` | SVG line drawing | [createDrawable](https://animejs.com/documentation/svg/createdrawable) |
| `createMotionPath` | Follow SVG paths | [createMotionPath](https://animejs.com/documentation/svg/createmotionpath) |

### Text Utilities

| Import | Description | Docs |
|--------|-------------|------|
| `splitText` | Split text into chars/words/lines | [splitText](https://animejs.com/documentation/text/splittext) |

### Easings

| Import | Description | Docs |
|--------|-------------|------|
| `createSpring` | Spring physics easing | [Spring](https://animejs.com/documentation/easings/spring) |
| Built-in eases | `'outExpo'`, `'inOutQuad'`, etc. | [Easings](https://animejs.com/documentation/easings) |

### Utilities

| Import | Description |
|--------|-------------|
| `stagger` | Staggered delays with grid support |
| `random` | Random number generation |
| `randomPick` | Pick random from array |
| `shuffle` | Shuffle array |
| `clamp` | Clamp value between min/max |
| `snap` | Snap to increment |
| `mapRange` | Map value from one range to another |
| `lerp` | Linear interpolation |
| `$` | Query selector utility |
| `get` | Get CSS property value |
| `set` | Set CSS property value |
| `remove` | Remove animations from target |
| `cleanInlineStyles` | Clean up inline styles |

---

## 🔧 Import Methods

### Option 1: Import from main module
```javascript
import { 
  animate, 
  createTimeline, 
  createDraggable,
  createSpring,
  onScroll,
  stagger,
  // ... etc
} from 'animejs';
```

### Option 2: Import from subpaths (smaller bundles)
```javascript
import { animate } from 'animejs/animation';
import { createTimer } from 'animejs/timer';
import { createTimeline } from 'animejs/timeline';
import { createAnimatable } from 'animejs/animatable';
import { createDraggable } from 'animejs/draggable';
import { createScope } from 'animejs/scope';
import { engine } from 'animejs/engine';
import { onScroll } from 'animejs/events';
import { morphTo, createDrawable, createMotionPath } from 'animejs/svg';
import { splitText } from 'animejs/text';
import { createSpring } from 'animejs/easings';
import { stagger, random, $, get, set } from 'animejs/utils';
```

---

## 🎬 Features Demonstrated

### Hero Section
- `splitText()` - Characters animate from center
- `createTimeline()` - Sequenced entrance
- `stagger()` - Cascading delays

### Neural Network Background
- Canvas animation
- `random()` - Random positions/velocities
- `mapRange()` - Distance-based opacity

### Scroll Animations
- `onScroll()` - Trigger on enter viewport
- `onScroll({ sync: true })` - Scrub with scroll position
- `stagger({ from: 'center' })` - Center-out reveals

### Draggable Service Cards
- `createDraggable()` - Full drag interaction
- Spring physics (`releaseStiffness`, `releaseDamping`)
- Snap back to origin
- `onGrab` / `onRelease` callbacks

### Spring Physics
- `createSpring()` - Custom spring configs
- Bouncy vs smooth springs
- Click and hover interactions

### SVG Animations
- `createDrawable()` - Line drawing effect
- `morphTo()` - Shape morphing (chaos → clarity)
- `createMotionPath()` - Element follows path

### Responsive Animations
- `createScope()` - Media query detection
- Different animations per breakpoint
- `engine.speed` - Global speed control

### Particle Effects
- `random()` - Random sizes/positions
- `randomPick()` - Random colors
- Explosion on CTA click

---

## 📁 Project Structure

```
iterate-hawaii/
├── index.html          # Main HTML
├── package.json        # Dependencies
├── vite.config.js      # Vite config
├── src/
│   ├── main.js         # All animations (fully commented)
│   └── styles.css      # Mobile-first CSS
└── public/             # Static assets
```

---

## 🛠️ Available Scripts

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Build for production
npm run preview  # Preview production build
```

---

## 📱 Responsive Breakpoints

- **Mobile**: 0-599px
- **Tablet**: 600-899px  
- **Desktop**: 900-1199px
- **Large**: 1200px+

---

## 🎨 Customization

Edit CSS variables in `src/styles.css`:

```css
:root {
  --primary: #00f0ff;    /* Cyan */
  --secondary: #7b61ff;  /* Purple */
  --success: #00e096;    /* Green */
  --dark: #0a0a0f;       /* Background */
}
```

---

## 📖 Resources

- [Anime.js 4.0 Documentation](https://animejs.com/documentation)
- [Anime.js GitHub](https://github.com/juliangarnier/anime)
- [Anime.js Examples (CodePen)](https://codepen.io/collection/Poerqa)
- [Easing Editor](https://animejs.com/easing-editor)

---

## 📄 License

MIT License - Kawika Lopez / Iterate Hawaii

---

Built with ☕ in Hawaii

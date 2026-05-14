# Vanessa Arruda — Portfolio Plan

> *Last updated: 2026-05-14*
> *Repo: `/Users/vanessaarruda/repos/portfolio-2`*
> *Target domain: vanessa.arruda.eu (currently hosted on Netlify)*

---

## The Concept

**A single illustrated office scene as a full-screen portfolio — with hidden interactive hotspots.**

Instead of a standard dev portfolio layout, the page is one illustrated room you can explore.
Items in the scene are clickable: books open a reading list, headphones open a Spotify playlist,
the laptop screen zooms in to show projects and CV. Like a point-and-click game, but it's a portfolio.

**The narrative:** 10 years as Account Manager / Account Executive → career pivot to Data Engineering
(AWS + Python). Business-meets-technical background is the differentiator. The portfolio shows
personality first, skills second.

---

## Status

- [x] Concept defined
- [x] Desktop image generated
- [x] Mobile image generated
- [x] Project initialized (Vite + React + TypeScript)
- [x] Pushed to GitHub
- [ ] Boilerplate cleaned up
- [ ] Images added to project
- [ ] Scene component built (full-screen background)
- [ ] Hotspots mapped
- [ ] Interactions built
- [ ] Content written (projects, book list, about text)
- [ ] Deployed

---

## The Images

Both generated with ChatGPT (flat design illustration style, warm teal + cream + terracotta palette).

| Version | File | Dimensions |
|---------|------|------------|
| Desktop | `/Users/vanessaarruda/Documents/Assets/portfolio-office-desktop.png` | 1792 × 1024px |
| Mobile | `/Users/vanessaarruda/Documents/Assets/portfolio-office-mobile.png` | 1024 × 1792px |

**What's in the scene:** desk + laptop, shelves with books, wizard + dragon figurines, D20 dice,
headphones, camera, paintbrushes, Japanese scroll, cork board/pegboard, Ditto plushie, hanging
lamp, plants, two cats sleeping on a carpet below the desk, window with outdoor view (desktop only).

---

## Hotspot Plan

Each hotspot is an invisible `<div>` positioned precisely over an item in the image.
Coordinates get mapped once the image is displayed full-screen in the browser.

| Item | Click action | Notes |
|------|-------------|-------|
| **Laptop screen** | Zoom in → shows mini desktop with project cards + CV download | Hero interaction |
| **Books (shelf)** | Drawer opens → reading list | |
| **Headphones** | Panel opens → Spotify embed or playlist link | |
| **Camera** | Lightbox → photo gallery (miniatures, personal photos) | |
| **Cork board / pegboard** | Panel opens → current role, contact, "my story" blurb | |
| **Paintbrushes** | Gallery → painted miniatures | |
| **Dragon + wizard + D20** | Easter egg — fun "about me" or hover animation only | |
| **Ditto plushie** | Easter egg — hover wiggle | |
| **Cats on carpet** | Hover → they wake up / stretch animation | |
| **Window** | Hover → subtle parallax or weather animation | Optional |

---

## Tech Stack

- **React + Vite + TypeScript** — initialized with `--template react-ts`
- **Framer Motion** — all animations, hover effects, the laptop zoom transition
- **CSS Modules** — scoped styles per component (`.module.css` files)
- **No game engine** — the illustrated image does the visual work; interactions are just
  positioned divs + Framer Motion
- **Hosting:** Netlify (keep existing account + domain)

### How hotspots work (the core pattern)

```tsx
<div style={{ position: 'relative' }}>
  <img src="/images/office-desktop.png" style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />

  {/* Invisible div placed over the headphones */}
  <div
    style={{ position: 'absolute', top: '45%', left: '72%', width: '8%', height: '10%' }}
    onClick={() => openPanel('spotify')}
  />
</div>
```

---

## Build Steps

### Step 1 — Initialize the project ✅
```bash
npm create vite@latest . -- --template react-ts
npm install
npm install framer-motion
```

### Step 2 — Clean up Vite boilerplate
Delete the default demo content Vite generates.
- `src/App.tsx` → replace with blank component
- `src/App.css` → empty it
- `src/index.css` → replace with clean reset (box-sizing, overflow: hidden, 100vw/100vh)
- `src/assets/` → delete demo SVGs

### Step 3 — Add images to the project
Copy both PNGs into `public/images/`.
Files in `public/` are served as-is — reference them as `/images/office-desktop.png`.
Files in `src/assets/` get bundled/hashed by Vite — fine for small icons, not ideal for large images.

### Step 4 — Build the full-screen scene
Create `src/components/Scene.tsx`.
One component, one image, fills the entire screen.
Add CSS media query to swap images at 768px breakpoint.

### Step 5 — Map the hotspot coordinates
With the scene running in the browser, use DevTools to find `top/left/width/height`
percentages for each item. Use percentages so positions scale on all screen sizes.

### Step 6 — Add hotspot divs + hover effects
Invisible `<div>`s over each item.
On hover: cursor changes, subtle highlight via Framer Motion `whileHover`.

### Step 7 — Build the content panels
A reusable `<Panel>` component that slides in when an item is clicked.
Each item passes its own content (book list, Spotify embed, contact info).

### Step 8 — Build the laptop zoom (hero interaction)
Click laptop → Framer Motion scales the view so the screen fills the viewport →
a desktop UI fades in with project cards + CV download.
Press Escape or click back → reverse animation.

### Step 9 — Mobile adjustments
Swap to mobile image via CSS media query.
Remap hotspot coordinates for the portrait layout.
Test on real phone or browser device emulator.

### Step 10 — Deploy to Netlify
`npm run build` → drag `dist/` to Netlify, or connect GitHub repo for auto-deploys.
Point vanessa.arruda.eu domain to new site.

---

## Content Still Needed

- [ ] Reading list (books to show)
- [ ] Spotify playlist or embed link
- [ ] Photo gallery images (miniatures, personal)
- [ ] "My story" paragraph — account manager → data engineer, ~100 words
- [ ] Project descriptions (2–3 data engineering projects)
- [ ] CV / resume PDF (up to date)
- [ ] Contact info / preferred contact method

---

## Related

- `homespace-concept.md` in `/Users/vanessaarruda/repos/` — the bigger social app idea
  this portfolio is prototyping

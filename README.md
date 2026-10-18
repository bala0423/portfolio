# Portfolio Website

This is a personal portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Getting Started

### Prerequisites
- Node.js installed

### Running Locally (Recommended)

If you have trouble with `npm` commands, use the provided batch scripts:

1.  **First Time Setup**:
    Double-click `install_and_start.bat` to install dependencies and start the server.

2.  **Subsequent Runs**:
    Double-click `start_dev.bat` to start the development server.

### Manual Setup

If your environment is configured correctly:

```bash
npm install
npm run dev
```

## 🌐 Deployment

The site is configured to deploy to GitHub Pages.

```bash
npm run deploy
```

`npm run deploy` builds the site and pushes `dist/` to the `gh-pages` branch, which GitHub Pages serves at https://balakumaran.in (custom domain from `public/CNAME`).

The build pre-renders the page to static HTML (`src/entry-server.jsx` + `scripts/prerender.js`), so crawlers and link previews see the full content without JavaScript. Preview the production build locally with:

```bash
npm run build
npm run preview
```

The "Download Resume" button links to `/Balakumaran_R_Resume.pdf`. Put the PDF at `public/Balakumaran_R_Resume.pdf`.

## 📝 License
MIT

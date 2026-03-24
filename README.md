# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## GitHub Pages Refresh 404 Fix

This project uses React Router with clean URLs (for example, `/about`).
On GitHub Pages, refreshing a deep link can return `404` because static hosting looks
for a real file at that path.

To solve that, this repo uses an SPA fallback:

- `public/404.html` redirects unknown paths to `index.html` while preserving route state.
- `index.html` restores the original route before React mounts.

### Deploy

1. Build and publish with:

```bash
npm run deploy
```

2. Verify hard-refresh on deep links, for example:

- `/ux-portfolio/about`
- `/ux-portfolio/work/some-id`

### Notes

- `vite.config.js` uses `base: '/ux-portfolio/'` for project pages.
- `src/App.jsx` uses `BrowserRouter` with `basename` from `import.meta.env.BASE_URL`.

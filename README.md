# Portafolio

Personal portfolio of Mariana Bojórquez Pérez, built with Vue 3, TypeScript and Vite.

Live site: https://marianabp33.github.io/portafolio/

## Development

Requires Node 24.

```sh
npm install
npm run dev      # start the dev server
npm run build    # type-check and build to dist/
npm run preview  # serve the production build locally
```

## Updating content

Work experience, skills and the career start date live in `src/data/profile.ts`.
The hero and About Me text is in `src/components/TheWelcome.vue`.

## Deployment

Every push to `main` builds the site and deploys `dist/` to GitHub Pages
via `.github/workflows/deploy.yml`.

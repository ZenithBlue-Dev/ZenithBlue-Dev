# ZenithBlue — Profile Site

Studio landing page for **ZenithBlue**, featuring the flagship app **Samba S3**.
This is the source for the GitHub org profile repo (`ZenithBlue-dev.github.io`),
served from the domain root: `https://zenithblue-dev.github.io/`

## Stack

- Astro `7.3.1` (static output) + `@astrojs/sitemap`
- Tailwind CSS v4 (via `@tailwindcss/vite`) + TypeScript
- Same stack and layout language as the [Samba S3 site](https://github.com/zenithblue-dev/samba-s3)

## Structure

```
├── astro.config.mjs        # site: root domain, NO base subpath (profile repo)
├── public/
│   ├── logo.png            # ZenithBlue studio logo
│   ├── samba-s3-icon.png   # Samba S3 app logo
│   ├── deviceinsight-icon.png
│   └── .nojekyll           # required for GitHub Pages
├── src/
│   ├── components/         # Nav, Hero, Apps (Samba S3), Why, Faq, Closing
│   ├── layouts/Base.astro
│   ├── pages/index.astro
│   └── styles/global.css   # studio theme (deep navy + pulse blue)
└── .github/workflows/deploy-website.yml
```

## Develop

```bash
npm install
npm run dev      # http://localhost:4321/
npm run build    # outputs dist/
npm run preview  # serve dist/ locally
```

## Deploy

Push to the profile repo — the `Deploy website` workflow builds and
publishes `dist/` to Pages automatically. First-time setup: repo
**Settings → Pages → Source: "GitHub Actions"**.

## Links

- Org: `https://github.com/zenithblue-dev`
- Samba S3 repo: `https://github.com/zenithblue-dev/samba-s3`
- Samba S3 releases: `https://github.com/zenithblue-dev/samba-s3/releases`
- Samba S3 site: `https://zenithblue-dev.github.io/samba-s3`
- Play Store: `https://play.google.com/store/apps/details?id=com.zenithblue.sambas3`

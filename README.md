# EPP // 2026 — Portfolio (Next.js)

A Next.js 15 (App Router) port of the `index.html` portfolio. TypeScript + Tailwind CSS, with the original cyber-industrial design system preserved.

## Stack

- Next.js 15 (App Router, React Server Components by default)
- TypeScript
- Tailwind CSS (with `@tailwindcss/forms` and `@tailwindcss/container-queries`)
- `next/font` for Inter + JetBrains Mono
- Material Symbols Outlined via Google Fonts stylesheet

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
nextjs-portfolio/
├── app/
│   ├── globals.css       # Tailwind layers + scanline / glass-panel / material-symbols
│   ├── layout.tsx        # Root layout, fonts, scanline overlay
│   └── page.tsx          # Home page composition
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── Ecosystem.tsx
│   ├── Portfolio.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Contact.tsx       # Client component (form state)
│   └── Footer.tsx
├── tailwind.config.ts    # Full custom theme (colors, fontSize, spacing) from the HTML
├── next.config.js        # Remote image hostnames allowed
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## Notes on the conversion

- The inline `tailwind.config` from the HTML was lifted into `tailwind.config.ts` verbatim (colors, custom font sizes, custom spacing tokens like `margin-desktop`, `gutter`).
- Inline `<style>` rules (`.scanline`, `.glass-panel`, `.glitch-border`, `.material-symbols-outlined`) moved into `app/globals.css`.
- Fonts now use `next/font/google` and are exposed as CSS variables (`--font-inter`, `--font-jetbrains`), referenced from the Tailwind `fontFamily` config.
- Remote images use `next/image` with `unoptimized` because the hosts return generated URLs; switch to optimized once you self-host the assets. The remote host is allow-listed in `next.config.js`.
- The contact form is a Client Component (`"use client"`) with local state. Wire `handleSubmit` to a Server Action or API route when you're ready.
- All `<a>` tags became `next/link` components.
- `data-icon` and `data-alt` attributes from the original markup were dropped — `next/image` uses real `alt` text instead.

## Customizing

- Swap the placeholder Google-hosted images in `components/Ecosystem.tsx`, `components/Portfolio.tsx`, and `components/About.tsx` for your own assets (drop them in `public/` and reference with `/your-image.png`).
- Update copy/links in any component file.
- The "RESUME" button in `Navigation.tsx` is a placeholder — point it to your resume PDF.

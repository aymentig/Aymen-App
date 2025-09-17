# Aymen — Next.js + TypeScript + Tailwind + MDX (Root `app/`)

This variant puts `app/` at the repo root (no `src/`) so Vercel always detects it even if Root Directory is `/`.

## Deploy (browser only)
1. Upload this folder to a new GitHub repo (root should contain `package.json`, `app/`, `public/`).
2. Vercel → Add New → Project → Import repo → Deploy.
3. (Optional) Set env var: `NEXT_PUBLIC_SITE_URL = https://your-site.vercel.app`.

## Local
```bash
npm install
npm run dev
```

## Where to edit
- `app/page.tsx` — homepage
- `app/blog/page.tsx` — blog index
- `app/blog/hello-world/page.mdx` — first post
- `public/resume.pdf` — for the Download button

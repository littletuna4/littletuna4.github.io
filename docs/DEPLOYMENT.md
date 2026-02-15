# Deployment (GitHub Pages)

## How it works

- The live site is the **Next.js static export** built from `site/`, not the repository root.
- `.github/workflows/deploy.yml` runs on push to `main`: it builds in `site/` and uploads the `site/out` directory as the GitHub Pages artifact.
- The **deploy-pages** action serves that artifact at the repo’s GitHub Pages URL.

## Why the root README can appear instead of the site

If the deployed URL shows the repository root (e.g. only the root `README.md`), GitHub Pages is almost certainly using **Deploy from a branch** instead of the workflow artifact.

- **Deploy from a branch** (e.g. branch `main`, folder `/` or `/docs`) serves files from that branch, so the repo root (and README) is what visitors see.
- **GitHub Actions** uses the artifact produced by the workflow (the contents of `site/out`), which is the built static site.

## Fix: use GitHub Actions as the Pages source

1. In the repo: **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. Save. The next successful run of the “Build and Deploy to GitHub Pages” workflow will deploy the built site; the root README will no longer be the Pages content.

## Build details

- Workflow `working-directory` is `./site`; all build steps run there.
- Static export output is `site/out` (Next.js default for `output: 'export'`).
- The workflow verifies submodules (e.g. `career-ledger`), build output, and `.nojekyll` before uploading the artifact.

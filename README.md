# tools.paulthillier.dev

Client-side engineering utilities. Runs entirely in the browser — no server, no uploads, no tracking.

**Live:** [tools.paulthillier.dev](https://tools.paulthillier.dev)

## Tools

| Tool | Description |
|------|-------------|
| [GLTF Embedder](/src/pages/tools/gltf-embedder.astro) | Embed external `.bin` buffers and textures into a self-contained `.gltf` file |

## Adding a new tool

1. Create `src/pages/tools/your-tool-name.astro` using `ToolLayout`
2. Add an entry to the `tools` array in `src/pages/index.astro`
3. That's it — it auto-appears on the hub with filtering

```astro
---
import ToolLayout from '../../layouts/ToolLayout.astro';
---
<ToolLayout
  title="Your Tool"
  description="What it does."
  icon="XX"
  category="util"
>
  <!-- your tool HTML + <script> here -->
</ToolLayout>
```

## Dev

```bash
npm install
npm run dev       # localhost:4321
npm run build     # static output → dist/
npm run preview   # preview the build
```

## Security

Every tool page enforces:
- `Content-Security-Policy` with `connect-src 'none'` — no network requests possible
- `Referrer-Policy: no-referrer`
- `Permissions-Policy` blocking camera, mic, geolocation
- File type allowlists + size caps enforced in JS before any processing
- All JS wrapped in IIFEs — zero global leakage
- DOM insertion uses `textContent` / escaped HTML only — no `innerHTML` with user data

## Deployment

Deployed via [Netlify](https://netlify.com) / [Vercel](https://vercel.com) with a CNAME pointing `tools.paulthillier.dev` at the provider.

Recommended server-side headers (add to `netlify.toml` or `vercel.json`):
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: no-referrer
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

# template-cloudflare-worker

Minimal Cloudflare Workers template (TypeScript, oxlint, oxfmt).

- `src/index.ts` – the Worker (`src/index.test.ts` – Vitest test)
- `cloudflare.config.ts` – Worker config (logs and traces enabled)
- `vite.config.ts` – Cloudflare Vite plugin, used by `cf dev` and `cf build`
- `justfile` – `dev`, `fmt`, `lint`, `typecheck`, `test`, `deploy`
- `.github/` – CI and weekly Dependabot (npm dev and prod grouped separately)

Requires Node.js 22.18+. Config is `cloudflare.config.ts` (the [`cf` CLI](https://developers.cloudflare.com/cf/projects/cloudflare-config/) format), not `wrangler.jsonc`. Binding types are generated into `.cloudflare/types` (gitignored); `npm run typecheck` regenerates them. Re-run after changing bindings in the config.

`cf` and `@cloudflare/vite-plugin` are on beta releases, which is what supports `cloudflare.config.ts`.

## Using this template

Rename `template-cloudflare-worker` in `package.json` and `cloudflare.config.ts`, and set `compatibilityDate` to today's date.

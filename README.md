# Woolworths 2031

An independent Cactus Consulting proposal for the Future of Retail Case Competition. A 2031 vision with distinct FY34 financial projections. This is not an official Woolworths service.

## Run locally

Requires Node.js 22.12+ (Node 24 recommended) and pnpm 11.25.

```sh
corepack enable
pnpm install
pnpm dev
```

Open http://127.0.0.1:5173. `pnpm preview` serves the production build after `pnpm build`.

```sh
pnpm build
pnpm lint
pnpm test
```

The included lockfile pins the installed dependency graph. pnpm-workspace.yaml permits only esbuild's required install script. If Corepack is unavailable, install pnpm from its official package registry.

## Architecture

React 19, TypeScript, Vite and GSAP ScrollTrigger. Static output in `dist/`. No server, account, analytics, secrets or third-party runtime integrations. No backend is needed.

- `src/App.tsx`: the nine-chapter narrative.
- `src/components/`: navigation, phone, Reel experience, locker experience, ecosystem, roadmap, business case and source disclosures.
- `src/data/strategy.ts`: deck-sourced copy, milestones and exact annual financial series.
- `src/data/demo.ts`: pure illustrative basket and collection logic.
- `src/useScrollScene.ts`: scoped motion lifecycle and deterministic scroll-to-stage mapping.
- `src/styles.css`: visual tokens, editorial layout, responsive composition and motion fallbacks.
- `public/assets/`: optimised original deck imagery and the generated food photograph.
- `docs/`: the brief, storyboard/scroll specification, design system, implementation plan, asset inventory and QA report.

Vite replaces the brief's preferred Next.js because this demonstration has only local state and no server requirements. Native CSS provides explicit art direction instead of Tailwind. There is one animation engine and no scroll interception.

## Interactions and motion

Hero reveal and scroll-linked phone depth; five-stage sticky recipe story with ingredients converging into the basket; five-stage locker story with reversible door/product loading; ecosystem and timeline reveals; accessible exact-value financial year selection. Both demos work independently of scrolling. The recipe demo supports classic/plant-based baskets, an alternative pasta, fulfilment selection, confirmation and reset. The collection demo supports optional illustrative consent, manual ordering, invalid/valid PINs, collection and reset.

System `prefers-reduced-motion` disables scroll choreography and sticky stages. `?motion=reduce` offers an explicit shareable version; `?motion=auto` returns to device preferences. Manual phase buttons and readable narratives remain available.

## Sources and limitations

All 17 PDF pages were inspected. The page-8 Reel to Meal+ slide has no detailed specification; no extra capabilities were inferred. Earlier relative roadmap p11 and dated financial rollout p17 are distinguished. Research percentages retain the deck's collective citation context; full individual source URLs and samples were not supplied. Financials are modelled, unaudited and preserve the deck's rounding.

The mobile app, prices, product recommendations, activity signals and PIN 2031 are fictional local examples. There is no live AI, stock, promotions, payment, allergen check or Woolworths account. Readiness in five minutes is a pilot target for selected grab-and-go items.

The locker animation interprets the approved source design with lightweight HTML/CSS layers. It is not production CAD or a photorealistic engineering model. Original staff and Jacob artwork remain separate. A high-resolution CAD model or supplied layer set could refine the hardware render later; current delivery does not depend on it.

## Deploy

`pnpm build` creates a portable static `dist/`. Serve that directory with any static host over HTTPS; no environment variables are needed. Root-relative assets assume deployment at the domain root.

For the connected Sites host, preserve `.openai/hosting.json` and its exact project ID. Use the Sites skill source workflow to commit/push the exact source, package `dist`, save the matching version and deploy privately. Do not create a second Site or alter its audience. The root README records the verified deployed URL after publication.

## Validation

See `docs/QA_REPORT.md` for actual checks, screenshot locations and limits. Screenshots are local QA artefacts, excluded from deployment source.

# Implementation plan

New empty checkout. React + TypeScript + Vite static build, GSAP ScrollTrigger. This follows the requested React/TypeScript/GSAP direction, with Vite replacing preferred Next.js because this is an entirely local-data, client-rendered concept with no server routes. Plain CSS tokens replace Tailwind to keep art direction explicit. No redundant motion system or heavy 3D dependency.

Architecture: src/data/strategy.ts for sourced figures, phases and risks; components for Navigation, Phone, ReelExperience, LockerExperience, Ecosystem, Roadmap, BusinessCase and Sources; App assembles nine chapters. useScrollScene handles scoped GSAP lifecycle and media queries. Pure demo business logic independently testable.

Phases: audit and planning (complete before source implementation); static complete story; signature hero/Reel/locker interactions; supporting ecosystem/timeline/chart; validation and polish.

Assets: extract original PDF XObjects using pypdf, retain alpha; encode WebP with Pillow. Source artwork kept at appropriate displayed size. New generated food photo is illustrative. Never upscale slide screenshots as heroes. CSS locker mirrors supplied module, sign and screen design; original concept remains visible in source disclosure. No videos or frame sequences required, avoiding frame payload.

Performance: one high-priority food image, lazy offscreen source artwork, no external runtime APIs or font requests, scoped scroll handlers, resize refresh and cleanup, no forced smooth scrolling. All source illustrations compact. Asset and bundle sizes recorded in QA.

Testing: TypeScript/build, ESLint, Node unit tests for demo state and exact financial data; browser screenshots and functional click-throughs at desktop and mobile; 1440/1024/768/390/360 widths; overflow, reduced motion, direct anchors, keyboard and reverse scroll. Report any environment limitation honestly.

Deployment: dist static output; Sites owner-private publication via source helper and native publishing tools. No accounts, analytics, real payments or commerce integration.

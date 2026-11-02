# QA report — 2 November 2026

## Checks completed

- TypeScript strict compilation and Vite production build: pass.
- ESLint (including React hooks): pass.
- Node tests: 3 passed, 0 failed. Cover basket pricing/swaps/preferences, confirmation/PIN collection guards and exact supplied FY34/rollout financial values.
- Real in-app browser inspection at 1440×900, 1024×900, 768×1024, 390×844 and 360×900. Document scroll width equals viewport width at all five requested breakpoints.
- Desktop and mobile recipe demo: share, plant preference, pasta alternative, correct recalculated estimate, fulfilment, confirmation and reset controls checked. A$14.80 for plant + wholemeal, A$14.50 for plant + rigatoni; prices explicitly illustrative.
- Desktop and mobile locker demo: optional activity consent, manual order, incorrect PIN 1234 rejection, correct demo PIN 2031 unlock, collection and reset logic checked. No external data or orders.
- Mobile navigation opens, closes after selection and reaches the correct section. Desktop active chapter updates.
- Fresh direct `#ecosystem` load reaches the chapter at approximately 90px below viewport top, after adding initial React hash handling.
- Reverse mobile locker scroll restored Load from Collect; matching original scroll position restored the same phase. Door and product transforms use scrubbed timelines. Recipe stage mapping reviewed in both directions.
- Explicit reduced-motion view tested: sticky becomes relative, all narrative steps opacity 1, no continuous transforms, manual Checkout preview works. System media-query branch is implemented and code reviewed; OS-level preference was not changed during testing.
- Financial FY29 selection returned A$6.6m sales, −A$0.9m EBITDA, 20 Ready stores and 220k Reel orders. Model disclosure opens an accessible 11-row table (header plus 10 drivers), horizontally scrollable inside its region on mobile.
- Source and risk disclosures inspected; all 17 source PDF pages reviewed through extraction/contact sheet, with full-size attention to image-only roadmap and risks.
- Browser console: no error or warning entries in captured review.

## Issues fixed during review

Mobile sticky stage and narrative moved into the same grid area; phone basket spacing reduced to keep content clear of app navigation; phase selection consolidated into one deterministic scroll calculation; initial deep-link scrolling added; compact controls enlarged to 44px; local basket disclaimer contrast corrected. The locker narrative consistently separates Jacob from the staff member.

## Size and performance limits

Approximately 392kB JavaScript (133kB gzip), 63kB CSS (14kB gzip); 787kB optimised WebP assets combined. No external fonts, API calls, tracking, video downloads or frame sequences. Hero food image prioritised, offscreen imagery lazy-loaded. These are build/file measurements, not Lighthouse scores. No physical low-end-device FPS, cross-browser matrix or measured Core Web Vitals audit was performed.

## Screenshots

Local `qa/desktop-hero.jpg`, `qa/desktop-ecosystem.jpg`, `qa/mobile-hero.jpg`, `qa/mobile-demo.jpg`, `qa/mobile-reduced-motion.jpg`. Additional desktop/mobile/tablet screenshots were inspected in the browser tool. QA images are excluded from Git and deployment to keep source/build compact.

## Remaining limits

The hardware is a lightweight layered interpretation of the approved source design, not production CAD. Recipe recognition, product and pricing examples are simulated. Research inputs remain deck-cited with incomplete bibliography. Forecasts are supplied assumptions, not independently validated returns. Formal screen-reader and physical-device testing remain outside this verification.

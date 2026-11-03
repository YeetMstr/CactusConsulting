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

## Character-sequence revision checks

Desktop and mobile browser checks confirmed Ella's recipe → busy → recipe artwork in both scroll directions. Chapter 03 stage selection changes Ella to the matching illustration, including the finished meal. Ready in 5's loading and collection graphics are full-size transparent source scenes, with the staff/customer distinction retained. Stage controls now synchronise narrative position as well as graphics. Rechecked 1440/1024/768/390/360 widths: no document overflow. New screenshots: qa/ella-reel-desktop.jpg, qa/ready-integrated-desktop.jpg and qa/ready-integrated-mobile.jpg.

## Finishing revision

Restored chapter 03's original ReelExperience component and chapter 05's original LockerExperience component, omitting its old changing-character inset. Removed the superseded character-scene CSS and unused Reel-only frame configuration. Chapter 02's EllaJourney is retained unchanged. Build, lint, logic tests and desktop/mobile rendering are rechecked for this revision.

## Publication edition checks

Five narrative stages retained; the final stage uses the supplied marketplace image and exact requested sentence. Browser measurements confirmed identical image-element bottom positions across all five frames on desktop and mobile. No document horizontal overflow at 1440, 1024, 768, 390 and 360px (scrollbar width accounts for document width being slightly below viewport width). Browser text audit found no slide/deck/page pointers or Apple visual-reference wording. The technical architecture disclosure opens below the current phone demo. Eight ecosystem branches and the Olive-only central label verified. Sections 03 and 05 contain no switching character elements. The existing customised phone demo and GitHub Pages base configuration were preserved.

Build/lint and all three existing business-logic tests passed. The standard build retains the GitHub Pages /CactusConsulting/ base; the private Sites package is built with an explicit root base override so both hosting destinations remain compatible.

## Technology trends addition

Added a standalone section immediately after Gen Z Shift and before Reel to Meal. Three editorial columns cover social discovery, multimodal/agentic AI and dynamic personalisation, followed by Woolworths Group's April 2025 five-year Google Cloud agreement and a transition into the proposed solution. The partnership is linked to Woolworths Group's official announcement. No presentation page pointers appear in the section.

Production build, ESLint and all three existing logic tests passed. Browser checks at 1440, 1024, 768, 390 and 360px found no horizontal overflow. Desktop and mobile typography, stacked content, source link and section order were checked. Existing restored sections and demos were preserved.

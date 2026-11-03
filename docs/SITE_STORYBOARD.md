# Storyboard and scroll choreography

Every chapter is readable without animation. Entry and exit use viewport-relative ScrollTrigger ranges, not absolute document offsets. All sequences reverse with scroll. Mobile <=800px uses smaller stages and shorter readable steps; reduced motion removes sticky behaviour and shows static visual stages with manual phase controls.

| Chapter | Narrative and main copy | Initial state / entry trigger | Main phases and transforms | Sticky / exit / transition | Assets and mobile / reduced motion |
|---|---|---|---|---|---|
| 01 Future starts here | A new way to shop. Built around you. | Phone upright to right, title left; load | Restrained opacity intro; phone moves up and scales as hero leaves viewport | No pin; exits into warm editorial chapter | Live phone, generated pesto photo; stacked on mobile; static reduced motion |
| 02 Gen Z shift | Inspiration is instant. Shopping should be, too. | Ella and discovery photo enter bottom 85% | Editorial text plus 69% discovery / 67% personalisation; Ella moves subtly | No pin; recipe colour carries into Reel | Original Ella character; deck research context always visible; static mobile |
| 03 Reel to Meal | See it. Crave it. Shop it. | Sticky phone screen shows recipe; section reaches header | Discover → Share → Understand → Personalise → Basket. Ingredient rows appear and converge into basket; phone perspective settles. Text steps remain in reading order | CSS sticky, phase derived from step viewport position; exits on basket | Original food image; HTML UI. Separate click-through demo with preference, alternative and fulfilment controls; mobile shorter step intervals; reduced-motion manual steps |
| 04 Beyond list | Your preferences. Less repetition. | Large editorial headline and three connected interface strips | Dietary, collaborative household, student delivery suggestions enter in sequence | No pin; widened composition prepares ecosystem | Native UI and source phone detail; no invented Reel+ features; stacked mobile |
| 05 Ready in 5 | Five minutes. Zero queues. | Distant modular locker; Jacob leaves gym | Consent-based prompt → confirm → separate team member loads drink/salad → door closes → Jacob PIN collection. Locker scales and rotates toward compartment, door rotates, products translate inside | Sticky stage; final open door carries to connected story | Approved locker photo and staff/Jacob source illustrations; CSS compartment layers mirror source design. Manual demo supports consent, order, PIN, collection, reset. Mobile shortened; reduced motion static stage + controls |
| 06 Connected future | One ecosystem. Built around you. | Central Olive identity with separate named satellite experiences | Connections reveal, elements settle around centre; each label explains its role | No pin; large ecosystem ends in implementation | HTML/SVG connections; compact vertical mobile; all visible with reduced motion |
| 07 Reality | A vision, with a way forward. | FY27 marker; section enters | Timeline line progresses through dated milestones and risk disclosures remain readable | No pin; final FY34 marker leads to evidence | Deck pp11,12,17. Vertical on mobile; static reduced motion |
| 08 Business case | A future worth building. | FY34 sales figure plus baseline chart | Exact annual sales bars reveal; selected year changes exact metrics; no invented interpolation | No pin; optional model/assumption disclosures | pp14–17 exact data. Scrollable accessible model table; mobile chart preserves axes |
| 09 Future ready | The future moves with you. | Large 2031 typography and two product links | Restrained final opacity and scale | Natural document end; links navigate back to solution sections | Source Cactus identity, team credits; static mobile/reduced motion |

Reference study: Apple AU MacBook Pro display, AirPods Pro and iPhone 17 pages inspected on 2 November 2026. Adopt product-first hierarchy, scene-specific imagery, restrained navigation, dark/light contrast and progressive disclosure. Use no Apple imagery, copy, logos or implementation.

## Character integration revision

Chapter 02 now uses a sticky three-stage Ella illustration sequence: scrolling → finding a recipe → time pressure. Original extracted artwork crossfades in a shared light stage with matching narrative and stage controls; reverse scroll restores prior illustrations. Chapter 03 carries Ella through discovery, sharing with Olive, basket personalisation and the meal alongside the live phone UI. The two Olive stages intentionally reuse the established share artwork.

Chapter 05 replaces the small inset with full-size transparent source compositions. Early Jacob poses share the floor with the modular locker; the loading stage uses the original separate staff member + locker; readiness returns to the closed live locker; collection uses the original Jacob + locker. The source compositions become the main stage without postcard frames. The live collection demo retains the opening compartment interaction. Stage buttons move the narrative to the corresponding step; in reduced-motion mode they change the illustration in place.

## Finishing revision (supersedes character integration in chapters 03 and 05)

Ella's scroll-switched illustrations remain exclusively in chapter 02. Chapter 03 returns to the original anchored phone, floating ingredients and recipe-to-basket stages with no Ella graphic. Chapter 05 returns to the original CSS locker and compartment loading/opening animation, with all switching character artwork removed, including the old inset. Local interactive demos are retained.

## Publication edition

Ella's five scenes now form an illustrative Gen Z university-student day: commute and group chat; study and part-time work; recipe inspiration at lunch; shared-house planning; an evening choice of a multi-brand marketplace. The fifth scene uses the newly supplied Cactus Consulting (2).png and the requested marketplace wording. All image frames share a bottom baseline with contained, aspect-preserving sizing.

The Reel to Meal demo and restored locker scene are preserved. An expandable technical architecture follows the recipe demo, matching the financial disclosure design. The ecosystem now has eight branches: Discover, Personalise, Reward, Receive, Plan together, Ready in 5, External AI and Nutrition. Olive's central caption is removed. The Rewards branch uses the official Everyday Rewards mark recoloured to the diagram's green.

Public-facing slide/page pointers and implementation/editorial commentary have been removed. Project details retain authorship, research acknowledgements, modelled time horizons, accessibility controls and a concise visitor-facing explanation of simulated experiences.

## Technology trends bridge

Between chapter 02 and chapter 03, a pale sage editorial section explains three shifts: social discovery, multimodal/agentic AI and dynamic personalisation. Each connects the trend to a practical Woolworths opportunity. A forest-green Google Cloud partnership feature establishes the existing technology foundation; the closing invitation flows into Reel to Meal. Desktop columns stack on mobile. Existing chapter numbers are preserved.

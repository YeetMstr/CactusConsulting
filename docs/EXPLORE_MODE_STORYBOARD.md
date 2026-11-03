# Explore Mode

An isolated, unnumbered chapter before Ready in 5. Forest-green opening, warm-white sticky phone stage and six editorial beats. All styles are CSS Modules; no shared hook, component or asset is changed.

1. **Dock & activate:** trolley-mounted phone, charging indicator, Explore activation screen. Charging is conceptual, not a hardware claim.
2. **Find your aisle:** BLE beacon rings and approximate aisle status; explicit approximate location rather than shelf-level accuracy.
3. **Discover with Olive:** a personalised cheesecake suggestion, with ingredient prices and aisle destination.
4. **Find your way:** schematic store map with destination buttons and route to the selected aisle.
5. **Scan as You Shop:** simulated barcode, product selection and basket quantities with integer-cent totals.
6. **Finish in the app:** review, simulated payment and itemised receipt. No real camera, location, payment or order.

ScrollTrigger observes six steps in both directions and scrubs the dedicated visual. Stage buttons scroll to the associated beat. Reduced-motion users receive static visuals and can select each stage without scrolling. A separate demo has activate → approximate aisle → recommendation → map → scan → checkout → receipt states. Reset clears all demo state. Product quantities can be increased and decreased; checkout requires a nonempty basket.

Responsive: two columns on desktop, compact sticky visual on mobile; demo stacks with full-width controls. No automatic focus movement, live messages only for interactive actions. Existing sections and navigation are untouched.

## Reference-led screen revision

The published story order is now Connect → Locate → Navigate → Scan → Discover → Checkout. The separate hands-on demo remains removed. Screens are rebuilt with HTML typography, Lucide/SVG controls, a vector route, CSS product illustrations and an illustrative barcode. The supplied discovery reference supplies the cheesecake thumbnail through a scoped image window; the supplied aisle illustration supplies the location scene. The home screen follows the Rewards / Explore / Express layout; the last screen follows the three-item checkout reference. Cream cheese $4.50 + biscuits $3.20 + strawberries $4.60 = $12.30. All values are illustrative.

Desktop and 390px reduced-motion layouts checked, including map, recommendation and checkout screen containment. Production build, ESLint and all five tests passed.

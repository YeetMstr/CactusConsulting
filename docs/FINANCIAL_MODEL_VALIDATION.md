# Revised three-solution model validation

Source: latest user-supplied Updated Woolworths Financials.pdf, numerical schedules and inputs. This revision supersedes the earlier A$209.15m sales / A$11.54m NPV case. Validation is of supplied arithmetic, not external verification of benchmarks or forecast feasibility.

## Updated assumptions

Explore basket A$80 → A$85; recommendation uplift 5% → 7.5%; genuine incremental share 60% and overlap exclusion 20% unchanged. Sales per session A$1.92 → A$3.06. Shrink is still 0.1% of every baseline basket, so reserve rises A$0.080 → A$0.085. Contribution before fixed costs is now A$1.551826667/session.

Hardware: 45 beacons × A$10 + 40 charging holders × A$25 + installation A$1,800 + mapping A$2,500 + POS onboarding A$1,500 = A$7,250/site (previous A$11,480). Annual support is A$1,500 maintenance/power + A$950 licensing = A$2,450 (previous A$2,700). Hardware life input six years and software five years, previously five/four. Volumes, central OPEX and software investment remain unchanged. Reel and Ready unit assumptions are unchanged.

## Reconciliation

All eight annual programme sales, EBITDA, EBIT, cash flow and NPV results match the PDF's displayed precision. FY34 unrounded sales A$222.12m, EBITDA A$26.395278333m, EBIT A$23.760980714m, eight-year NPV A$18.836124869m. Total capex A$21.8225m. Standalone Explore FY34 sales A$34.8075m, EBITDA A$13.619528333m; NPV A$7.604783867m. Explore cumulative NPV first becomes positive in FY33. Routed existing Explore basket GMV A$966.875m is excluded from incremental sales.

## Unresolved source accounting discrepancy

The PDF changes hardware/software life divisors to six/five years but keeps the old five/four-year cohort recognition windows. For example the FY29 software pool A$2.71m is charged at A$0.542m/year in FY29–FY32, then disappears in FY33; a complete five-year schedule would retain that charge in FY33. FY29 hardware depreciation similarly disappears in FY34 despite the six-year input. This under-depreciates those cohorts and overstates the reported EBIT relative to a complete revised-life schedule.

Website EBIT deliberately follows the supplied numerical schedules with an explicit disclosure in the financial model dropdown. It is not represented as corrected accounting. EBITDA, pre-tax cash flow and NPV are unaffected by that discrepancy under the source's EBITDA-less-capex cash-flow convention. Correcting the underlying workbook requires changing the cohort windows; no silent correction has been applied.

Other retained source issues: narrative 12-store pilot/A$16 basket/A$16k locker notes conflict with 20-store/A$12/A$12k numerical inputs; numeric tables take precedence. Explore's A$1.55 'EBITDA per visit' row is contribution before fixed costs; website labels it correctly. The Explore sensitivity grid's A$18.836 base is programme NPV, not standalone Explore; that mislabelled grid is excluded. Downside/base/upside outputs are transcribed from the revised scenario table, not presented as independently reconstructed scenarios.

## Checks

Production build, ESLint and all eight tests pass. Golden annual outputs, exact sessions, per-visit economics, product sums, cash-flow identity and NPV checked. Desktop chart range updated for positive A$7.605m standalone NPV; year-selection controls verified.

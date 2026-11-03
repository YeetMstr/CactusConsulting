// Reconstructed from Woolworths_Financials_Feature_New_Customers.pdf numerical input tables.
// Monetary outputs are A$m; volumes are actual completed orders / visits.
export const modelYears=['FY27','FY28','FY29','FY30','FY31','FY32','FY33','FY34'];
const million=1e6;
const add=(...rows:number[][])=>modelYears.map((_,i)=>rows.reduce((v,r)=>v+r[i],0));
const subtract=(a:number[],...rows:number[][])=>a.map((v,i)=>v-rows.reduce((n,r)=>n+r[i],0));
const pv=(cash:number[])=>{let cumulative=0;return cash.map((v,i)=>(cumulative+=v/1.06**(i+1)));};
function amortise(capex:number[],launch:number,life:number,window=life){const inService=capex.map((v,i)=>i<launch?0:i===launch?capex.slice(0,launch+1).reduce((a,b)=>a+b,0):v);return modelYears.map((_,i)=>inService.reduce((sum,v,cohort)=>sum+(i>=cohort&&i<cohort+window?v/life:0),0));}
export const reelOrders=[0,50000,300000,900000,1800000,2700000,3500000,4000000];
export const readyStores=[0,0,20,90,260,420,600,750];
const readyDaily=[0,0,30,35,42,44,46,48],readyDays=[0,0,120,240,300,335,345,350];
export const readyOrders=readyStores.map((n,i)=>n*readyDaily[i]*readyDays[i]);
export const exploreStores=[0,0,20,120,250,380,550,750];
export const exploreDaily=[0,0,20,25,35,45,50,55];
export const exploreDays=[0,0,120,260,330,350,350,350];
export const exploreVisits=exploreStores.map((n,i)=>n*exploreDaily[i]*exploreDays[i]);
const reelCapex=[1.1,.5,.5,0,0,.24,.18,.15],readySoftware=[.4,.4,0,0,0,.18,.15,.13];
const readyHardware=readyStores.map((n,i)=>(n-(readyStores[i-1]||0))*.012);
const exploreSoftware=[.9,1.37,.44,.25,.27,.29,.31,.35];
const exploreHardware=exploreStores.map((n,i)=>(n-(exploreStores[i-1]||0))*.005325);
const reelFixed=[.7,.85,1.1,1.4,1.8,2.36,2.84,3.32],readyFixed=[.2,.3,.45,.6,.75,1.08,1.4,1.77],exploreFixed=[.39,.74,.81,1.03,1.36,1.78,2.12,2.44];
export const exploreUnit={baselineBasket:85,uplift:.175,incrementalShare:.6,overlap:.2,netSales:85*.175*.6*.8,grossProfit:85*.175*.6*.8*.286,labourSaving:2.5/60*38*.7,verification:.2/60*38,shrink:85*.001,digital:.12+.05+.05,siteCapex:5325,annualSiteSupport:1700};
export const exploreContribution=exploreUnit.grossProfit+exploreUnit.labourSaving-exploreUnit.verification-exploreUnit.shrink-exploreUnit.digital;
function product(name:string,volume:number[],salesPerUnit:number,contribution:number,fixed:number[],siteCost:number[],capex:number[],da:number[]){const sales=volume.map(n=>n*salesPerUnit/million);const ebitda=volume.map((n,i)=>n*contribution/million-fixed[i]-siteCost[i]);const ebit=subtract(ebitda,da),cashflow=subtract(ebitda,capex);return {name,volume,sales,ebitda,ebit,capex,cashflow,npv:pv(cashflow)};}
export const reelModel=product('Reel to Meal',reelOrders,36,36*.286-3.95,reelFixed,modelYears.map(()=>0),reelCapex,amortise(reelCapex,1,6));
export const readyModel=product('Ready in 5',readyOrders,9,9*.286-(1.5/60*38+.18+.23),readyFixed,readyStores.map(n=>n*.0018),add(readySoftware,readyHardware),add(amortise(readySoftware,2,6),amortise(readyHardware,2,8)));
// Reproduce the supplied schedules: new life divisors with legacy cohort windows.
// Their incomplete depreciation is disclosed; do not treat this as a corrected accounting policy.
export const exploreModel=product('Explore Mode',exploreVisits,exploreUnit.netSales,exploreContribution,exploreFixed,exploreStores.map(n=>n*.0017),add(exploreSoftware,exploreHardware),add(amortise(exploreSoftware,2,5,4),amortise(exploreHardware,2,6,5)));
// Acquisition cohorts contribute only OTHER shopping; feature purchases stay above.
export function customerGain(volume:number[],grossRate:number,exclusion:number){let active=0;const sales:number[]=[],earnings:number[]=[];volume.forEach(n=>{const acquired=n*grossRate/1000*(1-exclusion),retained=active*.75;active=retained+acquired;const revenue=(retained+acquired*.5)*12*55*.85;sales.push(revenue/million);earnings.push((revenue*(.286-.11)-acquired*12-active*2)/million);});return {sales,earnings};}
export const acquisition=[customerGain(reelOrders,2,.1),customerGain(readyOrders,3,.2),customerGain(exploreVisits,.6,.25)];
export const solutions=[reelModel,readyModel,exploreModel].map((model,i)=>{const gain=acquisition[i],cashflow=add(model.cashflow,gain.earnings);return {...model,sales:add(model.sales,gain.sales),ebitda:add(model.ebitda,gain.earnings),ebit:add(model.ebit,gain.earnings),cashflow,npv:pv(cashflow)};});
export const financials={sales:add(...solutions.map(x=>x.sales)),ebitda:add(...solutions.map(x=>x.ebitda)),ebit:add(...solutions.map(x=>x.ebit)),npv:pv(add(...solutions.map(x=>x.cashflow))),reelOrders:reelOrders.map(n=>n/1000),readyStores,readyOrders:readyOrders.map(n=>n/1000),exploreStores,exploreVisits:exploreVisits.map(n=>n/1000),exploreSales:exploreModel.sales,exploreEbitda:exploreModel.ebitda,exploreNpv:exploreModel.npv,gmv:modelYears.map((_,i)=>(reelOrders[i]*60+readyOrders[i]*12+exploreVisits[i]*85)/million),capex:add(...solutions.map(x=>x.capex)).map(n=>-n),cashflow:add(...solutions.map(x=>x.cashflow))};
export const financeScenarios=[{name:'Downside',sales:228.48,ebit:31.98,npv:34.04},{name:'Base',sales:397.68,ebit:73.21,npv:109.72},{name:'Upside',sales:608.47,ebit:125.23,npv:203.69}];

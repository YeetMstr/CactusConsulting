export const reelSteps = [
 {title:'Find inspiration.', label:'Discover', body:'Spot a recipe in your feed. Dinner looks good.'},
 {title:'Share it with Olive.', label:'Share', body:'Send the recipe to Olive AI through Reel to Meal.'},
 {title:'Auto add ingredients.', label:'Understand', body:'Video, speech and language tools identify the ingredients. Review the suggestions before anything adds to cart.'},
 {title:'Personalised to you.', label:'Personalise', body:'Olive considers dietary requirements, favourite brands and available alternatives all based on you.'},
 {title:'Reel to Meal.', label:'Checkout', body:'Confirm the ingredients and quantities, then choose delivery or store collection.'},
];
export const readySteps = [
 {title:'Workout done. I’m Hungry.', label:'Prompt', body:'A completed workout from a phone or smartwatch can trigger a relevant snack suggestion on the app.'},
 {title:'Quick Collection', label:'Confirm', body:'A customer confirms a drink and a pre-made salad. The initial assortment is deliberately limited to nearby grab-and-go items.'},
 {title:'Placed for You', label:'Load', body:'A separate Woolworths team member picks the items and loads a refrigerated compartment. Modular lockers adapt to demand and staff capacity.'},
 {title:'Fresh, until you arrive.', label:'Ready', body:'The compartment closes and the customer receives a collection notification. Five minutes is the proposed readiness target, subject to pilot validation.'},
 {title:'Easy Collection', label:'Collect', body:'The customer unlocks their compartment with the app or a one-time PIN. They take their order and get on with their day.'},
];
export const years = ['FY27','FY28','FY29','FY30','FY31','FY32','FY33','FY34'];
export {financials} from './financialModel.ts';
export const risks = [
 ['AI reliability','AI may incorrectly identify ingredients from Reels or recommend unsuitable products. Use Woolworths’ verified product information and allow customers to review and edit suggestions before purchasing.'],
 ['Demand Forecasting Inaccuracies','Social media trends may be unpredictable or short-lived. Combine social media trends with historical and current sales data, monitor changes in demand and adjust stock levels in smaller increments.'],
 ['Data Privacy & Cybersecurity','Personal information and in-store location tracking may raise privacy concerns. Allow users to control data sharing, securely store information and conduct legal reviews to ensure compliance with Australian privacy laws.'],
 ['Staff workload & food safety','Validate picking times, train teams, monitor refrigeration and set collection windows.'],
 ['Technical & Operational Issues','Shelf sensors, app scanning and smart lockers may experience technical errors or delays. Conduct pilot testing, regularly maintain equipment and provide alternative checkout and collection options.'],
];
export const milestones = [
 ['FY27','AI Development & Testing','Develop Reel to Meal, secure AI and privacy approvals. Assess Explore Mode’s BLE positioning, trolley charging and Scan as You Shop integration, alongside Ready in 5 locker design and fulfilment requirements.'],
 ['FY28','Digital Launch & Prototype Testing','Launch Reel to Meal and monitor conversion. Prototype Explore Mode’s navigation and recommendations, while testing smart locker functionality, temperature controls and back-of-store order preparation.'],
 ['FY29','Ready in 5 & Explore Mode pilots','Pilot Ready in 5 lockers across 20 stores, validating cold chain, picking times and demand. Pilot Explore Mode separately, testing aisle accuracy, app-based scanning, checkout verification and adoption.'],
 ['FY30+','Scale Projects','Expand smart lockers and Explore Mode based on store demand, operational capacity and pilot performance. Integrate both shopping modes within Everyday Rewards.'],
 ['FY34','Product maturity','Target 750 Ready in 5-enabled stores and 4 million annual Reel to Meal orders, with Explore Mode targeting 750 commercially viable locations and 14.4375 million annual sessions.'],
];

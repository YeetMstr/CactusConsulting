export const exploreStages=[
 ['Dock. Charge. Explore.','Place your phone in the trolley’s proposed charging cradle and activate Explore Mode. Your shopping companion comes along for the whole trip.','Connect'],
 ['A little context. A better shop.','BLE beacons combined with existing digital price labels could estimate your aisle. Approximate positioning helps Olive offer relevant guidance without claiming exact shelf-level location.','Locate'],
 ['Something worth making.','Olive suggests a cheesecake inspired by your preferences. See the ingredients, their illustrative prices and where to find them. The choice to add them stays yours.','Discover'],
 ['Less searching. More finding.','Choose an ingredient and follow a suggested route through the store. A clear aisle map keeps the next stop easy to understand.','Navigate'],
 ['Scan it. Keep moving.','Scan as You Shop adds each product to a running basket. Review quantities and prices as you go, rather than waiting until the end.','Scan'],
 ['Your shop, wrapped up.','Review your basket, complete a simulated in-app checkout and receive an itemised receipt. Real deployment would require store verification and supported payment systems.','Checkout'],
] as const;
export const exploreProducts=[{id:'cream',name:'Cream cheese',aisle:'Chilled · Aisle 3',cents:450},{id:'biscuits',name:'Digestive biscuits',aisle:'Pantry · Aisle 6',cents:320},{id:'berries',name:'Strawberries',aisle:'Produce · Aisle 1',cents:400}] as const;
export function exploreTotal(counts:Record<string,number>){return exploreProducts.reduce((sum,p)=>sum+p.cents*(counts[p.id]||0),0);}
export const exploreMoney=(cents:number)=>`$${(cents/100).toFixed(2)}`;
